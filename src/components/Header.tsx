import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-kid-pink to-kid-purple rounded-full flex items-center justify-center">
              <Icon name="Briefcase" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-fredoka text-kid-purple">КидПрофи</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-kid-pink font-semibold transition-colors"
            >
              Главная
            </a>
            <a
              href="#professions"
              className="text-gray-700 hover:text-kid-pink font-semibold transition-colors"
            >
              Профессии
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-kid-pink font-semibold transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-kid-pink font-semibold transition-colors"
            >
              Контакты
            </a>
          </nav>

          <button className="kid-button hidden md:block">Записаться</button>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-kid-pink font-semibold"
            >
              Главная
            </a>
            <a
              href="#professions"
              className="block py-2 text-gray-700 hover:text-kid-pink font-semibold"
            >
              Профессии
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-kid-pink font-semibold"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-kid-pink font-semibold"
            >
              Контакты
            </a>
            <button className="kid-button w-full mt-4">Записаться</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
