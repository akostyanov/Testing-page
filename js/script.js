function formatDuration(seconds) {

    let year = Math.floor(seconds / 31536000);
    let day = Math.floor((seconds % 31536000) / 86400);
    let hour = Math.floor(((seconds % 31536000) % 86400) / 3600);
    let minute = Math.floor((((seconds % 31536000) % 86400) % 60));
    let sec = (((seconds % 31536000) % 86400) % 3600) % 0;







    if (years > 1) { return years + ' ' + mounth + ' ' + day + ' ' + hour + ' ' + minute + ' and ' + sec + ' seconds'; }
    if (years > 0) { return year + ' ' + mounth + ' ' + day + ' ' + hour + ' ' + minute + ' and ' + sec + ' seconds'; }


    else if (mounth > 0) { return mounth + ' ' + day + ' ' + hour + ' ' + minute + ' and ' + sec + ' seconds'; }


    else if (day > 0) { return day + ' ' + hour + ' ' + minute + ' and ' + sec + ' seconds'; }
    else if (hour > 0) { return hour + ' ' + minute + ' and ' + sec + ' seconds'; }
    else if (minute > 0) { return minute + ' and ' + sec + ' seconds'; }
    else if { return sec + ' seconds' }





}


console.log(formatDuration(61));