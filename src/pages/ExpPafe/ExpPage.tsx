import { Link } from 'react-router'
import './ExpPage.scss'
import { useEffect, useState } from 'react'

const ExpPage = () => {
    const [expArr, setExpArr] = useState([])
    useEffect(() => {
        setExpArr([])
    }, [])
    return (
        <div className="expWrap">
            <Link className="mainPageButton" to="/add-your-exp" >Поділитись досвідом</Link>
        <div className="expBody">


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
        </div>
    )

}

export default ExpPage
