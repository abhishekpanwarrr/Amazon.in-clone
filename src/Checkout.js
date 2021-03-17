import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { Subtotal } from './Subtotal'


export const Checkout = () => {
    const [{basket}] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' className='checkout__ad' alt='CheckoutImage' />
                {
                    basket?.length === 0 ?(
                        <div>
                            <h2>Empty Cart</h2>
                            <p>You have no item in your basket. To buy one or more click on "Add To Basket " next to item</p>
                        </div>
                    ): (
                        <div>
                            <h2 className='checkout__title'>Your shopping basket</h2>
                            {
                                basket?.map(item=>(
                                    <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {basket.length >= 0&& (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}
