import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const plans = {
  basic: {
    id: "basic",
    name: "Basic Plan",
    price: 4900,
    features: [
      "Access to Notes",
      "Community Support",
      "Sample Papers",
      "Monthly Updates",
    ],
  },
  premium: {
    id: "premium",
    name: "Premium Plan",
    price: 49900,
    features: [
      "Everything in Basic",
      "Priority Support",
      "Sample Papers",
      "Yearly Updates",
    ],
  },
};

const Subscription = () => {
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          "https://noto-server-80j5.onrender.com/api/subscription/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setCurrentPlan(data);
      } catch (error) {
        console.error("Error fetching subscription:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [navigate]);

  useEffect(() => {
    const loadRazorpay = async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    };
    loadRazorpay();
  }, []);

  const handlePayment = async (planType) => {
    try {
      if (!scriptLoaded) {
        toast.error("Payment system is loading. Please wait.");
        return;
      }

      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const plan = plans[planType.toLowerCase()];
      console.log("Selected plan:", plan);

      // Create order
      const orderResponse = await fetch(
        "https://noto-server-80j5.onrender.com/api/create-order/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: plan.price,
            currency: "INR",
          }),
        }
      );

      const orderData = await orderResponse.json();
      console.log("Order created:", orderData);

      if (!orderResponse.ok) {
        throw new Error(orderData.error || "Failed to create order");
      }

      // Initialize Razorpay
      const options = {
        key: "rzp_test_6coJFlp4ji11OO",
        amount: plan.price,
        currency: "INR",
        name: "NOTO Study",
        description: `${plan.name} Subscription`,
        order_id: orderData.id,
        handler: async (response) => {
          try {
            console.log("Payment response:", response);

            // Verify payment
            const verifyResponse = await fetch(
              "https://noto-server-80j5.onrender.com/api/verify-payment/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  plan_id: plan.id,
                }),
              }
            );

            const verifyData = await verifyResponse.json();
            console.log("Verification response:", verifyData);

            if (verifyResponse.ok) {
              toast.success("Payment successful!");
              navigate("/homepage");
            } else {
              throw new Error(
                verifyData.error || "Payment verification failed"
              );
            }
          } catch (error) {
            console.error("Verification error:", error);
            toast.error(error.message);
          }
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
        },
        theme: {
          color: "#3B82F6",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {currentPlan && (
          <div className="mb-12 p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Current Subscription
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-lg">
                  {currentPlan.membership_type} Plan
                </p>
                <p className="text-blue-300">
                  Expires: {new Date(currentPlan.end_date).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-green-500 px-4 py-2 rounded-full">
                <p className="text-white font-semibold">
                  {currentPlan.time_left}
                </p>
              </div>
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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`transform hover:scale-105 transition-all duration-200 ${
                key === "premium"
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                  : "bg-white text-gray-900"
              } rounded-2xl shadow-2xl overflow-hidden`}
            >
              <div className="px-8 py-12">
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-3xl font-bold ${
                      key === "premium" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {currentPlan?.membership_type.toLowerCase() === key && (
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                      Current Plan
                    </span>
                  )}
                </div>
                <p
                  className={`mt-4 text-4xl font-bold ${
                    key === "premium" ? "text-white" : "text-gray-900"
                  }`}
                >
                  ₹{plan.price/100}
                </p>
                <p
                  className={`text-sm mt-2 ${
                    key === "premium" ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {plan.duration}
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        width="20"
                        height="20"
                        className="mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          key === "premium" ? "text-gray-200" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePayment(key)}
                  disabled={
                    loading ||
                    currentPlan?.membership_type.toLowerCase() === key
                  }
                  className={`mt-10 w-full py-4 px-6 rounded-xl text-lg font-semibold 
                  ${
                    key === "premium"
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }
                  ${
                    currentPlan?.membership_type.toLowerCase() === key
                      ? "opacity-50 cursor-not-allowed"
                      : "transform hover:scale-105 transition-all duration-200"
                  }
                `}
                >
                  {currentPlan?.membership_type.toLowerCase() === key
                    ? "Current Plan"
                    : loading
                    ? "Loading..."
                    : `Subscribe to ${plan.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
