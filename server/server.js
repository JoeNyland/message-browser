const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const messagesRouter = require('./routes/messages');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/messages', messagesRouter);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
});
