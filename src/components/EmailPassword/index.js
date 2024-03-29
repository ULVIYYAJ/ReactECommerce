import React, { useState, useEffect } from "react";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../../forms/FormInput";
import Button from "../../forms";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordStart , resetUserState } from "../../redux/User/user.actions";

const mapState = ({user})=>({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr
})

const EmailPassword = () => {
  const dispatch = useDispatch();
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    if(resetPasswordSuccess){
      dispatch(resetUserState());
      navigate("/login");
    }
  }, [resetPasswordSuccess, navigate]);

  useEffect(()=>{
    if(Array.isArray(userErr) && userErr.length > 0){
      setErrors(userErr);
    }
  }, [userErr]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPasswordStart({email}));
  };

  const configAuthWrapper = {
    headline: "Email Password",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />
          <Button type="submit">Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default EmailPassword;

