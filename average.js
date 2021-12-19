
function average(numbers) {
  var count=0;
  for(var i=0; i<numbers.length; i++ ){
    if (isNaN(numbers[i])){
    numbers[i] = 0;
    count++;
    }
  }
  return numbers.reduce((p, c)=> p + c, 0) / (numbers.length-count);
 }

module.exports = {average};



