import {  gql  } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
      query {
        characters(page: 5) {
          info {
            count
            pages
          }
          results {
            name
            id
            status
            location {
              name
              id
            }
            image
            origin {
              name
              id
            }
            episode {
              id
              episode
              air_date
            }
          }
        }
      }
    `
