function getRandomIntInclusive(min, max) {
  if(max <= min) {
    throw new Error(`max argument ${max} should be more than min ${min}`)
}

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


console.log(getRandomIntInclusive(1,10));



let comment = "ABCDEFGHIJKLMNOPQRSTUVWXYZfffffffffff";
let check = function (length) {
	if (comment.length < 140) {
    return true;
   } else {
    console.log('длина комментария не может составлять больше 140 символов');
   }
}

 check(comment.length);
