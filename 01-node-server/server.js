
const http = require('http');

const server = http.createServer(function(request, response){

	const headers = request.headers;
	const method = request.method;
	const url = request.url;

	console.log("Headers");
	console.log(headers);
	console.log("Method: " + method);
	console.log("URL: " + url);

	if(request.url == '/teste'){
		response.setHeader('Content-type', 'text/html;charset=UTF-8');
		response.end('<h1>Olá mundo !!!</h1>');
	}

	if(request.url == '/json'){
		response.setHeader('Content-type', 'application/json');
		const data = {
			id: 1,
			mensagem: "Aqui uma mensagem",
		};
		response.end(JSON.stringify(data));
	}

	console.log('Servidor iniciado com sucesso');
});

server.listen(3000);