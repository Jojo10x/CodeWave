/* Модуль cors.js экспортирует функцию, которая используется в качестве промежуточного обработчика для обеспечения CORS (Cross-Origin Resource Sharing) 
Он проверяет, содержится ли заголовок "origin" в списке разрешенных источников (allowedCors) 
и устанавливает соответствующие заголовки "Access-Control-Allow-Origin" и "Access-Control-Allow-Credentials" в объекте ответа (res),
чтобы разрешить доступ к ресурсам на сервере из источника, указанного в заголовке "origin"
Затем функция завершает обработку запроса, вызывая метод "end()" объекта ответа (res).
Если метод запроса не является OPTIONS, 
 то функция передает управление следующей функции в цепочке обработчиков, вызывая функцию "next()".*/

const { allowedCors, DEFAULT_ALLOWED_METHODS } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  return next();
};
