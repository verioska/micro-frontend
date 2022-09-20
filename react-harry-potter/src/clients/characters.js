import Axios from 'axios'


export const getCharacters = async ()=> {
  try {
    const result = await Axios.get(`https://hp-api.herokuapp.com/api/characters`)
    return result.data
  } catch (error) {
    console.error('Error: =>>>>>>>', error, error.message)
    throw error
  }
}