import React, { useCallback } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { GetWeekendRacesQuery } from "../../../apollo/graphql";
import { DUMMY_IMAGE } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../../../navigation/types";

type RecieveProps = {
  data: GetWeekendRacesQuery["races"][number];
};
type ContainerCreatedProps = {
  onPressRunningHorse: (raceName?: string | null | undefined, raceDay?: string | null | undefined) => void;
  onPressRace: (raceName?: string | null | undefined) => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ data, onPressRunningHorse, onPressRace, ..._props }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.raceName}>{data.raceName}</Text>
      <View style={styles.supplementDate}>
        <Text style={styles.supplementDateText}>競馬場の名前を入れる</Text>
        <Text style={styles.supplementDateText}>{data.raceDay}</Text>
      </View>
    </View>
    <Image style={styles.image} source={{ uri: DUMMY_IMAGE }} />
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => onPressRunningHorse(data.raceName, data.raceDay)}>
        <FontAwesome5 name="horse" size={32} color="gray" style={styles.footerIcon} />
        <Text>出走馬</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => onPressRace(data.raceName)}>
        <FontAwesome5 name="trophy" size={32} color="gray" style={styles.footerIcon} />
        <Text>レース情報</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    flex: 1,
    padding: 16,
  },
  supplementDate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  supplementDateText: {
    fontSize: 11,
    color: "rgb(153, 153, 153)",
  },
  image: {
    width: "100%",
    height: 200,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  footerButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  footerIcon: {
    paddingBottom: 5,
  },
  raceName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList, "Home">>();

  const onPressRunningHorse = useCallback(
    (raceName?: string | null, raceDay?: string | null) => {
      navigation.navigate("RunningHorse", {
        raceName: raceName?.replace(/Ｇ１|Ｇ２|Ｇ３|・/gi, "") ?? "",
        raceDay: raceDay ?? "",
      });
    },
    [navigation]
  );

  const onPressRace = useCallback(
    (raceName?: string | null) => {
      navigation.navigate("Race", {
        raceName: raceName?.replace(/Ｇ１|Ｇ２|Ｇ３|・/gi, "") ?? "",
      });
    },
    [navigation]
  );
  return <Component onPressRunningHorse={onPressRunningHorse} onPressRace={onPressRace} {...props} />;
};

export default Container;
