import Add from "@mui/icons-material/Add";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const QuestionEditor = ({ question, onChange }) => {
  if (!question) return null;

  const { options, correctOption } = question;

  const nextOptionId = () =>
    options.reduce((max, o) => Math.max(max, o.id), 0) + 1;

  const addOption = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.length >= 26) return;

    onChange({
      options: [
        ...options,
        { id: nextOptionId(), label: alphabet[options.length], value: "" },
      ],
    });
  };

  const updateOption = (id, value) => {
    onChange({
      options: options.map((o) => (o.id === id ? { ...o, value } : o)),
    });
  };

  const removeOption = (id) => {
    onChange({
      options: options.filter((o) => o.id !== id),
      correctOption: correctOption === id ? null : correctOption,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-primary/[0.04] to-transparent">
        <h2 className="font-bold text-gray-900 text-sm">
          Multiple Choice Question
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700">
            {question.title}
          </label>

          <textarea
            rows={4}
            value={question.question}
            onChange={(e) => onChange({ question: e.target.value })}
            placeholder="Enter the question here..."
            className="mt-2 w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none resize-none bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Options</h3>

          <div className="space-y-2.5">
            {options.map((option) => {
              const isCorrect = correctOption === option.id;

              return (
                <div
                  key={option.id}
                  onClick={() => onChange({ correctOption: option.id })}
                  className={`flex items-center gap-3 border rounded-xl px-3 py-2 cursor-pointer transition-all group ${
                    isCorrect
                      ? "border-primary bg-primary/10 shadow-sm shadow-primary-100"
                      : "border-gray-200 hover:border-primary/40 hover:bg-primary/[0.02]"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition ${
                      isCorrect
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary group-hover:bg-primary/15"
                    }`}
                  >
                    {option.label}
                  </div>

                  <input
                    value={option.value}
                    onChange={(e) => updateOption(option.id, e.target.value)}
                    className="flex-1 h-10 bg-transparent rounded-lg px-1 text-sm outline-none placeholder:text-gray-300"
                    placeholder={`Option ${option.label}`}
                  />

                  {isCorrect && (
                    <CheckCircleOutlinedIcon
                      sx={{ fontSize: 18, color: "#6F4AE7" }}
                    />
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(option.id);
                    }}
                    className="text-red-400 text-lg opacity-0 group-hover:opacity-100 hover:text-red-500 transition leading-none"
                    title="Remove option"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>

          <button
            onClick={addOption}
            className="mt-3 w-full h-11 rounded-xl border-2 border-dashed border-primary/25 text-primary text-sm font-medium hover:border-primary/60 hover:bg-primary/5 transition flex items-center justify-center gap-1.5"
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
