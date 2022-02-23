import React from "react";
import { useFormik } from "formik";
import { View } from "react-native";
import { SearchBar } from "../input";
import { getDamageRelationsFromTypeName, getPokemonByName } from "../../data/api/pokemon.get";
import Axios, { AxiosResponse } from "axios";
import { NativePokemonType, PokemonType } from "../../types/pokemon.types";
import { mergeSort } from "../../functions/util/sort";
import { filterDuplicates } from "../../functions/util/filter";
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
        name,
        types
      }: {
        name: string,
        types: NativePokemonType[]
      } = await getPokemonByName(values.term);
      console.log(types);
      let weaknesses: PokemonType[] = new Array<PokemonType>();
      let strengths: PokemonType[] = [];

      // Promise wrap this: increment a counter, once counter reaches the correct length, resolve the promise.
      types.forEach( async (type, idx) => {

        // const data = getDamageRelationsFromTypeName(type.type.name);
        const data = await Axios.get(`https://pokeapi.co/api/v2/type/${type.type.name}`)
        .then((response: AxiosResponse<any>) => {
          return response.data
        }, (rejectionReason) => {
          console.error(rejectionReason);
        })
        const {
          double_damage_from,
          half_damage_from
        } = data.damage_relations;
        weaknesses.push(...double_damage_from);
        strengths.push(...half_damage_from);
      });

      let sortedWeaknesses: PokemonType[]; 
      let sortedStrengths: PokemonType[]; 
      let finalWeaknesses: PokemonType[];

      setTimeout(() => {
        sortedWeaknesses = mergeSort(weaknesses).filter((type, idx, arr) => filterDuplicates(type, idx, arr));
        console.log(sortedWeaknesses);
        sortedStrengths = mergeSort(strengths).filter((type, idx, arr) => filterDuplicates(type, idx, arr));
        console.log(sortedStrengths);

        finalWeaknesses = sortedWeaknesses.filter((type) => {
          return !sortedStrengths.find((element) => {
            return element.name === type.name;
          })
        });
        setTypes(finalWeaknesses);
        console.log(finalWeaknesses);
      }, 500);

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