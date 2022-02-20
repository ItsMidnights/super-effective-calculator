import React from "react";
import { useFormik } from "formik";
import { View } from "react-native";
import { SearchBar } from "../input";
// import { FormUI, FormUIProps } from "./form.ui";

export type SearchFormProps = {};
// & FormUIProps;

export const SearchForm: React.FC<SearchFormProps> = ({
}): JSX.Element => {

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      term: ""
    },
    onSubmit: async (values) => {
      console.log(values.term);
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
    </View>
  );
};