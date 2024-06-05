import { Link } from 'react-router-dom';

const NotFoundScreen = () => (
  <div className='full-height flex flex-column flex-center'>
    <img
      src={`${process.env.PUBLIC_URL}/images/logo.png`}
      alt='Crypto Exchange'
      draggable='false'
      className='logo-404'
    />
    <h1 className='title-404'>442</h1>
    <p className='paragraph-404'>Site under construction. Please be pacient</p>
    <Link to='/' className='button button-purple button-medium'>
      Welcome Page 
    </Link>
  </div>
);

export default NotFoundScreen;
