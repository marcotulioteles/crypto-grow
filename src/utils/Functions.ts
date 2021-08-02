export function getFormattedDate(date: Date) {
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '-' + day + '-' + year;
} 

export function convertNumberToDate(date: number) {
  const newDate = new Date(date)
  return newDate
}