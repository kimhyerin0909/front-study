import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './layouts/App';

render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#app')); // App 컴포넌트를 id가 App인 div 태그에 렌더링
