declare module 'react-rating-stars-component' {
    import React from 'react';
  
    interface RatingProps {
      count: number;
      onChange: (rating: number) => void;
      size?: number;
      color?: string;
      activeColor?: string;
      value?: number;
    }
  
    const RatingStars: React.FC<RatingProps>;
  
    export default RatingStars;
  }
  