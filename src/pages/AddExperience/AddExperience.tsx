import './AddExperience.scss'
import { useState } from 'react'

const AddExperience = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()
    if (!email || !subject || !message) {
      setError('Будь ласка, заповніть всі поля.')
      console.log(error)
      return
    }

    console.log('Form submitted', { email, subject, message })

    setEmail('')
    setSubject('')
    setMessage('')
    setError('')
  }

  return (
    <div className='contactMainWrap'>
    <div className="contactHeader">
        <h2 className="contactTitle">
        Поділіться своїм досвідом
        </h2>

        <p className="contactDesc">
        Якщо ви знайшли інформацію про зниклих безвісти, будь ласка, поділіться нею.

        </p>


    </div>

    <div className="formWrap">
        <input type="email" placeholder="E-mail" className="inputForm"/>
        <input type="text" placeholder="Тема" className="inputForm"/>
        <textarea name="contactMsg" id="contactMsg" placeholder="Опишіть свою ситуацію" className="textAreaForm"></textarea>


        <button onClick={handleSubmit} className="formButton">Надіслати</button>
    </div>
</div>
  )

}

export default AddExperience
