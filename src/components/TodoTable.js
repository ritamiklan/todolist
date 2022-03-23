import React from "react";
import "../App.css";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

export default function TodoTable(props) {
  const columns = [
    {
      headerName: "Description",
      field: "description",
      suppressMovable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Date",
      field: "date",
      suppressMovable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Priority",
      field: "priority",
      suppressMovable: true,
      sortable: true,
      filter: true,
    },
  ];

  return (
    <div
      className="ag-theme-material"
      style={{ height: 600, width: 600, margin: "auto" }}
    >
      <AgGridReact
        columnDefs={columns}
        rowData={props.todos}
        rowSelection="single"
        ref={props.row_ref}
        onGridReady={(params) => (props.row_ref.current = params.api)}
      ></AgGridReact>
    </div>
  );
}
