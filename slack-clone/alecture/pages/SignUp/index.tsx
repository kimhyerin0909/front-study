/* eslint-disable */

import useInput from '@hooks/useInput';
import React, { useCallback, useState } from 'react';
import {Header, Form, Label, Input, LinkContainer, Button, Error, Success} from './style';
import axios from 'axios';

const SignUp = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, , setPassword] = useInput('');
    const [passwordCheck, , setPasswordCheck] = useInput('');
    const [misMatchError, setMisMatchError] = useState(false);
    const [signupError, setSignupError] = useState(''); // 서버에서 보내주는 에러 메세지
    const [signUpSuccess, setSignUpSuccess] = useState(false); // 회원가입이 성공했는지 못 했는지

    // setPassword, setMisMatchError와 같은 외부함수는 한 번 선언되면 안 바뀜 -> 공식 문서에 있음

    const onChangePassword = useCallback((e) => {
      setPassword(e.target.value);
      setMisMatchError(e.target.value !== passwordCheck);
    }, [passwordCheck]); // passwordCheck이 바뀔 때 실행

    const onChangePasswordCheck = useCallback((e) => {
      setPasswordCheck(e.target.value);
      setMisMatchError(e.target.value !== password);
    }, [password]);

    const onSubmit = useCallback((e) => {
      e.preventDefault();
      if(!misMatchError && nickname) {
        console.log("서버로 회원가입 하기!")
        setSignUpSuccess(false);
        setSignupError("");
        axios.post('/api/users', {
          email, nickname, password
        })
        .then((res) => {
          console.log(res);
          setSignUpSuccess(true);
        })
        .catch((error) => {// 에러가 생겼을 때 
          console.log(error.response.data);
          setSignupError(error.response.data);
        })
        .finally(() => {});
      }
    }, [email,nickname,password,passwordCheck, misMatchError]);

    // useCallback : [] 안에 있는 값들이 바뀔 때까지 기억해놓음. 리렌더링 줄이기

    return (
        <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {misMatchError&& <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signupError && <Error>{signupError}</Error>} {/* error가 계속 바뀔 수 있으니까 */}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </div>
    )
}

export default SignUp;