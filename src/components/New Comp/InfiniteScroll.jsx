import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MarqueeText = ({ text, className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlMarquee = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false);
      } else if (window.scrollY === 0) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlMarquee);
    return () => window.removeEventListener('scroll', controlMarquee);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative flex overflow-x-hidden bg-white/5 backdrop-blur-sm"
        >
          <div className="animate-marquee whitespace-nowrap py-3">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-4 text-white/90">
                {text}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-3">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-4 text-white/90">
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MarqueeText;