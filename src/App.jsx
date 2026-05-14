import { ExerciseHowToSection } from './ExerciseHowToSection.jsx'

const workouts = [
  {
    day: 'День 1',
    headline: 'Ноги + ягодицы',
    sections: [
      {
        heading: 'Разминка',
        bullets: [
          'Ходьба на дорожке — 10 минут',
          'Суставная разминка (голеностоп, колени, таз, плечи)',
        ],
      },
      {
        heading: 'Силовая часть (3×15)',
        exercises: [
          {
            title: 'Жим ногами в тренажёре',
            cues: ['10–20 кг', 'спина плотно прижата', 'колени не выпрямлять до конца'],
          },
          {
            title: 'Ягодичный мост',
            cues: ['сначала без веса', 'потом лёгкий диск', 'поясницу не перегибать, движение из ягодиц'],
          },
          {
            title: 'Сгибание ног лёжа',
            cues: ['10–20 кг', 'без рывков'],
          },
          {
            title: 'Разведение/Сведение ног в тренажёре',
            cues: ['медленно, без «бросков» веса'],
          },
        ],
      },
      {
        heading: 'Пресс',
        bullets: ['Скручивания на пресс — 3×25', 'Планка — 3 подхода по 30 секунд / ноги кроль'],
      },
      {
        heading: 'Кардио',
        bullets: ['Ходьба 15 минут (умеренный темп)'],
      },
    ],
  },
  {
    day: 'День 2',
    headline: 'Спина + задняя поверхность + лёгкий верх',
    accent: 'Этот день важен — он «подтягивает» тело и ускоряет жиросжигание',
    sections: [
      {
        heading: 'Разминка',
        bullets: ['Дорожка 10 минут', 'Разминка плеч и спины'],
      },
      {
        heading: 'Силовая часть (3×15)',
        exercises: [
          {
            title: 'Тяга верхнего блока к груди',
            cues: ['лёгкий вес', 'тянуть грудью, не руками'],
          },
          {
            title: 'Тяга горизонтального блока',
            cues: ['спина ровная', 'не отклоняться назад сильно'],
          },
          {
            title: 'Гиперэкстензия (спина)',
            cues: ['без веса или с минимальным', 'движение медленное, без прогиба «до боли»'],
          },
          {
            title: 'Разведение рук в тренажёре (передняя дельта)',
            cues: ['лёгкий вес', 'контроль, без рывков'],
          },
          {
            title: 'Сгибание рук с гантелями (бицепс)',
            cues: ['лёгкие гантели', 'локти фиксированы'],
          },
        ],
      },
      {
        heading: 'Пресс',
        bullets: ['Подъём коленей в упоре или лёжа — 3×15', 'Планка — 30–40 секунд × 3 / Верхний пресс — 3×20'],
      },
      {
        heading: 'Кардио',
        bullets: ['Ходьба 15–20 минут'],
      },
    ],
  },
  {
    day: 'День 3',
    headline: 'Полное тело + акцент на метаболизм',
    accent: 'Самый «жиросжигающий» день',
    sections: [
      {
        heading: 'Разминка',
        bullets: ['Дорожка 10 минут', 'Суставная разминка'],
      },
      {
        heading: 'Силовая часть (3×15)',
        exercises: [
          {
            title: 'Жим гантелей сидя (плечи)',
            cues: ['лёгкий вес', 'без прогиба в пояснице'],
          },
          {
            title: 'Жим с гантелями (грудь)',
            cues: ['контролируемо, без «вылета» рук'],
          },
          {
            title: 'Присед в гакк-машине или с собственным весом',
            cues: ['медленно', 'глубина комфортная, без боли в коленях'],
          },
          {
            title: 'Отведение ноги назад в тренажёре / кроссовере',
            cues: ['ягодицы, без раскачки'],
          },
          {
            title: 'Тяга верхнего блока (повтор лёгкий вариант)',
            cues: ['добиваем спину'],
          },
        ],
      },
      {
        heading: 'Пресс',
        bullets: ['Скручивания 3×15', 'Планка 3×30–40 сек / Классический пресс — 3×20'],
      },
      {
        heading: 'Кардио (обязательно)',
        bullets: ['20 минут ходьбы или эллипс'],
      },
    ],
  },
]

