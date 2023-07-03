import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav className='nav'>
        <h1>Phone<span>Hub</span></h1>
        <main>
            <HashLink to={'#home'}>Home</HashLink>
            <HashLink to={'#brands'}>Brands</HashLink>
            <HashLink to={'#about'}>About</HashLink>
            <HashLink to={'#contact'}>Contact</HashLink>
        </main>
    </nav>
  )
}

export default Navbar;