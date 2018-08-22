var timeBeg = 0;
var timeEnd = 0;

window.onload = function()
{
    var bd = this.document.getElementsByTagName("body")[0];
    
    if(this.screen.width < 1250)
    {
        bd.style.margin = "0vw";
        if(this.screen.width < 1000)
            bd.style.minWidth = "1000px";
    }
}

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
    timeBeg = timeParse(beg.value);
    beg.value = (timeBeg.hour < 10 ? '0' : '') + timeBeg.hour + ':' + (timeBeg.minute < 10 ? '0' : '') + timeBeg.minute;

    if(timeEnd != 0)
        setTimHrs(timeEnd.hour > timeBeg.hour ? (timeEnd.hour - timeBeg.hour) : 24 - (timeBeg.hour - timeEnd.hour));

}

function timeto()
{
    var end = document.getElementById("timTo");
    timeEnd = timeParse(end.value);
    end.value = (timeEnd.hour < 10 ? '0' : '') + timeEnd.hour + ':' + (timeEnd.minute < 10 ? '0' : '') +timeEnd.minute;

    if(timeBeg != 0)
        setTimHrs(timeEnd.hour > timeBeg.hour ? (timeEnd.hour - timeBeg.hour) : 24 - (timeBeg.hour - timeEnd.hour));
}

function timeParse(txt)
{
    var ret = 0;
    var pm = false;
    if(txt.length != 0)
    {
        retRegEx = /(^\d{1,2})\D?(\d{0,2})/;
        pm = (txt.search(/pm/i) != -1);
        ret = milTime(retRegEx.exec(txt), pm);
    }

    return ret;
}

function milTime(tm, meridian)
{
    var time = {"hour": 0, "minute": 0};
    if (tm[1] != '')
        time.hour = parseInt(tm[1]);
    
    if (tm[2] != '')
        minutes = parseInt(tm[2]);
    
    if(meridian && time.hour < 12) time.hour += 12;
    
    return time;
}