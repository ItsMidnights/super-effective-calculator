import { SearchBarUIProps } from ".";
import { SearchBarUI } from "./search-bar.ui";

export type SearchBarProps = {} & SearchBarUIProps;

export const SearchBar: React.FC<SearchBarProps> = ({
  handleBlur,
  handleChange,
  leftIcon,
  onCancel,
  placeholder,
  value
}) => (
  <SearchBarUI 
    handleBlur={handleBlur}
    handleChange={handleChange}
    leftIcon={leftIcon}
    onCancel={onCancel}
    placeholder={placeholder}
    value={value}
   />

);