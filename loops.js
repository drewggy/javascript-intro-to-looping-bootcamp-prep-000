
//   FUNCTIONS

function forLoop(anArray){
  for(var i=0; i=>25; i++){
<<<<<<< HEAD
    if (i == 0){
=======
    if (i = 0){
>>>>>>> 7f2b41c0fa5cdef7c3d8571e8b8d1665e78f5f36
      anArray.push("I am 1 strange loop.");
    } else {
      anArray.push(`I am ${anArray[i]} strange loop.`);
    }
  }
<<<<<<< HEAD
  return;
=======
>>>>>>> 7f2b41c0fa5cdef7c3d8571e8b8d1665e78f5f36
}

function whileLoop (n){
  while (n > 0){
    console.log(n);
    n--;
  }
  console.log(`Done`)
}

function doWhileLoop(anArray) {

  do {
    console.log(`remove loop before pop: ${JSON.stringify(anArray)}`);
    anArray.pop();
    console.log(`remove loop after pop: ${JSON.stringify(anArray)}`);
  } while (anArray.length > 0 && !maybeTrue())
  return;
}

function maybeTrue() {
  return Math.random() >= 0.5
}


// PROCESS



<<<<<<< HEAD
//forloop([]);
=======
forloop([]);
>>>>>>> 7f2b41c0fa5cdef7c3d8571e8b8d1665e78f5f36
whileLoop(6);

var numberArray = [];
for (var n=0; n<100; n++){
  numberArray.push(n+1);
  console.log(`Add loop: ${JSON.stringify(numberArray)}`);
}
doWhileLoop(numberArray);
