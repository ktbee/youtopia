const { Router } = require('express');
const fetch = require('isomorphic-fetch');

const router = Router();

router.get('/search/:term', async function(req, res) {
    const { term } = req.params;
    const ytSearchURL =
        'https://www.googleapis.com/youtube/v3/search?' +
        'part=id&' +
        'type=video&' +
        'maxResults=10&' +
        `q=${term}&` +
        `key=${process.env.YT_API_KEY}`;
    const result = await (await fetch(ytSearchURL)).json();

    //const vidIDs = result.items.map(({ id }) => id.videoId);
    const vidIDs = ['BcGQFDTA28o', 'g_dF7SAV3Mg', 'FIlRRMu3bXI', 'SWtdzneHKn8'];

    res.send({ vidIDs });
});

module.exports = router;
