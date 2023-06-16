/* Модуль logger.js обеспечивает логирование запросов и ошибок в приложении для сайта. 
Он использует пакет winston для создания лог-файлов.*/

const winston = require('winston');
const expressWinston = require('express-winston');

const { FILENAME_REQUEST_LOG, FILENAME_ERROR_LOG } = require('../utils/constants');

/* requestLogger создает лог-файл для записи информации о каждом запросе, который приходит на сервер. */

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: FILENAME_REQUEST_LOG }),
  ],
  format: winston.format.json(),
});

/* errorLogger создает лог-файл для записи информации об ошибках, которые происходят в приложении. */

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: FILENAME_ERROR_LOG }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
