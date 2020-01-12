function Dog(name, breed, weight, size){
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.sound = 'Howhow!!!';
}

Dog.prototype.bark = function(){
	console.log(this.sound);
}

dog = new Dog('Max', 'Golden retriever', 70, 4.4);
dog.bark();

function Saluki(name, breed, weight, size, speed){
	Dog.call(this, name, breed, weight, size, speed);
	this.speed = speed;
}

Saluki.prototype = Object.create(Dog.prototype);

Saluki.prototype.bragging = function(){
	console.log("I run at an incredible speed of " + this.speed + " miles per hours")
}



afghanHound1 = new Saluki('Max', 'Afghan hound', 45, 4, 88);
afghanHound1.bark();
afghanHound1.bragging();
console.log(afghanHound1.prototype);
