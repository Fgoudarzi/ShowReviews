import React, { useState, useReducer, useEffect, useMemo } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { decrease, increase, rand } from './mutators';

const Review = ({ reviews }) => {
  const max = reviews.length - 1
  const [index, dispatch] = useReducer(reducer, 0)
  const review = reviews[index]

  function reducer(index, action) {
    return action.mutator(index, max);
  }

  return (
    <article>
      <div className='review' >
        <div className='img-container'>
          <img className='person-img' src={review.image}></img>
        </div>
        <div>
          <h4 className='author'>{review.name}</h4>
          <p className='job'>{review.job}</p>
          <p className='info'>{review.text}</p>
          <div className='btn-container'>
            <button className='prev-btn' onClick={() => dispatch({ mutator: decrease })}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={() => dispatch({ mutator: increase })}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn' onClick={() => dispatch({ mutator: rand })} >surprise me!</button>
        </div>
      </div>
    </article>
  );
};

export default Review;
