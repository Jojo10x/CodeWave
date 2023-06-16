/* Подвал сайта - блок, отвечающий за конечную информацию */

import decorImage from '../images/Decor.svg';
import '../styles/Footer.css';

/* Внутри компонента находятся заголовок, подзаголовок, кнопка "Заказать звонок", горизонтальная линия разделителя и текст с копирайтом. 
Функция использует пропс onClickContact для передачи функции обработчика клика на кнопку "Заказать звонок" другим компонентам. */

export default function Footer(props) {
  const handleOpenContact = () => props.onClickContact((prevState) => !prevState)

  return(
    <section className="footer">
      <h2 className="footer__title">Any Enquires?</h2>
      <p className="footer__subtitle">Contact Us!</p>
      <button className="footer__button" onClick={handleOpenContact}>
        REQUEST A CALL
      </button>
      <hr className="footer__string" />
      <p className="footer__copyright">© CodeWave, Inc. All rights reserved.</p>
    </section>
  )
}
