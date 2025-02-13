/*let a = ['Html', 'Css', 'Js'];
console.log(a) 
//Modifying the elements in the array
a[2] = 'Bootstrap'
console.log(a) 
//Adding a new elements to the array
a.push('Python') // push() method is used to add a new elements to the end of the array
a.unshift('Web Development') // unshift() method is used to add a new elements to the beginning of the array
console.log(a) // 
//Removing an elements from the array
a.pop() // pop() method is used to remove the last element from the array
a.shift() // shift() method is used to remove the first element from the array
console.log(a)
a.splice(1, 2)
console.log(a) // splice() method is used to remove the elements from the array
a.push('Perpe')
a.unshift('Web')
console.log(a) //
a.push('Joy')
a.unshift('Unco')
console.log(a) //
a.splice(0, 3)
console.log(a) //
a.splice(0, 1)
console.log(a)
 
let b = [1, 2, 3, 4, 5];
//array length
let len = b.length;
console.log("The length is: ", len);
//increase the array length
b.length = 10;
console.log("after increasing length:", b);
//decrease the array length
b.length = 2;
console.log("after decreasing length:", b)
//iterating over the array using for(){}
for (let i = 0 ; i < b.length; i++) {
     console.log("Hey there", b[i])
}
//iterating using the forEach(){} loop
b.forEach(function myfunc(x) {
    console.log(x)
});

//Array concantenation
let c = ["HTML", "CSS", "JS", "React"];
let d = ["Node.js", "Expess.js"];

let e = c.concat(d);
console.log("Concatenated Array: ", e);

//converting Array to a Sring
console.log(e.toString())
*/
//finding duplicates in array
A = [4, 5, 6, 4, 7, 8, 5, 9];

function findDuplicates(A){
    let findDuplicatesMap = new Map();
    let duplicates = [];
      for (let num of A){
        findDuplicatesMap.set(num, (findDuplicatesMap.get(num) || 0) + 1);
      }

      for (let [num, count] of findDuplicatesMap){
        if (count > 1){
            duplicates.push(num)
      }
      }
      return duplicates;
}
console.log(findDuplicates(A))

//r alternatively using filter() to get all
function getDuplicates(A){
    let countMap = new Map();
    A.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));
    return [...new Set(A.filter(num => countMap.get(num) > 1))];
}
console.log(getDuplicates([1,2,3,4,5,1,2,3,6,7]))

//Word Frequency Counter
words = ["apple", "banana", "apple", "orange", "banana", "banana"];

function wordFrequency(words){
    let wordMap = new Map();


    for (let word of words){
        wordMap.set(word, (wordMap.get(word) || 0 ) + 1);
    }

    return wordMap;
  
}
console.log(wordFrequency(words))

//Most Frequent Word
function mostFrequentWord(words){
    let wordMap = new Map();
    let maxCount = 0;
    let mostFrequentWord = "";

    for(let word of words){
        wordMap.set(word, (wordMap.get(word) || 0) + 1 );

        if (wordMap.get(word)> maxCount){
            maxCount = wordMap.get(word);
            mostFrequentWord = word;
    }
    
}
return mostFrequentWord;
}
console.log(mostFrequentWord(words))
//Alternatively returning all the most frequent words

function mostFrequentWords(words) {
    let wordMap = new Map();
    let maxCount = 0;
    
    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
        maxCount = Math.max(maxCount, wordMap.get(word));
    }

    // Get all words with the highest frequency
    return [...wordMap.keys()].filter(word => wordMap.get(word) === maxCount);
}

console.log(mostFrequentWords(["apple", "banana", "apple", "orange", "banana", "banana", "orange", "orange"]));

let math = "11" - 1;
console.log(math) 