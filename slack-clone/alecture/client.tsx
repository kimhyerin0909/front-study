import React from 'react';
import { render } from 'react-dom';

import App from './layouts/App';

render(<App />, document.querySelector('#app')); // App 컴포넌트를 id가 App인 div 태그에 렌더링
