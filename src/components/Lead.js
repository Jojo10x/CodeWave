/* Секция вступления - первый блок, который знакомит посетителя с компанией */

import '../styles/Lead.css';

/*Внутри компонента находится блок с заголовком, подзаголовком и текстом, который описывает возможности пошива одежды на заказ. 
Компонент имеет класс "lead" и атрибут "aria-label", который указывает на название секции для пользователей. */

export default function Lead() {
  return(
      <section className="lead" aria-label="Секция вступления">
       <div className="description">
          <p className="description__subtitle">Learn to Code</p>
          <h1 className="description__title">CodeWave</h1>
          <p className="description__text">Ride the wave of coding knowledge with CodeWave, the ultimate online school for learning programming languages. Our expert instructors will guide you through the mysteries of coding, teaching you everything from the basics of HTML and CSS to the intricacies of Python and Java. With personalized instruction and interactive learning tools, you'll be writing code like a pro in no time. Join the CodeWave community and ride the wave to programming success!</p>
        </div>
      </section>
  )
}
