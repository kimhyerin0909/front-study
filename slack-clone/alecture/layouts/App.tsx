import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

const App = () => {
    return (
        // Switch : 여러 개의 라우터 중에 딱 하나만 보여주는 라우터
        //Redirect : 다른 페이지로 돌려주는 역할
        // -> 주소가 / 일때 /login으로 돌려줌
    <Switch>
        <Redirect exact path="/" to="/login" />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp}/>
    </Switch>
    )
};

export default App;