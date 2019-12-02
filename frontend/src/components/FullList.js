import React from 'react';
import axios from 'axios';
import '../styles/fulllist.css';
import NotFound from '../static/404.jpg'

export class FullList extends React.Component {
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
          const res = await axios.get("http://localhost:9000/blacklist");
          const data = res.data;
          this.setState({ loading: false, apiResponse: data });

      } catch(error) {
        this.setState({ loading: false, error: error })
      }
      
    }
  
  
  render() {
    const data = this.state.apiResponse;

        //Mientras la web este cargando.
        if(this.state.loading === true){
          return "Loading...";
        }
        if(this.state.error){
          return "En este momento no podemos conectarnos! Intente en breve!";
        }
        if(this.state.apiResponse.length === 0){
          return "No tenemos productos disponibles, proba mas tarde!";
        }
    return (
      <React.Fragment>
          <div className="listaDeProductos">
            {data.items.map((items) => items.enabled === "true" &&
            <a className="producto" href={`productos/${items.id}`} key={items.id}>
              <img onError={(e)=>{e.target.onerror = null; e.target.src=NotFound}} src={ items.image_url } alt={ items.description }/>
              <h2>{ items.description }</h2>
              <div className="preciobox">
                <span className="valorventa">${ items.price }</span>
                <span className="valorreal">
                  <div className="precio">${ items.list_price }</div>
                  <span className="descuento">{ items.discount }% OFF</span>
                </span>
              </div>
            </a>
            )}
          </div>
      </React.Fragment>
    );
  }
}

export default FullList;
