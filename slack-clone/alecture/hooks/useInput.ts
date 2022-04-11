// 커스텀 훅
import { Dispatch, SetStateAction, useCallback, useState } from "react";

// ts는 매개변수 타입을 잘 인식 못함 -> 만약 어떤 타입이 들어갈지 모른다면 제네릭이나 any 사용
// 제네릭 추천
// any를 쓴다면 코드는 문제 없지만 만약 string이 들어왔을 때 다른 any 타입이 string으로 인식 안 됨

const useInput = <T = any>(initialData:T) : [T, (e:any) => void, Dispatch<SetStateAction<T>>]=> {
    const [value, setValue] = useState(initialData);
    const handler = useCallback((e : any) => {
        setValue(e.target.value);
    }, []);

    return [value, handler, setValue];
}

export default useInput;