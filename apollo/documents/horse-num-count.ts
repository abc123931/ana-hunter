import { gql } from "@apollo/client";

gql`
  query SearchHorseNumCount($name: String!) {
    searchRaceHorseNumCount: search_race_horse_num_count(args: { argname: $name }) {
      commonRaceName: common_race_name
      horseNum: horse_num
      firstCount: first_count
      secondCount: second_count
      thirdCount: third_count
      outCount: out_count
      totalCount: total_count
    }
  }
`;
