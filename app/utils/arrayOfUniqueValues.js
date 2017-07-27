const removeDuplicates = (array) => {
	return Array.from(new Set(array))
}

const arrayOfUniqueValues = (arrayOfObjects) => {
	let restaurantsArray = []
	let citiesArray = []
	let cuisinesArray = []
	
	for (let singleObject of arrayOfObjects) {
		restaurantsArray.push(Object.values(singleObject)[2])
		citiesArray.push(Object.values(singleObject)[3])
		cuisinesArray.push(Object.values(singleObject)[4])
	}
	
	restaurantsArray = removeDuplicates(restaurantsArray).sort()
	citiesArray = removeDuplicates(citiesArray).sort()
	cuisinesArray = removeDuplicates(cuisinesArray).sort()
	
	return [restaurantsArray, citiesArray, cuisinesArray]
}

export default arrayOfUniqueValues