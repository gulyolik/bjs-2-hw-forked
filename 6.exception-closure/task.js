function parseCount(arg) {
	const error = new Error("Невалидное значение");
	if (isNaN(parseFloat(arg))) {
		throw error;
	}
	return parseFloat(arg);
}

function validateCount(arg) {
	try {
		return parseCount(arg);
	} catch (error) {
		return error;
		console.log(error);
	}
}

class Triangle {
	constructor(a, b, c) {
		const error = new Error("Треугольник с такими сторонами не существует");
		if (a > b + c || b > a + c || c > b + a) {
			throw error;
		} else {
			this.a = a;
			this.b = b;
			this.c = c;
		}
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const semiPerimeter = (this.perimeter) * 0.5;
		return +Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}