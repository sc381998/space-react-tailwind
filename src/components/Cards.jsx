import React from 'react';
import PropTypes from 'prop-types';

function Cards({ status, type, capsule_serial, reuse_count, landings, index }) {
  return (
    <div key={index} className='rounded overflow-hidden shadow-lg shadow-soft-xl'>
      <div className='max-w-full px-3 mt-12 text-center lg:mt-0 lg:flex-none'>
        <div className='h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl'>
          <div className='relative flex items-center justify-center h-full'>
            <img
              className='relative z-20 w-full pt-6'
              src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/illustrations/rocket-white.png'
              alt='rocket'
            />
          </div>
        </div>
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{type + ' - ' + capsule_serial}</div>
        <p className='text-gray-700 text-base'>
          {
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil'
          }
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{`#${
          status || 'unknown'
        }`}</span>
        {!!reuse_count && (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #reuse_count
          </span>
        )}
        {!!landings && (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #landings
          </span>
        )}
      </div>
    </div>
  );
}

Cards.propTypes = {
  status: PropTypes.string,
  type: PropTypes.string,
  capsule_serial: PropTypes.string,
  reuse_count: PropTypes.number,
  landings: PropTypes.number,
  index: PropTypes.number,
};

export default Cards;
