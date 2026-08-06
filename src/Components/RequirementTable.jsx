import React, { useState } from "react";
import { TablePagination, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const requirementData = [
  {
    id: 1,
    code: "D01-1",
    sectionName: "D&D",
    lineDescription: "Engineering",

    approval: "System Approved",

    aug: { pp: 5, sp: 0, fn01: 0, fn02: 0 },
    sep: { pp: 5, sp: 0, fn01: 0, fn02: 0 },
    oct: { pp: 5, sp: 0, fn01: 0, fn02: 0 },
    nov: { pp: 5, sp: 0, fn01: 0, fn02: 0 },
    dec: { pp: 5, sp: 0, fn01: 0, fn02: 0 },
  },
];
const RequirementTable = () => {
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <AssignmentOutlinedIcon sx={{ color: "#6F4AE7", fontSize: 20 }} />
          </div>

          <div>
            <h2 className="text-base font-bold text-black">
              Requirement Records
            </h2>
            <p className="text-xs text-gray-500">
              View and manage manpower requirements
            </p>
          </div>
        </div>

        <button className="self-start sm:self-auto px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-primary-light to-primary-dark text-white font-medium shadow hover:opacity-90 transition shrink-0">
          + Add Requirement
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th rowSpan={2} className="px-4 py-3 text-left min-w-[120px]">
                Section Code
              </th>

              <th rowSpan={2} className="px-4 py-3 text-left min-w-[170px]">
                Section Name
              </th>

              <th rowSpan={2} className="px-4 py-3 text-left min-w-[220px]">
                Line Description
              </th>

              <th rowSpan={2} className="px-4 py-3 text-center min-w-[180px]">
                Approval
              </th>

              <th colSpan={4} className="text-center border-l">
                AUG
              </th>

              <th colSpan={4} className="text-center border-l">
                SEP
              </th>

              <th colSpan={4} className="text-center border-l">
                OCT
              </th>

              <th colSpan={4} className="text-center border-l">
                NOV
              </th>

              <th colSpan={4} className="text-center border-l">
                DEC
              </th>

              <th rowSpan={2} className="px-4 py-3 text-center min-w-[120px]">
                Actions
              </th>
            </tr>

            <tr key={row.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{row.code}</td>

              <td className="px-4 py-3">{row.sectionName}</td>

              <td className="px-4 py-3">{row.lineDescription}</td>

              <td className="px-4 py-3 text-center">
                <div className="flex flex-col items-center text-xs leading-5">
                  <span className="text-green-600 font-semibold">
                    {row.approval}
                  </span>
                </div>
              </td>

              {/* AUG */}
              <td className="text-center">{row.aug.pp}</td>
              <td className="text-center">{row.aug.sp}</td>
              <td className="text-center">{row.aug.fn01}</td>
              <td className="text-center">{row.aug.fn02}</td>

              {/* SEP */}
              <td className="text-center">{row.sep.pp}</td>
              <td className="text-center">{row.sep.sp}</td>
              <td className="text-center">{row.sep.fn01}</td>
              <td className="text-center">{row.sep.fn02}</td>

              {/* OCT */}
              <td className="text-center">{row.oct.pp}</td>
              <td className="text-center">{row.oct.sp}</td>
              <td className="text-center">{row.oct.fn01}</td>
              <td className="text-center">{row.oct.fn02}</td>

              {/* NOV */}
              <td className="text-center">{row.nov.pp}</td>
              <td className="text-center">{row.nov.sp}</td>
              <td className="text-center">{row.nov.fn01}</td>
              <td className="text-center">{row.nov.fn02}</td>

              {/* DEC */}
              <td className="text-center">{row.dec.pp}</td>
              <td className="text-center">{row.dec.sp}</td>
              <td className="text-center">{row.dec.fn01}</td>
              <td className="text-center">{row.dec.fn02}</td>

              <td>
                <div className="flex justify-center gap-1">
                  <IconButton size="small">
                    <EditOutlinedIcon sx={{ color: "#6F4AE7", fontSize: 18 }} />
                  </IconButton>

                  <IconButton size="small">
                    <DeleteOutlineOutlinedIcon
                      sx={{ color: "#EF4444", fontSize: 18 }}
                    />
                  </IconButton>
                </div>
              </td>
            </tr>
          </thead>

          <tbody>
            {requirementData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr
                  key={row.id}
                  className="whitespace-nowrap border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2.5 text-xs font-medium">
                    {row.code}
                  </td>
                  <td className="px-4 py-2.5 text-xs">{row.department}</td>
                  <td className="px-4 py-2.5 text-xs">{row.section}</td>
                  <td className="px-4 py-2.5 text-xs">{row.line}</td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.janPP}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.janSP}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.janFN01}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.janFN02}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.febPP}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.febSP}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.febFN01}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.febFN02}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.marPP}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.marSP}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.marFN01}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-center">
                    {row.marFN02}
                  </td>

                  <td className="px-4 py-2.5">
                    <span className="rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-semibold">
                      {row.approval}
                    </span>
                  </td>

                  <td className="px-4 py-2.5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <IconButton size="small">
                        <VisibilityOutlinedIcon
                          sx={{ color: "#6F4AE7", fontSize: 18 }}
                        />
                      </IconButton>

                      <IconButton size="small">
                        <EditOutlinedIcon
                          sx={{ color: "#F59E0B", fontSize: 18 }}
                        />
                      </IconButton>

                      <IconButton size="small">
                        <DeleteOutlineOutlinedIcon
                          sx={{ color: "#EF4444", fontSize: 18 }}
                        />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={requirementData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50]}
          sx={{
            borderTop: "1px solid #E5E7EB",
            ".MuiTablePagination-toolbar": {
              minHeight: "40px",
            },
            ".MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows":
              {
                fontSize: "12px",
                color: "#6B7280",
              },
          }}
        />
      </div>
    </div>
  );
};

export default RequirementTable;
