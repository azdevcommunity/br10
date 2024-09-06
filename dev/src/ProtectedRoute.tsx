import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    const location = useLocation();

    // Eğer localStorage'da token varsa, kullanıcı login olmuştur
    const token = localStorage.getItem('accessToken');

    if (!user && !token) {
        // Kullanıcı giriş yapmamışsa login sayfasına yönlendir, from ile önceki path'i geç
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;