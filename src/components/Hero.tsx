import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-kid-teal via-kid-blue to-kid-purple min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-kid-yellow rounded-full opacity-20 animate-bounce-gentle"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-kid-pink rounded-full opacity-20 animate-bounce-gentle"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-12 h-12 bg-kid-orange rounded-full opacity-20 animate-bounce-gentle"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-fredoka text-white mb-6 animate-fade-in">
            Мир Профессий
            <span className="block text-kid-yellow">для Детей! 🌟</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-open">
            Откройте своему ребёнку удивительный мир профессий через игру и
            творчество
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="kid-button text-lg px-8 py-4 flex items-center gap-2">
              <Icon name="Play" size={20} />
              Начать путешествие
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold py-4 px-8 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
              <Icon name="Phone" size={20} />
              Узнать больше
            </button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-6">
            <div className="text-center">
              <div className="text-3xl font-fredoka text-kid-yellow mb-2">
                50+
              </div>
              <div className="text-white/80 text-sm">Профессий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-fredoka text-kid-yellow mb-2">
                1000+
              </div>
              <div className="text-white/80 text-sm">Довольных детей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-fredoka text-kid-yellow mb-2">
                5
              </div>
              <div className="text-white/80 text-sm">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-fredoka text-kid-yellow mb-2">
                24/7
              </div>
              <div className="text-white/80 text-sm">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
