import React, { useMemo } from "react";
import PropTypes from "prop-types";
import DiscussionTable, { LinkCell } from "../DiscussionTable/DiscussionTable";

const MangaDiscussionTable = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "Chapter Number", accessor: "chapter number" },
      { Header: "Chapter Title", accessor: "chapter title" },
      { Header: "r/ChainsawMan Reddit Thread", accessor: "chainsawman sub reddit thread", Cell: LinkCell },
      { Header: "r/Manga Reddit Thread", accessor: "manga sub reddit thread", Cell: LinkCell },
      { Header: "r/ChainsawFolk Reddit Thread", accessor: "chainsawfolk sub reddit thread", Cell: LinkCell },
      {
        Header: "Volume",
        accessor: "volume number",
        Cell: ({ value }) => value || "Not released as a volume yet",
      },
      { Header: "Release Date", accessor: "release date" },
      { Header: "Fandom Wiki Link", accessor: "fandom wiki link", Cell: LinkCell },
    ],
    []
  );

  return <DiscussionTable columns={columns} data={data} />;
};
MangaDiscussionTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MangaDiscussionTable;
