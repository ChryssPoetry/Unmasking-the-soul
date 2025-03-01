document.addEventListener('DOMContentLoaded', () => {
    const quizData = {
      en: {
        start: "Begin Your Journey",
        reveal: "Reveal My Soul",
        dimensions: [
          {
            name: "Physical",
            questions: [
              "I feel alive in rituals—prayer, dance, sacred vibes.",
              "Holy places pull me in—temples, churches, nature’s altars.",
              "My faith needs movement—walking, kneeling, hands raised.",
              "Ceremonies light me up—give me that incense and song.",
              "I express my soul through what I do, not just think."
            ]
          },
          {
            name: "Scientific",
            questions: [
              "Science deepens my faith—stars and cells scream creation.",
              "I love when reason and religion vibe together.",
              "Faith without facts feels flimsy to me.",
              "I dig into how the world works to know the divine.",
              "Questions don’t scare me—they fuel my belief."
            ]
          },
          {
            name: "Psychological",
            questions: [
              "I get my emotions—faith helps me sort ‘em out.",
              "Relationships are my spiritual glue—love’s the key.",
              "I’m chill with my flaws; they’re part of my soul’s story.",
              "Conflict? I handle it with grace and a prayer.",
              "Self-awareness is my jam—knowing me knows God."
            ]
          },
          {
            name: "Spiritual",
            questions: [
              "I chase life’s big mysteries—why are we here?",
              "Symbols—like crosses or stars—speak to my soul.",
              "I’ve felt the divine in ways I can’t explain.",
              "Mystical stuff—dreams, visions—pulls me in.",
              "I’d ditch comfort to find deeper truth any day."
            ]
          }
        ]
      },
      uk: {
        start: "Розпочати Подорож",
        reveal: "Розкрити Мою Душу",
        dimensions: [
          {
            name: "Фізичне",
            questions: [
              "Я оживаю в ритуалах — молитва, танець, священні відчуття.",
              "Святі місця притягують мене — храми, церкви, природні вівтарі.",
              "Моя віра потребує руху — ходьба, поклоніння, підняті руки.",
              "Церемонії запалюють мене — дайте мені ладан і пісню.",
              "Я висловлюю душу через дії, а не лише думки."
            ]
          },
          {
            name: "Наукове",
            questions: [
              "Наука поглиблює мою віру — зірки й клітини кричать про творіння.",
              "Мені подобається, коли розум і релігія гармоніюють.",
              "Віра без фактів здається мені слабкою.",
              "Я досліджую, як працює світ, щоб пізнати божественне.",
              "Питання мене не лякають — вони живлять мою віру."
            ]
          },
          {
            name: "Психологічне",
            questions: [
              "Я розумію свої емоції — віра допомагає їх розібрати.",
              "Стосунки — мій духовний клей, любов — ключ.",
              "Я спокійний зі своїми недоліками; вони — частина історії душі.",
              "Конфлікт? Я вирішую його з благодаттю і молитвою.",
              "Самосвідомість — моє покликання; знати себе — знати Бога."
            ]
          },
          {
            name: "Духовне",
            questions: [
              "Я шукаю великі таємниці життя — чому ми тут?",
              "Символи — хрести чи зірки — говорять до моєї душі.",
              "Я відчував божественне так, що не можу пояснити.",
              "Містичне — сни, видіння — притягує мене.",
              "Я б кинув комфорт заради глибшої правди будь-коли."
            ]
          }
        ]
      }
    };
  
    const personalitiesData = {
      en: [
        { name: '#FaithFader', desc: 'You drift from the call, a soul unmoored—open yet unrooted, seeking without grasping. Your flame flickers low, craving a spark to blaze.', bible: 'The Rich Young Ruler (Mark 10:17-22)—he sought truth but fled its cost, fading from faith’s fire.', strengths: 'Openness, curiosity', weaknesses: 'Lack of commitment, easily swayed', daily: 'Set a small, daily spiritual goal—light a candle, say a prayer.', p: false, s: false, psych: false, sp: false },
        { name: '#RitualRockstar', desc: 'Rituals are your forge—discipline carves your path, yet the soul’s depth lies quiet. You shine outward, but inward shadows linger.', bible: 'The Pharisees (Matthew 23:23)—masters of form, they missed the heart’s weight.', strengths: 'Discipline, tradition', weaknesses: 'Legalism, shallow roots', daily: 'Reflect on why you perform rituals—seek their heart.', p: true, s: false, psych: false, sp: false },
        { name: '#ScienceSkeptic', desc: 'Reason’s your staff—logic seeks truth, yet faith’s mystery eludes you. A mind sharp, a soul parched—balance beckons.', bible: 'Thomas (John 20:25)—doubt demanded proof, till the risen flame pierced his clay.', strengths: 'Analytical mind, curiosity', weaknesses: 'Over-reliance on logic, mistrust', daily: 'Explore a faith mystery—read a verse, ponder it.', p: false, s: true, psych: false, sp: false },
        { name: '#EmotionalExplorer', desc: 'Love binds your soul—emotions guide, relationships forge your faith. Yet roots waver, seeking deeper waters.', bible: 'Barnabas (Acts 4:36)—a heart of encouragement, lifting others, yet unmoored from mystic depths.', strengths: 'Empathy, warmth', weaknesses: 'Emotional drift, lack of depth', daily: 'Strengthen one relationship with a kind act—connect spiritually.', p: false, s: false, psych: true, sp: false },
        { name: '#MysticMood', desc: 'You plunge the abyss—visions and symbols whisper truths, the world fades before your soul’s wild cry. Grounding calls you back.', bible: 'John the Baptist (Matthew 3:1-3)—a voice in the wild, spirit ablaze, yet solitary.', strengths: 'Visionary, deep intuition', weaknesses: 'Isolation, detachment', daily: 'Ground your spirit—walk in nature, journal a vision.', p: false, s: false, psych: false, sp: true },
        { name: '#SciRitualRuler', desc: 'Rituals meet reason—a forge of order, precise yet cold. Your soul hungers for the heart’s untamed flame.', bible: 'Solomon (1 Kings 4:29-34)—wisdom ruled, rituals stood, yet spirit drifted.', strengths: 'Order, intellect', weaknesses: 'Coldness, lack of passion', daily: 'Warm your rituals—add a heartfelt prayer.', p: true, s: true, psych: false, sp: false },
        { name: '#HeartHustler', desc: 'Rituals and love entwine—your faith a warm dance, yet reason and mystery linger beyond reach. Seek the forge’s full fire.', bible: 'Ruth (Ruth 1:16-17)—loyalty and action, a heart steadfast, unswayed by deeper tides.', strengths: 'Loyalty, warmth', weaknesses: 'Unreasoned, unmystical', daily: 'Explore a mystery—read a spiritual riddle.', p: true, s: false, psych: true, sp: false },
        { name: '#WorshipWanderer', desc: 'You dance in rituals, dream in ether—passion burns wild, yet reason and heart seek their share. Balance your soul’s flight.', bible: 'David (2 Samuel 6:14)—he danced before the Lord, spirit soaring, yet wisdom wavered.', strengths: 'Passion, expressiveness', weaknesses: 'Impulsiveness, lack of logic', daily: 'Balance with reason—study a verse’s meaning.', p: true, s: false, psych: false, sp: true },
        { name: '#ThinkerTherapist', desc: 'Mind and heart align—wisdom heals, yet rituals and mysteries call unanswered. Forge a broader flame.', bible: 'Paul (Acts 17:22-34)—reason met souls, a thinker’s grace, less bound to dance.', strengths: 'Wisdom, empathy', weaknesses: 'Ritual avoidance, mystic distance', daily: 'Engage a ritual—light incense, feel it.', p: false, s: true, psych: true, sp: false },
        { name: '#SciSoulSearcher', desc: 'Science seeks the soul—truth’s cold chase meets mystic whispers, yet clay and heart lag. Wield the full staff.', bible: 'Daniel (Daniel 1:17)—knowledge and visions, a seeker’s soul, reserved in flesh.', strengths: 'Curiosity, insight', weaknesses: 'Cold pursuit, emotional lag', daily: 'Warm your soul—pray with feeling.', p: false, s: true, psych: false, sp: true },
        { name: '#SoulfulSoftie', desc: 'Heart and soul entwine—gentle yet deep, ungrounded by clay or reason. Anchor your flame’s wild glow.', bible: 'Mary, Mother of Jesus (Luke 2:19)—quiet depth, pondering heart, unshaped by form.', strengths: 'Gentleness, depth', weaknesses: 'Ungrounded, illogical', daily: 'Anchor with action—set a daily task.', p: false, s: false, psych: true, sp: true },
        { name: '#PragmaticPowerhouse', desc: 'You wield clay, mind, and heart—faith’s doer, yet mysteries elude your forge. Seek the soul’s uncharted tide.', bible: 'Joseph (Genesis 41:46)—action, wisdom, love, yet mystic whispers unheard.', strengths: 'Action, pragmatism', weaknesses: 'Mystery blind, rigid', daily: 'Seek mystery—meditate on the unknown.', p: true, s: true, psych: true, sp: false },
        { name: '#SciWorshipWizard', desc: 'Rituals, reason, revelations—a wizard’s dance, yet heart’s warmth waits. Kindle the full fire.', bible: 'Moses (Exodus 7:12)—staff struck, truth soared, yet love grew slow.', strengths: 'Precision, vision', weaknesses: 'Coldness, heart lag', daily: 'Warm your heart—share a kind word.', p: true, s: true, psych: false, sp: true },
        { name: '#HeartfeltHarmony', desc: 'Rituals, love, soul—a hymn of grace, yet reason’s forge lies cold. Seek the staff’s full might.', bible: 'Deborah (Judges 4:4-5)—leader, heart, spirit, unswayed by logic’s call.', strengths: 'Grace, harmony', weaknesses: 'Logic lapse, narrow focus', daily: 'Sharpen reason—solve a small puzzle.', p: true, s: false, psych: true, sp: true },
        { name: '#MindSoulMaven', desc: 'Thinker, feeler, dreamer—cosmic tides flow, yet clay’s dance eludes you. Ground your soaring flame.', bible: 'Luke (Luke 1:1-4)—scribe, soul, mind, less bound to flesh’s rite.', strengths: 'Insight, empathy', weaknesses: 'Ungrounded, ritual shy', daily: 'Ground with clay—do a small task.', p: false, s: true, psych: true, sp: true },
        { name: '#TotalTrailblazer', desc: 'All vibes blaze—clay, mind, heart, soul crowned with thorns. You wield the staff that swallows all, a flame unquenched.', bible: 'Jesus (John 14:6)—the way, truth, life; staff striking chaos, crowned in eternity.', strengths: 'Balance, all-encompassing', weaknesses: 'Overstretch, burnout risk', daily: 'Rest in your flame—pause, pray, renew.', p: true, s: true, psych: true, sp: true }
      ],
      uk: [
        { name: '#БлукачВіри', desc: 'Ти віддаляєшся від поклику, душа без якоря — відкрита, але неукорінена, шукаєш, не вхопивши. Твій вогонь тліє, прагнучи іскри, щоб спалахнути.', bible: 'Багатий Юнак (Марка 10:17-22) — шукав правду, але втік від її ціни, згаснувши у вогні віри.', strengths: 'Відкритість, цікавість', weaknesses: 'Відсутність відданості, легко піддається впливу', daily: 'Став невелику щоденну духовну мету — запали свічку, помолись.', p: false, s: false, psych: false, sp: false },
        { name: '#ЗіркаРитуалів', desc: 'Ритуали — твій коваль — дисципліна прокладає шлях, але глибина душі тиха. Ти сяєш назовні, але всередині тіні затримуються.', bible: 'Фарисеї (Матвія 23:23) — майстри форми, вони пропустили вагу серця.', strengths: 'Дисципліна, традиція', weaknesses: 'Легалізм, неглибоке коріння', daily: 'Роздумуй, чому ти виконуєш ритуали — шукай їхнє серце.', p: true, s: false, psych: false, sp: false },
        { name: '#СкептикНауки', desc: 'Розум — твій посох — логіка шукає правду, але таємниця віри вислизає. Гострий розум, спрагла душа — рівновага кличе.', bible: 'Тома (Івана 20:25) — сумнів вимагав доказів, доки воскреслий вогонь не пронизав його глину.', strengths: 'Аналітичний розум, цікавість', weaknesses: 'Надмірна залежність від логіки, недовіра', daily: 'Досліджуй таємницю віри — прочитай вірш, розмірковуй над ним.', p: false, s: true, psych: false, sp: false },
        { name: '#ДослідникЕмоцій', desc: 'Любов зв’язує твою душу — емоції ведуть, стосунки кують твою віру. Але корені коливаються, шукаючи глибших вод.', bible: 'Варнава (Дії 4:36) — серце підбадьорення, піднімає інших, але не закріплене в містичних глибинах.', strengths: 'Емпатія, тепло', weaknesses: 'Емоційний дрейф, брак глибини', daily: 'Зміцни одні стосунки доброю справою — з’єднайся духовно.', p: false, s: false, psych: true, sp: false },
        { name: '#МістичнийНастрій', desc: 'Ти пірнаєш у безодню — видіння і символи шепочуть правду, світ тьмяніє перед диким криком твоєї душі. Заземлення кличе назад.', bible: 'Іван Хреститель (Матвія 3:1-3) — голос у пустелі, дух палає, але самотній.', strengths: 'Візіонерство, глибока інтуїція', weaknesses: 'Ізоляція, відірваність', daily: 'Заземли свій дух — прогуляйся на природі, запиши видіння.', p: false, s: false, psych: false, sp: true },
        { name: '#ПравительРитуалівНауки', desc: 'Ритуали зливаються з розумом — коваль порядку, точний, але холодний. Твоя душа прагне невгамовного полум’я серця.', bible: 'Соломон (1 Царі 4:29-34) — мудрість правила, ритуали стояли, але дух дрейфував.', strengths: 'Порядок, інтелект', weaknesses: 'Холодність, брак пристрасті', daily: 'Зігрій свої ритуали — додай щиру молитву.', p: true, s: true, psych: false, sp: false },
        { name: '#СерцевийПрацівник', desc: 'Ритуали і любов переплітаються — твоя віра як теплий танець, але розум і таємниця залишаються поза досяжністю. Шукай повного вогню кузні.', bible: 'Рут (Рут 1:16-17) — вірність і дія, серце непохитне, не зворушене глибшими хвилями.', strengths: 'Вірність, тепло', weaknesses: 'Безрозсудність, немiстичність', daily: 'Досліди таємницю — прочитай духовну загадку.', p: true, s: false, psych: true, sp: false },
        { name: '#МандрівникПоклоніння', desc: 'Ти танцюєш у ритуалах, мрієш в ефірі — пристрасть палає дико, але розум і серце шукають своєї частки. Збалансуй політ своєї душі.', bible: 'Давид (2 Самуїла 6:14) — танцював перед Господом, дух злітав, але мудрість коливалася.', strengths: 'Пристрасть, виразність', weaknesses: 'Імпульсивність, брак логіки', daily: 'Збалансуй розумом — вивчи значення вірша.', p: true, s: false, psych: false, sp: true },
        { name: '#ТерапевтМислитель', desc: 'Розум і серце гармоніюють — мудрість зцілює, але ритуали і таємниці кличуть без відповіді. Викуй ширший вогонь.', bible: 'Павло (Дії 17:22-34) — розум зустрічав душі, благодать мислителя, менш прив’язана до танцю.', strengths: 'Мудрість, емпатія', weaknesses: 'Уникнення ритуалів, дистанція від містики', daily: 'Займися ритуалом — запали ладан, відчуй його.', p: false, s: true, psych: true, sp: false },
        { name: '#ШукачНауковоїДуші', desc: 'Наука шукає душу — холодна гонитва за правдою зливається з містичними шепотами, але глина і серце відстають. Тримай повний посох.', bible: 'Даниїл (Даниїла 1:17) — знання і видіння, душа шукача, стримана в плоті.', strengths: 'Цікавість, проникливість', weaknesses: 'Холодне переслідування, емоційне відставання', daily: 'Зігрій свою душу — помолися з почуттям.', p: false, s: true, psych: false, sp: true },
        { name: '#М’якийДушовник', desc: 'Серце і душа переплітаються — ніжний, але глибокий, неукорінений глиною чи розумом. Закріпи свій дикий вогонь.', bible: 'Марія, Мати Ісуса (Луки 2:19) — тиха глибина, серце, що розмірковує, не сформоване формою.', strengths: 'Ніжність, глибина', weaknesses: 'Незаґрунтованість, нелогічність', daily: 'Закріпи діями — постав щоденне завдання.', p: false, s: false, psych: true, sp: true },
        { name: '#ПрагматичнаСила', desc: 'Ти тримаєш глину, розум і серце — виконавець віри, але таємниці вислизають з твоєї кузні. Шукай незвідану хвилю душі.', bible: 'Йосип (Буття 41:46) — дія, мудрість, любов, але містичні шепоти не почуті.', strengths: 'Дія, прагматизм', weaknesses: 'Сліпота до таємниць, жорсткість', daily: 'Шукай таємницю — медитуй над невідомим.', p: true, s: true, psych: true, sp: false },
        { name: '#ЧарівникНауковогоПоклоніння', desc: 'Ритуали, розум, одкровення — танець чарівника, але тепло серця чекає. Розпали повний вогонь.', bible: 'Мойсей (Вихід 7:12) — посох ударив, правда злетіла, але любов росла повільно.', strengths: 'Точність, бачення', weaknesses: 'Холодність, відставання серця', daily: 'Зігрій своє серце — поділися добрим словом.', p: true, s: true, psych: false, sp: true },
        { name: '#СерцеваГармонія', desc: 'Ритуали, любов, душа — гімн благодаті, але розумова кузня залишається холодною. Шукай повної сили посоха.', bible: 'Дебора (Судді 4:4-5) — лідер, серце, дух, не зворушена покликом логіки.', strengths: 'Благодать, гармонія', weaknesses: 'Прогалина в логіці, вузький фокус', daily: 'Загостри розум — розв’яжи маленьку головоломку.', p: true, s: false, psych: true, sp: true },
        { name: '#МайстерРозумуДуші', desc: 'Мислитель, чуйний, мрійник — космічні хвилі течуть, але танець глини вислизає. Заземли свій злітаючий вогонь.', bible: 'Лука (Луки 1:1-4) — писар, душа, розум, менш прив’язаний до обряду плоті.', strengths: 'Проникливість, емпатія', weaknesses: 'Незаґрунтованість, сором’язливість до ритуалів', daily: 'Заземли глиною — виконай маленьке завдання.', p: false, s: true, psych: true, sp: true },
        { name: '#ПовнийПершопроходець', desc: 'Усі вібрації палають — глина, розум, серце, душа, увінчана тернами. Ти тримаєш посох, що поглинає все, вогонь невгасимий.', bible: 'Ісус (Івана 14:6) — шлях, правда, життя; посох, що розбиває хаос, увінчаний вічністю.', strengths: 'Рівновага, всеосяжність', weaknesses: 'Надмірне розтягнення, ризик вигорання', daily: 'Відпочинь у своєму вогні — зупинись, помолись, оновись.', p: true, s: true, psych: true, sp: true }
      ]
    };
  
    let username = '';
    let currentLang = 'en';
    let currentPage = 0;
    let answeredQuestions = 0;
  
    const totalQuestions = 20;
  
    const progressDiv = document.getElementById('progress');
  
    function updateProgress() {
      const sliders = document.querySelectorAll('.slider');
      let answered = 0;
      sliders.forEach(slider => {
        if (slider.dataset.answered) answered++;
      });
      answeredQuestions = answered;
      const percentage = Math.round((answeredQuestions / totalQuestions) * 100);
      progressDiv.textContent = `Progress: ${percentage}%`;
    }
  
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      slider.addEventListener('input', () => {
        slider.dataset.answered = true;
        updateProgress();
      });
    });
  
    const startBtn = document.getElementById('start-btn');
    startBtn.textContent = quizData[currentLang].start;
    document.getElementById('language').addEventListener('change', (e) => {
      currentLang = e.target.value;
      startBtn.textContent = quizData[currentLang].start;
    });
  
    startBtn.addEventListener('click', () => {
      username = document.getElementById('username').value || 'Seeker';
      currentLang = document.getElementById('language').value;
      document.getElementById('start-screen').style.display = 'none';
      document.getElementById('pspsQuiz').style.display = 'block';
      document.getElementById('submit-btn').textContent = quizData[currentLang].reveal;
      renderQuestions();
      updateProgress();
    });
  
    function renderQuestions() {
      const dimensions = document.querySelectorAll('.dimension');
      dimensions.forEach((dim, index) => {
        const dimName = quizData[currentLang].dimensions[index].name;
        dim.querySelector('h2').textContent = dimName;
        const questions = dim.querySelectorAll('.question p');
        questions.forEach((q, i) => {
          q.textContent = quizData[currentLang].dimensions[index].questions[i];
        });
      });
      document.querySelectorAll('.page')[0].classList.add('active');
    }
  
    function updateButtons() {
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const submitBtn = document.getElementById('submit-btn');
      const totalPages = quizData[currentLang].dimensions.length;
  
      prevBtn.style.display = currentPage === 0 ? 'none' : 'inline-block';
      nextBtn.style.display = currentPage === totalPages - 1 ? 'none' : 'inline-block';
      submitBtn.style.display = currentPage === totalPages - 1 ? 'inline-block' : 'none';
    }
  
    document.getElementById('prev-btn').addEventListener('click', () => {
      if (currentPage > 0) {
        document.querySelectorAll('.page')[currentPage].classList.remove('active');
        currentPage--;
        document.querySelectorAll('.page')[currentPage].classList.add('active');
        updateButtons();
      }
    });
  
    document.getElementById('next-btn').addEventListener('click', () => {
      if (currentPage < quizData[currentLang].dimensions.length - 1) {
        document.querySelectorAll('.page')[currentPage].classList.remove('active');
        currentPage++;
        document.querySelectorAll('.page')[currentPage].classList.add('active');
        updateButtons();
      }
    });
  
    document.getElementById('pspsQuiz').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const scores = {
        p: Array.from(form.querySelectorAll('[name^="p"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5,
        s: Array.from(form.querySelectorAll('[name^="s"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5,
        psych: Array.from(form.querySelectorAll('[name^="psych"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5,
        sp: Array.from(form.querySelectorAll('[name^="sp"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5
      };
  
      const level = (score) => {
        if (score >= 3.5) return currentLang === 'uk' ? 'Високий' : 'High';
        if (score >= 2.5) return currentLang === 'uk' ? 'Середній' : 'Medium';
        return currentLang === 'uk' ? 'Низький' : 'Low';
      };
  
      const personalities = personalitiesData[currentLang];
      const vibe = personalities.find(p => 
        (p.p === (scores.p >= 3.5)) && 
        (p.s === (scores.s >= 3.5)) && 
        (p.psych === (scores.psych >= 3.5)) && 
        (p.sp === (scores.sp >= 3.5))
      );
  
      const result = document.getElementById('result');
      result.style.display = 'block';
      result.innerHTML = `
        <h2>${username}, You’re a ${vibe.name}! 🌟</h2>
        <p>${vibe.desc}</p>
        <p><strong>${currentLang === 'uk' ? 'Біблійний Споріднений:' : 'Bible Kin:'}</strong> ${vibe.bible}</p>
        <p><strong>${currentLang === 'uk' ? 'Кузня Твоєї Душі:' : 'Your Soul’s Forge:'}</strong> 
        ${currentLang === 'uk' ? 'Фізичне:' : 'Physical:'} ${level(scores.p)}, 
        ${currentLang === 'uk' ? 'Наукове:' : 'Scientific:'} ${level(scores.s)}, 
        ${currentLang === 'uk' ? 'Психологічне:' : 'Psychological:'} ${level(scores.psych)}, 
        ${currentLang === 'uk' ? 'Духовне:' : 'Spiritual:'} ${level(scores.sp)}</p>
        <button id="soulCardBtn">${currentLang === 'uk' ? 'Переглянути Картку Душі' : 'See Your Soul Card'}</button>
      `;
      result.scrollIntoView({ behavior: 'smooth' });
  
      document.getElementById('soulCardBtn').addEventListener('click', () => {
        console.log('Opening soul card for:', username, vibe.name); // Debug ash
        openSoulCard(username, vibe.name, vibe.desc, vibe.bible, level(scores.p), level(scores.s), level(scores.psych), level(scores.sp), vibe.strengths, vibe.weaknesses, vibe.daily);
      });
    });
  
    function openSoulCard(username, vibe, desc, bible, pLevel, sLevel, psychLevel, spLevel, strengths, weaknesses, daily) {
      console.log('Soul card data:', { username, vibe, desc, bible, pLevel, sLevel, psychLevel, spLevel, strengths, weaknesses, daily }); // Debug flame
      const soulCardWindow = window.open('', '_blank', 'width=800,height=1000');
      if (soulCardWindow) {
        soulCardWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${username}'s Soul Card</title>
            <link href="https://fonts.googleapis.com/css2?family=Great_Vibes&family=Montserrat&display=swap" rel="stylesheet">
            <style>
              body {
                background: linear-gradient(135deg, #008080, #FF6F61, #FFD700);
                font-family: 'Montserrat', sans-serif;
                color: white;
                text-align: center;
                margin: 0;
                padding: 40px;
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .card {
                background: rgba(0, 0, 0, 0.2);
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
                max-width: 700px;
                width: 100%;
                border: 2px solid rgba(255, 255, 255, 0.2);
              }
              h1 {
                font-family: 'Great Vibes', cursive;
                font-size: 4em;
                text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
                margin-bottom: 20px;
              }
              h2 {
                font-family: 'Great Vibes', cursive;
                font-size: 2.5em;
                color: #FFD700;
                margin: 20px 0;
              }
              p {
                font-size: 1.2em;
                line-height: 1.5;
                margin: 10px 0;
              }
              .section {
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <h1>${username}, You’re a ${vibe}</h1>
              <p>${desc}</p>
              <div class="section">
                <h2>${currentLang === 'uk' ? 'Біблійний Споріднений' : 'Bible Kin'}</h2>
                <p>${bible}</p>
              </div>
              <div class="section">
                <h2>${currentLang === 'uk' ? 'Кузня Твоєї Душі' : 'Your Soul’s Forge'}</h2>
                <p>${currentLang === 'uk' ? 'Фізичне:' : 'Physical:'} ${pLevel}</p>
                <p>${currentLang === 'uk' ? 'Наукове:' : 'Scientific:'} ${sLevel}</p>
                <p>${currentLang === 'uk' ? 'Психологічне:' : 'Psychological:'} ${psychLevel}</p>
                <p>${currentLang === 'uk' ? 'Духовне:' : 'Spiritual:'} ${spLevel}</p>
              </div>
              <div class="section">
                <h2>${currentLang === 'uk' ? 'Сильні Сторони' : 'Strengths'}</h2>
                <p>${strengths}</p>
              </div>
              <div class="section">
                <h2>${currentLang === 'uk' ? 'Слабкі Сторони' : 'Weaknesses'}</h2>
                <p>${weaknesses}</p>
              </div>
              <div class="section">
                <h2>${currentLang === 'uk' ? 'Щоденна Справа' : 'Daily Engagement'}</h2>
                <p>${daily}</p>
              </div>
            </div>
          </body>
          </html>
        `);
        soulCardWindow.document.close();
      } else {
        console.error('Failed to open soul card window - pop-up blocked?');
        alert('Please allow pop-ups to see your Soul Card!');
      }
    }
  
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      let currentY = y;
  
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, currentY);
          line = words[n] + ' ';
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, currentY);
    }
  });