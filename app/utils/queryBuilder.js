const queryBuilder = (city, cuisine) => {

  let filterArguments = ''

  if (city && cuisine) {
    filterArguments = '{city:' + city + '}, {cuisine:' + cuisine + '}'
  } else if (city && !cuisine) {
    filterArguments = '{city:' + city + '}'
  } else if (!city && cuisine) {
    filterArguments = '{cuisine:' + cuisine + '}'
  } else if (!city && !cuisine) {
    filterArguments = ''
  }

  return `
    query DishesListQuery {
      allDishes(orderBy: rating_DESC, first: 30, filter: {
        AND: [
          ${filterArguments}
        ]
      }) {
        id
        name
        restaurant
        rating
      }
    }
  `
}

export default queryBuilder