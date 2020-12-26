import React from "react";
import LaneFilter from "./LaneFilter";
import TypeFilter from "./TypeFilter";
import WatchStatusFilter from "./WatchStatusFilter";
import BookmarkStatusFilter from "./BookmarkStatusFilter";

export default function Filters() {
  return (
    <>
      <LaneFilter />
      <TypeFilter />
      <WatchStatusFilter />
      <BookmarkStatusFilter />
    </>
  );
}