const importantRules = [
  'Вес всегда такой, чтобы оставалось 2–3 повтора «в запасе»',
  'Отдых между подходами: 60–90 секунд',
  'Никаких рывков и ускорений',
  'Боль в суставах = сразу уменьшить вес или остановить упражнение',
  'Лучше «легко и правильно», чем «тяжело и криво»',
]

const whyItWorks = [
  'большие мышечные группы (ноги + спина)',
  'умеренный объём без перегруза',
  'кардио после силовой → расход жира',
  'безопасная техника → можно держать регулярность',
]

const mealBlocks = [
  {
    emoji: '🍳',
    title: 'Завтрак',
    items: [
      'овсянка (овсянка + банан + яйцо)',
      'яйца', 
      'греческий йогурт (йогурт + фрукты + овсянка)',
      'творог (творог + ягоды)',
      'цельнозерновой хлеб',
      'авокадо (авокадо тост + яйцо)',
      'фрукты',
      'бананы',
      'ягоды',
    ],
  },
  {
    emoji: '🍲',
    title: 'Обед',
    items: [
      'курица (курица + рис + овощи)',
      'рыба (рыба + картошка + салат)',
      'постная говядина (постная говядина + рис + овощи)',
      'рис',
      'гречка',
      'картошка',
      'булгур',
      'Овощи (говядина + овощи)',
      'зелень + овощи',
    ],
  },
  {
    emoji: '🍏',
    title: 'Перекусы',
    items: ['яблоки',
      'бананы',
      'йогурт',
      'творог',
      'орехи',
      'протеиновый батончик',
      'шоколад (20–30 г)',
    ]
  },
  {
    emoji: '🍽',
    title: 'Ужин',
    items: ['курицу (курица + овощи)',
      'рыбу ( рыба + углеводы + салат)',
      'творог',
      'овощи',
      'салаты',
    ],
  },
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  return (
    <div className="min-h-screen pb-24">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
          <button
            type="button"
            onClick={() => scrollToId('top')}
            className="text-left text-sm font-semibold text-brand-800"
          >
            План фитнеса
          </button>
          <nav className="flex max-w-full flex-wrap justify-end gap-1.5 text-sm sm:gap-2">
            <button
              type="button"
              onClick={() => scrollToId('workouts')}
              className="rounded-full px-3 py-1.5 font-medium text-brand-700 transition hover:bg-brand-50"
            >
              Тренировки
            </button>
            <button
              type="button"
              onClick={() => scrollToId('exercise-howto')}
              className="rounded-full px-3 py-1.5 font-medium text-violet-700 transition hover:bg-violet-50"
              title="Как выполнять упражнения"
            >
              Упражнения
            </button>
            <button
              type="button"
              onClick={() => scrollToId('nutrition')}
              className="rounded-full px-3 py-1.5 font-medium text-ocean-700 transition hover:bg-sky-50"
            >
              Питание
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:pt-14">
          <p className="mb-3 inline-flex rounded-full bg-brand-100/80 px-3 py-1 text-xs font-medium text-brand-800">
            24 · похудение · без крайностей
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            План тренировок и питания для похудения
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Без диет, без запретов — с результатом
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToId('workouts')}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:from-brand-700 hover:to-brand-600 active:scale-[0.98]"
            >
              Тренировки
            </button>
            <button
              type="button"
              onClick={() => scrollToId('exercise-howto')}
              className="inline-flex items-center justify-center rounded-2xl border border-violet-200 bg-white px-6 py-3.5 text-sm font-semibold text-violet-800 shadow-card transition hover:border-violet-300 hover:bg-violet-50/80 active:scale-[0.98]"
            >
              Упражнения
            </button>
            <button
              type="button"
              onClick={() => scrollToId('nutrition')}
              className="inline-flex items-center justify-center rounded-2xl border border-ocean-200 bg-white px-6 py-3.5 text-sm font-semibold text-ocean-700 shadow-card transition hover:border-ocean-300 hover:bg-sky-50/80 active:scale-[0.98]"
            >
              Питание
            </button>
          </div>
        </section>

        <section id="workouts" className="scroll-mt-20 border-t border-slate-200/60 bg-white/50 py-12">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Тренировки</h2>
              </div>
              <span className="hidden text-3xl sm:block" aria-hidden>
                🏋️‍♀️
              </span>
            </div>

            <div className="space-y-6">
              {workouts.map((w) => (
                <article
                  key={w.day}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card sm:p-6"
                >
                  <div className="flex flex-wrap items-start gap-2 border-b border-slate-100 pb-4">
                    <span className="text-xl" aria-hidden>
                      📅
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{w.day}</p>
                      <h3 className="mt-0.5 text-lg font-bold text-slate-900 sm:text-xl">{w.headline}</h3>
                      {w.accent ? (
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.accent}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5 space-y-6">
                    {w.sections.map((sec) => (
                      <div key={sec.heading}>
                        <h4 className="text-xs font-bold uppercase tracking-wide text-ocean-700">{sec.heading}</h4>

                        {sec.bullets?.length ? (
                          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                            {sec.bullets.map((line) => (
                              <li key={line} className="flex gap-2 pl-0.5">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" aria-hidden />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {sec.exercises?.length ? (
                          <ul className="mt-3 space-y-4">
                            {sec.exercises.map((ex) => (
                              <li key={ex.title} className="rounded-xl bg-slate-50/80 px-3 py-3 sm:px-4">
                                <p className="font-semibold text-slate-900">{ex.title}</p>
                                <ul className="mt-2 space-y-1 border-l-2 border-brand-200/80 pl-3 text-sm text-slate-600">
                                  {ex.cues.map((c) => (
                                    <li key={c}>{c}</li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside className="mt-8 rounded-2xl border border-amber-200/70 bg-amber-50/50 p-5 shadow-card sm:p-6">
              <p className="flex items-center gap-2 text-sm font-bold text-amber-950">
                <span aria-hidden>⚠️</span>
                Важные правила
              </p>
              <ul className="mt-3 space-y-2 text-sm text-amber-950/90">
                {importantRules.map((rule) => (
                  <li key={rule} className="flex gap-2">
                    <span className="shrink-0 font-bold text-amber-600">·</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <aside className="mt-5 rounded-2xl border border-brand-100 bg-brand-50/60 p-5 shadow-card sm:p-6">
              <p className="text-sm font-bold text-brand-900">Почему эта программа будет работать на похудение</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-900/85">
                {whyItWorks.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="shrink-0 text-brand-500">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <ExerciseHowToSection />

        <section id="nutrition" className="scroll-mt-20 border-t border-slate-200/60 py-12">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Питание</h2>
              <p className="mt-1 text-sm text-slate-500">Простые сочетания · без подсчёта каждой крошки</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {mealBlocks.map((block) => (
                <article
                  key={block.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" aria-hidden>
                      {block.emoji}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{block.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-ocean-400">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/80 p-6 shadow-soft">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-2xl" aria-hidden>
                  🍫
                </span>
                <h3 className="text-lg font-bold text-slate-900">Важно: без жёстких запретов</h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-slate-800">
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>
                  шоколад <strong className="font-semibold text-slate-900">20–30 г</strong> в день разрешён
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>
                  картошка <strong className="font-semibold text-slate-900">2–4 раза в неделю</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>
                  без жёстких ограничений — устойчивый режим
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>
                  дефицит калорий <strong className="font-semibold text-slate-900">умеренный</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>
                  перекус должен быть небольшим <strong className="font-semibold text-slate-900">не заменять</strong> полноценный обед
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>
                  сладкое разрешено <strong className="font-semibold text-slate-900">умеренно</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">→</span>
                  предпочтительнее <strong className="font-semibold text-slate-900">утром</strong> (белок, сложные углеводы, немного жиров)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
