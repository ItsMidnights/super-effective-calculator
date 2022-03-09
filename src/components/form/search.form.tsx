import React from "react";
import { NativeSyntheticEvent, TextInputSubmitEditingEventData, View } from "react-native";
import { SearchBar } from "../input";

export type SearchFormProps = {
  value: string;
  onSubmit: (term: string) => Promise<void>;
  onChange: (text: string) => void;
  onClear: () => void;
};
// & FormUIProps;

// TODO move the stateful logic to the search view component
export const SearchForm: React.FC<SearchFormProps> = ({
  onClear,
  onChange,
  onSubmit,
  value
}): JSX.Element => {
  
  

  return (
    <View
      style={[
        {
          width: "100%",
          padding: 20
        },
      ]}
    >
      <SearchBar
        platform="default"
        placeholder="Search for a Pokemon..."
        value={value}
        onChangeText={(text: string) => onChange(text)}
        onClear={onClear}
        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
          onClear();
          onSubmit(value);
        }}
      />
    </View>
  );
};
