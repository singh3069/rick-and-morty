import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../public/queries';



function useCharactersQuery() {
  const [getCharacters,{loading, error, data,fetchMore }] = useLazyQuery(GET_ALL_CHARACTERS )
  return {
    loading,
    error,
    data,
    getCharacters,
    fetchMore
  }
}

export default useCharactersQuery