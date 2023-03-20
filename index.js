// Array.prototype.filter()
// fileter() creates a shallow copy of a given portion of array
// filtered  down to elements from given       array that pass test implemented by provided function


const words = ['spray', 'limit', 'elite','exuberant','destruction','present'];


const result = words.filter(word => word.length > 6);


console.log(result);
