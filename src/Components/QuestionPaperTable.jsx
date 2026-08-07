import { useState } from "react";
import { TablePagination, IconButton, Tooltip } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const rows = [
  {
    id: 1,
    title: "L0",
    questions: 50,
    marks: 100,
    duration: "60 mins",
    status: "Published",
    updated: "12 May 2025, 11:30 AM",
  },
];

const statusStyles = {
  Published: {
    badge: "bg-green-100 text-green-700 ring-green-600/20",
    dot: "bg-green-500",
  },
  Draft: {
    badge: "bg-amber-100 text-amber-700 ring-amber-600/20",
    dot: "bg-amber-500",
  },
};

const QuestionPaperTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center shadow-sm">
            <DescriptionOutlinedIcon sx={{ color: "#fff", fontSize: 22 }} />
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 leading-tight">
              Question Paper Records
            </h2>
            <p className="text-xs text-gray-500">
              View and manage question papers
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
        >
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 18 }} />
          Add Question Paper
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse">
          <thead>
            <tr className="bg-gray-100/80">
              {[
                "Paper Title",
                "Questions",
                "Marks",
                "Duration",
                "Status",
                "Updated On",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className={`px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-600 border-b border-r border-gray-200 ${
                    head === "Actions" ? "text-center" : "text-left"
                  }`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIdx) => {
                const status = statusStyles[row.status] || statusStyles.Draft;
                return (
                  <tr
                    key={row.id}
                    className={`whitespace-nowrap transition hover:bg-primary/5 ${
                      rowIdx % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3 border-b border-r border-gray-100">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-800 truncate">
                          {row.title}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center text-xs font-medium text-gray-700 border-b border-r border-gray-100">
                      {row.questions}
                    </td>
                    <td className="px-4 py-3 text-center text-xs font-medium text-gray-700 border-b border-r border-gray-100">
                      {row.marks}
                    </td>
                    <td className="px-4 py-3 text-center text-xs text-gray-500 border-b border-r border-gray-100">
                      {row.duration}
                    </td>

                    <td className="px-4 py-3 text-center border-b border-r border-gray-100">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${status.badge}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
                        />
                        {row.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-xs text-gray-500 border-b border-r border-gray-100">
                      {row.updated}
                    </td>

                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <div className="flex items-center justify-center gap-0.5">
                        <Tooltip title="Edit">
                          <IconButton size="small">
                            <EditOutlinedIcon
                              sx={{ color: "#F59E0B", fontSize: 18 }}
                            />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                          <IconButton size="small">
                            <DeleteOutlineOutlinedIcon
                              sx={{ color: "#EF4444", fontSize: 18 }}
                            />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50]}
          sx={{
            borderTop: "1px solid #E5E7EB",
            ".MuiTablePagination-toolbar": {
              minHeight: "48px",
            },
            ".MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows":
              {
                fontSize: "12px",
                color: "#6B7280",
              },
            ".MuiTablePagination-select": {
              borderRadius: "6px",
              border: "1px solid #E5E7EB",
              padding: "4px 8px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default QuestionPaperTable;
