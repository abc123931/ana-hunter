import { gql } from "@apollo/client";

gql`
  query SearchRotationCount($name: String!) {
    searchRotationCount: search_rotation_count(args: { argname: $name }) {
      commonRaceName: common_race_name
      lagCommonRaceName: lag_common_race_name
      firstCount: first_count
      secondCount: second_count
      thirdCount: third_count
      outCount: out_count
      totalCount: total_count
    }
  }
`;
