const minhaConstante = require('lodash');

const array = [1,2,3,4,5,6,7,8,9,10];

console.log('Imprimindo de 2 em 2');

minhaConstante.chunk(array,2).forEach((item)=>{
	console.log('------');
	item.forEach((i)=>{
		console.log(i);
	})
})