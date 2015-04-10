function LetterCountI(str) { 
str = str.toLowerCase();
var array = str.split(" ");
var max = 0; 
var result =-1;

for(var i in array){
   var res = array[i].toString().split("").sort().join("").toString();
   
   if(/(.)\1/g.test(res)){
       var l = res.match(/(.)\1/g).toString().length;
       console.log(l);
       if (l >max){
           max=l;
           result = array[i];
       }
   }
}
return result;
}
