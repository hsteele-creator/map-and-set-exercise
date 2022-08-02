////////////////////////////////////
{1,1,2,2,3,4}

//////////////////////
"ref"

//////////////////////
{[1, 2, 3], true}
{[1, 2, 3], false}

// bc arrays reference types

const hasDuplicate = (arr) => {
    const arraySet = new Set(arr);  
    return arraySet.size !== arr.length;
}
hasDuplicate([1,3,2,1]);

/////////////////////////////////

function isVowel(letter){
    return "aeiou".includes(letter);
  }
  
  function vowelCount(string){
    const vowelMap = new Map();
    for(let letter of string){
      let lowerCaseLetter = letter.toLowerCase()
      if(isVowel(lowerCaseLetter)){
        if(vowelMap.has(lowerCaseLetter)){
          vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);
        } else {
          vowelMap.set(lowerCaseLetter, 1);
        }
      }
    }
    return vowelMap;
  }
