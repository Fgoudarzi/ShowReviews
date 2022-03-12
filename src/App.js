import React from 'react';
import Review from './Review';
import data from './data'
import {useState} from 'react'
function App() {
  const [reviews , setReviews] =useState(data)
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review reviews = {reviews}></Review>
      </section>
    </main>
  )
  
}

export default App;
