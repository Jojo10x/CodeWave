/* Модуль App.js является главным модулем программы. 
Он использует фреймворк Express для создания сервера и обработки запросов. */

// Подключение необходимых зависимостей
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const limiter = require('./middlewares/limiter');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const globalHandleError = require('./errors/globalHandleError');
const NotFound = require('./middlewares/notFound');

const app = express();

// Использование middleware для обработки запросов
app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(limiter);
app.use(cors);

app.use(requestLogger);

app.use('/', require('./routes/index'));

// Обработка несуществующих маршрутов
app.use('*', NotFound);

// Обработка ошибок
app.use(errorLogger);
app.use(errors());

// Глобальная обработка ошибок
app.use(globalHandleError);

// Запуск сервера на порту 3000
app.listen(3000);