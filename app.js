// var my = prompt("your desire object")
// function bringthis(my){
// 	alert("my" + " " + my );
// }
// bringthis( my);
// var number1 = +prompt("your first number");
// var number2 = +prompt("your 2nd number");
// var number3 = +prompt("your 3rd number");
// function calculation(num1, num2, num3){
//    var  result = (num1 + num2) * num3;
//    result = parseInt(result);
//    	 if(result == number.isNaN){
// 	alert("somthing went wrong provide a valid number");
	
// }
// else{
// 	 alert(result);
// }
	 
// }
// calculation(number1,number2,number3);
var ing1 = ['egg', 'salt', 'sugar'];
var ing2 = ['water', 'egg', 'milk'];
var ing3 = ['flour', 'sugar', 'milk'];
var allingrd = [];
function arraydel(ingrd1, ingrd2, ingrd3) {
	for (var i = 0; i < ingrd1.length; i++) {
		if (allingrd.indexOf(ingrd1[i]) == -1) {
			allingrd.push(ingrd1[i]);
		}
	}
	for (var i = 0; i < ingrd2.length; i++) {
		if (allingrd.indexOf(ingrd2[i]) == -1) {
			allingrd.push(ingrd2[i]);
		}
	}
	for (var i = 0; i < ingrd3.length; i++) {
		if (allingrd.indexOf(ingrd3[i]) == -1) {
			allingrd.push(ingrd3[i]);
		}
	}
	console.log(allingrd);
}
arraydel(ing1, ing2, ing3);
