/* Модуль NotFound.js отвечает за обработку ситуации, когда запрашиваемый маршрут не найден в приложении. 
Он импортирует класс NotFoundError из модуля errors/NotFoundError и константу ROUTE_NOT_FOUND_ERROR_MESSAGE из модуля utils/constants.  */

const NotFoundError = require('../errors/NotFoundError');
const { ROUTE_NOT_FOUND_ERROR_MESSAGE } = require('../utils/constants');

/* Экспортируемая функция принимает три аргумента: req (объект запроса), res (объект ответа) и next (функция, вызывающая следующую функцию в цепочке обработки запросов). 
Это позволяет передать управление следующей функции в цепочке обработки запросов с ошибкой NotFoundError, которая будет обработана соответствующим обработчиком ошибок.*/

module.exports = (req, res, next) => next(new NotFoundError(ROUTE_NOT_FOUND_ERROR_MESSAGE));
