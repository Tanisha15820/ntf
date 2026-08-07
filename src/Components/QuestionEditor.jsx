import { useState } from "react";
import Add from "@mui/icons-material/Add";

const QuestionEditor = () => {
  const [options, setOptions] = useState([
    { id: 1, label: "A", value: "15" },
    { id: 2, label: "B", value: "17" },
    { id: 3, label: "C", value: "21" },
    { id: 4, label: "D", value: "25" },
  ]);

  const addOption = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    setOptions([
      ...options,
      {
        id: Date.now(),
        label: alphabet[options.length],
        value: "",
      },
    ]);
  };

  const updateOption = (id, value) => {
    setOptions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item)),
    );
  };

  const removeOption = (id) => {
    setOptions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center shadow-sm">
            <EditNoteOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
          </div> */}

          <div>
            <h2 className="font-bold text-gray-900 text-sm">
              Multiple Choice Question
            </h2>

            {/* <p className="text-xs text-gray-400 mt-0.5">
              Compose the question and options
            </p> */}
          </div>
        </div>

        {/* <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500">Marks</span>

          <input
            defaultValue={2}
            className="w-14 h-9 border rounded-lg text-center text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div> */}
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700">Question</label>

          <textarea
            rows={4}
            defaultValue="Which of the following numbers is a prime number?"
            className="w-full border rounded-b-lg p-3 text-sm outline-none resize-none focus:border-primary"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Options</h3>

          <div className="space-y-3">
            {options.map((option) => (
              <div key={option.id} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                  {option.label}
                </div>

                <input
                  value={option.value}
                  onChange={(e) => updateOption(option.id, e.target.value)}
                  className="flex-1 h-11 border rounded-lg px-3 text-sm outline-none focus:border-primary"
                />

                <button
                  onClick={() => removeOption(option.id)}
                  className="text-red-500 text-lg hover:scale-110 transition"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addOption}
            className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline"
          >
            <Add fontSize="small" />
            Add Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionEditor;
