console.log('hi')

let targetBinary = 1111101110;
const temp = String(targetBinary).split('')
let decimalValue = 0
let exponent = 0

for(i = temp.length - 1; i >= 0; i--){
	if(temp[i] == 1){
		decimalValue += (2**exponent)
	}
	exponent++
}

console.log(decimalValue)