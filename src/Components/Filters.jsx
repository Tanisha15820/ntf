import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    fontSize: "14px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "6px 12px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
  },
};

const Filters = () => {
  const [department, setDepartment] = useState("");
  const [subDepartment, setSubDepartment] = useState("");
  const [line, setLine] = useState("");
  const [shift, setShift] = useState("");

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-4">
      <h2 className="text-sm font-semibold text-gray-800 mb-3">Filters</h2>

      <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3">
        <FormControl fullWidth size="small" sx={inputSx}>
          <InputLabel>Department</InputLabel>

          <Select
            value={department}
            label="Department"
            onChange={(e) => setDepartment(e.target.value)}
            MenuProps={{
              PaperProps: {
                sx: {
                  "& .MuiMenuItem-root": {
                    fontSize: "13px",
                    minHeight: "34px",
                  },
                },
              },
            }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>

            <MenuItem value="Assembly">Assembly</MenuItem>
            <MenuItem value="Production">Production</MenuItem>
            <MenuItem value="Quality">Quality</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size="small" sx={inputSx}>
          <InputLabel>Sub Department</InputLabel>

          <Select
            value={subDepartment}
            label="Sub Department"
            onChange={(e) => setSubDepartment(e.target.value)}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>

            <MenuItem value="Sub 1">Sub 1</MenuItem>
            <MenuItem value="Sub 2">Sub 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size="small" sx={inputSx}>
          <InputLabel>Line</InputLabel>

          <Select
            value={line}
            label="Line"
            onChange={(e) => setLine(e.target.value)}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>

            <MenuItem value="Line 1">Line 1</MenuItem>
            <MenuItem value="Line 2">Line 2</MenuItem>
            <MenuItem value="Line 3">Line 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size="small" sx={inputSx}>
          <InputLabel>Shift</InputLabel>

          <Select
            value={shift}
            label="Shift"
            onChange={(e) => setShift(e.target.value)}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>

            <MenuItem value="Morning">Morning</MenuItem>
            <MenuItem value="Evening">Evening</MenuItem>
            <MenuItem value="Night">Night</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          size="small"
          label="From Date"
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          sx={{
            ...inputSx,
            "& .MuiOutlinedInput-input": {
              padding: "6px 12px",
              height: "32px",
              boxSizing: "border-box",
              fontSize: "14px",
            },
          }}
        />

        <TextField
          fullWidth
          size="small"
          label="To Date"
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          sx={{
            ...inputSx,
            "& .MuiOutlinedInput-input": {
              padding: "6px 12px",
              height: "32px",
              boxSizing: "border-box",
              fontSize: "14px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Filters;
