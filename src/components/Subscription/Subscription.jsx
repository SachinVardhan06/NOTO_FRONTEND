// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const plans = {
//   basic: {
//     id: "basic",
//     name: "Basic Plan",
//     price: 4900,
//     features: [
//       "Access to Notes",
//       "Community Support",
//       "Sample Papers",
//       "Monthly Updates",
//     ],
//   },
//   premium: {
//     id: "premium",
//     name: "Premium Plan",
//     price: 49900,
//     features: [
//       "Everything in Basic",
//       "Priority Support",
//       "Sample Papers",
//       "Yearly Updates",
//     ],
//   },
// };

// const Subscription = () => {
//   const [loading, setLoading] = useState(false);
//   const [scriptLoaded, setScriptLoaded] = useState(false);
//   const navigate = useNavigate();
//   const [currentPlan, setCurrentPlan] = useState(null);

//   useEffect(() => {
//     const fetchSubscription = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");
//           return;
//         }

//         const response = await fetch(
//           "https://noto-server-80j5.onrender.com/api/subscription/",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const data = await response.json();
//         setCurrentPlan(data);
//       } catch (error) {
//         console.error("Error fetching subscription:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubscription();
//   }, [navigate]);

//   useEffect(() => {
//     const loadRazorpay = async () => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onload = () => setScriptLoaded(true);
//       document.body.appendChild(script);
//     };
//     loadRazorpay();
//   }, []);

//   const handlePayment = async (planType) => {
//     try {
//       if (!scriptLoaded) {
//         toast.error("Payment system is loading. Please wait.");
//         return;
//       }

//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         toast.error("Please login first");
//         navigate("/login");
//         return;
//       }

//       const plan = plans[planType.toLowerCase()];
//       console.log("Selected plan:", plan);

//       // Create order
//       const orderResponse = await fetch(
//         "https://noto-server-80j5.onrender.com/api/create-order/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             amount: plan.price,
//             currency: "INR",
//           }),
//         }
//       );

//       const orderData = await orderResponse.json();
//       console.log("Order created:", orderData);

//       if (!orderResponse.ok) {
//         throw new Error(orderData.error || "Failed to create order");
//       }

//       // Initialize Razorpay
//       const options = {
//         key: "rzp_test_6coJFlp4ji11OO",
//         amount: plan.price,
//         currency: "INR",
//         name: "NOTO Study",
//         description: `${plan.name} Subscription`,
//         order_id: orderData.id,
//         handler: async (response) => {
//           try {
//             console.log("Payment response:", response);

//             // Verify payment
//             const verifyResponse = await fetch(
//               "https://noto-server-80j5.onrender.com/api/verify-payment/",
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                   Authorization: `Bearer ${token}`,
//                 },
//                 body: JSON.stringify({
//                   razorpay_payment_id: response.razorpay_payment_id,
//                   razorpay_order_id: response.razorpay_order_id,
//                   razorpay_signature: response.razorpay_signature,
//                   plan_id: plan.id,
//                 }),
//               }
//             );

//             const verifyData = await verifyResponse.json();
//             console.log("Verification response:", verifyData);

