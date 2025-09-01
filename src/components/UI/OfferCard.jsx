import React from 'react';
import PropTypes from 'prop-types';

const OfferItem = ({ imageSrc, alt, title, description }) => (
  <div className="flex flex-col items-center rounded-lg ">
    <img src={imageSrc} alt={alt} className="w-[524px] h-[284px] object-cover rounded-4xl mb-4" />
    <h3 className="text-2xl font-semibold mb-2 text-left px-16">
        {title}{' '}
        <span className="font-normal">({description})</span>
        </h3>
  </div>
);

OfferItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OfferItem;
