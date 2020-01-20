import React from 'react';
import axios from 'axios';
import './fulllist.css';
import NotFound from '../../static/404.jpg'
import Price from '../Price/Price';

export class FullList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: '',
      loading: true,
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
        
          const res = await axios.get("http://localhost:9000/products");
          const data = res.data;
          this.setState({ loading: false, apiResponse: data });

      } catch(error) {
        this.setState({ loading: false, error })
      }
      
    }
  
  
  render() {
    const data = this.state.apiResponse;

    if(this.state.loading){
      return "Loading...";
    }
    if(this.state.error){
      return "En este momento no podemos conectarnos! Intente en breve!";
    }
    if(this.state.apiResponse.body.length === 0){
      return "No tenemos productos disponibles, proba mas tarde!";
    }

    return (
      <React.Fragment>
        <div className="listaDeProductos">
          {data.body.map((items) => 
            <a className="producto" href={`productos/${items.id}`} key={items.id}>
              <img onError={(e)=>{e.target.onerror = null; e.target.src=NotFound}} src={ items.image_url } alt={ items.description }/>
              <h2>{ items.description }</h2>
              <Price price={items.price} list_price={items.list_price} discount={items.discount}/>
            </a>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default FullList;
