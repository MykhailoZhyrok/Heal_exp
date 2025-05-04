import './ExpPage.scss'
import { useState } from 'react'

const ExpPage = () => {
    const [expArr, setExpArr] = useState([])

    return (
        <div className="expWrap">

  
        {expArr.length ? (
            expArr.map((el, index) => (
                <div className="expItem" key={index}>
                    
                    {el}
                </div>
            ))
        ) : (
            <h1 className="expNotFound">
                Тут покищо порожньо
            </h1>
        )}
        </div>
    )

}

export default ExpPage
