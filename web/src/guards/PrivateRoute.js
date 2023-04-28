import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthStore';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to='/login' replace={true}/>
  } else {
    return <>{children}</>
  }
}

export default PrivateRoute;