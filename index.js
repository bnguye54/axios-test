//index.js
	
	//METHOD 1: GET request
	function performGetRequest1() {
		//make a js variable to refer to the DIV element by the name of (getResult1) inside your HTML
	 	var resultElement = document.getElementById('getResult1'); 
	 	//sets the value of the DIV to empty.
	 	resultElement.innerHTML = '';
	  	//GET Request using Axios by calling this url: http://jsonplaceholder.typicode.com/todo
	  	axios.get('http://jsonplaceholder.typicode.com/todos')

	    .then(function (response) {
	     	resultElement.innerHTML = generateSuccessHTMLOutput(response);
	    })
	    .catch(function (error) {
	     	resultElement.innerHTML = generateErrorHTMLOutput(error);
	    });   
	}
	//Printing Functions
	function generateSuccessHTMLOutput(response) {
	  return  '<h4>Result</h4>' + 
	          '<h5>Status:</h5> ' + 
	          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
	          '<h5>Headers:</h5>' + 
	          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
	          '<h5>Data:</h5>' + 
	          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
	}

	//ATTEMPTS to converts the JSON response we get back from the REQUEST into String values but also prints error
	function generateErrorHTMLOutput(error) {
	  return  '<h4>Result</h4>' + 
	          '<h5>Message:</h5> ' + 
	          '<pre>' + error.message + '</pre>' +
	          '<h5>Status:</h5> ' + 
	          '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
	          '<h5>Headers:</h5>' + 
	          '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
	          '<h5>Data:</h5>' + 
	          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
	}
	//METHOD 2: GET request w/ Parameters
	function performGetRequest2() {
	 	var resultElement = document.getElementById('getResult2');
	  	var todoId = document.getElementById('todoId').value;
	  	resultElement.innerHTML = '';
	  	axios.get('http://jsonplaceholder.typicode.com/todos', {
	    	params: {
	      		id: todoId
	    	}
	  	})
	  	.then(function (response) {
	    	console.log(response);
	    	resultElement.innerHTML = generateSuccessHTMLOutput(response);
	  	})
	  	.catch(function (error) {
	     	resultElement.innerHTML = generateErrorHTMLOutput(error);
	  	});
	}
	//METHODO 3: POST REQUEST
	document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);
	function performPostRequest(e) {
		var resultElement = document.getElementById('postResult');
		var todoTitle = document.getElementById('todoTitle').value;
		resultElement.innerHTML = '';

		axios.post('http://jsonplaceholder.typicode.com/todos', {
			userId: '1',
			title: todoTitle,
			completed: false
		})
		.then(function (response) {
			resultElement.innerHTML = generateSuccessHTMLOutput(response);
		})
		.catch(function (error) {
			resultElement.innerHTML = generateErrorHTMLOutput(error);
		});

		e.preventDefault();
	}
	//USING JSONSTUB API
	function performGetRequest3(){
		var resultElement = document.getElementById('getResult3');
		resultElement,innerHTML = '';
		axios.get('http://jsonstub.com/board', {
		  headers: {
		  'Access-Control-Allow-Origin': '*',
		    'Content-Type': 'application/json',
		    'JsonStub-User-Key': '59eeb13b-ce9a-4154-a2ef-7d27ae65424b',
		    'JsonStub-Project-Key': 'c12a2816-db9b-40e8-bac7-d8edcaa52278'
		  },
		  data: {}
		})
		.then(function (response){
			console.log(response)
			resultElement.innerHTML = generateSuccessHTMLOutput(response);
		})
		.catch(function (error) {
	     	resultElement.innerHTML = generateErrorHTMLOutput(error);
	    });   
	}
	


