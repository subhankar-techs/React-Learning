import {} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface User {
  username: string;
  email: string;
  dept: string;
  id: number;
}

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = (location.state as { user?: User } | undefined)?.user;

  if (!user) {
    return (
      <div className="profile-container">
        <h1>Profile Not Found</h1>
        <p>No user data available.</p>
        <button onClick={() => navigate('/')}>Back to Details</button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      
      <div className="profile-details">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Department:</strong> {user.dept}</p>
      </div>
      
      <button onClick={() => navigate('/')}>Back to Details</button>
    </div>
  );
};

export default Profile;