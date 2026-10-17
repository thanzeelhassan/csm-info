import React, { useMemo } from "react";
import PropTypes from "prop-types";
import DiscussionTable, { LinkCell } from "../DiscussionTable/DiscussionTable";

const AnimeDiscussionTable = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "Episode Number", accessor: "episode number" },
      { Header: "Episode Title", accessor: "episode title" },
      { Header: "r/ChainsawMan Reddit Thread", accessor: "chainsawman sub reddit thread", Cell: LinkCell },
      { Header: "r/Anime Reddit Thread", accessor: "anime sub reddit thread", Cell: LinkCell },
      { Header: "r/csmanime Reddit Thread", accessor: "csmanime sub reddit thread", Cell: LinkCell },
      { Header: "Air Date", accessor: "air date" },
      { Header: "Air Date English Dub", accessor: "air date english dub" },
      { Header: "Arc Name", accessor: "arc name" },
      { Header: "Adapted from", accessor: "adapted from" },
    ],
    []
  );

  return <DiscussionTable columns={columns} data={data} />;
};
AnimeDiscussionTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AnimeDiscussionTable;
