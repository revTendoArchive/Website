const fs = require('fs');
const http = require("http")

const server = http.createServer((req, res) => {
    // html files
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = fs.readFileSync('web/index.html', 'utf8');
        res.end(data);
    } else if (req.url == "/staff/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = fs.readFileSync('web/staff/index.html', 'utf8');
        res.end(data);
    } else if (req.url == "/3ds/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = fs.readFileSync('web/3ds/index.html', 'utf8');
        res.end(data);
    } else if (req.url == "/3ds/progress/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = fs.readFileSync('web/3ds/progress/index.html', 'utf8');
        res.end(data);

    // font files
    } else if (req.url == "/global/font/FOT-RodinNTLG%20Pro%20DB.otf") {
        res.writeHead(200, { 'Content-Type': 'application/font-woff2' });
        const data = fs.readFileSync('global/font/FOT-RodinNTLG Pro DB.otf');
        res.end(data);
    } else if (req.url == "/global/font/bank%20gothic%20medium%20bt.ttf") {
        res.writeHead(200, { 'Content-Type': 'application/font-woff2' });
        const data = fs.readFileSync('global/font/bank gothic medium bt.ttf');
        res.end(data);
    } else if (req.url == "/global/font/MarvelouzTube%20Font%203.ttf") {
        res.writeHead(200, { 'Content-Type': 'application/font-woff2' });
        const data = fs.readFileSync('global/font/MarvelouzTube Font 3.ttf');
        res.end(data);

    // css files
    } else if (req.url == "/global/css/base.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const data = fs.readFileSync('global/css/base.css', 'utf8');
        res.end(data);
    } else if (req.url == "/global/css/style.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const data = fs.readFileSync('global/css/style.css', 'utf8');
        res.end(data);
    } else if (req.url == "/global/css/3ds.css") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const data = fs.readFileSync('global/css/3ds.css', 'utf8');
        res.end(data);
    
    // javascript files
    } else if (req.url == "/global/functions/constants.js") {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        const data = fs.readFileSync('global/functions/constants.js', 'utf8');
        res.end(data);
    } else if (req.url == "/global/functions/footer.js") {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        const data = fs.readFileSync('global/functions/footer.js', 'utf8');
        res.end(data);
    } else if (req.url == "/global/functions/navbar.js") {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        const data = fs.readFileSync('global/functions/navbar.js', 'utf8');
        res.end(data);
    } else if (req.url == "/global/functions/progress.js") {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        const data = fs.readFileSync('global/functions/progress.js', 'utf8');
        res.end(data);
    } else if (req.url == "/global/functions/sfx.js") {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        const data = fs.readFileSync('global/functions/sfx.js', 'utf8');
        res.end(data);
    
    // images
    } else if (req.url == "/global/image/3ds/bg.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/3ds/bg.png');
        res.end(data);
    } else if (req.url == "/global/image/3ds/logo-3ds.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/3ds/logo-3ds.png');
        res.end(data);
    } else if (req.url == "/global/image/wiiu/lamp_on.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/wiiu/lamp_on.png');
        res.end(data);
    } else if (req.url == "/global/image/wiiu/lamp_off.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/wiiu/lamp_off.png');
        res.end(data);
    } else if (req.url == "/global/image/gfx/discord.webp") {
        res.writeHead(200, { 'Content-Type': 'image/webp' });
        const data = fs.readFileSync('global/image/gfx/discord.webp');
        res.end(data);
    } else if (req.url == "/global/image/gfx/yticon.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/gfx/yticon.png');
        res.end(data);
    } else if (req.url == "/global/image/3ds-selection.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/3ds-selection.png');
        res.end(data);
    } else if (req.url == "/global/image/bg.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/bg.png');
        res.end(data);
    } else if (req.url == "/global/image/logo.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/logo.png');
        res.end(data);
    } else if (req.url == "/global/image/wiiu-selection.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/image/wiiu-selection.png');
        res.end(data);
    } else if (req.url == "/global/tabicon.png") {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const data = fs.readFileSync('global/tabicon.png');
        res.end(data);

    // audio files
    } else if (req.url == "/global/sfx/3ds/SE_CTR_COMMON_BUTTON.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/3ds/SE_CTR_COMMON_BUTTON.wav');
        res.end(data);
    } else if (req.url == "/global/sfx/3ds/SE_CTR_COMMON_RETURN.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/3ds/SE_CTR_COMMON_RETURN.wav');
        res.end(data);
    } else if (req.url == "/global/sfx/3ds/SE_CTR_HOME_TOUCH.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/3ds/SE_CTR_HOME_TOUCH.wav');
        res.end(data);
        
    } else if (req.url == "/global/sfx/wiiu/WAV_240_GUESS_BANK_MEN.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/wiiu/WAV_240_GUESS_BANK_MEN.wav');
        res.end(data);
    } else if (req.url == "/global/sfx/wiiu/WAV_244_GUESS_WARC_1_GUESS_GROUP_MEN.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/wiiu/WAV_244_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
        res.end(data);
    } else if (req.url == "/global/sfx/wiiu/WAV_245_GUESS_WARC_1_GUESS_GROUP_MEN.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/wiiu/WAV_245_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
        res.end(data);
    } else if (req.url == "/global/sfx/wiiu/WAV_247_GUESS_WARC_1_GUESS_GROUP_MEN.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/wiiu/WAV_247_GUESS_WARC_1_GUESS_GROUP_MEN.wav');
        res.end(data);
    } else if (req.url == "/global/sfx/wiiu/WAV_248_GUESS_BANK_MEN.wav") {
        res.writeHead(200, { 'Content-Type': 'audio/wav' });
        const data = fs.readFileSync('global/sfx/wiiu/WAV_248_GUESS_BANK_MEN.wav');
        res.end(data);

    // other
    } else if (req.url == "/revNet.zip") {
        res.writeHead(200, { 'Content-Type': 'application/zip' });
        const data = fs.readFileSync('global/revNet.zip');
        res.end(data);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><body style="font-family: Arial, Helvetica, sans-serif;"><h1><b>oops...</b></h1>we either didn't archive this page yet, or you hit an unknown page</body></html>`);
    }
});

server.listen(8000);
console.log("running server on port 8000")