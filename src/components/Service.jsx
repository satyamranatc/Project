import axios from 'axios';
import React,{useState} from 'react'



export default function Service() {

    let [FormData,setFormData] = useState({ProductName: "", ProductPrice:0})

    async function handleForm(e) {
        e.preventDefault();
        
        const productName = e.target.elements.ProductName.value;
        const productPrice = e.target.elements.ProductPrice.value;
        
        setFormData({
          ...FormData,
          ProductName: productName,
          ProductPrice: productPrice
        });

        let Res = await axios.post("http://localhost:5500/SubmitData",FormData);

        console.log(Res)
   
    }      
  return (
    <div>
        <center>
            <fieldset>
                <form onSubmit={(e)=>handleForm(e)}>
                    <input name='ProductName' type='text' required placeholder="Product Name" />
                    <br />
                    <input name='ProductPrice' type='text' required placeholder="Product Price" />
                    <button>Submit</button>
                </form>
            </fieldset>
        </center>
    </div>
  )
}
