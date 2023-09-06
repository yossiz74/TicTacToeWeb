import config from './config.js';
import winston from 'winston';
import app from './app.js';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    //new winston.transports.File({ filename: 'combined.log' })
  ]
});

const port = config.port;
app.listen(port, (error) => {
  if (error) {
    logger.error('Error starting server:', error);
  } else {
    logger.info(`Server listening on port ${port}`);
  }
});
