window.onload = function()
{
    var i = 0;
    var numDef = document.getElementById("timHrs");
    this.setInterval(function() {
                i++;
                if(i > 99 && i <= 999)
                {
                    numDef.style.fontSize = "30vh";
                }
                else if(i > 999 && i <= 9999)
                {
                    numDef.style.fontSize = "25vh";
                }
                else if(i > 9999)
                {
                    numDef.style.fontSize = "20vh";
                }
                numDef.innerHTML = i;
                }, 1000);
}