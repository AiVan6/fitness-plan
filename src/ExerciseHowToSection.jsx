import { useCallback, useEffect, useId, useState } from 'react'

const exerciseGuides = [
  {
    id: 'leg-press',
    title: 'Жим ногами в тренажёре',
    technique:
      'Спина и таз плотно к спинке, стопы на платформе чуть шире плеч. Опускай платформу контролируемо, не отрывай поясницу от опоры. Выжимай через пятки и бёдра, без «щёлчка» в коленях в верхней точке.',
    mistakes: [
      'выпрямление коленей «в замок» и гиперразгибание',
      'отрыв таза от сиденья из‑за большой амплитуды',
      'рывковое движение и отскок внизу',
    ],
    safety: [
      'начинай с лёгкого веса и проверь угол в коленях',
      'боль в коленях или пояснице — уменьши амплитуду или вес',
    ],
  },
  {
    id: 'glute-bridge',
    title: 'Ягодичный мост',
    technique:
      'Лопатки на полу, стопи на ширине таза. Поднимай таз за счёт сжатия ягодиц, не «ломай» поясницу вверх. Вверху тело — линия от колен до плеч.',
    mistakes: [
      'перегиб в пояснице вместо работы ягодиц',
      'слишком далеко отведённые колени от стоп',
      'опускание таза рывком',
    ],
    safety: [
      'сначала без веса, диск — только когда техника стабильна',
      'дискомфорт в шее — положи мягкий валик под голову',
    ],
  },
  {
    id: 'lying-leg-curl',
    title: 'Сгибание ног лёжа',
    technique:
      'Положи грудь на подушку, якорь над пятками. Сгибай голени к ягодицам плавно, бедра не отрывай от лавки. Внизу не бросай вес — контролируй разгибание.',
    mistakes: [
      'рывок внизу и «пружинка»',
      'отрыв бёдер от опоры',
      'слишком большой вес — сгибание только в пояснице',
    ],
    safety: [
      'боль за коленом — снизь вес и амплитуду',
      'настрой валик под длину голени',
    ],
  },
  {
    id: 'leg-adduction',
    title: 'Сведение ног в тренажёре',
    technique:
      'Сядь ровно, спина нейтральная. Своди бёдра медленно, задержись на 1 счёт в сокращении, возвращайся без броска веса.',
    mistakes: [
      'инерция и «хлопанье» блинами',
      'наклон вперёд из‑за тяжёлого веса',
      'неполная амплитуда без контроля',
    ],
    safety: [
      'держи движение медленным и контролируемым',
      'при дискомфорте в тазобедренных суставах уменьши амплитуду и вес',
    ],
  },
  {
    id: 'leg-abduction',
    title: 'Разведение ног в тренажёре',
    technique:
      'Сядь ровно, спина нейтральная. Разводи бёдра плавно и подконтрольно, без рывков. В крайней точке задержись на 1 счёт, затем медленно своди ноги обратно.',
    mistakes: [
      'инерция и резкое возвращение веса',
      'слишком большой вес и потеря контроля',
      'прогиб в пояснице',
      'неполная амплитуда движения',
    ],
    safety: [
      'не пытайся максимально широко разводить ноги через боль',
      'держи движение медленным и контролируемым',
      'при дискомфорте в тазобедренных суставах уменьши амплитуду и вес',
    ],
  },
  {
    id: 'lat-pulldown',
    title: 'Тяга верхнего блока к груди',
    technique:
      'Хват чуть шире плеч, грудь слегка подана вверх. Тяни локти вниз и к бокам, слегка отводи их назад — грудь к перекладине, не запястьями.',
    mistakes: [
      'отклон назад сильным рывком',
      'работа только руками без участия спины',
      'тянуть за шею при узком хвате',
    ],
    safety: [
      'лёгкий вес, чтобы чувствовать широчайшие',
      'боль в плече — смени хват или уменьши амплитуду',
    ],
  },
  {
    id: 'cable-row-seated',
    title: 'Тяга горизонтального блока',
    technique:
      'Ноги упёрты, спина прямая. Тяни рукоять к нижним рёбрам, локти вдоль корпуса, лопатки своди без сильного прогиба назад.',
    mistakes: [
      'сильный наклон корпуса назад на каждом повторе',
      'локти разъезжаются в стороны',
      'отпускание рукояти без контроля',
    ],
    safety: [
      'держи нейтраль в пояснице',
      'при острых болях в пояснице — остановись',
    ],
  },
  {
    id: 'hyperextension',
    title: 'Гиперэкстензия (спина)',
    technique:
      'Таз на подушке, стопы зафиксированы. Опускай корпус от бёдер, поднимайся за счёт ягодиц и задней поверхности бедра, без максимального прогиба «дугой».',
    mistakes: [
      'излишний прогиб в пояснице вверху',
      'слишком большой амплитудный рывок',
      'работа из шеи, а не из тазобедренного',
    ],
    safety: [
      'начинай без отягощения',
      'острая боль — сразу прекрати подход',
    ],
  },
  {
    id: 'rear-delt-machine',
    title: 'Разведение рук в тренажёре (передняя дельта)',
    technique:
      'Локти слегка согнуты, движение выполняется перед собой в плоскости передней дельты. Поднимай руки плавно до уровня плеч, без рывков и раскачки корпуса. Опускай медленно и подконтрольно.',
    mistakes: [
      'слишком тяжёлый вес и использование инерции',
      'раскачка корпусом',
      'подъём рук слишком высоко',
      'резкое опускание веса вниз',
    ],
    safety: [
      'используй умеренный вес и полный контроль движения',
      'не поднимай плечи к ушам',
      'при боли или щелчках в плечевом суставе прекрати упражнение и уменьши нагрузку',
    ],
  },
  {
    id: 'dumbbell-curl',
    title: 'Сгибание рук с гантелями (бицепс)',
    technique:
      'Локти у корпуса или чуть впереди — зафиксируй их. Поднимай гантели контролируемо, без раскачки корпуса, опускай медленнее подъёма.',
    mistakes: [
      'раскачка спиной и «читинг»',
      'локти «уезжают» назад',
      'полный бросок внизу',
    ],
    safety: [
      'запястье нейтрально, не «ломай» его назад',
      'локоть — без острой боли при сгибании',
    ],
  },
  {
    id: 'dumbbell-shoulder-press',
    title: 'Жим гантелей сидя (плечи)',
    technique:
      'Спина к спинке, пресс в лёгком напряжении. Жми вверх по дуге, не выпуская локти полностью в «замок», опускай к плечам контролируемо.',
    mistakes: [
      'сильный прогиб в пояснице «мостом»',
      'гантели уходят слишком вперёд без стабилизации',
      'рывок с ног',
    ],
    safety: [
      'лёгкий вес до стабильной техники',
      'боль в плече — смени угол или убери вес',
    ],
  },
  {
    id: 'chest-press-machine',
    title: 'Жим с гантелями (грудь)',
    technique:
      'Лопатки сведены. Грудь слегка поднята. Гантели опускаются плавно. Локти не уводить слишком далеко назад. Жим выполнять без рывков',
    mistakes: [
      'полное разгибание рук с щелчком в локтях',
      'отрыв лопаток от скамьи',
      'слишком тяжёлые гантели',
      'резкое опускание вниз',
    ],
    safety: [
      'начинать с лёгких гантелей',
      'не брать максимальный вес',
      'контролировать движение вниз',
      'при дискомфорте в груди прекратить упражнение',
    ],
  },
  {
    id: 'hack-squat',
    title: 'Присед в гакк-машине',
    technique:
      'Спина к подушке, стопы на платформе так, чтобы колени шли в линию со стопами. Опускайся медленно, контролируя глубину без боли в коленях.',
    mistakes: [
      'колени «вальгус» сильно внутрь',
      'отрыв пяток от платформы',
      'очень глубокий присед без подготовки',
    ],
    safety: [
      'глубина — комфортная, без острой боли',
      'начни с веса тела / минимального блина',
    ],
  },
  {
    id: 'kickback-glute',
    title: 'Отведение ноги назад (тренажёр / кроссовер)',
    technique:
      'Корпус стабилен, пресс включён. Отводи бедро назад за счёт ягодицы, без прогиба поясницы и раскачки.',
    mistakes: [
      'перегиб в пояснице вместо отведения бедра',
      'размахивание корпусом для инерции',
      'слишком большой вес — «ломает» технику',
    ],
    safety: [
      'держи опорное колено слегка согнутым',
      'боль в пояснице — уменьши амплитуду',
    ],
  },
  {
    id: 'crunch',
    title: 'Скручивания на пресс',
    technique:
      'Поясница прижата, рёбра к тазу — небольшой подъём лопаток. Выдох на сокращении, растяжение без рывка.',
    mistakes: [
      'подтягивание шеи руками',
      'большая амплитуда за счёт поясницы',
      'задержка дыхания',
    ],
    safety: [
      'шея расслаблена, взгляд вдоль тела',
      'дискомфорт в шее — упрости движение',
    ],
  },
  {
    id: 'plank',
    title: 'Планка',
    technique:
      'Предплечья или ладони под плечами, тело — прямая линия от головы до пяток. Пресс и ягодицы слегка включены, дыхание ровное.',
    mistakes: [
      'провисание / «домик» в пояснице',
      'задранный таз вверх',
      'задержка дыхания на всё время',
    ],
    safety: [
      'начни с коротких интервалов (20–30 сек)',
      'боль в запястьях — вариант на предплечьях',
    ],
  },
]

