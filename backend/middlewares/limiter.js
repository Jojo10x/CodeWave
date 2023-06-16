/* Модуль limiter.js обеспечивает ограничение скорости запросов (rate limiting) в приложении для сайта. 
Он использует функцию rateLimit из пакета express-rate-limit, которая устанавливает лимит на количество запросов, которые могут быть выполнены за определенный период времени/
лимит установлен на 100 запросов за 10 минут. Если количество запросов превышает установленный лимит, 
то функция rateLimit блокирует дальнейшие запросы и возвращает ошибку 429 Too Many Requests.*/

const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
