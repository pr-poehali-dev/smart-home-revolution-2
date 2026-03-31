const services = [
  {
    title: "Маски и чистки",
    description: "Глубокое очищение, пилинги и питательные маски. Возвращаем коже сияние и свежесть после первой процедуры.",
  },
  {
    title: "Лазерная эпиляция",
    description: "Навсегда забудьте о нежелательных волосах. Безопасно, быстро и без боли на всех типах кожи.",
  },
  {
    title: "Инъекционная косметология",
    description: "Биоревитализация, мезотерапия, ботулинотерапия. Натуральный результат без следов процедуры.",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a31ea8d1-8343-4881-bc3f-27062f99e56b/files/049bcf3a-b83b-481d-bde8-6e5ff26ab1da.jpg"
          alt="Косметологическая процедура"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-rose-400">Наши услуги</h3>
        <p className="text-3xl lg:text-5xl mb-10 text-neutral-900 leading-tight font-bold">
          Профессиональный уход за вашей кожей
        </p>
        <div className="flex flex-col gap-8 mb-10">
          {services.map((s) => (
            <div key={s.title} className="border-l-2 border-rose-300 pl-5">
              <h4 className="text-lg font-semibold text-neutral-900 mb-1">{s.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <button className="bg-neutral-900 text-white border border-neutral-900 px-8 py-3 text-sm transition-all duration-300 hover:bg-rose-400 hover:border-rose-400 cursor-pointer w-fit uppercase tracking-widest">
          Записаться
        </button>
      </div>
    </div>
  );
}
