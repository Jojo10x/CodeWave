

const CREATE_CODE = 201;
const DEFAULT_ERROR_CODE = 500;

/* Константы VALIDATION_ERROR_NAME и ORDER_VALIDATION_ERROR_MESSAGE используются для обработки ошибок валидации данных при создании новых заказов. */

const VALIDATION_ERROR_NAME = 'ValidationError';
const ORDER_VALIDATION_ERROR_MESSAGE = 'Переданы некоректные данные для заказа';

/* Константы FILENAME_REQUEST_LOG и FILENAME_ERROR_LOG определяют названия файлов, в которые записываются логи запросов и ошибок. */ 

const FILENAME_REQUEST_LOG = 'request.log';
const FILENAME_ERROR_LOG = 'error.log';

/* Константа ROUTE_NOT_FOUND_ERROR_MESSAGE используется для обработки ошибок, связанных с отсутствием запрашиваемого маршрута.  */

const ROUTE_NOT_FOUND_ERROR_MESSAGE = 'Такой страницы не существует';

/* Константа allowedCors определяет список разрешенных доменов для CORS, 
а DEFAULT_ALLOWED_METHODS - список разрешенных HTTP-методов. */ 

const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://aperturestudio.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

/* Экспортируемый объект содержит все определенные константы, чтобы они могли быть использованы в других модулях программы. */

module.exports = {
  CREATE_CODE,
  DEFAULT_ERROR_CODE,
  VALIDATION_ERROR_NAME,
  FILENAME_REQUEST_LOG,
  FILENAME_ERROR_LOG,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
  ORDER_VALIDATION_ERROR_MESSAGE,
  ROUTE_NOT_FOUND_ERROR_MESSAGE,
};
