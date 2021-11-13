import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const header = () => {
  return (
    <div>
      <div className='navbar'>
        <header class='nav-brand'>
          <a href='/'>iAmDeveloper</a>
        </header>
        <ul class='navbar-list-non-bullet'>
          <li>
            <Link class='link' to='/'>
              Home
            </Link>
          </li>

          <li>
            <Link class='link' to='/mark15'>
              Projects
            </Link>
          </li>

          <li>
            <Link class='link' to='/blogs'>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
