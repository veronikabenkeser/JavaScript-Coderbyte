function ExOh(str) { 

  var count1=0;
  var count2=0; 
  
  for(var i in str){
    if (str[i] =="x")count1++;
    if (str[i] == "o") count2++;
  }
  
  if (count1 == count2) return true;
  return false;
}
