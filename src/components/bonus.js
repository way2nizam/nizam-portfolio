import React from 'react';
import Header from './header';
import Footer from './footer';

const bonus = () => {
  return (
    <div>
      <Header />
      <div className='projects-container'>
        <div class='title-heading'>
          <h1>
            check out <span class='title-heading-inverted'>my bonus work </span>
            projects
          </h1>
        </div>

        <ul class='projects-list-non-bullet'>
          <li>
            <div class='w-list'>
              <h1>were you born on a leap year?</h1>
              <a
                class='link link-primary'
                href='https://birthday-leap-year-checker.way2nizam.repl.co'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://replit.com/@way2nizam/birthday-leap-year-checker'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>
          <li>
            <div class='ow-list'>
              <h1>is your birth day a prime number?</h1>
              <a
                class='link link-primary'
                href='https://birthday-prime-number.way2nizam.repl.co'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://replit.com/@way2nizam/birthday-prime-number#index.html'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>
        </ul>
        <div>
          <center>
            <span>Note: </span>All other bonus exercies have been done with
            respective projects.
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default bonus;
