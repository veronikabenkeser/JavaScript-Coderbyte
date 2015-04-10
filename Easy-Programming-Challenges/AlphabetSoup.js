function AlphabetSoup(str) { 
  var arr = [];
  var result;
  arr = str.split("");
  arr.sort();
  result = arr.join("");
  return result;
}
