import { gql } from 'react-apollo'
import queryBuilder from '../utils/queryBuilder'

const dishesListQuery = (city, cuisine) => {

  let cityToString = '"' + city + '"'
  let cuisineToString = '"' + cuisine + '"'

  console.log(queryBuilder(cityToString, cuisineToString))
  return gql(queryBuilder(cityToString, cuisineToString))
}

export default dishesListQuery