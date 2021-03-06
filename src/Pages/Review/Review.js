import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [review,setReview]=useReview();
    return (
        <div className=''>
            <h1 className='text-3xl text-center uppercase font-bold text-accent mt-5'>Client Review</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
            {
                review.slice(-6).map(review=><ReviewCard key={review.id } review={review}></ReviewCard>)
            }
        </div>
        </div>
    );
};

export default Review;