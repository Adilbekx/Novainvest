const staff = [
  {
    name: 'Ибраева Карлыгаш Болатовна',
    position: 'Генеральный директор',
    email: 'a@eln.kz',
    phone: '+7 (777) 777-77-77',
    photo: 'assets/gendir.png'
  },
  {
    name: 'Оспанова Гульнара Амангельдиевна',
    position: 'Главная медсестра',
    email: 'a@eln.kz',
    phone: '+7 (777) 777-77-77',
    photo: 'assets/gendir.png'
  },
  {
    name: 'Нургалиева Айнаш Калыбековна',
    position: 'Менеджер сестринского дела',
    email: 'a@eln.kz',
    phone: '+7 (777) 777-77-77',
    photo: 'assets/gendir.png'
  },
  {
    name: 'A.A',
    position: 'Главный врач',
    email: 'a@eln.kz',
    phone: '+7 (777) 777-77-77',
    photo: 'assets/gendir.png'
  },
  {
    name: 'A.A',
    position: 'Главный врач',
    email: 'a@eln.kz',
    phone: '+7 (777) 777-77-77',
    photo: 'assets/gendir.png'
  },
  {
    name: 'A.A',
    position: 'Главный врач',
    email: 'a@eln.kz',
    phone: '+7 (777) 777-77-77',
    photo: 'assets/gendir.png'
  },
  
 
];

export default function Administration() {
  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center text-[#20aa99] mb-14 tracking-tight">
        Администрация клиники
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {staff.map((person, index) => (
          <div
            key={index}
            className="bg-white/70 border border-gray-200 rounded-2xl shadow-xl backdrop-blur-sm p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-[#20aa99]">{person.position}</h3>
              <p className="text-gray-900 font-medium">{person.name}</p>
              <div className="text-sm text-gray-600 mt-3 space-y-1">
                <p>
                  <span className="inline-block mr-2">📧</span>
                  <a href={`mailto:${person.email}`} className="hover:text-[#20aa99] underline">
                    {person.email}
                  </a>
                </p>
                <p>
                  <span className="inline-block mr-2">☎️</span>
                  <a href={`tel:${person.phone}`} className="hover:text-[#20aa99] underline">
                    {person.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

