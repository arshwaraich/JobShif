
function usingObj(objRecieved)
{
    var monehCnt = 0;
            for(var i = 0; i < objRecieved.record.length; i++)
            {
                var beg = strToObj(objRecieved.record[i].timFrom);
                var end = strToObj(objRecieved.record[i].timTo);
                var minRt = (parseInt(objRecieved.record[i].Moneh));
                var diff = (end.totMin() - beg.totMin());
                monehCnt += ((diff >= 0 ? diff/60 : (1440 + diff)/60) * minRt);
            }
            document.getElementById("money").innerHTML = '$ ' + monehCnt;
}

function strToObj(tmStr)
{
    var time = { "hour" : 0,
                 "minute" : 0,
                 "totMin" : function()
                            {
                                return (this.hour*60) + this.minute;
                            }};
    
    tmStrRegex = /^(\d\d):(\d\d)$/;
    var timeStrArr = tmStrRegex.exec(tmStr);
    time.hour = parseInt(timeStrArr[1]);
    time.minute = parseInt(timeStrArr[2]);

    return time;
}