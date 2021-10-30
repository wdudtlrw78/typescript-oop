// Java: Exception
// JavaScript: Error
// const array = new Array(100000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }

  return 'file contents';
}

function closeFile(file: string) {
  //
}

const fileName = 'not exist!';

try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`catched!!`);
} finally {
  closeFile(fileName);
  console.log(`finally!!`);
}

console.log('!!!');

closeFile(fileName);
