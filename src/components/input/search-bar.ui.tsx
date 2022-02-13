import { SearchBar as ElementSearchBar } from "react-native-elements";
import { searchBarStyles } from "."

export type SearchBarUIProps = {
  handleBlur?: (text: string) => void;
  handleChange?: (text: string) => void;
  leftIcon?: JSX.Element;
  onCancel?: () => void;
  placeholder?: string;
  value?: string;
};

export const SearchBarUI: React.FC<SearchBarUIProps> = ({
  handleBlur,
  handleChange,
  leftIcon,
  onCancel,
  placeholder,
  value
}) => {
  return (
    <ElementSearchBar 
      lightTheme={true}
      containerStyle={[
        searchBarStyles.container
      ]}
      inputContainerStyle={[
        searchBarStyles.inputContainer,
      ]}
      inputStyle={[
        searchBarStyles.input
      ]}
      onCancel={onCancel!}
      onBlur={handleBlur!}
      onChangeText={handleChange!}
      searchIcon={leftIcon}
      placeholder={placeholder}
      value={value!}
    />
  );
}