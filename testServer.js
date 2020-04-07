const express = require('express');
const cors = require('cors');
const sampleLogs = require('./src/data/logstream.json').logs;
const yaml = require('./src/data/yaml').flow1;

const app = express();
app.use(cors());
const PORT = 5000

function startDemo(req, res) {
	console.log('starting log stream')
	let messageId = 0;
	let logId = 0

	const intervalId = setInterval(() => {
		const log = sampleLogs[logId];
		if (!sampleLogs[logId + 1])
			logId = 0;
		else logId++;

		res.write(`id: ${messageId}\n`);
		res.write(`data:${JSON.stringify(log)}\n\n`);
		console.log('sending message')
		messageId += 1;
	}, 500);

	req.on('close', () => {
		console.log('ending log stream')
		clearInterval(intervalId);
	});
}

app.get('/log/stream', (req, res) => {
	console.log('GET at /log/stream')
	// SSE Setup
	res.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
	});
	res.write('\n');

	startDemo(req, res);
});

app.get('/yaml', (req, res) => {
	console.log('GET at /yaml');
	return res.send(yaml);
});

app.listen(PORT,()=>console.log('TestServer listening on port',PORT));

