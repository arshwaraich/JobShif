// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function()
{
	makeRequest('moneh');
}




function makeRequest(requestStr) {
	
    var url = "http://localhost:8080/?tbl=" + requestStr;
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
    
    // send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
            var jsData = JSON.parse(httpRequest.responseText);
            
            var monehCnt = 0;
            for(var i = 0; i < jsData.record.length; i++)
            {
                var beg = strToObj(jsData.record[i].timFrom);
                var end = strToObj(jsData.record[i].timTo);
                var minRt = (parseInt(jsData.record[i].Moneh));
                var diff = (end.totMin() - beg.totMin());
                monehCnt += ((diff >= 0 ? diff/60 : (1440 + diff)/60) * minRt);
                console.log(end.totMin() + ' , ' + end.hour);
            }
            document.getElementById("money").innerHTML = '$ ' + monehCnt;

		} else {
			console.log('There was a problem with the request.');
		}
    }
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