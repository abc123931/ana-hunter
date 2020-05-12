import { gql } from "@apollo/client";

gql`
  query GetWeekendRaces {
    races(
      where: { race_grade: { _gte: 1, _lte: 3 }, realtimehorses: { race_key: { _is_null: false } } }
      order_by: { race_day: desc, race_grade: asc }
      limit: 10
    ) {
      raceKey: race_key
      raceName: race_name
      raceNameCommon: race_name_common
      raceGrade: race_grade
      raceDay: race_day
      raceGrade: race_grade
    }
  }
`;
