import { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const QuestionSidebar = ({
  questions,
  selectedQuestion,
  setSelectedQuestion,
  addQuestion,
  deleteQuestion,
}) => {
  const [search, setSearch] = useState("");

  const filteredQuestions = questions.filter((q) =>
    q.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800">Questions</h3>

        <button
          onClick={addQuestion}
          className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 transition flex items-center justify-center"
        >
          <AddOutlinedIcon sx={{ fontSize: 18 }} />
        </button>
      </div>

      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <span className="text-xs font-semibold text-gray-600">
          Section A (MCQ)
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredQuestions.map((question) => {
          const active = selectedQuestion === question.id;

          return (
            <button
              key={question.id}
              onClick={() => setSelectedQuestion(question.id)}
              className={`w-full flex items-center justify-between px-4 py-3 border-b transition-all ${
                active
                  ? "bg-primary/10 border-l-4 border-l-primary"
                  : "hover:bg-gray-50"
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  active ? "text-primary" : "text-gray-700"
                }`}
              >
                {question.title}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteQuestion(question.id);
                }}
                className="h-7 w-7 rounded-lg hover:bg-red-50 flex items-center justify-center transition"
              >
                <DeleteOutlineOutlinedIcon
                  sx={{
                    color: "#EF4444",
                    fontSize: 18,
                  }}
                />
              </button>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionSidebar;
