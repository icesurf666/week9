export default (express, puppeteer, Zombie) => {
    
    const app = express();
    const author = 'itmo307697'

    app
    .use(function (req, res, next) {
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
        next()
    })

    .get('/login/', (req, res) => {
        res.send(author)
    })
    .get('/test/', async r => {
        const { URL } = r.query;
        const page = new Zombie();
        await page.visit(URL);
        await page.pressButton('#bt');
        const got = await page.document.querySelector('#inp').value;
        r.res.send(got);
    })
    
    .all('*', (req, res) => {
        res.send(author)
    })

    return app;
}
