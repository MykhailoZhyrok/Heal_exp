import './AddExperience.scss'
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";



interface FormData {
  email: string;
  subject: string;
  message: string;
}

const AddExperience = () => {


  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);

  useEffect(() => {
    const savedTime = localStorage.getItem("lastSubmitTime");
    if (savedTime) {
      setLastSubmitTime(parseInt(savedTime));
    }
  }, []);

  const isEmailValid = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const emailjs_id = import.meta.env.VITE_ENV_MAIL;
  const user_id = import.meta.env.VITE_ENV_USER_ID;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(emailjs_id, user_id)

    if (!formData.email || !formData.subject || !formData.message) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    if (!isEmailValid(formData.email)) {
      alert("Будь ласка, введіть правильну електронну пошту.");
      return;
    }

    const currentTime = Date.now();
    if (isSubmitting || (lastSubmitTime && currentTime - lastSubmitTime < 15000)) {
      alert("Будь ласка, почекайте 15 секунд перед відправкою нового запиту.");
      return;
    }

    setIsSubmitting(true);
    localStorage.setItem("lastSubmitTime", currentTime.toString());
    if (!emailjs_id || !user_id) {
      alert("Не вдалося отримати значення змінних середовища для EmailJS!");
      return;
    }
    emailjs
      .sendForm(
        emailjs_id,
        "template_yd4rdra",
        e.target,
        user_id
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Ваше повідомлення успішно надіслано!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Сталася помилка при відправці повідомлення.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });

    setFormData({
      email: "",
      subject: "",
      message: "",
    });
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

      <form className="formWrap" onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail"
          name="email"

          className="inputForm"
          value={formData.email}
          onChange={handleChange}
          required />
        <input type="text" placeholder="Тема"
          name="subject"

          className="inputForm"
          value={formData.subject}
          onChange={handleChange}
          required />
        <textarea placeholder="Опишіть свою ситуацію" className="textAreaForm"
          name="message"
          id="contactMsg"


          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>


        <button type="submit" className="formButton" disabled={isSubmitting}>
          {isSubmitting ? "Зачекайте..." : "Надіслати"}
        </button>
      </form>
    </div>
  )

}

export default AddExperience
