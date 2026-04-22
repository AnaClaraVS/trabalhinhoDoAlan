import { useNavigate } from 'react-router-dom';

export default function useNavigation() {
  const navigate = useNavigate();

  return {
    goToHome: () => navigate('/'),
    goToCart: () => navigate('/cart'),
    goToProducts: () => navigate('/products'),
    goToLogin: () => navigate('/login'),
    goToProduct: (id: string) => navigate(`/product/${id}`),
    goToCheckout: () => navigate('/checkout'),
    goBack: () => navigate(-1),
  };
}