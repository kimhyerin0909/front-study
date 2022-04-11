/* eslint-disable */

import useInput from '@hooks/useInput';
import React, { useCallback, useState } from 'react';
import {Header, Form, Label, Input, LinkContainer, Button, Error} from './style';

const SignUp = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, , setPassword] = useInput('');
    const [passwordCheck, , setPasswordCheck] = useInput('');
    const [misMatchError, setMisMatchError] = useState(false);

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
      console.log(email, nickname, password, passwordCheck);
      if(!misMatchError) {
        console.log('서버로 회원 가입 하기!');
      } else {
        alert('비밀번호가 일치하지 않습니다.');
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
          {/* {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>} */}
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