// FeedbackPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  //   const [showForm, setShowForm] = useState(false);

  const sendFeedback = () => {
    const serverEndpoint = "http://localhost:5000/api/feedbacks";
    const errorMessage = "Error sending feedback. Please try again.";

    if (!feedback.trim()) {
      toast.error("Feedback cannot be empty");
      return;
    }

    axios
      .post(serverEndpoint, { feedbackText: feedback })
      .then((response) => {
        if (response.data.success) {
          console.log("Feedback added:", response.data.feedback);
          toast.success("Feedback sent successfully");
          setFeedback(""); // Clear feedback input
        } else {
          toast.error(errorMessage);
          console.error("Error adding feedback:", response.data);
        }
      })
      .catch((error) => {
        toast.error(errorMessage);
        console.error("Error sending feedback:", error);
      });
  };

  return (
    <div className="bg-gray-900 text-white overflow-hidden mx-2 my-2">
      <div className="md:flex md:justify-between md:items-center  sm:px-4 px-4 bg-[#ffffff19] py-4">
        {/* {!showForm ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowForm(true)}
          >
            Give Feedback
          </button>
        ) : ( */}
        <div className="">
          <h2 className="text-4xl font-blod ">
            Give Us Your <span className="text-red-500 ">Feedback</span>
          </h2>
        </div>
        <div>
          <textarea
            rows="2"
            className="text-gray-800
           sm:w-96 w-full sm:mr-5 mr-1  lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            placeholder="Type your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
            onClick={sendFeedback}
          >
            Send Feedback
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default FeedbackPage;