import React from 'react';
import axios from 'axios';
import '../styles/Producto.css';

class Producto extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: '',
      loading : true,
      error: null
   };
  }
  componentDidMount(){
    this.fetchData() 
  }
  
  async fetchData(){
    //Al llamar a la carga muestra loading y limpia todo error que haya.
    this.setState({ loading: true, error: null })
    try {
      const parametro  = this.props.match.params.id; 
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/${parametro}/`);
      const data = res.data;
      this.setState({ loading: false, apiResponse: data });

      } catch(error) {
        this.setState({ loading: false, error: error })
      }
      
    }

  render(){
    //Mientras la web este cargando.
    if(this.state.loading === true){
      return "Loading...";
    }
    const data = this.state.apiResponse;
    console.log(data)
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
          <span className="valorventa">${ data.price }</span>
          <span className="valorreal">
            <div className="precio">${ data.list_price }</div>
            <span className="descuento">{ data.discount }% OFF</span>
          </span>
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