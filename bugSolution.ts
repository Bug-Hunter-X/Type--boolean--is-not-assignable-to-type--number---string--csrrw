function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function printBoolean(bool: boolean): void {
  console.log(bool);
}

function processValue(value: number | string | boolean): void {
  if (typeof value === 'number') {
    printNumber(value);
  } else if (typeof value === 'string') {
    printString(value);
  } else if (typeof value === 'boolean') {
    printBoolean(value);
  }
}

processValue(10);
processValue('hello');
processValue(true); 