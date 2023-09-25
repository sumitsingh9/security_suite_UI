import express from 'express'
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import cors from 'cors'

const app = express();
const port = 3001;

// Middleware for parsing JSON requests
app.use(bodyParser.json());
app.use(cors())

app.post('/execute-command', (req, res) => {
  const apiToken = req.body.apiToken;
  const apiUrl = req.body.apiUrl;
  const apiSpec = req.body.apiSpec;
  const apiType = req.body.apiType;
  
  // const command = 

  res.json(`${apiSpec}, ${apiUrl}, ${apiType}, ${apiToken}`)
  // Sanitize userInput to prevent command injection (implement security checks here)

  exec(userInput, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return res.status(500).send('Error occurred.');
    }

    console.log(`Command output: ${stdout}`);
    console.error(`Command error: ${stderr}`);

    res.status(200).send(stdout);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
