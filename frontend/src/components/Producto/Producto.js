import React from 'react';
import axios from 'axios';
import './Producto.css';
import Price from '../Price/Price';

class Producto extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: '',
      loading: true,
      error: null
   };
  }
  async componentDidMount(){
    const enabled = await this.checkValidItem();

    if(enabled){
      this.fetchData() 
    }else{
      this.setState(
        {loading: false, error: "No se encontro el articulo buscado, te invitamos volver a la lista de articulos."}
      )
    }
  }
  
  async checkValidItem(){
    try {
      const res = await axios.get(`http://localhost:9000/products/${this.props.match.params.id}`);
      if (res.data.body[0].enabled){
        return true
      }
    } catch(error) {
      this.setState({ loading: false, error })
    }
      
    return false;
  }
  async fetchData(){
    
    this.setState({ loading: true, error: null })
    
    try {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/${this.props.match.params.id}/`);
      const data = res.data;
      this.setState({ loading: false, apiResponse: data });
    } catch(error) {
      this.setState({ loading: false, error })
    }
      
  }

  render(){
    //Mientras la web este cargando.
    if(this.state.loading){
      return "Loading...";
    }
    if(this.state.error){
      return `Esto es embarazoso, parece que hubo un error! ${this.state.error} `;
    }
    const data = this.state.apiResponse;
    return(
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
          <div className="comprar">
            <span>COMPRAR</span>
          </div>
        </div>     
      </div>
    )
  }
}

export default Producto;