import React from "react";
import PaginationControls from "../PaginationControls";
import { FuseSearch, FuseSearchResult } from "./FuseSearch";
import Fuse from "fuse.js";

export interface PaginatedFuseSearchProps<T> {
  query: string;
  items: T[];
  fuseOptions: Fuse.IFuseOptions<T>;
  render: (items: FuseSearchResult<T>[]) => React.ReactNode;
  itemsPerPage: number;
}

interface PaginatedFuseSearchState<T> {
  matches: T[];
  currentPage: number;
}

export default class PaginatedFuseSearch<T> extends React.PureComponent<
  PaginatedFuseSearchProps<T>,
  PaginatedFuseSearchState<T>
> {
  constructor(props: PaginatedFuseSearchProps<T>) {
    super(props);

    this.state = {
      matches: [],
      currentPage: 1,
    };
  }

  render() {
    const { query, items, fuseOptions, render, itemsPerPage } = this.props;
    const { currentPage } = this.state;

    const resultList = (
      <FuseSearch
        query={query}
        items={items}
        options={fuseOptions}
        render={render}
        itemsPerPage={itemsPerPage}
        page={currentPage}
        onResultsUpdate={(newResults: T[]) => {
          this.setState((state) => {
            return {
              ...state,
              matches: newResults,
            };
          });
        }}
      />
    );

    const numberOfPages = Math.ceil(items.length / itemsPerPage);

    return (
      <>
        {resultList}
        <PaginationControls
          currentPage={currentPage}
          lastPage={numberOfPages}
          onPageChange={(newPage: number) => {
            this.setState((state) => {
              return {
                ...state,
                currentPage: newPage,
              };
            });
          }}
        />
      </>
    );
  }
}
