module.exports = (x) =>{
	var num = x;
	var resposta = () => x % 2 == 0 ? true : false;

	return{
		msg: 'Valor digitado: ' + num + ' é par ?',
		value: resposta()
	}
}