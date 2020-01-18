
// converting standard time to military time

const timeConversion = s => {
  let ampm = s.slice(s.length-2, s.length);
  s = s.slice(0,s.length-2).split(':');
  let hour = s[0], minute = s[1], second = s[2], res = '';

  if(ampm === 'PM') {  
    if(parseInt(hour) === 12) {
      res += `${hour}:${minute}:${second}`;  
    } else {    
      res  += `${12 + parseInt(hour)}:${minute}:${second}`;
    }
  } else {
    if(parseInt(hour) < 10) {
      res += `0${parseInt(hour)}:${minute}:${second}`;
    } else if(hour === '12') {
      res += `00:${minute}:${second}`;
    } else {
      res += `${hour}:${minute}:${second}`;
    }
  }
  return res;
}