import "./ContactPage.scss"

export const ContactPage = () => {
  return (
    <div className='contactMainWrap'>
        <div className="contactHeader">
            <h2 className="contactTitle">
            Поділіться своїми пропозиціями щодо покращення сайту
            </h2>

            <p className="contactDesc">
            Якщо у вас є ідеї для покращення сайту або ви хочете доповнити наш список волонтерських організацій, поділіться ними тут.

            </p>


        </div>

        <div className="formWrap">
            <input type="email" placeholder="E-mail" className="inputForm"/>
            <input type="text" placeholder="Тема звернення" className="inputForm"/>
            <textarea name="contactMsg" id="contactMsg" placeholder="Звернення" className="textAreaForm"></textarea>


            <button className="formButton">Надіслати</button>
        </div>
    </div>
  )
}
