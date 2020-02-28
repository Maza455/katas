
var name = "Tshepo!"

function firstFunc(hello, name) {
    console.log(hello + " " + name);
}

firstFunc("Hello", name);
console.log(" ")

//* EVEN OR ODD 

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "even";
    } else {
        return "Odd";
    }

}
console.log(evenOrOdd(4));

console.log(" ")

//Shapes

// var dimension = 2;
var edge = '#';
function square(int){
    for (var i = 1; i <= int; i++) {
    if (i === 1 || i === int) {
        printline = Array(int + 1).join(edge);
    }
    console.log(printline);
}
}
square(2)

console.log(" ")

square(4)

console.log(" ")

function triangle(int){
    for(var i = int; i>=1; i--){
  var str = "";
  for(var j = i; j<=int; j++){
    str += "#"
  }
  console.log(str);
}
}
triangle(2)

console.log(" ")

triangle(4)
console.log(" ")


function pyramid(rows){
    for(let i = 1; i <= rows; i++){
      let str = '';
      for(let k = 1; k <= (rows - i); k++){
        str += ' ';
      }
      for(let j = 0; j != (2 * i - 1); j++){
        str += '#';
      }
      for(let k =  i + 1; k <= rows; k++){
        str += ' ';
      }
      console.log(str);
    }
 }
 pyramid(2);

 console.log(" ")

 pyramid(4)


 console.log(" ")

 
// // FRAME SOME TEXT 

function longestWord(str) {
    let words = str.split(" ");
    let size = 0;
    let max = [""];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= size) {
            size = words[i].length;
            if (max[max.length - 1].length < words[i].length) {
                max = [];
                max.push(words[i]);
            } else {
                max = [...max, words[i]];
            }
        }
    }

    return [...max];
}

console.log(longestWord("the quick brown fox ate my chickens"));

console.log(" ")

console.log(longestWord("once upon a time"));
 
console.log(" ")
                
// // mixedArray
        const array1 = [1, 2, 3];
                
        const array2 = [11, 22, 33];

                const mixedArray = []

                mixedArray.push(array2[0],array1[0],array2[1],array1[1],array2[2],array1[2])
                
                console.log(mixedArray);

               
 console.log(" ")
               
// frame
                function frame(arr) {
                    function fill (str, length, char) {
                        return (str.length < length) ? fill(str + char, length, char) : str;
                    }
            
                    let size = arr.map((str) => {
                            return str.length;
                })
                .reduce((a, b) => {
                        return Math.max(a, b);
                });
            
                    let line = fill('', size + 4, '*');
            
                    arr = arr.map((element) => {
                            return '* '+ fill(element, size, ' ') + ' *';
                })
                    arr.unshift(line);
                    arr.push(line);
            
                    return arr.join('\n');
            }
            
                console.log(frame(["Write", "good", "code", "every", "day"]));


