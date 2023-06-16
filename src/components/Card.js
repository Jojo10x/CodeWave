/* Компонент карточки - блок категории одежды */

import decorImage from '../images/Decor.svg';
import'../styles/Card.css';

/* Внутри компонента Card находится блок с заголовком, текстом и кнопкой заказа. 
Компонент имеет класс «cards_item». 
Функция принимает пропсы card и handleOpenPopup и использует их для передачи данных другим компонентам. 
Кнопка заказа вызывает функцию handleOpenPopup при клике.*/

export default function Card(props) {
  function handleOpenPopup() {
    props.handleOpenPopup(true)
  }

  return(
    <li className="cards__item">
      <h3 className="cards__title margin-zero">{props.card.title}</h3>
    <p className="cards__text">{props.card.text}</p>
    <button className="cards__button" onClick={handleOpenPopup}>
      ORDER
    </button>
  </li>
  )
}
