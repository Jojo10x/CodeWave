import closePath from "../images/Close-Icon.svg";

/* Функция PopupContact является компонентом, который отображает всплывающее окно для заказа звонка.
Внутри компонента находятся заголовок, форма для ввода номера телефона и кнопка "Оставить свой телефон".
Функция использует пропсы isOpen и closePopup для управления состоянием всплывающего окна 
и передачи функции обработчика клика на кнопку закрытия другим компонентам, 
а также пропс onSubmit для передачи функции обработчика отправки формы другим компонентам.*/

export default function PopupContact(props) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.closePopup();
  }

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className={`popup__container popup__container_type_contact`}>
          <button className="popup__button-close" type="button">
            <img className="popup__close-image" src={closePath} alt="Закрыть" onClick={props.closePopup} />
          </button>
          <h2 className="popup__heading">Request a Call</h2>
          <form action="submit" className="popup__form" onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset popup__fieldset_type_contact">
              <input type="text" className="popup__input popup__input_type_contact" required placeholder="Enter your phone number" /*value={name || ''} onChange={handleChangeName}*//>
              <button className="popup__submit popup__submit_type_contact" type="submit">Send</button>
            </fieldset>
          </form>
        </div>
      </section>
  )
}
