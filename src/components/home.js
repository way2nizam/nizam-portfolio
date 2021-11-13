import React from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import './home.css';

const home = () => {
  return (
    <div>
      <Header />

      <header className='hero'>
        <img
          src='https://nizam-portfolio-24x7.netlify.app/images/code_thinking.svg'
          alt='Code Thinking'></img>
      </header>

      <div className='home-container'>
        <section className='section'>
          <div className='container'>
            <h1>
              <span>Hi there! </span>I'm Nizam
            </h1>
            <p>
              I love to work with JavaScript and ReactJS and also created good
              projects like PhotoGram, Movie Recommender. I like the frontend
              more than the backend.
            </p>
          </div>
        </section>

        <section className='section ow'>
          <div className='container'>
            <h1 className='heading'>technologies</h1>

            <div className='skill-sets'>
              <ul>
                <li>
                  <span>Technical Skills</span> - HTML, CSS, Git, JavaScript,
                  ReactJS and Web
                </li>
                <li>
                  <span>Hosting Platforms</span> - Linux, Macintosh, Windows
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h1 className='heading'>projects </h1>
            <p>
              I like to showcase my work and you can see my projects hosted
              online.
            </p>
            <div className='menu-list'>
              <Link className='menu-link' to='/mark15'>
                Mark 15
              </Link>

              <Link className='menu-link' to='/bonus-work'>
                Bonus
              </Link>

              <Link className='menu-link' to='/tminus5'>
                T-Minus 5
              </Link>

              <Link className='menu-link' to='/projects'>
                Other Projects
              </Link>
            </div>
          </div>
        </section>

        <section className='section ow'>
          <div className='container'>
            <h1 className='heading'>blogs</h1>
            <p>
              I'm also working on some technicals and non technical blogs. I
              like to document my journey of learning.
            </p>
            <Link className='menu-link' to='/blogs'>
              Read Blogs
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default home;
