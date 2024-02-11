const respondJSON = (request, response, status, object) => {
    response.writeHead(status, { 'Content-Type': 'application/json'});

    response.write(JSON.stringify(object));

    response.end();
};

const success = (request, response) => {
    const responseJSON = {
        message: 'This is a successful response',
    };

    respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response) => {
    const responseJSON = {
        message: 'Has the query parameter',
    };

    if(!params.valid || params.valid !== 'true'){
        responseJSON.message = 'Missing valid query parameter set to true';

        responseJSON.id = 'page/badRequest';

        return respondJSON(request, response, 400, responseJSON )
    }
    responseJSON.id = 'page/badRequest';

    respondJSON(request, response, 200, responseJSON);
};

const unauthorized = () => {
    const responseJSON = {
        message: 'Has the query parameter',
    };

    if(!params.loggedin || params. loggedin !== 'yes')
    {
        responseJSON.message = 'Missing valid query parameter set to true';

        responseJSON.id = 'page/unauthorized';

        return respondJSON(request, response, 400, responseJSON )
    }

    responseJSON.id = 'page/unauthorized';
    
    respondJSON(request, response, 200, responseJSON);
}