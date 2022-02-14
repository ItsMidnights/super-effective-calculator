import { 
  SearchBar as ElementSearchBar, 
  SearchBarProps as ElementSearchBarProps 
} from "react-native-elements";
import { searchBarStyles } from "./search-bar.style"

export type SearchBarUIProps = {} & ElementSearchBarProps;

export const SearchBarUI: React.FC<SearchBarUIProps> = ({
  onChangeText,
  placeholder,
  searchIcon,
  value
}) => {
  return (
    <ElementSearchBar 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      searchIcon={searchIcon}
      // Defaults
      lightTheme={true}
      returnKeyType={"search"}
      containerStyle={[
        searchBarStyles.container
      ]}
      rightIconContainerStyle={[
        searchBarStyles.rightContainer
      ]}
      inputContainerStyle={[
        searchBarStyles.inputContainer,
      ]}
      inputStyle={[
        searchBarStyles.input
      ]}
    />
  );
}