import {useEffect, useState} from 'react'

const Item = (props) => {
//  let rate = 0;
const [carrito, setContador] = useState(0);
const SumaCarrito = () => {
      setContador(carrito+1)
  }
  const RestaCarrito = () => {
    setContador(carrito-1)
}

//ComponentDidUpdate  
useEffect(()=>{
  console.log("La App se ha actualizado")
},[carrito])


    return(
      
<>

<div class="alert alert-secondary" role="alert">

<div className="itemVideo">
  <img width="200px" src= {props.print}/>
  <h2 className="titile"> {props.title} </h2>
  <p> {props.desc} </p>
{/*   <p>This video have {rate} stars</p> */}

</div>

<button class="btn btn-primary separados" onClick= {RestaCarrito}>-</button>
<button type="button" class="btn btn-outline-primary separados" disabled>{carrito}</button>
<button class="btn btn-primary separados" onClick= {SumaCarrito}>+</button>
<button class="btn btn-primary separados" type="button">Agregar al carrito</button>
<button class="btn btn-primary separados" type="button">Details</button>
</div>

</>
    )
}
export default Item;

