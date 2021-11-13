import React from 'react';
import Header from './header';
import Footer from './footer';

const tminus5 = () => {
  return (
    <div>
      <Header />
      <div class='projects-container'>
        <div class='title-heading'>
          <h1>
            check out <span class='title-heading-inverted'>my t-minus-5 </span>
            projects
          </h1>
        </div>

        <ul class='projects-list-non-bullet'>
          <li>
            <div class='w-list'>
              <h1>Cocktail App</h1>
              <small>May, 2021</small>
              <p>
                This is Reactjs web app used to search your favorite cocktail
                drinks.
              </p>
              <a
                class='link link-primary'
                href='https://cocktail-app-24x7.netlify.app/'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://github.com/way2nizam/cocktails'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>

          <li>
            <div class='ow-list'>
              <h1>Movies App</h1>
              <small>May, 2021</small>
              <p>
                Looking for the most talked about movies from the around the
                world? Find Here{' '}
              </p>
              <a
                class='link link-primary'
                href='https://movies-app-24x7.netlify.app/'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://github.com/way2nizam/movies-app'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>

          <li>
            <div class='w-list'>
              <h1>Chat App</h1>
              <small>May, 2021</small>
              <p>
                Chat clone app is a conversation between two persons inside an
                app
              </p>
              <a
                class='link link-primary'
                href='https://chat-app24x7.netlify.app/'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://github.com/way2nizam/chat-clone'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>

          <li>
            <div class='ow-list'>
              <h1>Evernote Clone</h1>
              <small>May, 2021</small>
              <p>
                Evernote clone is an web app designed for note taking,
                organizing, task management created using create-react-app and
                firebase.
              </p>
              <a
                class='link link-primary'
                href='https://evernote24x7.netlify.app/'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://github.com/way2nizam/online-evernote-clone'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>

          <li>
            <div class='w-list'>
              <h1>PhotoGram</h1>
              <small>April, 2021</small>
              <p>
                A grid based photo gallery web site created using{' '}
                <strong>create-react-app, google firebase</strong>
                and
                <strong>framer motion library</strong>
                library.
              </p>
              <a
                class='link link-primary'
                href='https://photogram24x7.netlify.app/'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://github.com/way2nizam/photogram'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>

          <li>
            <div class='ow-list'>
              <h1>Todo App</h1>
              <small>April, 2021</small>
              <p>
                This is a very basic todo app, store todo on local storage,
                working very hard on it to add more feature.
              </p>
              <a
                class='link link-primary'
                href='https://nizam-todo-app.netlify.app/'
                target='_blank'
                rel='noreferrer'>
                Live Project
              </a>
              <a
                class='link link-secondary'
                href='https://github.com/way2nizam/todo-app'
                target='_blank'
                rel='noreferrer'>
                View Source
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default tminus5;
