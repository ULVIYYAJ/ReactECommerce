import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const useAuth = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser, navigate]);

  return currentUser;
};

export default useAuth;


