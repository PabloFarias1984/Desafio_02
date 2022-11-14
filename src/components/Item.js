import {useState} from 'react'

const Item = (props) => {
//  let rate = 0;
const [rate, setRate] = useState(0);




  const rateVideo = () => {
    rate++;
    console.log(rate)
  }
    return(
      
<>
<div class="alert alert-primary" role="alert">

<div className="itemVideo">
  <img width="200px" src= {props.print}/>
  <h2 className="titile"> {props.title} </h2>
  <p> {props.desc} </p>
  <p>This video have {rate} stars</p>
  <button onClick= {rateVideo}>rate</button>
</div>
</div>
</>
    )
}
export default Item;

