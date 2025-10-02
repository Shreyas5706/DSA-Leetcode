/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let drunk = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        drunk++;
        empty -= numExchange - 1; 
        numExchange++;
    }

    return drunk;
};