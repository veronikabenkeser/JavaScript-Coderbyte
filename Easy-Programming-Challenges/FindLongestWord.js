function LongestWord(sen) { 
 
  var word;
  var maxLength = 0;
  
  sen = sen.replace(/\W/g," ");
  var arr = sen.split(" ");
  
  for(i=0; i<arr.length; i++){
    
    if(arr[i].length>maxLength){
      maxLength = arr[i].length;
      word = arr[i];
    }
  }
  return word;       
}
