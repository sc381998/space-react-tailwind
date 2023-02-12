import React from 'react';
import LandingImg from '../assets/images/spacex_landing.jpg';

function Landing() {
  return (
    <div className='relative'>
      <div className='section'>
        <p className='one'>looks like you are</p>
        <p className='two'>lost in space</p>
        <img src='http://salehriaz.com/404Page/img/earth.svg' alt='' className='earth' />
        <img src='/rocket.png' alt='' className='rocket' />
        <img src='http://salehriaz.com/404Page/img/moon.svg' alt='' className='moon' />
        <img src='http://salehriaz.com/404Page/img/astronaut.svg' alt='' className='ast' />
      </div>
      <img style={{ width: '100%' }} src={LandingImg} alt='' />
      <header className='w-full absolute top-0 text-gray-700 body-font border-b border-gray-200'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left'>
          <a
            className='text-white flex title-font font-medium items-center mb-4 md:mb-0'
            href='https://tailblocks.cc'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='w-10'
              src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/illustrations/rocket-white.png'
            />
            <span className='ml-3 text-xl'>ROCKETS</span>
          </a>
          <nav className='position right-0 md:ml-auto flex flex-wrap items-center text-base justify-end'>
            <a
              href='https://www.spacex.com/vehicles/falcon-9/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              FALCON9
            </a>
            <a
              href='https://www.spacex.com/vehicles/falcon-heavy/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              FALCON HEAVY
            </a>
            <a
              href='https://www.spacex.com/vehicles/dragon/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              DRAGON
            </a>
            <a
              href='https://www.spacex.com/vehicles/starship/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              STARSHIP
            </a>
            <a
              href='https://www.spacex.com/vehicles/human-spaceflight/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              HUMAN SPACEFLIGHT
            </a>
            <a
              href='https://www.spacex.com/vehicles/rideshare/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              RIDESHARE
            </a>
            <a
              href='https://www.spacex.com/vehicles/starshield/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              STARSHIELD
            </a>
            <a
              href='https://www.spacex.com/vehicles/starlink/'
              className='mr-5 text-white hover:text-gray-400'
              target='_blank'
              rel='noreferrer'
            >
              STARLINK
            </a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700 body-font'>
        <div className='absolute text-white top-48 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900'>
              Expand beyound
              <br className='hidden lg:inline-block' />
              the universe
            </h1>
            <p className='w-96 mb-8 leading-relaxed'>
              {
                "Minimum Effort. Maximum Results. Our servers are in India, one of the world's most connected country. Stable network and round the clock assistance"
              }
            </p>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'></div>
        </div>
      </section>
    </div>
  );
}
export default Landing;
