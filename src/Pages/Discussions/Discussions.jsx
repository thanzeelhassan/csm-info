import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Discussions.css'
import fakeData from '../../assets/MOCK_DATA.json'
import { useTable } from 'react-table'
import { useMemo } from 'react'

const Discussions = () => {
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "University",
      accessor: "university",
    },
  ], []);

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data });

  return (
    <div className='discussion-background fade-in'>
      <Navbar> </Navbar>
      <h1 className='discussion-h1-class'>Discussions</h1>

      <h2 className='discussion-h1-class'>r/ChainsawMan</h2>
      
      <div className='discussion-container'>
        <table {...getTableProps()}>
          <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Discussions;
