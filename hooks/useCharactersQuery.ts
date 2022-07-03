import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../public/queries';



function useCharactersQuery() {
  const [getCharacters,{loading, error, data }] = useLazyQuery(GET_ALL_CHARACTERS )
  return {
    loading,
    error,
    data,
    getCharacters
  }
}

export default useCharactersQuery