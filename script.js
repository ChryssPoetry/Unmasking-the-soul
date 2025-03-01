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
  
    let username = '';
    let currentLang = 'en';
    let currentPage = 0;
  
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
      renderQuiz();
    });
  
    function renderQuiz() {
      const pagesDiv = document.getElementById('pages');
      pagesDiv.innerHTML = '';
      quizData[currentLang].dimensions.forEach((dim, index) => {
        const page = document.createElement('div');
        page.classList.add('page');
        if (index === 0) page.classList.add('active');
        page.innerHTML = `
          <div class="dimension" data-dimension="${dim.name}">
            <h2>${dim.name}</h2>
            ${dim.questions.map((q, i) => `
              <div class="question">
                <p>${q}</p>
                <input type="range" min="1" max="5" name="${dim.name.toLowerCase().slice(0, 2)}${i + 1}" value="3" class="slider animate-slider">
              </div>
            `).join('')}
          </div>
        `;
        pagesDiv.appendChild(page);
      });
  
      const totalPages = quizData[currentLang].dimensions.length;
      document.getElementById('progress').textContent = `Page ${currentPage + 1} of ${totalPages}`;
      document.getElementById('submit-btn').textContent = quizData[currentLang].reveal;
      updateButtons();
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
        document.getElementById('progress').textContent = `Page ${currentPage + 1} of ${quizData[currentLang].dimensions.length}`;
        updateButtons();
      }
    });
  
    document.getElementById('next-btn').addEventListener('click', () => {
      if (currentPage < quizData[currentLang].dimensions.length - 1) {
        document.querySelectorAll('.page')[currentPage].classList.remove('active');
        currentPage++;
        document.querySelectorAll('.page')[currentPage].classList.add('active');
        document.getElementById('progress').textContent = `Page ${currentPage + 1} of ${quizData[currentLang].dimensions.length}`;
        updateButtons();
      }
    });
  
    document.getElementById('pspsQuiz').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const scores = {
        p: Array.from(form.querySelectorAll('[name^="ph"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5,
        s: Array.from(form.querySelectorAll('[name^="sc"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5,
        psych: Array.from(form.querySelectorAll('[name^="ps"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5,
        sp: Array.from(form.querySelectorAll('[name^="sp"]')).map(input => parseInt(input.value)).reduce((a, b) => a + b) / 5
      };
  
      const personalities = [
        { name: '#FaithFader', desc: 'You drift from the call, a soul unmoored—open yet unrooted, seeking without grasping. Your flame flickers low, craving a spark to blaze.', bible: 'The Rich Young Ruler (Mark 10:17-22)—he sought truth but fled its cost, fading from faith’s fire.', p: false, s: false, psych: false, sp: false },
        { name: '#RitualRockstar', desc: 'Rituals are your forge—discipline carves your path, yet the soul’s depth lies quiet. You shine outward, but inward shadows linger.', bible: 'The Pharisees (Matthew 23:23)—masters of form, they missed the heart’s weight.', p: true, s: false, psych: false, sp: false },
        { name: '#ScienceSkeptic', desc: 'Reason’s your staff—logic seeks truth, yet faith’s mystery eludes you. A mind sharp, a soul parched—balance beckons.', bible: 'Thomas (John 20:25)—doubt demanded proof, till the risen flame pierced his clay.', p: false, s: true, psych: false, sp: false },
        { name: '#EmotionalExplorer', desc: 'Love binds your soul—emotions guide, relationships forge your faith. Yet roots waver, seeking deeper waters.', bible: 'Barnabas (Acts 4:36)—a heart of encouragement, lifting others, yet unmoored from mystic depths.', p: false, s: false, psych: true, sp: false },
        { name: '#MysticMood', desc: 'You plunge the abyss—visions and symbols whisper truths, the world fades before your soul’s wild cry. Grounding calls you back.', bible: 'John the Baptist (Matthew 3:1-3)—a voice in the wild, spirit ablaze, yet solitary.', p: false, s: false, psych: false, sp: true },
        { name: '#SciRitualRuler', desc: 'Rituals meet reason—a forge of order, precise yet cold. Your soul hungers for the heart’s untamed flame.', bible: 'Solomon (1 Kings 4:29-34)—wisdom ruled, rituals stood, yet spirit drifted.', p: true, s: true, psych: false, sp: false },
        { name: '#HeartHustler', desc: 'Rituals and love entwine—your faith a warm dance, yet reason and mystery linger beyond reach. Seek the forge’s full fire.', bible: 'Ruth (Ruth 1:16-17)—loyalty and action, a heart steadfast, unswayed by deeper tides.', p: true, s: false, psych: true, sp: false },
        { name: '#WorshipWanderer', desc: 'You dance in rituals, dream in ether—passion burns wild, yet reason and heart seek their share. Balance your soul’s flight.', bible: 'David (2 Samuel 6:14)—he danced before the Lord, spirit soaring, yet wisdom wavered.', p: true, s: false, psych: false, sp: true },
        { name: '#ThinkerTherapist', desc: 'Mind and heart align—wisdom heals, yet rituals and mysteries call unanswered. Forge a broader flame.', bible: 'Paul (Acts 17:22-34)—reason met souls, a thinker’s grace, less bound to dance.', p: false, s: true, psych: true, sp: false },
        { name: '#SciSoulSearcher', desc: 'Science seeks the soul—truth’s cold chase meets mystic whispers, yet clay and heart lag. Wield the full staff.', bible: 'Daniel (Daniel 1:17)—knowledge and visions, a seeker’s soul, reserved in flesh.', p: false, s: true, psych: false, sp: true },
        { name: '#SoulfulSoftie', desc: 'Heart and soul entwine—gentle yet deep, ungrounded by clay or reason. Anchor your flame’s wild glow.', bible: 'Mary, Mother of Jesus (Luke 2:19)—quiet depth, pondering heart, unshaped by form.', p: false, s: false, psych: true, sp: true },
        { name: '#PragmaticPowerhouse', desc: 'You wield clay, mind, and heart—faith’s doer, yet mysteries elude your forge. Seek the soul’s uncharted tide.', bible: 'Joseph (Genesis 41:46)—action, wisdom, love, yet mystic whispers unheard.', p: true, s: true, psych: true, sp: false },
        { name: '#SciWorshipWizard', desc: 'Rituals, reason, revelations—a wizard’s dance, yet heart’s warmth waits. Kindle the full fire.', bible: 'Moses (Exodus 7:12)—staff struck, truth soared, yet love grew slow.', p: true, s: true, psych: false, sp: true },
        { name: '#HeartfeltHarmony', desc: 'Rituals, love, soul—a hymn of grace, yet reason’s forge lies cold. Seek the staff’s full might.', bible: 'Deborah (Judges 4:4-5)—leader, heart, spirit, unswayed by logic’s call.', p: true, s: false, psych: true, sp: true },
        { name: '#MindSoulMaven', desc: 'Thinker, feeler, dreamer—cosmic tides flow, yet clay’s dance eludes you. Ground your soaring flame.', bible: 'Luke (Luke 1:1-4)—scribe, soul, mind, less bound to flesh’s rite.', p: false, s: true, psych: true, sp: true },
        { name: '#TotalTrailblazer', desc: 'All vibes blaze—clay, mind, heart, soul crowned with thorns. You wield the staff that swallows all, a flame unquenched.', bible: 'Jesus (John 14:6)—the way, truth, life; staff striking chaos, crowned in eternity.', p: true, s: true, psych: true, sp: true }
      ];
  
      vibe = personalities.find(p => 
        (p.p === (scores.p >= 3.5)) && 
        (p.s === (scores.s >= 3.5)) && 
        (p.psych === (scores.psych >= 3.5)) && 
        (p.sp === (scores.sp >= 3.5))
      );
  
      const result = document.getElementById('result');
      result.style.display = 'block';
      result.innerHTML = `
        <h2>${username}, You’re a ${vibe.name}!</h2>
        <p>${vibe.desc}</p>
        <p><strong>Bible Kin:</strong> ${vibe.bible}</p>
        <p><strong>Your Soul’s Forge:</strong> Physical ${scores.p.toFixed(1)} – ${scores.p >= 3.5 ? 'High' : 'Low'}, 
        Scientific ${scores.s.toFixed(1)} – ${scores.s >= 3.5 ? 'High' : 'Low'}, 
        Psychological ${scores.psych.toFixed(1)} – ${scores.psych >= 3.5 ? 'High' : 'Low'}, 
        Spiritual ${scores.sp.toFixed(1)} – ${scores.sp >= 3.5 ? 'High' : 'Low'}</p>
        <button onclick="shareResult('${username}', '${vibe.name}', '${vibe.desc} - Bible Kin: ${vibe.bible}')">Share on Instagram</button>
      `;
      result.scrollIntoView({ behavior: 'smooth' });
    });
  
    function shareResult(username, vibe, desc) {
      console.log('Sharing:', username, vibe, desc);
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1080;
        canvas.height = 1080;
        const ctx = canvas.getContext('2d');
  
        const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
        grad.addColorStop(0, '#008080');
        grad.addColorStop(0.5, '#FF6F61');
        grad.addColorStop(1, '#FFD700');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1080, 1080);
  
        ctx.font = '60px "Great Vibes"';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(`${username}, You’re a`, 540, 350);
        ctx.font = '80px "Great Vibes"';
        ctx.fillText(vibe, 540, 450);
        ctx.font = '30px Montserrat';
        wrapText(ctx, desc, 540, 500, 800, 40);
  
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 20;
        ctx.strokeRect(10, 10, 1060, 1060);
  
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${username}_${vibe}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        if (navigator.share) {
          canvas.toBlob(blob => {
            const file = new File([blob], `${username}_${vibe}.png`, { type: 'image/png' });
            navigator.share({
              files: [file],
              title: `${username}, ${vibe}`,
              text: `${desc} Unmask your #SoulVibes at nwaforfranklin.github.io/soulvibes! #PSPSScale #FaithJourney`
            }).catch(err => console.error('Share failed:', err));
          }, 'image/png');
        }
      } catch (err) {
        console.error('Forge faltered:', err);
        alert('The flame faltered—check console or try another browser.');
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