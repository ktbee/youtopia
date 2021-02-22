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
    const vidIDs = [
        'BcGQFDTA28o',
        'g_dF7SAV3Mg',
        'FIlRRMu3bXI',
        'SWtdzneHKn8',
        'uuZE_IRwLNI',
        'OZLUa8JUR18',
        'voQ4rfKI4iE',
        'IcUMGGdd8gw',
        '9HDEHj2yzew',
        'vWz9VN40nCA',
        'ZUau1RT8qbc',
        'YvVonQ7LUJ0'
    ];

    res.send({ vidIDs });
});

module.exports = router;
