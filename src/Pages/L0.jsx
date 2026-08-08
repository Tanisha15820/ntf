import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import QuestionSidebar from "../Components/QuestionSidebar";
import QuestionEditor from "../Components/QuestionEditor";
import QuestionSettings from "../Components/QuestionSettings";
import TopActions from "../Components/TopActions";
import { lmsMenus } from "../Data/LMSMenu";

const STORAGE_KEY = "l0_question_paper";

const DEFAULT_OPTIONS = [
  { id: 1, label: "A", value: "15" },
  { id: 2, label: "B", value: "17" },
  { id: 3, label: "C", value: "21" },
  { id: 4, label: "D", value: "25" },
];

const createQuestion = (id) => ({
  id,
  title: `Q${id}`,
  question: "Which of the following numbers is a prime number?",
  options: DEFAULT_OPTIONS.map((o) => ({ ...o })),
  correctOption: 2,
  marks: 2,
});

const createInitialPaper = () => [
  createQuestion(1),
  createQuestion(2),
  createQuestion(3),
];

const loadPaper = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return createInitialPaper();
};

const L0 = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("L0 Papers");
  const [questions, setQuestions] = useState(loadPaper);
  const [selectedQuestion, setSelectedQuestion] = useState(
    () => loadPaper()[0]?.id,
  );
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  }, [questions]);

  const selected =
    questions.find((q) => q.id === selectedQuestion) || questions[0];

  const showToast = (message) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2500);
  };

  const updateQuestion = (id, updates) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updates } : q)),
    );
  };

  const saveCurrentQuestion = (status = "draft") => {
    if (!selected) return;
    updateQuestion(selected.id, { saved: true });
    showToast(status === "publish" ? "Question published" : "Question saved");
  };

  const saveAll = () => {
    setQuestions((prev) => prev.map((q) => ({ ...q, saved: true })));
    showToast("Question paper saved");
  };

  const addQuestion = () => {
    const nextId = questions.reduce((max, q) => Math.max(max, q.id), 0) + 1;
    const newQuestion = createQuestion(nextId);
    setQuestions([...questions, newQuestion]);
    setSelectedQuestion(nextId);
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((q) => q.id !== id);
    setQuestions(updatedQuestions);
    if (selectedQuestion === id && updatedQuestions.length > 0) {
      setSelectedQuestion(updatedQuestions[0].id);
    }
  };

  const handlePreview = () => navigate("/lms/l0/preview");

  return (
    <div className="flex h-screen bg-[#F5F7FB]">
      <Sidebar
        menuItems={lmsMenus}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="sticky top-0 z-30 bg-white shadow-sm">
          <Navbar activeMenu="LMS / L0" setMobileOpen={setMobileOpen} />
        </div>

        {toast && (
          <div className="fixed top-16 right-5 z-50 bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
            <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#10B981" }} />
            {toast}
          </div>
        )}

        <main className="flex-1 overflow-y-auto p-5 bg-[#F5F7FB] space-y-5">
          <TopActions onPreview={handlePreview} onSave={saveAll} />

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
              <QuestionSidebar
                questions={questions}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                addQuestion={addQuestion}
                deleteQuestion={deleteQuestion}
              />
            </div>

            <div className="col-span-6">
              {selected ? (
                <QuestionEditor
                  key={selected.id}
                  question={selected}
                  onChange={(updates) => updateQuestion(selected.id, updates)}
                />
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex items-center justify-center">
                  <p className="text-sm text-gray-400">No questions</p>
                </div>
              )}
            </div>

            <div className="col-span-3">
              {selected ? (
                <QuestionSettings
                  key={selected.id}
                  question={selected}
                  onChange={(updates) => updateQuestion(selected.id, updates)}
                  onSaveDraft={() => saveCurrentQuestion("draft")}
                  onPublish={() => saveCurrentQuestion("publish")}
                />
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex items-center justify-center">
                  <p className="text-sm text-gray-400">No questions</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default L0;
