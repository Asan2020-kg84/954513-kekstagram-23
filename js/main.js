function getRandomIntInclusive(min, max) {
  if(max <= min) {
    throw new Error(`max argument ${max} should be more than min ${min}`)
}

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


console.log(getRandomIntInclusive(1,10));


text = "ABCDEFGHIJKLMNOPQRSTUVWXYZfffffffffff";
let check = function (comment, length) {
	if (comment.length < length) {
    return true;
   } else {
    return false;
   }
}

 check(text, 140);
