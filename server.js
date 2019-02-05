import express from "express";
import path from "path";

const app = express();
const port = 8888;

app.use("/", express.static('public'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});
