import React from 'react'
import { CardItems } from './CardItem'
import './Cards.css';
 function Cards() {
    

    return (
       <div className='cards'>
        <h1>Check Out These EPIC Destination</h1>
    <div className='cards__container'>      </div>
    <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItems 
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep 
            inside the Amazon Jungle"
            label='Adventure'
            path='/services'

            />
              <CardItems 
            src="images/img-2.jpg"
            text="Travel Through the Islands of Bali in a Private Cruise"
            label='Luxury'
            path='/services'

            />
            <CardItems 
            src="images/img-4.jpg"
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/services'

            />
        </ul>
        <ul className='cards__items'>
            <CardItems 
            src="images/img-8.jpg"
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/services'

            />
              <CardItems 
            src="images/img-7.jpg"
            text="Travel Through the Islands of Bali in a Private Cruise"
            label='Luxury'
            path='/services'

            />
        </ul>
        <ul className='cards__items'>
            <CardItems 
            src="images/img-1.jpg"
            text="Explore the hidden waterfall deep 
            inside the Amazon Jungle"
            label='Adventure'
            path='/services'

            />
              <CardItems 
            src="images/img-3.jpg"
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
            path='/services'

            />
        </ul>
    </div>

       </div>
    )
}
export default Cards;
