import React, { useState } from "react"
import "./styles/App.css"
//import LoginForm from "./components/LoginForm.js"
//import RegisterForm from "./components/RegisterForm"
//import Notebooks from "./components/Notebooks.jsx"
//import data from "./components/Notebooks.json"
import GridContainer from "./components/ContainerNB.jsx"

// App -> echa para porbar el iniciar sesion
const App = () => {

    //const [isLogged, setisLogged] = useState(true)

    //El formulario log-in debe recibir la funcion necesaria para poder
    // cambiar de pagina en base a isLogged

    /*const giveRegister = () => {
        setisLogged(false)
    }*/

    return (
        //isLogged ? <LoginForm className = "pagina" giveRegister = {giveRegister} /> : <RegisterForm />
        
        <GridContainer/>

    )
}

export default App