import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface User {
  username: string;
  email: string;
  dept: string;
  id: number;
}

const Edit = () => {

  interface LocationState {
    user?: User;
  }
  const location = useLocation() as { state: LocationState };
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dept: ''
  });

  useEffect(() => {
    if (location.state?.user) {
      const userData = location.state.user as User;
      setUser(userData);
      setFormData({
        username: userData.username,
        email: userData.email,
        dept: userData.dept
      });
    }
  }, [location.state]);

  const handleUpdate = () => {
    if (user) {
      const updatedUser = {
        ...user,
        username: formData.username,
        email: formData.email,
        dept: formData.dept
      };
      navigate('/', { 
        state: { 
          updatedUser,
          action: 'update' 
        },
        replace: true
      });
    }
  };

  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!user) {
    return (
      <div className="edit-container">
        <h1>Edit User</h1>
        <p>No user data available for editing.</p>
        <button onClick={() => navigate('/')}>Back to Details</button>
      </div>
    );
  }

  return (
    <div className="edit-container">
      <h1>Edit User</h1>
      
      <div className="edit-form">
        <div className="input-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={Change} />
        </div>
        
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={Change} />
        </div>
        
        <div className="input-group">
          <label>Dept:</label>
          <input type="text" name="dept" value={formData.dept} onChange={Change}  />
        </div>
        
        <button onClick={handleUpdate}>UPDATE</button>
        <button onClick={() => navigate('/')} className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default Edit;