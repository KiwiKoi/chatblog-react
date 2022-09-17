import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({
  isAuth,
  children,
}: {
  isAuth: boolean;
  children: JSX.Element;
}) {
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={{ pathname: "/login" }} replace state={{ location }} />
    );
  }
  return children;
}

export default ProtectedRoute;
