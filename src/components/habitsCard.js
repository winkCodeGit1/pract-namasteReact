import React from "react";
import { useDispatch } from "react-redux";
import { markComplete, removeHabit } from "../utils/habitSlice";

const HabitsCard = ({ habit }) => {
  const dispatch = useDispatch();

  const handleMarkComplete = (hbt) => {
    dispatch(markComplete(hbt));
  };

  const handleRemoveHabit = (hbt) => {
    dispatch(removeHabit(hbt));
  };

  return (
    <>
      <div className="mt-6 w-1/2 grid grid-cols-1 sm:grid-cols-1 mt-5">
        <div className="p-5 bg-white rounded-xl shadow-md border border-gray-200 relative">
          <h3 className="text-lg font-semibold text-gray-800">{habit.name}</h3>
          <p className="text-sm text-gray-600">Frequency: {habit.frequency}</p>
          <p className="text-sm text-gray-600">
            Complete Date: {habit?.completedDate}
          </p>

          {/* Progress Bar */}
          <div className=" bg-gray-200 h-2 rounded-full mt-3">
            <div
              className={` ${
                habit.completed
                  ? "bg-green-500  h-full rounded-full"
                  : "bg-gray-400 w-1/5"
              }`}
            ></div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => handleMarkComplete(habit.id)}
              className={`px-3 py-1 text-sm font-medium rounded-lg ${
                habit.completed
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
              disabled={habit.completed}
            >
              {habit.completed ? "Completed" : "Mark Complete"}
            </button>

            <button
              onClick={() => handleRemoveHabit(habit.id)}
              className="px-3 py-1 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HabitsCard;
