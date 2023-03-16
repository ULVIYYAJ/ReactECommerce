import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { checkUserIsAdmin } from "../Utils";

const mapState = ({user})=>({
    currentUser: user.currentUser
});

const useAdminAuth = props =>{
    const {currentUser} = useSelector(mapState);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!checkUserIsAdmin(currentUser)){
            navigate("/login");
        }
    }, [currentUser, navigate]);

    return currentUser;
}

export default useAdminAuth;