let date = new Date(); // current date and time
// date = new Date('March 24 1980');

let timeStamp = date.setDate('12');
console.log(timeStamp);
date.setMonth('11'); // From 0 -11
date.setFullYear('1975'); // From YYYY
date.setMinutes('12'); // 0-59
date.setHours('12'); // 0-23

console.log(date.getDate());
console.log(date.getMonth()); // From 0 -11
console.log(date.getFullYear()); // From YYYY
console.log(date.getMinutes()); // 0-59
console.log(date.getHours()); // 0-23

console.log(date);