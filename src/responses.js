const respondJSON = (request, response, status, object) => {
    response.writeHead(status, { 'Content-Type': 'application/json'});

    response.write(JSON.stringify(object));

    response.end();
};

const success = (request, response) => {
    const responseJSON = {
        message: 'This is a successful response',
    };

    responseJSON.id = 'page/success';

    respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, params) => {
    const responseJSON = {
        message: 'Has the query parameter',
    };

    if(!params.valid || params.valid !== 'true'){
        responseJSON.message = 'Missing valid query parameter set to true';

        responseJSON.id = 'page/badRequest';

        return respondJSON(request, response, 400, responseJSON )
    }
    responseJSON.id = 'page/badRequest?valid=true';

    respondJSON(request, response, 200, responseJSON);
};

const unauthorized = (request, response, params) => {
    const responseJSON = {
        message: 'Has the query parameter',
    };

    if(!params.loggedin || params. loggedin !== 'yes')
    {
        responseJSON.message = 'Missing loggedIn query parameter set to yes';

        responseJSON.id = 'page/unauthorized';

        return respondJSON(request, response, 401, responseJSON )
    }

    
    responseJSON.message = 'You have successfully viewed the content';

    responseJSON.id = 'page/unauthorized?loggedIn=yes';
    
     respondJSON(request, response, 200, responseJSON);
    
}

const forbidden = (request, response) => {
    const responseJSON = {
        message: 'You cannot access to this page',
    }

    responseJSON.id = 'page/forbidden';

    respondJSON(request, response, 403, responseJSON);
}

const internal = (request, response) => {
    const responseJSON = {
        message: 'Internal Server Error. Something went wrong',
    }

    responseJSON.id = 'page/internal';

    respondJSON(request, response, 500, responseJSON);
}

const implemented = (request, response) => {
    const responseJSON = {
        message: 'A get request for this page has not been implemented yet. Check again later for updated content',
    }

    responseJSON.id = 'page/notImplemented';

    respondJSON(request, response, 501, responseJSON);
}

const notFound = (request, response) => {
    const responseJSON = {
        message: 'The page you looking for was not found',
    }

    responseJSON.id = 'page/notFound';

    respondJSON(request, response, 404, responseJSON);
}

module.exports = {
    success,
    badRequest, 
    unauthorized,
    forbidden,
    internal,
    implemented,
    notFound
};