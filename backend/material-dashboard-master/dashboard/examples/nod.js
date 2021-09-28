const http = require('http');
const fs = require('fs');

const url = 'www.example.com/image.png'; // link to file you want to download
const path = 'app/assets/my_image_name.xlsx' // where to save a file

const request = http.get(url, function(response) {
    if (response.statusCode === 200) {
        var file = fs.createWriteStream(path);
        response.pipe(file);
    }
    request.setTimeout(60000, function() { // if after 60s file not downlaoded, we abort a request 
        request.abort();
    });
});