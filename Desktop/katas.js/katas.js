

var name = "Tshepo"

function firstFunc(hello, name) {
    console.log(hello + " " + name);
}

firstFunc("hello", name);
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

var dimension = 2;
var edge = '#';

for (var i = 1; i <= dimension; i++) {
    if (i === 1 || i === dimension) {
        printline = Array(dimension + 1).join(edge);
    } else {
    }
    console.log(printline);
}

var dimension = 4;
var edge = '#';

for (var i = 1; i <= dimension; i++) {
    if (i === 1 || i === dimension) {
        printline = Array(dimension + 1).join(edge);
    } else {
    }
    console.log(printline);
}


for (var i = 2; i>=1;  i--)
{ var str= "";
for (var j = i; j<=2; j++) {
    str += "#"
}
console.log(str);
}

for (var i = 4; i>=1;  i--)
{ var str= "";
for (var j = i; j<=5; j++) {
    str += "#"
}
console.log(str);
}

var n = 2;
generateNumberTriangle(n);

function generateNumberTriangle(n) {
    var width = (2 * n) -1; 
    var midpoint = Math.floor(width / 2); 
    let level = ''; 

    for(var i = 0; i < n; i++) { 
        level = '';
        for(var j = 0; j < width; j++) {
            if(j < midpoint-i || j > midpoint+i) {
                level += ' ';
            } else {
                level += '#';
            }
        }
        console.log(level);
    }
}

               
var n = 4;
generateNumberTriangle(n);

function generateNumberTriangle(n) {
    var width = (2 * n) -1; 
    var midpoint = Math.floor(width / 2); 
    let level = ''; 

    for(var i = 0; i < n; i++) { 
        level = '';
        for(var j = 0; j < width; j++) {
            if(j < midpoint-i || j > midpoint+i) {
                level += ' ';
            } else {
                level += '#';
            }
        }
        console.log(level);
    }
}

// FRAME SOME TEXT 

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

function longestWords(str) {
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

console.log(longestWords("once upon a time"));
                
// mixedArray
        const array1 = [1, 2, 3];
                
        const array2 = [11, 22, 33];

                const mixedArray = []

                mixedArray.push(array2[0],array1[0],array2[1],array1[1],array2[2],array1[2])
                
                console.log(mixedArray);

               
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
            

