// Dated

let myDate = new Date();
// console.log(myDate);//   => 2024-07-23T11:49:11.129Z
// console.log(myDate.toString()); // => Tue Jul 23 2024 17:20:03 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); // => 2024-07-23T11:51:18.811Z
// console.log(myDate.getFullYear()); // =>  get the year 2024
// console.log(myDate.getDate()); // => get the date ,23
// console.log(myDate.toUTCString());// Tue, 23 Jul 2024 11:55:47 GMT
// console.log(myDate.toLocaleString()); // => 7/23/2024, 5:26:36 PM
// console.log(myDate.toDateString()); // => Tue Jul 23 2024

let myCreatedDate = new Date(2024, 6, 23); //month starts with 0 in js
// console.log(myCreatedDate.toDateString()); // Tue Jul 23 2024 


let myDate2 = new Date(2024, 2, 11, 5, 3, 45);
// console.log(myDate2.toLocaleString()); // => 3/11/2024, 5:03:45 AM


let created = new Date("2024-01-23");
// console.log(created.toLocaleString()); //  => Tue Jan 23 2024 05:30:00 GMT+0530 (India Standard Time)


let created2 = new Date("02-13-2024");
// console.log(created2.toLocaleString()); // => 2/13/2024, 12:00:00 AM


let newDate = new Date();
// console.log(newDate.getDate()); // give date
// console.log(newDate.getHours()); // get the hour in date using local time
// console.log(newDate.getDay()); // get the day

console.log(newDate.toLocaleString('default', {
    weekday: "long",                                        // => tuesday
    timeZoneName: "long"                               // => Indian Standard Time
}))

