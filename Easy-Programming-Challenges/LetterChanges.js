var alp = "abcdefghijklmnopqrstuvwxyz";
var arr = alp.split("");

function LetterChanges(str) { 
    var newA= str.toLowerCase();
     newA = str.split("");
    var result = [];
    
    newA.forEach( function(letter){
        if(arr.indexOf(letter) === -1){
            result.push(letter);
        } else if (arr.indexOf(letter) === (arr.length-1)){
            result.push(arr[0]);
        } else {
            result.push(arr[arr.indexOf(letter)+1]);
        }
        
        return result;
    });
    
    result = vowelsSub(result);
    
    var newStr = result.join("");
    return newStr;
}

function vowelsSub(array){
    var arr2 = [];
    for(i=0; i<array.length; i++){
        if(isaVowel(array[i])){
            arr2.push(array[i].toUpperCase());
        }else{
            arr2.push(array[i]);
        }
    }
    return arr2;
}

function isaVowel(letter){
    return (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter ==  "u");
}
