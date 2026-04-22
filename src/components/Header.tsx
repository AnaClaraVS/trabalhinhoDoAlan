import { useState } from 'react';
import useNavigation from '../hooks/useNavigation';

interface HeaderProps {
  cartItemCount: number;
}

export default function Header({ cartItemCount }: HeaderProps) {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { goToHome, goToCart, goToProducts, goToLogin } = useNavigation();

  return (
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => {
            goToHome();
            setIsMenuOpen(false);
          }}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img 
            src="/logo.png" 
            alt="Logo da loja" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">Nome da loja</span>
        </div>

        {/* Botão do Menu */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-slate-700 hover:bg-slate-600 p-2 rounded-lg transition-colors"
          >
            ☰ Menu
          </button>

          {/* Lista de Opções */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50">
              <button 
                onClick={() => {
                  goToHome();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-slate-100 transition-colors"
              >
                 Home
              </button>
              
              <button 
                onClick={() => {
                  goToProducts();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-slate-100 transition-colors"
              >
                 Produtos
              </button>
              
              <button 
                onClick={() => {
                  goToCart();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-slate-100 transition-colors"
              >
                 Carrinho
                {cartItemCount > 0 && (
                  <span className="ml-2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {cartItemCount}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => {
                  goToLogin();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-slate-100 transition-colors"
              >
                 Login
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}