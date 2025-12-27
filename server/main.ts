import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("get out of root");
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send({ status: "ok" });
})

app.listen(8080, 'localhost', (err?: Error) => {
  if (err) {
    console.error('Error starting server:', err);
  }
  console.log('server is lintening on http://localhost:8080');
})
