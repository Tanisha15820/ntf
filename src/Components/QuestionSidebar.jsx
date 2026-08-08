import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const QuestionSidebar = ({
  questions,
  selectedQuestion,
  setSelectedQuestion,
  addQuestion,
  deleteQuestion,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="flex items-center px-5 py-2 justify-between bg-gradient-to-r from-primary/[0.04] to-transparent border-b border-gray-100">
        <h3 className="text-sm font-bold text-gray-800">Questions</h3>

        <button
          onClick={addQuestion}
          title="Add Question"
          className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 hover:scale-105 active:scale-95 transition flex items-center justify-center shadow-sm"
        >
          <AddOutlinedIcon sx={{ fontSize: 18 }} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-2 mt-3">
        {questions.length === 0 ? (
          <div className="px-4 py-10 text-center">
            <p className="text-xs text-gray-400">No questions found</p>
          </div>
        ) : (
          questions.map((question) => {
            const active = selectedQuestion === question.id;

            return (
              <div
                key={question.id}
                onClick={() => setSelectedQuestion(question.id)}
                className={`mx-2 mb-1 flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all group ${
                  active
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/20"
                    : "hover:bg-primary/5"
                }`}
              >
                <span
                  className={`text-sm font-medium flex items-center gap-1.5 ${
                    active ? "text-white" : "text-gray-700"
                  }`}
                >
                  {question.title}
                  {question.saved && (
                    <CheckCircleOutlinedIcon
                      sx={{
                        fontSize: 15,
                        color: active ? "#A7F3D0" : "#10B981",
                      }}
                    />
                  )}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteQuestion(question.id);
                  }}
                  title="Delete"
                  className={`h-7 w-7 rounded-lg flex items-center justify-center transition ${
                    active
                      ? "text-white/70 hover:bg-white/20 hover:text-white"
                      : "text-gray-300 hover:bg-red-50 hover:text-red-500 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <DeleteOutlineOutlinedIcon sx={{ fontSize: 17 }} />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default QuestionSidebar;
