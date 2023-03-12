import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return (
    <div className="dashboard">
      {currentUser && (
        <div className="dashboard">
          <h2>You're logged in!</h2>
          <h2>Welcome {currentUser.displayName}!</h2>
          <p>Your email: {currentUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


