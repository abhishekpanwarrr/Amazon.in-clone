import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
export const Subtotal = () => {
    const [{basket}] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>Subtotal({basket.length} items): <strong>{`${value}`}</strong></p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />This order contains gift
                        </small>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            
            />
            <button>Proceed To Checkout</button>
        </div>
    )
}
