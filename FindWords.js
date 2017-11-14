const paragraph = " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// place all the charectors in array
let reg= /[,\."\:;\/\*\^#@\!\?]/g
// remover all diffrent charectors
const newPar = paragraph.replace(reg,"" );
// place the words in array
const Array = newPar.trim().split(" ");
// empty object to hold the dublicates

let obj = { };
// counter for uniqe words
let uniq = 0;
// loop through the paraghraph
for(let i =0; i < Array.length;i++){

    let matchWord = Array[i];
// check if the word in Array
    if(obj.hasOwnProperty(matchWord)){
  // when its true add the object
        obj[matchWord]++;
    } else{
      // increase the uniq counter becoause the condition faild
        uniq++;
        obj[matchWord]=0;
    }
}

// number of duplicates 
let dup = Array.length - Object.keys(obj).length;
console.log(dup)
