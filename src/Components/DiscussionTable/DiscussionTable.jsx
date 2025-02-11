import React from "react";
import { useTable } from "react-table";
import { useMemo } from "react";
import "./DiscussionTable.css";

const DiscussionTable = ({ data, subreddit }) => {
  var accessor = "";

  switch (subreddit) {
    case "ChainsawMan":
      accessor = "chainsawman sub reddit thread";
      break;
    case "ChainsawFolk":
      accessor = "chainsawfolk sub reddit thread";
      break;
    case "Manga":
      accessor = "manga sub reddit thread";
      break;
    default:
      console.error("No subreddit data passed");
  }

  const columns = useMemo(
    () => [
      {
        Header: "Chapter Number",
        accessor: "chapter number",
      },
      {
        Header: "Chapter Title",
        accessor: "chapter title",
      },
      {
        Header: "Reddit Thread",
        accessor: accessor,
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        ), // clickable link
      },
      {
        Header: "Volume",
        accessor: "volume number",
      },
      {
        Header: "Release Date",
        accessor: "release date",
      },
    ],
    [accessor]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="discussion-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DiscussionTable;
