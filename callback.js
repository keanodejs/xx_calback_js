function foo(name, x) {
	console.log(name);
	x(1,2);
}

foo('claus', function (num1, num2) {
	var sum = num1 + num2;
	console.log(sum);
});

console.log('end');
