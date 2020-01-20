import React from 'react';
import axios from 'axios';
import './Producto.css';
import Price from '../Price/Price';
import Btn from '../Btn/Btn';
import Error from '../Error/Error';
import { utf8_decode } from '../../utils';

class Producto extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: '',
      loading: true,
      userError: null,
      currentPrice: 0,
      currentDesc: ''
   };
  }

  //Funcion principal
  async componentDidMount(){
    //Revisa si un item esta o no habilitado
    const enabled = await this.checkValidItem();
    // Si esta habilitado, trae el resto de la info del endpoint
    if(enabled){
      this.fetchData();
    }
  }
  
  async checkValidItem(){
    try {
      //Connecta y trae el valor de "enabled;
      const res = await axios.get(`http://localhost:9000/products/${this.props.match.params.id}`);
      

      if(res.data.body.length > 0){
        //Si es true, retorna y continua con la ejecucion, sino actualiza el userError y retorna false.
        if (res.data.body[0].enabled){
          this.setState({currentDesc: res.data.body[0].description, currentPrice: res.data.body[0].price})
          return true
        }
      }else{
        this.setState({
          loading: false,
          error: "No hay datos!",
          userError: "No se encontro el articulo buscado, te invitamos volver a la lista de articulos."
        })
        return false;
      }
    } 
    //Si hay error en la conexion, actualiza el userError y finaliza el renderizado de loading.
    catch(error) {
      this.setState({ loading: false, error, userError: "Hay un problema en la conexion, lo solucionaremos a la brevedad."})
    }
  }

  async fetchData(){
    //Setea loading true y limpia errores previos.
    this.setState({ loading: true, error: null})
    
    try {
      // Conecta y trae el producto pedido
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/${this.props.match.params.id}/`);
      if( res.data.description === utf8_decode(this.state.currentDesc)){
        this.setState({ apiResponse: res.data, loading: false,});
      }else{
        this.setState({loading: false, error: 'No coinciden los datos', userError: "Esto es embarazoso, parece que lo que buscas no esta disponible."})
      }

    } 
    catch(error) {
      //Si hay error en la conexion, actualiza el userError y finaliza el renderizado de loading.
      this.setState({ loading: false, error, userError: "Hay un problema en la conexion, lo solucionaremos a la brevedad." })
    }
      
  }

  render(){
    if(this.state.loading){
      return "Loading...";
    }
    if(this.state.error){
      return (
        <Error error={this.state.userError} body="VOLVER"/>
      )
    }
    const data = this.state.apiResponse;
    return(
      <>
      <div className="contenedorProducto">
        <div className="detalles">
          <h2>{data.description}</h2>
          <div className="foto">
            <img src={data.main_image.url} alt={data.description}/>
          </div>
          <p>{data.summary}</p>
        </div>
        <div className="preciobox">
          <Price price={data.price } list_price={data.list_price} discount={data.discount}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum erat enim, quis convallis elit pellentesque non. Fusce egestas, diam id lobortis molestie, risus nisl laoreet nisi, sit amet finibus tortor diam ut ipsum. Sed ac tempus sapien, et tempus leo. Integer tincidunt a massa quis facilisis. Sed non viverra ante, id eleifend diam. Integer placerat magna quis vestibulum fermentum. Mauris sed mattis libero.</p>
          <Btn to="#" body="COMPRAR"/>
        </div>     
      </div>
      <Btn to="" body="VOLVER"/>
      </>
    )
  }
}

export default Producto;