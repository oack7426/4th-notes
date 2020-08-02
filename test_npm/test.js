var http = require('request');

request.delete(
    'https://reqres.in/api/users/2',
    function (error, response, body) {
        console.log(response.statusCode)
    }
);