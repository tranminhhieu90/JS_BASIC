// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message
function getErrorMessage(errorCode) {
  let message = '';
  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username or password';
      break;
    }
    case 'E02': {
      message = 'Too many attempts';
      break;
    }
    case 'E03': {
      message = 'Missing data';
      break;
    }
    default: {
      message = 'Something went wrong';
    }
  }
  return message;
}
// v2
function getErrorMessage(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };
  return errorMap[errorCode] || 'Something went wrong';
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
// console.log(getErrorMessage('E04'));

function getTicketPrice(age) {
  // your code here
  if (age <= 0 || age > 125) return -1;
  if (age < 6 || age >= 70) return 0;
  if (age >= 6 && age <= 12) return 20000;
  if (age > 12 && age < 70) return 50000;
}

getTicketPrice(5);
// getTicketPrice(71);
// getTicketPrice(10);
// getTicketPrice(15);
// getTicketPrice(-1);

function sayHello(languageCode) {
  // your code here ...
  const languageMap = {
    ev: 'Hello',
    vi: 'Xin Chào',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    js: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };
  return languageMap[languageCode] || 'Hello';
}
languageCode(fr);
