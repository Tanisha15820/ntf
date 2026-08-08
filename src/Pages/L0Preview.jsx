import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

const STORAGE_KEY = "l0_question_paper";

const loadSavedQuestions = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((q) => q.saved) : [];
  } catch {
    return [];
  }
};

const L0Preview = () => {
  const navigate = useNavigate();
  const [questions] = useState(loadSavedQuestions);

  const totalQuestions = questions.length;
  const totalMarks = questions.reduce(
    (sum, q) => sum + (Number(q.marks) || 0),
    0,
  );

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-10">
      <div className="sticky top-0 z-30 bg-white shadow-sm print:hidden">
        <div className="h-14 sm:h-16 px-4 sm:px-6 flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => navigate("/lms/l0")}
              title="Back to editor"
              className="h-9 w-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition flex items-center justify-center shrink-0"
            >
              <ArrowBackOutlinedIcon sx={{ fontSize: 20 }} />
            </button>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                Question Paper Preview
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => navigate("/lms/l0")}
              className="h-9 rounded-xl border border-gray-200 px-3.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition"
            >
              Edit Paper
            </button>
            <button
              onClick={handlePrint}
              className="h-9 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-3.5 text-xs font-semibold text-white shadow-md shadow-primary/25 hover:opacity-95 transition flex items-center gap-1.5"
            >
              <PrintOutlinedIcon sx={{ fontSize: 16 }} />
              Print
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-6 space-y-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-6 text-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center shadow-md shadow-primary/20">
              <DescriptionOutlinedIcon sx={{ color: "#fff", fontSize: 24 }} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              L0 Question Paper
            </h2>
          </div>
        </div>

        {totalQuestions === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm px-6 py-16 text-center">
            <p className="text-sm text-gray-400">
              No saved questions yet. Save a question in the editor and it will
              appear here.
            </p>
            <button
              onClick={() => navigate("/lms/l0")}
              className="mt-4 inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 text-xs font-semibold text-white shadow-md shadow-primary/25 hover:opacity-95 transition"
            >
              Go to Editor
            </button>
          </div>
        ) : (
          questions.map((q, index) => (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden break-inside-avoid"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="h-8 w-8 rounded-lg bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-gray-800 leading-snug">
                    {q.question || `Question ${index + 1}`}
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-400 shrink-0 mt-1">
                  {q.marks} {q.marks === 1 ? "mark" : "marks"}
                </span>
              </div>

              <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((o) => (
                  <div
                    key={o.id}
                    className="flex items-center gap-2.5 border border-gray-200 rounded-xl px-3.5 py-2.5"
                  >
                    <span className="h-7 w-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold shrink-0">
                      {o.label}
                    </span>
                    <span className="text-sm text-gray-700 flex-1">
                      {o.value || `Option ${o.label}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {totalQuestions > 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-400">Total Questions</p>
              <p className="font-bold text-gray-900">{totalQuestions}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Total Marks</p>
              <p className="font-bold text-gray-900">{totalMarks}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default L0Preview;
