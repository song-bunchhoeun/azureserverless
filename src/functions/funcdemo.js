const { app } = require('@azure/functions');

app.http('funcdemo', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'I am almost success with Azure Functions! By applying CI/CD with gitHub Actions';

        return { body: `Hello, ${name}!` };
    }
});

app.http('funcdemo1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'I am almost success with Azure Functions! By applying CI/CD with gitHub Actions';

        return { body: `Hello, ${name}!` };
    }
});
