const _ = {
    clamp(number, lower, upper) {
      let lowerClampValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
      const isInRange = start < number && number < end;
      return isInRange;
    },
    words(string) {
      const words = string.split(' ');
      return words;
    },
    pad(current, target) {
      if (target > current.length) {
        let padding = Math.floor((target - current.length) / 2);
        let paddingEnd = target - current.length - padding;
        let paddedString = ' '.repeat(padding) + current + ' '.repeat(paddingEnd);
        return paddedString;
      } else {
        return current;
      }
    },
    has(val, key) {
      if (val.hasOwnProperty(key)) {
        return true;
      } else {
        return false;
      }
    },
    invert(obj) {
      const newObj = {};
      for(let key in obj){
      newObj[obj[key]] = key;
    }
    return newObj;
    },
    findKey(obj, predicate) {
      for (key in obj) {
        let value = obj[key];
        let predVal = predicate(value);
        if (predVal) {
          return key;
        }
      }
      return undefined;
    },
    drop(array, number) {
      if (!number) {
        number = 1;
      }
      let droppedArray = array.slice(number);
      return droppedArray;
    },
    dropWhile(array, predicate) {
      let dropNumber = array.findIndex(function (element, index) {
   return !(predicate(element, index, array));
   });
  let droppedArray = this.drop(array, dropNumber);
  return droppedArray;
  },
  chunk(array, size) {
    if (!size) {
      size = 1;
    };
    let arrayChunks = [];
          for (let i = 0; i < array.length; i+=size ){
          let arrayChunk = array.slice(i, i+size);
          arrayChunks.push(arrayChunk);  
        }
          return arrayChunks;
  }
}
  

// Do not write or modify code below this line.
module.exports = _;