import React from "react";
import { SearchBarUI, SearchBarUIProps } from "./search-bar.ui";

export type SearchBarProps = {} & SearchBarUIProps;

export const SearchBar: React.FC<SearchBarProps> = ({
  onPress,
}): JSX.Element => {
  const [searchBarShown, setSearchBarShown] = React.useState(false);

  return (
    <>
      <SearchBarUI />
    </>
  );
};
