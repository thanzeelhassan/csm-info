import React from "react";
import { useTable } from "react-table";
import { useMemo } from "react";
import "./AnimeDiscussionTable.css";

const AnimeDiscussionTable = ({ data }) => {
  var accessor1 = "chainsawman sub reddit thread";
  var accessor2 = "manga sub reddit thread";
  var accessor3 = "chainsawfolk sub reddit thread";

  const columns = useMemo(
    () => [
      {
        Header: "Episode Number",
        accessor: "episode number",
      },
      {
        Header: "Episode   Title",
        accessor: "episode title",
      },
      {
        Header: "r/ChainsawMan Reddit Thread",
        accessor: accessor1,
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        ), // clickable link
      },
      {
        Header: "r/Manga Reddit Thread",
        accessor: accessor2,
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        ), // clickable link
      },
      {
        Header: "r/ChainsawFolk Reddit Thread",
        accessor: accessor3,
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        ), // clickable link
      },
      {
        Header: "Air Date",
        accessor: "air date",
      },
      {
        Header: "Air Date English Dub",
        accessor: "air date english dub",
      },
      {
        Header: "Opening song",
        accessor: "opening song",
      },
      {
        Header: "Ending song",
        accessor: "ending song",
      },
      {
        Header: "Arc Name",
        accessor: "arc name",
      },
      {
        Header: "Adapted from",
        accessor: "adapted from",
      },
    ],
    [accessor1, accessor2, accessor3]
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

export default AnimeDiscussionTable;
