import { auth } from "../components/Sign-In/firebaseConfig";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
    if (!auth.currentUser) {
        return <Navigate to="/signin" />;
    }
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};


export default ProtectedRoute;