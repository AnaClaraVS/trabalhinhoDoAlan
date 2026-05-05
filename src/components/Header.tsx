import { useState } from 'react';
import useNavigation from '../hooks/useNavigation';

interface HeaderProps {
  cartItemCount: number;
}

export default function Header({ cartItemCount }: HeaderProps) {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { goToHome, goToCart, goToProduct, goToCheckout } = useNavigation();

  return (
    <header className="bg-[#81A6C6] text-white p-4 shadow-md">
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
          <span className="text-xl font-bold">Essencial Wear</span>
        </div>

        {/* Botão do Menu */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-[#AACDDC] text-gray-800 hover:bg-[#9BC3D3] p-2 rounded-lg transition-colors"
          >
            ☰ Menu
          </button>

          {/* Lista de Opções */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#F3E3D0] rounded-lg shadow-lg overflow-hidden z-50">
              <button 
                onClick={() => {
                  goToHome();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-[#D2C4B4]"
              >
                 Home
              </button>
              
              <button 
                onClick={() => {
                  goToProduct("1");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-[#D2C4B4]"
              >
                 Produtos
              </button>
              
              <button 
                onClick={() => {
                  goToCart();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-[#D2C4B4]"
              >
                 Carrinho
                {cartItemCount > 0 && (
                  <span className="w-full text-left px-4 py-2 text-gray-800 hover:bg-[#D2C4B4]">
                    {cartItemCount}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => {
                  goToCheckout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-[#D2C4B4]"
              >
                 Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}