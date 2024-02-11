const http = require('http');
const url = require('url');
const query = require('querystring');
//pull in our response handler file
const responseHandler = require('./responses.js');
const htmlHandler = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct =
{
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCss,
    '/success': responseHandler.success,
    '/badRequest': responseHandler.badRequest,
    '/unauthorized': responseHandler.unauthorized,
    '/internal': responseHandler.internal,
    '/notImplemented': responseHandler.implemented,
    '/forbidden': responseHandler.forbidden,
    notFound: responseHandler.notFound
};

const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);

    const params = query.parse(parsedUrl.query);

    if(urlStruct[parsedUrl.pathname])
    {
        urlStruct[parsedUrl.pathname](request, response, params);
        
    } else {
        urlStruct.notFound(request, response, params);
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1: ${port}`);
});
