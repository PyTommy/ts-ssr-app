import * as express from 'express';
import render from './helpers/render';

const app = express();

app.use(express.static('dist/public'));

app.get('/', (_: express.Request, res: express.Response) => {
    res.send(render());
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});