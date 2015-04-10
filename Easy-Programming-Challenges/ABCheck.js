function ABCheck(str) {   
     if(str.match(/a.{3}b/) == null){
       return false;
     }
  	return true;       
}
