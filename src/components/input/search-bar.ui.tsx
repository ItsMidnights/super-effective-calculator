import { SearchBar as ElementSearchBar } from "react-native-elements";
import searchBarStyle from "./search-bar.style";

export const SearchBarUI = ({}) => {
  return (
    <ElementSearchBar 
      platform="default"
      lightTheme={true}
      containerStyle={[
        searchBarStyle.container,
      ]}
      inputContainerStyle={[
        searchBarStyle.input,
      ]}
    />
  );
}