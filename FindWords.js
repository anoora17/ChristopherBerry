const paragraph = " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let reg= /[,\."\:;\/\*\^#@\!\?]/g
const newPar = paragraph.replace(reg,"" );
const Array = newPar.trim().split(" ");
let obj = { };
let uniq = 0;

for(let i =0; i < Array.length;i++){

    let matchWord = Array[i];

    if(obj.hasOwnProperty(matchWord)){

        obj[matchWord]++;
    } else{
        uniq++;
        obj[matchWord]=0;
    }
}


let dup = Array.length - Object.keys(obj).length;
console.log(dup)

for ( var i = 0; i <= arrayWord.length; i ++) {
 var matched = arrayWord[i];
  if (arrayWord.hasOwnProperty(matched))
    { similarObjects.push(matched)
    }
    else {
      diffrentObjects.push(matched)
    }
  }
