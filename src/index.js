
exports.min = function min (array) {

  if(Array.isArray(array) == false){
    return 0;
  }
  else{ 
    let arr = Array.from(array);
        if (arr.length == 0 ) {
      return 0;
    }  
    else{
      let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
     
    }

  }
 
}

exports.max = function max (array) {
  if(Array.isArray(array) == false){
    return 0;
  }
  else{ 
    let arr = Array.from(array);
        if (arr.length == 0 ) {
      return 0;
    }  
    else{
      let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
     
    }

  }
}

exports.avg = function avg (array) {
  if(Array.isArray(array) == false){
    return 0;
  }
  else{ 
    let arr = Array.from(array);
        if (arr.length == 0 ) {
      return 0;
    }  
    else{
      let x = 0;
    for (let i = 0; i < array.length; i++) {
        x=x+arr[i];
    }
    return x/arr.length;
     
    }

  }
}
