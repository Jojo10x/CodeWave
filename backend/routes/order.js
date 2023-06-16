/* Модуль order.js отвечает за создание маршрутов для заказов. */

/* Импортирует модуль express и вызывает метод Router(), чтобы создать новый экземпляр маршрутизатора.  */

const router = require('express').Router();

/* Импортирует метод createOrder из модуля controllers/order.js, который обрабатывает запрос на создание нового заказа. */

const { createOrder } = require('../controllers/order');

/* Определяет маршрут для POST-запроса по корневому пути (/) и связывает его с методом createOrder. */

router.post('/', createOrder);

/* Экспортирует созданный маршрутизатор, чтобы он мог быть подключен к корневому маршрутизатору в модуле index.js. */

module.exports = router;
