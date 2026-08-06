import React, { useState } from "react";
import { TablePagination, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const rows = [
  {
    id: 1,
    empId: "NTF00123",
    employee: "Rohit Sharma",
    department: "Production",
    subDepartment: "Assembly",
    line: "Line 1",
    shift: "Morning",
    date: "01 May 2025",
    checkIn: "08:55 AM",
    checkOut: "05:35 PM",
    status: "Present",
    workHours: "8h 40m",
  },
];

const AttendanceTable = () => {
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
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <PeopleAltIcon sx={{ color: "#6F4AE7", fontSize: 20 }} />
        </div>

        <div>
          <h2 className="text-base font-bold text-black">Attendance Records</h2>
          <p className="text-xs text-gray-500">Employee attendance details</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="border-y border-gray-200 bg-gray-50">
            <tr className="whitespace-nowrap text-sm font-semibold tracking-wide text-black">
              <th className="px-4 py-3 text-left">Employee ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Sub Dept.</th>
              <th className="px-4 py-3 text-left">Line</th>
              <th className="px-4 py-3 text-left">Shift</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Check In</th>
              <th className="px-4 py-3 text-left">Check Out</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Work Hrs.</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr
                  key={row.id}
                  className="whitespace-nowrap border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2.5 text-xs">{row.empId}</td>

                  <td className="px-4 py-2.5 font-medium text-xs">
                    {row.employee}
                  </td>

                  <td className="px-4 py-2.5 text-xs">{row.department}</td>

                  <td className="px-4 py-2.5 text-xs">{row.subDepartment}</td>

                  <td className="px-4 py-2.5 text-xs">{row.line}</td>

                  <td className="px-4 py-2.5 text-xs">{row.shift}</td>

                  <td className="px-4 py-2.5 text-xs">{row.date}</td>

                  <td className="px-4 py-2.5 text-green-600 font-medium text-xs">
                    {row.checkIn}
                  </td>

                  <td className="px-4 py-2.5 text-red-500 font-medium text-xs">
                    {row.checkOut}
                  </td>

                  <td className="px-4 py-2.5">
                    <span className="rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-semibold">
                      {row.status}
                    </span>
                  </td>

                  <td className="px-4 py-2.5 text-xs">{row.workHours}</td>

                  <td className="px-4 py-2.5 text-center">
                    <IconButton
                      size="small"
                      sx={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "10px",
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
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

export default AttendanceTable;
