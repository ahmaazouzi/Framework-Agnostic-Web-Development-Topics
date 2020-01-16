function timeoutPromise(message, interval){
	return new Promise((resolve, reject) =>{
		if (interval < 0 || typeof interval !== Number) 
			reject('!');
		else
			resolve('Congrats, dude!!');
	})
}