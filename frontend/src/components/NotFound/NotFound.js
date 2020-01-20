import React from 'react';
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render(){
    return(
      <>
        <h1>Parece que la pagina a la que queres ir no existe.</h1>
        <Link to="">Volver al home!</Link>
      </>
    )
  }
}

export default NotFound;