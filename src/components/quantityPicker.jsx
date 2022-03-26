import { useState } from 'react';
import './quantityPicker.css'



const QuantityPicker = (props) => {
        //setter
        let [quantity,setQuantity]= useState(1)
        //decrement function
        const decrement = () => {
            let value =quantity;

            if(quantity>1){
               value=value-1;
            }
           
                console.log("Decrement number");
                setQuantity(value);
                props.onChange(value);
             
          

        }

        //Increment function
        const increment = () => {
            let value = quantity+1;
            console.log("Increment Number");
            setQuantity(value);
            props.onChange(value);

        }

    return(
        <div className='container-picker'>

            <button  className='button-picker' onClick={decrement}>-</button>
            <label htmlFor="button" className='quantity-label'>{quantity}</label>
            <button className='button-picker' onClick={increment}>+</button>

        </div>
    );

};

export default QuantityPicker;