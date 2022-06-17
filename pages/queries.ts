import {  gql  } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
      query Character($page: Int) {
        characters(page: $page) {
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
