import React from "react";
import { useFormik } from "formik";
import { View } from "react-native";
import { SearchBar } from "../input";
import { getPokemonByName, getWeaknessesByTypes } from "../../data/api/pokemon.get";
import { NativePokemonType, PokemonType } from "../../types/pokemon.types";
import { Types } from "../pokemon-types";
// import { FormUI, FormUIProps } from "./form.ui";

export type SearchFormProps = {};
// & FormUIProps;

export const SearchForm: React.FC<SearchFormProps> = ({
}): JSX.Element => {

  const [types, setTypes] = React.useState<PokemonType[]>([]);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      term: ""
    },
    onSubmit: async (values) => {
      // console.log(values.term + "\n");
      const {
        id,
        name,
        sprites,
        weight,
        types
      }: {
        id: number,
        name: string,
        sprites: any,
        weight: number,
        types: NativePokemonType[]
      } = await getPokemonByName(values.term);
      const sprite = sprites.front_default;
      const weaknesses = await getWeaknessesByTypes(types);
      setTypes(weaknesses);
      console.log({
        id,
        name,
        weight,
        sprite,
        types,
        weaknesses
      });
    }
  });

  /**
   * ANCHOR Implement a redux toolkit createAsyncThunk
  **/ 

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
      <View style={{
        alignItems:"center",
        justifyContent: "center"
      }}>
        {types.map((type, idx) => {
          return <Types
            key={idx} 
            type={type.name}
          />
        })}
      </View>
    </View>
  );
};