function gifSrc(id) {
  const base = import.meta.env.BASE_URL
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}exercises/${id}.gif`
}

function ExerciseCard({ item, isOpen, onToggle }) {
  const headingId = useId()
  const [gifFailed, setGifFailed] = useState(false)

  useEffect(() => {
    if (isOpen) setGifFailed(false)
  }, [isOpen, item.id])

  const handleToggle = useCallback(() => {
    onToggle(item.id)
  }, [item.id, onToggle])

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          onClick={handleToggle}
          className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-slate-50/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:px-5 sm:py-4"
        >
          <span className="text-base font-bold text-slate-900">{item.title}</span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={`${headingId}-panel`}
        role="region"
        aria-labelledby={headingId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden" inert={!isOpen ? true : undefined}>
          <div className="space-y-4 border-t border-slate-100 px-4 pb-5 pt-2 sm:px-5">
            {isOpen ? (
              <div className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/60">
                {!gifFailed ? (
                  <img
                    src={gifSrc(item.id)}
                    alt={`Анимация: ${item.title}`}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover"
                    onError={() => setGifFailed(true)}
                  />
                ) : (
                  <div className="flex aspect-video flex-col items-center justify-center gap-2 px-4 text-center">
                    <span className=" " aria-hidden>
                      🎞️
                    </span>
                    <p className="text-sm font-medium text-slate-700">GIF с демонстрацией пока не загружен</p>
                    <p className="max-w-sm text-xs leading-relaxed text-slate-500">
                      Ориентируйся на текст техники и безопасности ниже — этого достаточно для старта. Для автора сайта: положи файл{' '}
                      <code className="rounded bg-white px-1 py-0.5 font-mono text-[11px] text-slate-700">{item.id}.gif</code> в{' '}
                      <code className="rounded bg-white px-1 py-0.5 font-mono text-[11px] text-slate-700">public/exercises/</code>.
                    </p>
                  </div>
                )}
              </div>
            ) : null}

            {isOpen ? (
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-700">Техника</p>
                  <p className="mt-1.5 text-slate-700">{item.technique}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-rose-700">Частые ошибки</p>
                  <ul className="mt-1.5 list-inside list-disc space-y-1 text-slate-700">
                    {item.mistakes.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 px-3 py-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">Безопасность</p>
                  <ul className="mt-1.5 list-inside list-disc space-y-1 text-emerald-900/90">
                    {item.safety.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

export function ExerciseHowToSection() {
  const [openId, setOpenId] = useState(null)

  const toggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }, [])

  return (
    <section id="exercise-howto" className="scroll-mt-20 border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50/80 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">Как выполнять</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">Упражнения</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Открой карточку: GIF с техникой (если файл добавлен), коротко о движении, типичных ошибках и безопасности. Для новичков — без лишних терминов.
          </p>
        </div>

        <div className="space-y-3">
          {exerciseGuides.map((item) => (
            <ExerciseCard key={item.id} item={item} isOpen={openId === item.id} onToggle={toggle} />
          ))}
        </div>
      </div>
    </section>
  )
}
