function VowelCount(str) { 

  var vow = "aeiou";
  var count = 0;
  var arr = vow.split("");
  
  for(var i=0; i<str.length; i++){
    for(var q in arr){
      if (str[i] == arr[q]){
        count++;
      }
    }
  }
  return count;      
}
