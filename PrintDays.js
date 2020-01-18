
// print number of days in each given month;
const month = '2019-03';
const printDays = month => {
  console.log('injaaa', new Date('2019-12').getDate())
  let numberOfDays = new Date (month).getDate();
  for(let i = 1; i <= numberOfDays; i ++) {
    console.log(new Date(month + `-${i}`))
  }
}
printDays(month)
