import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../public/queries';

interface CharactersQueryProps {
    page?: number,
    search?: string
}

function useCharactersQuery(props: CharactersQueryProps) {
  const {loading, error, data : character ,refetch} = useQuery(GET_ALL_CHARACTERS , {
    variables: {
      page: props.page,
      search: props.search
    },
    
  })
  return {
    loading,
    error,
    character,
    refetch
  }
}

export default useCharactersQuery