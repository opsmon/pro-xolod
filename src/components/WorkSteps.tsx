const steps = [
  ["Заявка", "Клиент пишет во ВКонтакте, мессенджер или звонит."],
  ["Уточнение деталей", "Специалист узнаёт площадь помещения, особенности установки и пожелания клиента."],
  ["Расчёт", "Компания рассчитывает стоимость оборудования и монтажа."],
  ["Выполнение работ", "Мастер приезжает в согласованное время, выполняет работу и проверяет оборудование."],
];

export function WorkSteps() {
  return (
    <section className="section bg-white" id="steps">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-purple">Процесс</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">Как проходит работа</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <article className="relative rounded-[8px] border border-black/10 bg-[#f7f8fb] p-6" key={title}>
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-full brand-gradient text-lg font-extrabold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-extrabold text-ink">{title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
