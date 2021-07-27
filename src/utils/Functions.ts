export function getFormattedDate(date: Date) {
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  const dayOfTheWeek = date.getDay();

  let day = date.getDate().toString();

  if (dayOfTheWeek == 0) {
    const dayParse = parseInt(day) - 2
    day = day.length > 1 ? dayParse.toString() : '0' + dayParse.toString();
  } else if (dayOfTheWeek == 6) {
    const dayParse = parseInt(day) - 1
    day = day.length > 1 ? dayParse.toString() : '0' + dayParse.toString();
  } else {
    day = day.length > 1 ? day : '0' + day;
  }

  return month + '-' + day + '-' + year;
} 