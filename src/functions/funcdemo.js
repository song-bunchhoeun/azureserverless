const { app } = require('@azure/functions');

app.http('funcdemo', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'I am almost succeed with Azure Functions! by applying CI/CD with gitHub Actions';

        return { body: `Hello, ${name}!` };
    }
});
