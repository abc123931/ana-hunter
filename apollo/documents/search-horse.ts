import { gql } from "@apollo/client";

gql`
  query SearchHorses($like: String!) {
    horses(where: { horse_name: { _like: $like } }) {
      horseID: pedigree_register
      horseName: horse_name
      sexCode: sex_code
      birthday
    }
  }
`;
