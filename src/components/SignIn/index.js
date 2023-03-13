import React, { useState , useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import Buttons from "../../forms";
import FormInput from "../../forms/FormInput";
import AuthWrapper from "../AuthWrapper";
import { Link, useNavigate} from "react-router-dom";
import { signInUser , signInWithGoogle , resetAllAuthForms } from "../../redux/User/user.actions";

const mapState = ({user})=>({
    signInSuccess: user.signInSuccess
});

const SignIn = props => {
    const {signInSuccess} = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        if(signInSuccess){
            resetForm();
            dispatch(resetAllAuthForms());
            navigate('/');
        }
    }, [signInSuccess, navigate]);


    const resetForm = ()=>{
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signInUser({email, password}));
    }

    const handleGoogleSignIn = () =>{
        dispatch(signInWithGoogle());
    }


    const configAuthWrapper = {
        headline: 'logIn',
    };
    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <Buttons type='submit'>
                        LogIn
                    </Buttons>
                    <div className="socialSignin">
                        <div className="row">
                            <Buttons onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </Buttons>
                        </div>
                    </div>
                    <div className="links">
                        <Link to='/recovery'>
                            Reset Password
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default SignIn;