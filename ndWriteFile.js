var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req,res) 
{
    var dataJSONobj = { "name" : "Job shift records",
                        "record" : []};
    var data_ = url.parse(req.url, true);
    console.log(data_);
    fs.readFile('./JSONdata/data.json', function(err, data) 
    {
        if(err)
            throw err;
    
        if (data_.search.search('timFrom') != -1)
        {
           if(data != '')
            {
                var dataReceived = JSON.parse(data);
                for(var i = 0; i < dataReceived.record.length; i++)
                    dataJSONobj.record.push(dataReceived.record[i]);
            }
                
            dataJSONobj.record.push(data_.query);    
            
            fs.writeFile('./JSONdata/data.json', JSON.stringify(dataJSONobj), function (err) {
                if(err) throw err;
                console.log('Saved Shift on ' + dataJSONobj.record[dataJSONobj.record.length-1].dt);
            })

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end();
        }
        else
        {
            console.log('here');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(JSON.parse(data)));
        }
    })

}).listen(8080);