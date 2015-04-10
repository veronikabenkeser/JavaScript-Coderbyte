function Palindrome(str) { 
  str=str.split(" ").join("");
	var st = "";

	for(var i = str.length-1; i>=0; i--){
    	if(str[i] != " "){
          st+=str[i];
        }
	}
	return str == st;       
}
