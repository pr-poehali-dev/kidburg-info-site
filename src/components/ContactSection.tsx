import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-kid-purple to-kid-pink"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-fredoka text-white mb-6">
            Свяжитесь с нами! 📞
          </h2>

          <p className="text-xl text-white/90 mb-12">
            Готовы подарить вашему ребёнку незабываемое приключение в мире
            профессий?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Icon
                name="Phone"
                className="mx-auto mb-4 text-kid-yellow"
                size={32}
              />
              <h3 className="font-fredoka text-xl mb-2">Телефон</h3>
              <p className="text-white/90">+7 (495) 123-45-67</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Icon
                name="Mail"
                className="mx-auto mb-4 text-kid-yellow"
                size={32}
              />
              <h3 className="font-fredoka text-xl mb-2">Email</h3>
              <p className="text-white/90">info@kidprofi.ru</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Icon
                name="MapPin"
                className="mx-auto mb-4 text-kid-yellow"
                size={32}
              />
              <h3 className="font-fredoka text-xl mb-2">Адрес</h3>
              <p className="text-white/90">ул. Детская, 123, Москва</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 max-w-md mx-auto">
            <h3 className="font-fredoka text-2xl text-gray-800 mb-6">
              Быстрая запись
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Имя ребёнка"
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kid-pink"
              />
              <input
                type="text"
                placeholder="Возраст"
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kid-pink"
              />
              <input
                type="tel"
                placeholder="Телефон родителя"
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kid-pink"
              />

              <button className="w-full bg-gradient-to-r from-kid-pink to-kid-orange text-white font-bold py-4 px-6 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Записаться на пробное занятие
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
