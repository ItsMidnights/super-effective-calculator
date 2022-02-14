import React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import { SearchBar } from "../input";
// import { FormUI, FormUIProps } from "./form.ui";

export type SearchFormProps = {};
// & FormUIProps;

export const SearchForm: React.FC<SearchFormProps> = ({
}): JSX.Element => {
  return (
    <Formik
      initialValues={{ term: "" }}
      onSubmit={values => console.log(values.term)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View
          style={[
            {
              flex: 1,
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
      )}      
    </Formik>
  );
};