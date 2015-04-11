function DashInsert(str) { 
  var newA=[];

  for(var i =0; i<str.length; i++){
    newA.push(str[i]);
    if(str[i] %2 !==0 && str[i+1]%2 !==0 && str[i+1] !== undefined){
      newA.push("-");
    }
  }
   return newA.join("").toString();      
}
