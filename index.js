var rect = {
	perimeter: (x, y) => (2*(x+y)),
	area: (x, y) => (x*y)
};

function solveRect(l, b){
	console.log("Solving for rectangle with l = " + l + " b = " + b);

	if (l<=0 || b<=0){
		console.log("Rectangle dimensions should be greater than zero");
	}
	else{
		console.log("The area of the rectangle is: " + rect.area(l, b));
		console.log("The perimeter of the rectangle is: " + rect.perimeter(l, b));
	}
}

solveRect(3, 2);