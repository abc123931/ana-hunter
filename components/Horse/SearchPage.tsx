import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SearchBar } from "../SearchBar";
import { HorseList } from "./HorseList";

type RecieveProps = {};
type ContainerCreatedProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ search, setSearch, ..._props }) => (
  <View style={styles.container}>
    <SearchBar search={search} setSearch={setSearch} />
    {!!search && <HorseList search={search} />}
    {!search && <Text>馬を検索してください</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export const SearchPage: React.FC<RecieveProps> = ({ ...props }) => {
  const [search, setSearch] = useState<string>("");
  return <Component search={search} setSearch={setSearch} {...props} />;
};
