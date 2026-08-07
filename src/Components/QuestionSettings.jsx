import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const QuestionSettings = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
        <div>
          <h2 className="text-sm font-bold text-gray-800">Question Settings</h2>
          {/* 
          <p className="text-xs text-gray-400 mt-0.5">
            Configure answer and metadata
          </p> */}
        </div>
      </div>

      {/* <div className="flex-1 overflow-y-auto p-5 space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Correct Answer
          </label>

          <select className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-primary">
            <option>A. 15</option>
            <option selected>B. 17</option>
            <option>C. 21</option>
            <option>D. 25</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Explanation
          </label>

          <textarea
            rows={5}
            placeholder="Add explanation for the correct answer..."
            className="w-full rounded-xl border border-gray-200 p-3 text-sm resize-none outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Tags
          </label>

          <input
            type="text"
            placeholder="Reasoning, Aptitude..."
            className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Section
          </label>

          <select className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-primary">
            <option>Section A</option>

            <option>Section B</option>

            <option>Section C</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Difficulty
          </label>

          <select className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-primary">
            <option>Easy</option>

            <option selected>Medium</option>

            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Status
          </label>

          <select className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-primary">
            <option selected>Draft</option>

            <option>Published</option>
          </select>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4 flex gap-3">
        <button className="flex-1 h-11 rounded-xl border border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition flex items-center justify-center gap-2">
          <SaveOutlinedIcon sx={{ fontSize: 18 }} />
          Save Draft
        </button>

        <button className="flex-1 h-11 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-sm hover:opacity-95 transition flex items-center justify-center gap-2">
          <PublishOutlinedIcon sx={{ fontSize: 18 }} />
          Publish
        </button>
      </div> */}
    </div>
  );
};

export default QuestionSettings;
