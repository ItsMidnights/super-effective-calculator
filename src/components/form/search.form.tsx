import React from "react";
import { useFormik } from "formik";
import { View } from "react-native";
import { SearchBar } from "../input";
import { getPokemonByName, getSECPokemon, getWeaknessesByTypes } from "../../data/api/pokemon.get";
import { NativePokemonType, PokemonType, SECPokemonRecord } from "../../types/pokemon.types";
import { Types } from "../pokemon-types";
import { ScreenProps } from "../../routes/routes.types";
// import { FormUI, FormUIProps } from "./form.ui";

export type SearchFormProps = {
  handleCWPokemon: (pokemon: SECPokemonRecord) => void;
} & ScreenProps
// & FormUIProps;

// TODO move the stateful logic to the search view component
export const SearchForm: React.FC<SearchFormProps> = ({
  handleCWPokemon,
  navigation,
  route
}): JSX.Element => {

  const [types, setTypes] = React.useState<PokemonType[]>([]);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      term: ""
    },
    onSubmit: async (values) => {
      const pokemon = await getSECPokemon(values.term);
      console.log(pokemon);
      handleCWPokemon(pokemon);
    }
  });

  return (
    <View
      style={[
        {
          flex: 1,
          width: "100%"
        }
      ]} 
    >
      <SearchBar 
        placeholder="Search for a Pokemon..." 
        value={values.term}
        onChangeText={handleChange("term")}
        onSubmitEditing={handleSubmit}
      />
      {/* <View style={{
        alignItems:"center",
        justifyContent: "center"
      }}>
        {types.map((type, idx) => {
          return <Types
            key={idx} 
            type={type.name}
          />
        })}
      </View> */}
    </View>
  );
};