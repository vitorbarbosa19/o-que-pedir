const removeDuplicates = (array) => {
	return Array.from(new Set(array))
}

const arrayOfUniqueValues = (arrayOfObjects) => {
	const valuesArray = []
	
	for (let singleObject of arrayOfObjects) {
		valuesArray.push(Object.values(singleObject)[0])
	}

	return removeDuplicates(valuesArray)
}

export default arrayOfUniqueValues