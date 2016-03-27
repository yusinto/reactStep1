import Express from 'express';

const PORT = 3000;
const app = Express();

app.use((req, res) => {
    res.end('hello world!');
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});