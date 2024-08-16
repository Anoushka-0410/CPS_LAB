import React, { useRef, useState } from "react";
import publicationsData from "../assets/publicationsdata";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import banner from "../assets/publications_banner-1.jpg";
import "../Styles/publications.css";
import parse from "html-react-parser";
import TitleCard from "../Components/TitleCard";

//common options for all AG grid columns except Year
const commonColumnOptions = {
  filter: true,
  floatingFilter: true,
  autoHeight: true,
  resizable: false,
};

//disable column autosizing
const autoSizeStrategy = {
  type: "fitCellContents",
};

function Publications() {
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(publicationsData);
  const [columns, setColumns] = useState([
    {
      field: "Publication",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="publication-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Publisher",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="publisher-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Author(s)",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="authors-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Keywords",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="keywords-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Year",
    },
  ]);
  return (
    <div className="publications">
      <TitleCard title="Publications" backgroundImage={banner} />
      <div className="table ag-theme-quartz">
        <AgGridReact
          ref={tableRef}
          rowData={rowData}
          columnDefs={columns}
          pagination={true}
          autoSizeStrategy={autoSizeStrategy}
          suppressMovableColumns={true}
        />
      </div>
      <button
        onClick={() => {
          clickHandler(tableRef);
        }}
        className="publication-button"
      >
        Export Results to JSON
      </button>
    </div>
  );
}

const clickHandler = async (tableRef) => {
  const data = [];
  tableRef.current?.api.forEachNodeAfterFilterAndSort((node) => {
    data.push(node.data);
  });
  const json = JSON.stringify(data, null, 2);
  if ("showSaveFilePicker" in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: "data.json",
        types: [
          {
            description: "JSON file",
            accept: { "application/json": [".json"] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(json);
      await writable.close();
      alert("Data saved succesfully!");
    } catch (error) {
      alert("File not saved");
    }
  }
};

export default Publications;
