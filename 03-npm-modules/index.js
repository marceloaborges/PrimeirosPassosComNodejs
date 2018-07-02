const _ = require('lodash');

const array = [1,2,3,4,5,6,7,8,9];

console.log('Imprimindo de 3 em 3');

_.chunk(array,3).forEach((item)=>{
	console.log('------');
	item.forEach((i)=>{
		console.log(i);
	})
})