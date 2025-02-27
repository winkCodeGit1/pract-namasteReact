import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../utils/habitSlice";
import HabitsCard from "./habitsCard";

const HabitTracker = () => {
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const dispatch = useDispatch();
  const habitSelector = useSelector((habit) => habit.habit.habitsdata);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!habitName) return;

    const json = {
      id: new Date().getTime(),
      habitName: habitName,
      frequency: frequency,
    };

    console.log(json, "-----json");
    dispatch(addHabit(json));
  };

  console.log(habitSelector, "------habitSelector");
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Habit Tracker
      </h1>
      <div className="flex justify-center items-start gap-8 px-6">
        <form onSubmit={() => handleSubmit()}>
          <div className="px-6 max-w-lg mx-auto">
            {/* Header */}

            {/* Input Section */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter habit..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
              />

              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>

              <button
                onClick={handleSubmit}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Add Habit
              </button>
            </div>
          </div>
        </form>
        <div className="w-1/3 p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Habits
          </h2>

          <p>Habits: - {habitSelector.length}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        {habitSelector.map((habit) => (
          <HabitsCard key={habit.id} habit={habit} />
        ))}
      </div>
    </>
  );
};

export default HabitTracker;
