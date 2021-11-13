import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <div>
      <footer class='footer'>
        <div class='footer-header'>social media presence</div>
        <ul class='footer-list-non-bullet'>
          <li class='footer-list-item-inline'>
            <a
              class='link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/way2nizam'>
              github
            </a>
          </li>
          <li class='footer-list-item-inline'>
            <a
              class='link'
              target='_blank'
              rel='noreferrer'
              href='https://twitter.com/nizamy710'>
              twitter
            </a>
          </li>
          <li class='footer-list-item-inline'>
            <a
              class='link'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/nizamy710/'>
              linkedin{' '}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default footer;
