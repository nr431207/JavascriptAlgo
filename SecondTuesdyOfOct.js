// working with Date api's

// getting the second Tuesday of October in any given year
const getSecondTuesday = year => {
  if(year.toString().length !== 4) {
    return 'year is invalid';
  }
  let dayNumbers = new Date('2020-09').getDate()
  let newDate = new Date(year, 09);
  let tuesdays = [];
  for(let i = 1; i <= dayNumbers ; i += 1) {
    if(newDate.getDay(newDate.setDate(i)) === 2) {
      tuesdays.push(new Date(year, 09, i))
    }
  }
  return tuesdays[1];
}

console.log(getSecondTuesday('2020'))