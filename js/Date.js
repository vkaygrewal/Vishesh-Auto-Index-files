<!-- Vishesh Auto Index 4.0
//-->
var 
month = new Array();
month[0]="Jan"; 
month[1]="Feb";
month[2]="Mar";
month[3]="Apr";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="Aug";
month[8]="Sep";
month[9]="Oct";
month[10]="Nov";
month[11]="Dec";

var 
day = new Array();
day[0]="Sunday";
day[1]="Monday";
day[2]="Tuesday";
day[3]="Wednesday";
day[4]="Thursday";
day[5]="Friday";
day[6]="Saturday";

today = new Date();
date = today.getDate();
day = (day[today.getDay()]);
month = (month[today.getMonth()]);
year = (today.getFullYear());

 suffix = (date==1 || date==21 || date==31) ? "st" : "th" &&
 (date==2 || date==22) ? "nd" : "th" && (date==3 || date==23) ? "rd" : "th"

function print_date()
{
  document.write(day + "," + "&nbsp;" + date  + "<sup>" + suffix + "</sup>" + "&nbsp;" + 
  month + "," + "&nbsp;" + year);
}

document.write('<script>     print_date();   </script>  ')
