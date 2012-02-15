module("Module A");
test("testing module A inside a js file", function(){
	ok(true, 'this test is fine =]');
	var value = 1;
	var obj = {value: 1}
	equal(value, obj.value, "We expect value to be '1'");
});

test("Test an object property", function(){
	var object = {"property": "property value"};
	ok(object.hasOwnProperty("property"), "The object should have an attribute called 'property'");
});

test("Agora testando em português feliz =]", function(){
	var Objeto = function(){
		var valor = 2.0;
		return {
			multiplicarPor: function(produto){
				return valor * produto;
			}
		}			 
	};
	var obj = Objeto();
	equal(4, obj.multiplicarPor(2), 'O valor esperado como resultado da multiplicação é 4');
});