/*

Any  less than 38 is a failing grade.

If the difference between the grade and the next multiple of  5 is less than 3, round  up grade to the next multiple of 5.
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
*/

function gradingStudents(grades) {
  grades.map((grade, i) => {
    if(grade > 37) {
      let diff = 5 - (grade % 5);
      if(diff < 3) {
        grade += diff;
        grades[i] = grade;
      }
    }
  });
  return grades;
}
