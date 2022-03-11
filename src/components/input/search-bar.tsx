import React from "react";
import { SearchBarUIProps } from ".";
import { SearchBarUI } from "./search-bar.ui";

export type SearchBarProps = {} & SearchBarUIProps;

export const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  onChangeText,
  onSubmitEditing,
  placeholder,
  searchIcon,
  value,
  ...props
}) => {
  return (
    <SearchBarUI
      {...props}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      searchIcon={searchIcon}
    />
  );
};
