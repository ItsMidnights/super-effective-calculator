import React from "react";
import { View, Platform } from "react-native";
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
    <View style={[
      searchBarStyles.container,
    ]}>
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
          searchBarStyles.searchBarContainer,
        ]}
        rightIconContainerStyle={[
          searchBarStyles.rightContainer,
        ]}
        inputContainerStyle={[
          searchBarStyles.inputContainer,
        ]}
        inputStyle={[
          searchBarStyles.input,
        ]}
      />
    </View>
  );
}