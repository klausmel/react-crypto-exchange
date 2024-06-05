// import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
// import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';

// const SigninScreen = () => {
//   const navigate = useNavigate();

//   const [formValues, setFormValues] = useState({
//     phone: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     navigate('/market');
//   };

//   return (
//     <MainLayout>
//       <div className='flex flex-center full-height'>
//         <div className='login no-select'>
//           <Box>
//             <div className='box-vertical-padding box-horizontal-padding'>
//               <div>
//                 <div className='form-logo center'>
//                   <img
//                     src={`${process.env.PUBLIC_URL}/images/logo.png`}
//                     alt='Crypto Exchange'
//                     draggable='false'
//                   />
//                 </div>
//                 <h1 className='form-title center'>Login</h1>
//                 <p className='form-desc center'>
//                   Please find in the address bar of your browser{' '}
//                   <strong>https://pro.cryptoexchange.com</strong> Make sure it is written.
//                 </p>
//                 <form className='form' onSubmit={handleSubmit} noValidate>
//                   <div className='form-elements'>
//                     <div className='form-line'>
//                       <div className='full-width'>
//                         <label htmlFor='phone'>Phone number</label>
//                         <FormInput
//                           type='text'
//                           name='phone'
//                           value={formValues.phone}
//                           placeholder='Phone number'
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div className='form-line'>
//                       <div className='full-width'>
//                         <label htmlFor='password'>Password</label>
//                         <FormInput
//                           type='password'
//                           name='password'
//                           value={formValues.password}
//                           placeholder='Password'
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div className='form-line'>
//                       <div className='full-width right'>
//                         <Link to='/members/forgot-password'>Forgot password</Link>
//                       </div>
//                     </div>
//                     <div className='form-line'>
//                       <div className='buttons'>
//                         <FormButton type='submit' text='Log in' onClick={handleSubmit} />
//                       </div>
//                     </div>
//                     <div className='form-line'>
//                       <div className='center'>
//                         <p>
//                         If you do not have an account <Link to='/members/signup'>new account</Link> Create.                        </p>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </Box>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

const SigninScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate('/market');
  };

  return (
    <MainLayout>
      <div className='flex flex-center full-height'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt='Crypto Exchange'
                    draggable='false'
                  />
                </div>
                <h1 className='form-title center'>Welcome!!</h1>
                <p className='form-desc center'>
                This is a web site to guide you in your investments. Please keep in mind that you should do your own analysis before investing. And do not invest money that you cannot lose. 
                </p>

                <br /> 

                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='- Lets Start -' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                        Find Us in <Link to='https://github.com/sleuoth-hof/i2024-02'>Github</Link></p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default SigninScreen;
