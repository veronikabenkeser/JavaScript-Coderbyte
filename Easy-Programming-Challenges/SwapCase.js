function SwapCase(str) { 
	return str.replace(/[a-zA-Z]/g, function (c){
      if(c.match(/[a-z]/)){
        return c.toUpperCase();
      } 
        return c.toLowerCase();
    });
}
