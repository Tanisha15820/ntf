import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import QuestionSidebar from "../Components/QuestionSidebar";
import QuestionEditor from "../Components/QuestionEditor";
import QuestionSettings from "../Components/QuestionSettings";
import { lmsMenus } from "../Data/LMSMenu";
import TopActions from "../Components/TopActions";

const L0 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("L0 Papers");

  const [questions, setQuestions] = useState([
    { id: 1, title: "Q1" },
    { id: 2, title: "Q2" },
    { id: 3, title: "Q3" },
  ]);
  const addQuestion = () => {
    const nextNumber = questions.length + 1;

    const newQuestion = {
      id: Date.now(),
      title: `Q${nextNumber}`,
    };

    setQuestions([...questions, newQuestion]);
    setSelectedQuestion(newQuestion.id);
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((q) => q.id !== id);

    setQuestions(updatedQuestions);

    if (selectedQuestion === id && updatedQuestions.length > 0) {
      setSelectedQuestion(updatedQuestions[0].id);
    }
  };

  const [selectedQuestion, setSelectedQuestion] = useState(1);

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
        <main className="flex-1 overflow-y-auto p-5 bg-[#F5F7FB] space-y-5">
          <TopActions />

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
              <QuestionEditor />
            </div>

            <div className="col-span-3">
              <QuestionSettings />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default L0;
