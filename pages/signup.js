import sReact from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";
import {InputBox} from "../components/InputBox";

const SignUp = () => {

    return <>
        <Layout>
            <h1 style={styles.h1}>회원가입</h1>
            <InputBox
                name="전화번호"
                placeholder="전화번호 입력하세요"
                type="text"
                detailmessage="고속상황전파체계는 아이디 대신 전화번호로 로그인해요!"
            />
            <InputBox
                name="패스워드"
                placeholder="패스워드 입력하세요"
                type="password"
            />
            <InputBox
                name="이름"
                placeholder="이름을 입력하세요"
                type="text"
            />
            <InputBox
                name="군 분류"
                placeholder=""

            />
            <InputBox
                name="생년월일"
                placeholder=""

            />
        </Layout>
    </>;
};

const styles = {
    h1 : {
        fontSize : 24,
        marginTop : 90,
        marginLeft : 20,

    }

}

export default SignUp;