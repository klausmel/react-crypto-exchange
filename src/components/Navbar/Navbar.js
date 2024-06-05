import { memo } from 'react';
import { Link } from 'react-router-dom';

import NavbarButton from './NavbarButton';

const Navbar = memo(() => (
  <nav className='navbar-inner no-select'>
    <div className='logo'>
      <Link to='/market'>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt='Crypto Exchange'
          draggable='false'
        />
      </Link>
    </div>
    <h3>Main menu</h3>
    <ul>
      {/* <li>
        <NavbarButton url='/dashboard' icon='dashboard' title='Deposit-check' />
      </li>
      <li>
        <NavbarButton url='/wallet' icon='account_balance_wallet' title='My wallet' />
      </li>
      <li>
        <NavbarButton url='/transactions' icon='sync' title='Transactions' />
      </li>
      <li>
        <NavbarButton url='/trading' icon='paid' title='Commerce' />
      </li> */}
      <li>
        <NavbarButton url='/exchange' icon='account_balance' title='Exchange' />
      </li>
      <li>
        <NavbarButton url='/capital' icon='equalizer' title='Market' />
      </li>
    </ul>
    <h3>Social</h3>
    <ul>
      <li>
        <NavbarButton url='/members' icon='account_circle' title='Profile' />
      </li>
      {/* <li>
        <NavbarButton url='/contacts' icon='contacts' title='Contacts' />
      </li>
      <li>
        <NavbarButton url='/messages' icon='chat' title='Messages' />
      </li> */}
      <li>
        <NavbarButton url='/settings' icon='settings' title='Settings' />
      </li>
    </ul>

<div className='copyright'>
      <strong>Group Two</strong>
      <p>
        2024 &copy; Interdisciplinary
        <br />
        <br />
        Made with <span>❤</span> by Klaus
      </p>
    </div>
  </nav>
));

export default Navbar;