//             if (verifyResponse.ok) {
//               toast.success("Payment successful!");
//               navigate("/homepage");
//             } else {
//               throw new Error(
//                 verifyData.error || "Payment verification failed"
//               );
//             }
//           } catch (error) {
//             console.error("Verification error:", error);
//             toast.error(error.message);
//           }
//         },
//         prefill: {
//           name: "Student Name",
//           email: "student@example.com",
//         },
//         theme: {
//           color: "#3B82F6",
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       console.error("Payment error:", error);
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {currentPlan && (
//           <div className="mb-12 p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl">
//             <h3 className="text-2xl font-bold text-white mb-4">
//               Current Subscription
//             </h3>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-white text-lg">
//                   {currentPlan.membership_type} Plan
//                 </p>
//                 <p className="text-blue-300">
//                   Expires: {new Date(currentPlan.end_date).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="bg-green-500 px-4 py-2 rounded-full">
//                 <p className="text-white font-semibold">
//                   {currentPlan.time_left}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-black">
//             Choose Your Plan
//           </h2>
//           <p className="mt-4 text-xl text-blue-200">
//             Select the perfect plan for your study needs
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
//           {Object.entries(plans).map(([key, plan]) => (
//             <div
//               key={key}
//               className={`transform hover:scale-105 transition-all duration-200 ${
//                 key === "premium"
//                   ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
//                   : "bg-white"
//               } rounded-2xl shadow-2xl overflow-hidden`}
//             >
//               <div className="px-8 py-12">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-3xl font-bold">{plan.name}</h3>
//                   {currentPlan?.membership_type.toLowerCase() === key && (
//                     <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
//                       Current Plan
//                     </span>
//                   )}
//                 </div>
//                 <p className="mt-4 text-4xl font-bold">
//                   ₹{(plan.price / 100).toLocaleString()}
//                 </p>
//                 <p className="text-sm opacity-75 mt-2">{plan.duration}</p>
//                 <ul className="mt-8 space-y-4">
//                   {plan.features.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <svg
//                         width="20"
//                         height="20"
//                         className="mr-3"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   onClick={() => handlePayment(key)}
//                   disabled={
//                     loading ||
//                     currentPlan?.membership_type.toLowerCase() === key
//                   }
//                   className={`mt-10 w-full py-4 px-6 rounded-xl text-lg font-semibold 
//                     ${
//                       key === "premium"
//                         ? "bg-white text-blue-600 hover:bg-gray-100"
//                         : "bg-blue-600 text-white hover:bg-blue-700"
//                     }
//                     ${
//                       currentPlan?.membership_type.toLowerCase() === key
//                         ? "opacity-50 cursor-not-allowed"
//                         : "transform hover:scale-105 transition-all duration-200"
//                     }
//                   `}
//                 >
//                   {currentPlan?.membership_type.toLowerCase() === key
//                     ? "Current Plan"
//                     : loading
//                     ? "Loading..."
//                     : `Upgrade to ${plan.name}`}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscription;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Subscription() {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const plans = {
    standard: {
      name: "Standard Plan",
      price: "49",
      description: "Access to basic study materials",
      features: [
        "Access to study materials",
        "Basic notes access",
        "24/7 support",
        "Monthly updates"
      ]
    },
    premium: {
      name: "Premium Plan",
      price: "149",
      description: "Full access to all premium features",
      features: [
        "Everything in Standard",
        "Premium study materials",
        "Practice tests",
        "Priority support",
        "Weekly updates"
      ]
    }
  };

  const handleSubscription = async (planType) => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/create-order/`,
        { plan_type: planType },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: response.data.amount,
        currency: response.data.currency,
        name: "NOTO",
        description: `${planType} Plan Subscription`,
        order_id: response.data.id,
        handler: async (response) => {
          try {
            await axios.post(
              `${import.meta.env.VITE_API_URL}/api/verify-payment/`,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature
              },
              {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }
            );
            navigate('/dashboard');
          } catch (error) {
            setError('Payment verification failed');
          }
        },
        theme: {
          color: "#3B82F6"
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCurrentPlan = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/profile/`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setCurrentPlan(response.data);
      } catch (error) {
        console.error('Error fetching current plan:', error);
      }
    };
    fetchCurrentPlan();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      {error && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-red-500 text-white px-4 py-3 rounded-lg">
            <p>{error}</p>
          </div>
        </div>
      )}

      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-xl text-blue-200">
          Select the perfect plan for your study needs
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
        {Object.entries(plans).map(([key, plan]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`transform hover:scale-105 transition-all duration-200 ${
              key === "premium"
                ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                : "bg-white"
            } rounded-2xl shadow-2xl overflow-hidden`}
          >
            <div className="px-8 py-12">
              <div className="flex justify-between items-center">
                <h3 className={`text-3xl font-bold ${
                  key === "premium" ? "text-white" : "text-gray-900"
                }`}>{plan.name}</h3>
                {currentPlan?.membership_type.toLowerCase() === key && (
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                    Current Plan
                  </span>
                )}
              </div>
              <p className={`mt-4 text-lg ${
                key === "premium" ? "text-gray-200" : "text-gray-600"
              }`}>{plan.description}</p>
              <div className={`mt-6 text-5xl font-bold ${
                key === "premium" ? "text-white" : "text-gray-900"
              }`}>
                ₹{plan.price}
              </div>
              <p className={`mt-2 ${
                key === "premium" ? "text-gray-200" : "text-gray-600"
              }`}>per month</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className={`w-5 h-5 ${
                      key === "premium" ? "text-blue-300" : "text-blue-500"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className={`ml-3 ${
                      key === "premium" ? "text-gray-200" : "text-gray-600"
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSubscription(key)}
                disabled={loading || currentPlan?.membership_type.toLowerCase() === key}
                className={`mt-8 w-full py-3 px-6 rounded-lg text-white font-semibold ${
                  key === "premium"
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 hover:bg-blue-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Processing..." : currentPlan?.membership_type.toLowerCase() === key ? "Current Plan" : "Subscribe Now"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Subscription;