function panggilMinArray(nilai){
	return Math.min.apply(Math,nilai)
}
function panggilMaxArray(nilai){
	return Math.max.apply(Math,nilai)
}

var deretMin = [45,100,99,3,2,4,1,2,3,19,22,14]
var deretMax = [45,100,99,3,2,81,22,55,1,2,3,4]

console.log("Nilai Minimal : ",panggilMinArray(deretMin))
console.log("Nilai Maksimal : ",panggilMaxArray(deretMax))