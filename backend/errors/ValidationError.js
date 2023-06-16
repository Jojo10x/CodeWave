/* Класс ValidationError.js также является наследником класса Error и используется для обработки ошибки валидации в приложении для сайта. 
Конструктор класса принимает сообщение об ошибке и устанавливает свойство "statusCode" равным 400 (HTTP-статус код "неверный запрос"). */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = ValidationError;
