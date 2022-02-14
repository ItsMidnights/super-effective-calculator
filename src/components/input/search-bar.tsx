import { SearchBarUIProps } from ".";
import { SearchBarUI } from "./search-bar.ui";

export type SearchBarProps = {} & SearchBarUIProps;

export const SearchBar: React.FC<SearchBarProps> = ({
  onChangeText,
  placeholder,
  searchIcon,
  value
}) => (
  <SearchBarUI 
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    searchIcon={searchIcon}
   />

);