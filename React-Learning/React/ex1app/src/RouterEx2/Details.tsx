import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface User {
  username: string;
  email: string;
  dept: string;
  id: number;
}

interface LocationState {
  action?: string;
  updatedUser?: User;
}

const Details = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const location = useLocation() as { state: LocationState };

  useEffect(() => {
    if (location.state?.action === 'update' && location.state?.updatedUser) {
      const updatedUser = location.state.updatedUser as User;
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === updatedUser.id ? updatedUser : user
        )
      );
    
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  const AddUser = () => {
    if (username && email && dept) {
      const newUser: User = {
        username,
        email,
        dept,
        id: Date.now(),
      };
      setUsers([...users, newUser]);
      setUsername('');
      setEmail('');
      setDept('');
    }
  };

  const ViewProfile = (user: User) => {
    navigate('/profile', { state: { user } });
  };

  const EditUser = (user: User) => {
    navigate('/edit', { state: { user } });
  };

  return (
    <div className="details-container">
      <h1>User Details</h1>
      
      <div className="input-section">
        <h2>Add New User</h2>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username"/>
        </div>
        
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
        </div>
        
        <div className="input-group">
          <label>Dept:</label>
          <input type="text" value={dept} onChange={(e) => setDept(e.target.value)} placeholder="Enter department"/>
        </div>
        
        <button onClick={AddUser}>ADD</button>
      </div>
      
      <div className="table-section">
        <h2>User Listing</h2>
        {users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Dept</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.dept}</td>
                  <td>
                    <button 
                      onClick={() => ViewProfile(user)}
                      className="view-link"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => EditUser(user)}
                      className="edit-link"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Details;