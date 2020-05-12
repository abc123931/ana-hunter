import { gql } from "@apollo/client";

gql`
  query SearchRunningHorses($day: String!, $name: String!) {
    searchRunningHorses: search_running_horses(args: { argday: $day, argname: $name }, order_by: { horse_num: asc }) {
      horseName: horse_name
      horseNum: horse_num
      newTotalIndex: new_total_index
      popularity
      raceKey: race_key
      commonRaceName: common_race_name
    }
  }
`;
