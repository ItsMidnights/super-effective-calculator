import { 
  SearchBar as ElementSearchBar, 
  SearchBarProps as ElementSearchBarProps 
} from "react-native-elements";
import { searchBarStyles } from "./search-bar.style"

export type SearchBarUIProps = {} & ElementSearchBarProps;

export const SearchBarUI: React.FC<SearchBarUIProps> = ({
  onChange,
  onChangeText,
  onSubmitEditing,
  placeholder,
  searchIcon,
  value
}) => {
  return (
    <ElementSearchBar 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onChangeText={onChangeText}
      searchIcon={searchIcon}
      onSubmitEditing={onSubmitEditing}
      // Defaults
      lightTheme={true}
      returnKeyType={"search"}
      autoCapitalize={"none"}
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