/* Класс notFoundError.js представляет собой наследника класса Error 
и используется для обработки ошибки "страница не найдена" (HTTP-статус код 404) в приложении для сайта. 
Конструктор класса принимает сообщение об ошибке и устанавливает свойство "statusCode" равным 404. 
Класс экспортируется для использования в других модулях приложения.*/

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
