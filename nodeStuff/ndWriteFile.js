var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req,res) 
{
    var data_ = url.parse(req.url, true);
    var dataJSON = JSON.stringify(data_);
    var dataJSONobj = [];
    console.log(dataJSON);

    fs.readFile('data.json', function(err, data) 
    {
        if(err)
            throw err;
    
        if(data != '')
        {
            dataJSONobj = JSON.parse(data);
        }
            
        dataJSONobj.unshift(dataJSON);    
        console.log(dataJSONobj);

        fs.writeFile('data.json', JSON.stringify(dataJSONobj), function (err) {
            if(err) throw err;
            console.log('Saved!');
        })
    })

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
}).listen(8080);