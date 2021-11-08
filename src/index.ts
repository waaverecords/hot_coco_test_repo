import express from 'express';

const port = 3000;
const app = express();

app.get('*', (request, response) => {
    response.send({ message: 'Hello World!!!!!!!! test change'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));