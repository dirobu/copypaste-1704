# copypaste
Javascript function that will loop through a strings, arrays or objects and insert the response it into a model.

copypaste.string(marker, model, str);

	Script: 

	var str = 'red|green|orange';
	console.log(copypaste.string('|','My favorite Color is |%|.', str));

	Output: 

	My favorite color is red.
	My favorite color is green.
	My favorite color is orange.

copypaste.array(model, str);

	Script: 

	var str = ['red','green','orange'];
	console.log(copypaste.array('My favorite Color is |%|.', str));

	Output: 

	My favorite color is red.
	My favorite color is green.
	My favorite color is orange.

copypaste.object(model, str);

	Script: 

	var object = {
		0: {'firstname': 'John','lastname': 'Doe', 'age': '42'},
		1: {'firstname': 'John','lastname': 'Dig', 'age': '41'},
		3: {'firstname': 'Jane','lastname': 'Doe', 'age': '40'}
	};
	var str = copypaste.object('Have you seen |%firstname| |%lastname|, they are |%age| years old.', str);
	console.log(str);

	Output: 

	Have you seen John Doe, they are 42 years old.
	Have you seen John Dig, they are 41 years old.
	Have you seen Jane Doe, they are 40 years old.

copypaste.objectOnly(key, only, model, str);

	Script: 

	var object = {
		0: {'firstname': 'John','lastname': 'Doe', 'age': '42'},
		1: {'firstname': 'John','lastname': 'Dig', 'age': '41'},
		3: {'firstname': 'Jane','lastname': 'Doe', 'age': '40'}
	};
	var str = copypaste.objectOnly('lastname','Doe','Have you seen |%firstname| |%lastname|, they are |%age| years old.', object);
	console.log(str);

	Output: 

	Have you seen John Doe, they are 42 years old.
	Have you seen Jane Doe, they are 40 years old.

copypaste.objectUniqueKey(key, model, str);

	Script: 

	var object = {
		0: {'firstname': 'John','lastname': 'Doe', 'age': '42'},
		1: {'firstname': 'John','lastname': 'Dig', 'age': '41'},
		3: {'firstname': 'Jane','lastname': 'Doe', 'age': '40'}
	};
	var str = copypaste.objectUniqueKey('lastname','Have you seen |%|?', object);
	console.log(str);

	Output: 

	Have you seen Doe ? 
	Have you seen Dig ? 

