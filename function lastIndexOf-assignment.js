function lastIndexOf(arr,val){
  if (arr.length === 0){
    return -1
  }
  for( let i = arr.length - 1; i >= 0; i--){
    if(val === arr[i]){
      return i;
    }
  }
  return -1;
}