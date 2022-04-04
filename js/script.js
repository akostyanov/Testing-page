function formatDuration(seconds) {
    if (seconds == 0) {return 'now'};
    let year = Math.floor(seconds / 31536000);
    let day = Math.floor((seconds % 31536000) / 86400);
    let hour = Math.floor(((seconds % 31536000) % 86400) / 3600);        
    let minute = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    let sec = Math.floor(((((seconds % 31536000) % 86400) % 3600) % 60) / 1);
    
    let Arr = [];  

    if (year > 1) { year = year + ' years';  Arr.push(year);  }
    else if (year == 1) {year = year + ' year';  Arr.push(year);  }
    else { year = undefined }

    if (day > 1) { day = day + ' days'; Arr.push(day); }
    else if (day == 1) {day = day + ' day'; Arr.push(day); }
    else { day = undefined } 

    if (hour > 1) { hour = hour + ' hours'; Arr.push(hour); }
    else if (hour == 1) {hour = hour + ' hour'; Arr.push(hour); }
    else { hour = undefined } 
    
    if (minute > 1) { minute = minute + ' minutes'; Arr.push(minute); }
    else if (minute == 1) {minute = minute + ' minute'; Arr.push(minute); }
    else { minute = null } 


    if (sec > 1) { sec = sec + ' seconds';  Arr.push(sec); }
    else if (sec == 1) {sec = sec + ' second'; Arr.push(sec); }
    else { sec =  null } 

    
    if (year > 0) { Arr.push(year); }
    if (day > 0) { Arr.push(day); }
    if (hour > 0) { Arr.push(hour); }
    if (minute > 0) { Arr.push(minute); }
    if (sec > 0) { Arr.push(sec); }
  
    
    var comma = ', ', and = ' and ';
    if (Arr.length == 1) {return Arr [0]}
    else return Arr.slice (0, -1).join (comma) + and + Arr.slice (-1);
}


console.log(formatDuration(3601))


