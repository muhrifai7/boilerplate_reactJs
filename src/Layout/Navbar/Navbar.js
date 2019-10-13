import {  BrowserRouter, Link} from 'react-router-dom'
import React from 'react';


import Navigation from '../../Navigator/Navigator'
import './Navbar.css'

const Navbar = ()=> {
    return (
        <BrowserRouter>
    <div class="ui secondary  menu">
      <Link class="item active" to='/'>
        Tentang Kami
      </Link>
      <Link class="item" to='/content'>
        Produk Kami
      </Link>
      <Link class="item" to='/footer'>
        Bantuan
      </Link>
      <Link class="item" to='/karir'>
        Karir
      </Link>
      
      <div class="right menu">
      <Link class="item" to='/login'>
        <button class="ui teal basic button">Masuk</button>
      </Link>
      <Link class="item" to='/register'>
        <button class="ui teal button">Daftar</button>
      </Link>
      </div>
      
    </div>
    <Navigation />
    </BrowserRouter>
    )
}

export default Navbar