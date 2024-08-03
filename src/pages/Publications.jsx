import React, { useState } from 'react'
import publicationsData from '../assets/publicationsdata';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import banner from '../assets/publications_banner-1.jpg';
import '../Styles/publications.css';
import parse from 'html-react-parser';
import TitleCard from '../Components/TitleCard'

function Publications() {
  const [rowData, setRowData] = useState(publicationsData);
  const [columns, setColumns] = useState([
    { field: "Publication", filter: true, floatingFilter: true, autoHeight: true, cellRenderer: ({value}) => <div className='publication-cell'>{parse(value)}</div>},
    { field: "Publisher", filter: true, floatingFilter: true, cellRenderer: ({value}) => <div className='publisher-cell'>{parse(value)}</div>},
    { field: "Author(s)", filter: true, floatingFilter: true, cellRenderer: ({value}) => <div className='authors-cell'>{parse(value)}</div>},
    { field: "Keywords", filter: true, floatingFilter: true, cellRenderer: ({value}) => <div className='keywords-cell'>{parse(value)}</div>},
    { field: "Year"},
  ]);
  return (
    <div className='publications'>
        <TitleCard title='Publications' backgroundImage={banner} />
        <div className="table ag-theme-quartz">
          <AgGridReact rowData={rowData} columnDefs={columns} pagination={true}/>
        </div>
    </div>
  )
}

export default Publications