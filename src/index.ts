import express from 'express';

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('*', (request, response) => {
    response.send({ message: 'Hello World!!!!!!!! test change'});
});

app.post('*', (request, response) => {
    console.log(request.body);
    response.status(200).send();
})

app.listen(port, () => console.log(`Listening on port ${port}`));