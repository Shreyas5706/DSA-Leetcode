/**
 * @param {number} n
 * @return {number}
 */
//Here  all the Calculations of weeks and remaining days sum is calculated using this formula 
// S(n) = n(2a + (n-1)d ) /2 

//  for weeks the d is fixed 7 as the differnece of 7 in the airthemtic expression of sum of weeks 28 , 35, 42, 29 .....
//  for weeks a is fixed 28 -- The sum of first week
// for weeks n = numner of weeks . and after putting the value of a and d we simplify the equation and it comes out to be the one in the formula below 
// In the same way value of d for remaining days is 1 as we take 1 dollar more each day. and putting the value we get that simplified equation 

var totalMoney = function(n) {
    const weeks = Math.floor(n/7);
    const remDays = n % 7 ;
    const weekSum = 7 * weeks * ( weeks + 7 ) / 2;
    const start = weeks + 1;
    const remDaysSum = remDays * ( 2 * start + (remDays -1) ) / 2 ;
    
    return weekSum + remDaysSum;
};