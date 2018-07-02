module.exports = (x) =>{
	var resposta = () => x % 2 == 0 ? true : false;

	return{
		msg: 'O valor é par ?',
		value: resposta()
	}
}