import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../queries';


function CharactersQuery(props?:number) {
    const {loading, error, data : character} = useQuery(GET_ALL_CHARACTERS , {
    variables: {
      page: props
    }
  })
  return {
    loading,
    error,
    character
  }
}

export default CharactersQuery