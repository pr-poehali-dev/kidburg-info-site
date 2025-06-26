import Icon from "@/components/ui/icon";

const professions = [
  {
    id: 1,
    title: "Мэр города",
    description: "Управляем городом и принимаем важные решения",
    icon: "Crown",
    color: "kid-pink",
    bgColor: "bg-kid-pink/10",
  },
  {
    id: 2,
    title: "Банкир",
    description: "Работаем с деньгами и выдаем кредиты горожанам",
    icon: "Banknote",
    color: "kid-orange",
    bgColor: "bg-kid-orange/10",
  },
  {
    id: 3,
    title: "Полицейский",
    description: "Защищаем порядок и безопасность в городе",
    icon: "Shield",
    color: "kid-teal",
    bgColor: "bg-kid-teal/10",
  },
  {
    id: 4,
    title: "Журналист",
    description: "Создаем новости и берем интервью у горожан",
    icon: "Newspaper",
    color: "kid-purple",
    bgColor: "bg-kid-purple/10",
  },
  {
    id: 5,
    title: "Автомеханик",
    description: "Ремонтируем автомобили в городском автосервисе",
    icon: "Wrench",
    color: "kid-yellow",
    bgColor: "bg-kid-yellow/10",
  },
  {
    id: 6,
    title: "Радиоведущий",
    description: "Ведем передачи на городском радио",
    icon: "Radio",
    color: "kid-green",
    bgColor: "bg-kid-green/10",
  },
];

const ProfessionsSection = () => {
  return (
    <section id="professions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka text-gray-800 mb-4">
            Профессии КидБурга 🏢
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            В нашем городе более 30 профессий! Каждый ребенок может стать кем
            угодно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professions.map((profession) => (
            <div key={profession.id} className="profession-card group">
              <div
                className={`w-16 h-16 ${profession.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:animate-wiggle`}
              >
                <Icon
                  name={profession.icon as any}
                  className={`text-${profession.color}`}
                  size={32}
                />
              </div>

              <h3 className="text-2xl font-fredoka text-gray-800 mb-3">
                {profession.title}
              </h3>

              <p className="text-gray-600 mb-6">{profession.description}</p>

              <button
                className={`bg-${profession.color} text-white font-semibold py-2 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
              >
                Устроиться на работу
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="kid-button text-lg px-8 py-4 flex items-center gap-2 mx-auto">
            <Icon name="Building" size={20} />
            Карта города
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionsSection;
