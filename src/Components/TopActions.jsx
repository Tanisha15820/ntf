import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const TopActions = ({ onPreview, onSave }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
          <DescriptionOutlinedIcon sx={{ color: "#fff", fontSize: 19 }} />
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-bold text-gray-900 leading-tight">
            L0 Question Paper
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onPreview}
          className="inline-flex items-center gap-1.5 h-9 rounded-xl border border-gray-200 px-3.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition"
        >
          <VisibilityOutlinedIcon sx={{ fontSize: 16 }} />
          Preview
        </button>

        <button
          onClick={onSave}
          className="inline-flex items-center gap-1.5 h-9 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 text-xs font-semibold text-white shadow-md shadow-primary/25 hover:opacity-95 active:scale-[0.98] transition"
        >
          <SaveOutlinedIcon sx={{ fontSize: 16 }} />
          Save
        </button>
      </div>
    </div>
  );
};

export default TopActions;
