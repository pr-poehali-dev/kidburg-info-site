import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-fredoka text-gray-800 mb-6">
              О КидПрофи 🌈
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Мы создали уникальное пространство, где дети от 4 до 16 лет могут
              погрузиться в мир взрослых профессий через игру, творчество и
              обучение.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-kid-pink/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Heart" className="text-kid-pink" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Безопасная среда
                  </h4>
                  <p className="text-gray-600">
                    Все активности проходят под присмотром опытных педагогов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-kid-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Star" className="text-kid-teal" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Развивающие программы
                  </h4>
                  <p className="text-gray-600">
                    Каждая профессия даёт новые знания и практические навыки
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-kid-yellow/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Users" className="text-kid-yellow" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Командная работа
                  </h4>
                  <p className="text-gray-600">
                    Дети учатся работать в команде и общаться
                  </p>
                </div>
              </div>
            </div>

            <button className="kid-button flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              Записаться на экскурсию
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-kid-purple to-kid-pink rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Icon name="Clock" className="mx-auto mb-2" size={32} />
                  <div className="font-fredoka text-2xl mb-1">2-4 часа</div>
                  <div className="text-sm opacity-90">Длительность сессии</div>
                </div>

                <div className="text-center">
                  <Icon name="Users" className="mx-auto mb-2" size={32} />
                  <div className="font-fredoka text-2xl mb-1">8-12</div>
                  <div className="text-sm opacity-90">Детей в группе</div>
                </div>

                <div className="text-center">
                  <Icon name="Award" className="mx-auto mb-2" size={32} />
                  <div className="font-fredoka text-2xl mb-1">Сертификат</div>
                  <div className="text-sm opacity-90">После завершения</div>
                </div>

                <div className="text-center">
                  <Icon name="Gift" className="mx-auto mb-2" size={32} />
                  <div className="font-fredoka text-2xl mb-1">Подарки</div>
                  <div className="text-sm opacity-90">За участие</div>
                </div>
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-kid-orange rounded-full opacity-30 animate-bounce-gentle"></div>
            <div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-kid-green rounded-full opacity-30 animate-bounce-gentle"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
