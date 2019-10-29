function writeCards(array, string) {
	let new_arr = []

	for (let i = 0; i < array.length; i++) {
		new_arr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
	}

	console.log(new_arr)
	return new_arr

}

// writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )

function countDown(n) {
	let i = n
	while (i >= 0) {
		console.log(i)
	i --
	}
}


// countDown( 10 )