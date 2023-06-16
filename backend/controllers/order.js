/* Модуль order.js в программе для сайта отвечает за сохранение заказов пользователей в базе данных. */

const mysql = require('mysql2');

// Функция saveOrder принимает объект заказа, соединение с базой данных и объект ответа res. 
function saveOrder(order, connection, res) {
  // SQL-запрос на добавление информации о вещи в таблицу clothes
  const clothesQuery = 'INSERT INTO clothes (color, typeClothes, fabrics) VALUES (?, ?, ?)';
  // Массив значений для подстановки в SQL-запрос
  const clothesValues = [order.color, order.typeClothes, order.fabrics];

// Выполнение SQL-запроса на добавление информации о вещи в таблицу clothes
  connection.query(clothesQuery, clothesValues, (error, results, fields) => {
    if (error) { // Если произошла ошибка
      console.error('Ошибка сохранения информации о вещи:', error);
    } else { // Если запрос выполнен успешно
      const idClothes = results.insertId; // Получение id добавленной записи в таблицу clothes

      // SQL-запрос на добавление информации о заказе в таблицу orders
      const orderQuery = 'INSERT INTO orders (firstName, phoneNumber, id_clothes, height, bust, waist, sleeve, trousersLength, booty) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
       // Массив значений для подстановки в SQL-запрос
      const orderValues = [order.firstName, order.phoneNumber, idClothes, order.height, order.bust, order.waist, order.sleeve, order.trousersLength, order.booty];

      // Выполнение SQL-запроса на добавление информации о заказе в таблицу orders
      connection.query(orderQuery, orderValues, (error, results, fields) => {
        if (error) {
          console.error('Ошибка сохранения заказа:', error);
        } else { // Если запрос выполнен успешно. Отправка ответа об успешном заказе
          res.send({ message: "Заказ успешен" })
          console.log('Заказ успешно сохранен в базе данных');
        }

        // Закрытие соединения с базой данных
        connection.end();
      });
    }
  });
}


/* Функция createOrder принимает запрос req, объект ответа res и функцию next. 
Внутри функции извлекаются значения из тела запроса (имя клиента, номер телефона, цвет, тип одежды, ткань и параметры для пошива), 
создается объект заказа и устанавливается соединение с базой данных. 
Затем вызывается функция saveOrder, которой передаются объект заказа, соединение с базой данных и объект ответа res. 
*/
const createOrder = (req, res, next) => {
  const { firstName, phoneNumber, typeClothes, fabrics, color, height, bust, waist, sleeve, trousersLength, booty } = req.body;

  const order = {
    firstName: firstName,
    phoneNumber: phoneNumber,
    color: color,
    typeClothes: typeClothes,
    fabrics: fabrics,
    height: height,
    bust: bust,
    waist: waist,
    sleeve: sleeve,
    trousersLength: trousersLength,
    booty: booty,
  };

  const connection = mysql.createConnection({
    host: 'localhost',
    database: 'myDB',
    user: 'root',
    password: 'password',
  });

  saveOrder(order, connection, res)


};

// Экспорт функции создания заказа
module.exports = { createOrder };
