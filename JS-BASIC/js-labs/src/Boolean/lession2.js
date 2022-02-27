// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8 --> 'Excellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4 --> 'Bad'
// v1
function classifyStudent(mark) {
  let result;
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';
  return result;
}
// v2
function classifyStudent(mark) {
  // Validate arguments
  // mark should be in range of [0, 10]
  if (mark < 0 || mark > 10) return '';
  let result = 'Bad';
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  return result;
}
// v3 use if...return
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';
  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';
  return 'Bad';
}
console.log(classifyStudent(12));
console.log(classifyStudent(10));
console.log(classifyStudent(7));
console.log(classifyStudent(5));
console.log(classifyStudent(2));
