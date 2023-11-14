function compareArrays(arr1, arr2) {
	if (arr1.length != arr2.length) {
		return false;
	} else {
		return arr1.every((element, index) => element === arr2[index], 0)
	}
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender).map(users => users.age).reduce((acc, age) => acc + age, 0) 
    / users.filter(people => people.gender === gender).map(ages => ages.age).length;

	return result ? result : 0;

}
