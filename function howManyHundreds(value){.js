function howManyHundreds(value){
  var answer = value / 100
  if(answer < 1){
    return 0;
  } else {
    return Math.floor(answer);
  }
};