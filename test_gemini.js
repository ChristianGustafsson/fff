const https = require('https');

const data = JSON.stringify({ prompt: 'Hello Gemini!' });

const options = {
  hostname: '2026gb.netlify.app',
  path: '/.netlify/functions/gemini',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  let body = '';
  res.on('data', chunk => {
    body += chunk;
  });
  res.on('end', () => {
    console.log('Response:', body);
  });
});

req.on('error', error => {
  console.error('Error:', error);
});

req.write(data);
req.end();
