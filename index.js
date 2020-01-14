p = new Promise((resolve, regect) => {
	let a = 1 + 1;
	if (a == 2)
		resolve('Success')
	else
		regect('Boohoo')
}).then((message) => {
	console.log(message)
}).catch((message) => {
	console.log(`${message}You failed mate`)
})