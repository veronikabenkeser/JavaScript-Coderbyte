function LetterCapitalize(str) { 

var arr = str.split(" ");
var result =[];

for(i=0; i<arr.length; i++){
   var l = arr[i].charAt(0).replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
   var c = l+arr[i].substr(1);
   result.push(c);
}
var resStr= result.join(" ");
return resStr;
}
