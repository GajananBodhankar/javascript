console.log(018 == '018')
console.log(017 == '017')

// Case-1: 018 == '018':
// JavaScript interprets 018 as 18, not as an 
// octal because 8 is not a valid octal digit. The string '018' 
// is automatically converted (type coercion) to the numeric value 18. Thus, 18 == 18 evaluates to true.

// Case-2: 017 == '017'
// JavaScript interprets 017 as an octal number, which is 15 in decimal.
//  The string '017' is converted to the numeric value 17.
//  Therefore, 15 == 17 evaluates to false.