import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../queries';

interface CharactersQueryProps {
    page?: number,
    search?: string
}

function CharactersQuery(props: CharactersQueryProps) {
  console.log({props})
    const {loading, error, data : character ,refetch} = useQuery(GET_ALL_CHARACTERS , {
    variables: {
      page: props.page,
      search: props.search
    }
  })
  return {
    loading,
    error,
    character,
    refetch
  }
}

export default CharactersQuery