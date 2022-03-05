import React from "react";
import { NativeSyntheticEvent, TextInputSubmitEditingEventData, View } from "react-native";
import { SearchBar } from "../input";
import {
  PokemonType,
  SECPokemonRecord,
} from "../../types/pokemon.types";
import { ScreenProps } from "../../routes/routes.types";

export type SearchFormProps = {
  onSubmit: (term: string) => Promise<void>;
};
// & FormUIProps;

// TODO move the stateful logic to the search view component
export const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
}): JSX.Element => {
  const [term, setTerm] = React.useState<string>("");

  const handleChange = (text: string) => {
    setTerm(text);
  }
  
  const handleClear = () => {
    setTerm("");
  }


  return (
    <View
      style={[
        {
          flex: 1,
          width: "100%",
        },
      ]}
    >
      <SearchBar
        placeholder="Search for a Pokemon..."
        value={term}
        onChangeText={handleChange}
        onClear={handleClear}
        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
          onSubmit(term);
        }}
      />
    </View>
  );
};
