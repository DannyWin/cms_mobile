import React from 'react';

export const CustomIcon = ({ type='', className = 'icon',  ...restProps }) => (
    <svg className={`${className}`} {...restProps}>
      <use xlinkHref={type} /> 
    </svg>
  );