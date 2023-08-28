"use strict";
var cohortOneStudents = [
	"Sable",
	"David",
	"Joey",
	"Nick",
	"Tommy",
	"Connor",
	"Charles",
	"Russ",
	"Bobby",
	"Josh",
	"Nikki",
	"Matt",
	"Dale",
	"Sydney",
];

for (let i = 0; i < cohortOneStudents.length; i++) {
	console.log(cohortOneStudents[i]);
}

let interests = [
	"video games",
	"gardening",
	"working out",
	"movies",
	"reading",
];

for (let i = 0; i < interests.length; i++) {
	if (interests[i] === "video games") {
		console.log(`My absolute favorite interest is: ${interests[i]}.`);
	} else {
		console.log(`One of my interests is: ${interests[i]}.`);
	}
}
