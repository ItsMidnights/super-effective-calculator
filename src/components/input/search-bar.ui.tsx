import { SearchBar as ElementSearchBar } from "react-native-elements";
import { searchBarStyles } from "."

export const SearchBarUI = ({}) => {
  return (
    <ElementSearchBar 
      platform="default"
      lightTheme={true}
      containerStyle={[
        searchBarStyles.container
      ]}
      inputContainerStyle={[
        searchBarStyles.input,
      ]}
    />
  );
}