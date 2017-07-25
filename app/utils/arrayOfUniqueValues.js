const removeDuplicates = (array) => {
	return Array.from(new Set(array))
}

const arrayOfUniqueValues = (arrayOfObjects) => {
	let restaurantsArray = []
	let citiesArray = []
	let cuisinesArray = []
	
	for (let singleObject of arrayOfObjects) {
		restaurantsArray.push(Object.values(singleObject)[0])
		citiesArray.push(Object.values(singleObject)[1])
		cuisinesArray.push(Object.values(singleObject)[2])
	}
	
	restaurantsArray = removeDuplicates(restaurantsArray)
	citiesArray = removeDuplicates(citiesArray)
	cuisinesArray = removeDuplicates(cuisinesArray)
	
	return [restaurantsArray, citiesArray, cuisinesArray]
}

export default arrayOfUniqueValues