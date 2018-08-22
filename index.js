var timeBeg = 0;
var timeEnd = 0;

function setTimHrs(val)
{
    var numDef = document.getElementById("timHrs");
    var i = parseInt(val);

    if(i > 99 && i <= 999)
        numDef.style.fontSize = "30vh";
    else if(i > 999 && i <= 9999)
        numDef.style.fontSize = "25vh";
    else if(i > 9999)
        numDef.style.fontSize = "20vh";

    numDef.innerHTML = i;
}

function timefrom()
{
    var beg = document.getElementById("timFrom");
    beg.value = timeParse(beg.value);
    if(timeEnd != 0)
        setTimHrs( timeEnd > timeBeg ? (timeEnd/100 - timeBeg/100) : 24 - (timeBeg/100 - timeEnd/100));

    //console.log(beg.value);
    timeBeg = parseInt(beg.value);
}

function timeto()
{
    var end = document.getElementById("timTo");
    end.value = timeParse(end.value);
    
    if(timeBeg != 0)
        setTimHrs( timeEnd > timeBeg ? (timeEnd/100 - timeBeg/100) : 24 - (timeBeg/100 - timeEnd/100));
    
    timeEnd = parseInt(end.value);    
}

function timeParse(txt)
{
    var ret = 0;
    var pm = false;
    if(txt.length != 0)
    {
        pm = (txt.search(/pm/i) != -1);
        ret = milTime(txt.replace(/(^\d{1,2})\D?(\d{0,2})/, '$1:$2'), pm);
    }

    return ret;
}

function milTime(tm, meridian)
{
    var hourRegEx = /(^\d{1,2}):/;
    var hours = parseInt(hourRegEx.exec(tm));
    
    var minuteRegEx = /:(\d{1,})/; 
    var minutes = '00';
    if (tm.search(minuteRegEx) != -1)
        minutes = minuteRegEx.exec(tm);
    
    if(meridian && hours < 12) hours = String(12 + hours);
    if (hours.length == 1)
        hours = '0' + hours;
    else if(hours.length == 0)
        hours = '00';
    if (minutes.length == 1)
        minutes = '0' + minutes;
    else if(minutes.length == 0)
        minutes = '00';

    return String(hours) + String(minutes);
}