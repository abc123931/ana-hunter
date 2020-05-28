import React from "react";
import { StyleSheet } from "react-native";
import { SearchBar as SearchBarElements } from "react-native-elements";

type RecieveProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ search, setSearch, ..._props }) => (
  <SearchBarElements
    containerStyle={styles.container}
    inputContainerStyle={styles.inputContainer}
    placeholder="馬名を検索"
    onChangeText={setSearch}
    value={search}
    lightTheme
  />
);

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  inputContainer: {
    height: 30,
  },
});

export const SearchBar: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};
