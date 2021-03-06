

const salesDiscount = (price, discount) =>  {
   
    // make sure the price is not string type
    if(typeof price === 'string' || price < 0) return -1;

    if(parseFloat(discount) < 0 || isNaN(parseFloat(discount))) return -1; 

      // make sure discount is in percentage
     if(isNaN(discount) && discount.slice(discount.length -1) !== '%')   return -1;

     // make sure is the decimal value. (begin or second value
     if(!isNaN(discount) && discount > 1) return -1;

     let discountAmout = 0.00;

     if(isNaN(discount)) {

        discountAmout =price * parseFloat(discount)/ 100;
     } else {

        discountAmout = price * discount;
     }
     
     return (price - discountAmout).toFixed(2);
}

//Test Cases

//Input 1 (price)				Input 2 (sale discount)			Expected Result
//10.00							10%							9.00   passed
console.log(salesDiscount(10.00,'10%'));  // passed

//10.00							.10							9.00   passed
console.log(salesDiscount(10.00,'.10'));   // passed

//0								20%							0      passed
console.log(salesDiscount(0,'20%'));   // passed

//10.00							0							10.00  passed
console.log(salesDiscount(10.00,'0'));   // passed

//-1								10%							error  passed
console.log(salesDiscount(-1,'10%'));   // passed

//a								10%							error      passed
console.log(salesDiscount('a','10%'));  // passed

//10								-10%						error  passed
console.log(salesDiscount(10,'-10%'));  // passed

//10.00							a							error      passed
console.log(salesDiscount(10.00,'a'));  //passed

//8.55							5%							8.1225?   s/b 8.12   passed
console.log(salesDiscount(8.55,'5%'));  //passed

//8.55							2.5%						8.33625		s/d 8.34  passed
console.log(salesDiscount(8.55,'2.5%'));  // passed

//8.55							.025						8.33625?	s/b 8.34  passed
console.log(salesDiscount(8.55,'0.025'));  // passed

//8.55							0.5%						8.50725		s/b 8.51  passed
console.log(salesDiscount(8.55,'0.5%'));   //passed


//	Added to process sales discount as a string with a % character
//10.00							%							error        passed
console.log(salesDiscount(10.00,'%'));  // passed

//10.00							%5							error		 passed	
console.log(salesDiscount(10.00,'%5'));	// passed

//10.00							5%3							error		 passed
console.log(salesDiscount(10.00,'5%3'));  //passed

//10.00							%53%						error        passed
console.log(salesDiscount(10.00,'%53%'));

//10.00							a%							error        passed
console.log(salesDiscount(10.00,'a%'));   //passed

//10.00							%a%							error        passed
console.log(salesDiscount(10.00,'a%'));   //passed

//10.00							4a%							error        passed
console.log(salesDiscount(10.00,'4a%'));  // fail
console.log(parseFloat('4a%'));
//10.00							%4a%						error        passed
console.log(salesDiscount(10.00,'%4a%'));


//test cases
//console.log("parseFloat(a) " + parseFloat('a')); 
//console.log("first test: " +  salesDiscount2(10,'%4a%') );
//console.log("10.00 10% " +  salesDiscount(10,'0') );
//console.log("10.00 .10 " +  salesDiscount2(10.00,.10) );
//console.log("0 20% " +  salesDiscount2(0,'20%') );
//console.log("10.00 0 " +  salesDiscount2(10.00,0) );
//console.log("-1 10% " +  salesDiscount2(-1,'10%') );
//console.log("a 10% " +  salesDiscount2('a','10%') ); 
//console.log("10.00 '-10%' " +  salesDiscount2(10.00,'-10%') );
//console.log("10.00 'a' " +  salesDiscount2(10.00,'a') );



