function quick(arr) {
  const length = arr.length;
  for(let outer = 0; outer < length; outer++) {
    for(let inner = 0; inner < length - outer; inner++) {
      const current = arr[inner];
      const next = arr[inner + 1];
      if(current >= next) {
        const temp = next;
        arr[inner + 1] = current;
        arr[inner] = temp;
      } 
    }
  }

const arrayData1 = [5, -1, 100, 32, -5, 30, 2];

const arrayData2 = [5, -1, 100, 32, -5, 30, 2].reverse();

quick(arrayData1);
quick(arrayData2);

console.log(arrayData1);
console.log(arrayData2);
