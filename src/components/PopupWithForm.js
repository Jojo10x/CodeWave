/* Компонент попапа формы - блок, отвечающий за конструктор заказа */

import React from "react";

import vectorPath from "../images/Vector.svg";
import closePath from "../images/Close-Icon.svg";
import "../styles/PopupWithForm.css";

const orderFetch = (url, options) => {
  return fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
}

const typeList = ['JavaScript', 'c++', 'Ruby', 'Python'];

export default function PopupWithForm(props) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [color, setColor] = React.useState("");
  const [bust, setBust] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [sleeve, setSleeve] = React.useState(0);
  const [waist, setWaist] = React.useState(0);
  const [trousersLength, setTrousersLength] = React.useState(0);
  const [booty, setBooty] = React.useState(0);

  const [isOpenTypeList, setOpenTypeList] = React.useState(false);
  const onClickType = () => setOpenTypeList((prevState) => !prevState);

  const onClickTypeItem = (index) => {
    props.setType(index);
    setOpenTypeList((prevState) => !prevState);
  }

  const [fabric, setFabric] = React.useState(0);
  const [isOpenFabricList, setOpenFabricList] = React.useState(false);
  const onClickFabric = () => setOpenFabricList((prevState) => !prevState);

  const onClickFabricItem = (index) => {
    setFabric(index);
    setOpenFabricList((prevState) => !prevState);
  }

  const handleChangeName = evt => setName(evt.target.value);
  const handleChangePhone = evt => setPhone(evt.target.value);
  const handleChangeColor = evt => setColor(evt.target.value);
  const handleChangeBust = evt => setBust(evt.target.value);
  const handleChangeHeight = evt => setHeight(evt.target.value);
  const handleChangeSleeve = evt => setSleeve(evt.target.value);
  const handleChangeWaist = evt => setWaist(evt.target.value);
  const handleChangesTrousers = evt => setTrousersLength(evt.target.value);
  const handleChangeBooty = evt => setBooty(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
/* Метод "Post" - это способ передачи данных из формы (form) на сервер, где он будет обработан для последующих действий с данными. 
JSON формат*/

    orderFetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: name,
        phoneNumber: phone,
        typeClothes: typeList[props.type],
      })
    });

    props.closePopup();
  }

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className={`popup__container`}>
          <button className="popup__button-close" type="button">
            <img className="popup__close-image" src={closePath} alt="Закрыть" onClick={props.closePopup} />
          </button>
          <h2 className="popup__heading">Checkout</h2>
          <form action="submit" className="popup__form" onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset">
              <input type="text" className="popup__input" required placeholder="Name" value={name || ''} onChange={handleChangeName}/>
              <input type="text" className="popup__input" required placeholder="Phone Number" value={phone || ''} onChange={handleChangePhone}/>
              <div className="popup__input-container">
                <input type="text" className="popup__input" required readOnly={true}value={typeList[props.type]}/>
                <img className="popup__vector" src={vectorPath} alt="Вектор" onClick={onClickType}/>
                {isOpenTypeList && (
                  <div className="popup__sort">
                    <ul className="popup__sort-list">
                      {typeList.map((item, index) => <li key={index} onClick={() => onClickTypeItem(index)} className={`popup__sort-item ${props.type === index ? "active" : ""}`}> {item} </li>)}
                    </ul>
                  </div>
                )}
              </div>           
              <button className="popup__submit popup__submit_type_edit" type="submit">Order</button>
            </fieldset>
          </form>
        </div>
      </section>
  )
}
