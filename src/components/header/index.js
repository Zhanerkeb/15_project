import {useState} from 'react'

function Header(props) {
    // const [isAuth, setIsAuth] = useState(true)
    // const [color, setColor] = useState('green')
    // const [products, setProducts] = useState(['bread', 'milk', 'honey'])
    // const [text, setText] = useState('')
    const {user, isAuth} = props

    // const handleSwitch = () => {
    //     setIsAuth(!isAuth)
    //     setColor(color === 'green' ? 'red' : 'green')
    // }

    // const productItems = products.map((item, i) => <div key={i}>{item}</div>)

    // const handleChange = event => {
    //     setText(event.target.value)
    // }

    console.log(props)

    return (
        <div>
        {user.name}
            {/* {isAuth ? 'logout' : 'login'}
            <button style={{backgroundColor: color}} onClick={handleSwitch}>Switch auth</button>
            {productItems}
            <input onChange={handleChange}/>
            {text} */}
        </div>
    )
}

export default Header