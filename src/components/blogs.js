import React from 'react';
import Header from './header';
import Footer from './footer';

const blogs = () => {
  return (
    <div>
      <Header />
      <div class='projects-container'>
        <div class='title-heading'>
          <h1>
            Read my <span class='title-heading-inverted'>blogs</span>
          </h1>
        </div>

        <ul class='projects-list-non-bullet'>
          <li>
            <div class='w-list'>
              <h1>How to get started with React Router ?</h1>
              <small>written by Nizam, 25th May, 2021</small>
              <p>
                In this tutorial, we're going to learn the basics of routing in
                React by building navigation for a demo website.
              </p>
              <a
                class='link link-primary'
                href='https://way2nizam.hashnode.dev/how-to-get-started-with-react-router'
                target='_blank'
                rel='noreferrer'>
                Read More
              </a>
            </div>
          </li>

          <li>
            <div class='ow-list'>
              <h1>React useState Hook - A Beginner Guide</h1>
              <small>written by Nizam, 31st May, 2021</small>
              <p>
                Hooks are a new addition in React 16.8. Hooks let you use state
                and other React features without writing a class.
              </p>
              <a
                class='link link-primary'
                href='https://way2nizam.hashnode.dev/react-usestate-hook'
                target='_blank'
                rel='noreferrer'>
                Read More
              </a>
            </div>
          </li>

          <li>
            <div class='w-list'>
              <h1>React useEffect Hook - A Beginner Guide</h1>
              <small>written by Nizam, 31st May, 2021</small>
              <p>
                The Effect Hook lets you perform side effects in function
                components. useEffect hook can be imported just like useState
              </p>
              <a
                class='link link-primary'
                href='https://way2nizam.hashnode.dev/react-useeffect'
                target='_blank'
                rel='noreferrer'>
                Read More
              </a>
            </div>
          </li>

          <li>
            <div class='ow-list'>
              <h1>1st - Sample Blog</h1>
              <small>written by Nizam, 15th April, 2021</small>
              <p>It is a first sample custom blog hosted on netlify</p>
              <a class='link link-primary' href='/first-sample-blog.html'>
                Read More
              </a>
            </div>
          </li>

          <li>
            <div class='w-list'>
              <h1>2nd - Sample Blog</h1>
              <small>written by Nizam, 15th April, 2021</small>
              <p>It is a second sample custom blog hosted on netlify</p>
              <a class='link link-primary' href='/second-sample-blog.html'>
                Read More
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default blogs;
