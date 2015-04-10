function PowersofTwo(num) { 
	while(num>2){
      if(num%2 !=0 )break;
      num=num/2;
    }
  if (num ==2) return true;
  return false;
}
   
