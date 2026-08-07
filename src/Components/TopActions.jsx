import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const TopActions = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center shadow-sm shrink-0">
          <DescriptionOutlinedIcon sx={{ color: "#fff", fontSize: 18 }} />
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-bold text-gray-900 leading-tight">
            L0 Question Paper
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button className="inline-flex items-center gap-1.5 h-9 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-3 text-xs font-semibold text-white shadow-sm hover:opacity-95 transition">
          <SaveOutlinedIcon sx={{ fontSize: 16 }} />
          Save
        </button>
      </div>
    </div>
  );
};

export default TopActions;
