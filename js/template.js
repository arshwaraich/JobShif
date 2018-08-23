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