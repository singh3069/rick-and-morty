import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../public/queries';

interface CharactersQueryProps {
    page?: number,
    search?: string
}

function useCharactersQuery(props: CharactersQueryProps) {
  const [getCharacters,{loading, error, data }] = useLazyQuery(GET_ALL_CHARACTERS , {
    // variables: {
    //   page: props.page,
    //   search: props.search
    // },
    
  })
  return {
    loading,
    error,
    data,
    getCharacters
  }
}

export default useCharactersQuery