// // console.log("hello")
// var name = 'Faraz';
// var age = 24;
// console.log( name + age );
// var job,ismarried;

// job = 'teacher'
// married=true

// console.log (job + married)
// var name=prompt("What is the last name?")
// console.log(name)
// alert (name)

// Lecture on Operators

// var birthYear=2016-26
// console.log (birthYear)

// var name="Faraz"
// var age=24
// var ismarried='no'
// if (ismarried === 'yes'){
// 	console.log('balle balle')
// }
// else {
// 	console.log('bach gya!!')
// }
// var job ="doctor"
// switch (job){
// 	case "teacher": 
// 		console.log('yellah')
// 		break
// 	case "doctor" : 
// 		console.log("wallah")
// 		break
// 	default: 
// 		console.log("kutta")

// }
// 

// var boom = ['John','Smith',12,"teacher"]
// boom.push("Kutta")
// boom.unshift("chutiya")
// boom.pop()
// boom.shift()
// console.log(boom)
// if(boom.indexOf('teacher')===-1){
// 	alert("Teacher nahhi hai ye")
// }

// var john={
// 	name:"John",
// 	birthYear:1994,
// 	calcAge:function(){
// 		this.age=2018-this.birthYear
// 	}
// }
// console.log(john)
// console.log(john.age)
// john.calcAge()
// console.log(john)
// console.log(john.age)
// var Things=[1,2,"Boom","kutta",5,6,7,8,9]

// for (var i = Things.length - 1; i >= 0; i--) {
// 	if (i===2 || i===4 || i==8){
// 		continue
// 	}
// 	console.log(Things[i])
// }
// var i=0
// while(i<10){
// 	console.log(i)
// 	i++
// }

// Coding challenge 2
var years=[1994,1993,2000,2018,1989]
function bazzinga(years){	
	var ages=[]
	var legals=[]
	for (var i = years.length - 1; i >= 0; i--) {
		ages.unshift(2018-years[i])
	}
	 console.log(years)
	// console.log(ages)
	for (var i = ages.length - 1; i >= 0; i--) {
		if (ages[i]>=18){
			console.log("true")
			legals.unshift(true)
		}else{
			console.log("false")
			legals.unshift(false)
		}
	}
	return legals
}
console.log(bazzinga(years))
























