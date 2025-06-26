import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-kid-pink to-kid-purple rounded-full flex items-center justify-center">
                <Icon name="Briefcase" className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-fredoka">КидПрофи</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Мир профессий для детей - место, где мечты становятся реальностью
              через игру и обучение.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Профессии</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  Доктор
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  Повар
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  Пожарный
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  Учитель
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  Программы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-kid-pink transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Следите за нами</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-kid-pink rounded-full flex items-center justify-center hover:bg-kid-orange transition-colors"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-kid-teal rounded-full flex items-center justify-center hover:bg-kid-blue transition-colors"
              >
                <Icon name="Phone" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-kid-purple rounded-full flex items-center justify-center hover:bg-kid-pink transition-colors"
              >
                <Icon name="Mail" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 КидПрофи. Все права защищены. Создано с ❤️ для детей.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
