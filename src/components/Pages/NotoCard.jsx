import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';

const NoteCard = ({ note }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleNoteClick = async (e) => {
    e.preventDefault();
    
    try {
      if (!isLoggedIn) {
        toast.info("Please login to continue");
        navigate('/login', { state: { from: `/notes/${note.subject.toLowerCase()}/${note.id}` } });
        return;
      }

      if (!note.isFree) {
        const subscription = localStorage.getItem('subscription');
        if (!subscription) {
          toast.warning("Premium content requires subscription");
          navigate('/subscription');
          return;
        }
      }

      navigate('/notes');
    } catch (error) {
      console.error('Error accessing notes:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img 
        src={note.thumbnail} 
        alt={note.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-400">{note.subject}</span>
          {note.isFree ? (
            <span className="flex items-center text-green-400 text-sm">
              <FaCheckCircle className="mr-1" /> Free
            </span>
          ) : (
            <span className="flex items-center text-yellow-400 text-sm">
              <FaLock className="mr-1" /> Premium
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{note.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{note.description}</p>
        <button 
          onClick={handleNoteClick}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Notes
        </button>
      </div>
    </div>
  );
};

export default NoteCard;