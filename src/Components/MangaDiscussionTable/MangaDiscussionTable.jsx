import React from "react";
import { useTable } from "react-table";
import { useMemo } from "react";
import "./MangaDiscussionTable.css";

const MangaDiscussionTable = ({ data }) => {
  var accessor1 = "chainsawman sub reddit thread";
  var accessor2 = "manga sub reddit thread";
  var accessor3 = "chainsawfolk sub reddit thread";
  var accessor4 = "fandom wiki link";

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
        Header: "r/ChainsawMan Reddit Thread",
        accessor: accessor1,
        Cell: ({ value }) =>
          value ? (
            <a href={value} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          ) : (
            "Not Available"
          ),
      },
      {
        Header: "r/Manga Reddit Thread",
        accessor: accessor2,
        Cell: ({ value }) =>
          value ? (
            <a href={value} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          ) : (
            "Not Available"
          ),
      },
      {
        Header: "r/ChainsawFolk Reddit Thread",
        accessor: accessor3,
        Cell: ({ value }) =>
          value ? (
            <a href={value} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          ) : (
            "Not Available"
          ),
      },
      {
        Header: "Volume",
        accessor: "volume number",
        Cell: ({ value }) => (value ? value : "Not released as a volume yet"),
      },
      {
        Header: "Release Date",
        accessor: "release date",
      },
      {
        Header: "Fandom Wiki Link",
        accessor: accessor4,
        Cell: ({ value }) =>
          value ? (
            <a href={value} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          ) : (
            "Not Available"
          ),
      },
    ],
    [accessor1, accessor2, accessor3, accessor4]
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

export default MangaDiscussionTable;
