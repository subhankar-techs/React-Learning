import {} from 'react';
import { Navigate } from 'react-router-dom';

interface Props{
    isSignedIn: boolean;
    children: React.ReactNode;
}

const Protected = (props: Props) => {
    if (!props.isSignedIn) {
        return <Navigate to="/login" />;
    }
    return props.children;
};
export default Protected;