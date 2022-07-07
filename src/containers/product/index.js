import Header from "../../components/header"

function Product() {
    return(
        <div>
            <Header user={{name: 'Asyl', email: 'asyl@gmail.com'}} isAuth={true}/>
        </div>
    )
}

export default Product