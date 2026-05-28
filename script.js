// --- TRUE FULLSCREEN MODE FOR ANDROID ---
function enterFullscreen() {
  if (document.body.requestFullscreen && !document.fullscreenElement) {
    document.body.requestFullscreen({ navigationUI: "hide" }).catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  }
}
document.addEventListener('click', enterFullscreen, { once: true });
document.addEventListener('touchstart', enterFullscreen, { once: true });

   
const lessons = [
    // GREETINGS CATEGORY
    {
        id: 3,
        sentence: ["Nice", "to", "meet", "you"],
        correctOrder: ["Nice", "to", "meet", "you"], 
        category: "greetings",
        harryAudio: "Audio/nice-to-meet-liam.mp3",
        dianneAudio: "Audio/nice-to-meet-jes.mp3",
        english: "Nice to meet you.",
        spanish: "Gusto en conocerte."
    },

    {
        id: 37,
        sentence: ["Pleased", "to", "meet", "you"],
        correctOrder: ["Pleased", "to", "meet", "you"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-pleased-to-meet.mp3",
        dianneAudio: "Audio/greetings-dianne-pleased-to-meet.mp3",
        english: "Pleased to meet you.",
        spanish: "Me alegro de conocerte."
    },
    {
        id: 38,
        sentence: ["Good", "to", "meet", "you"],
        correctOrder: ["Good", "to", "meet", "you"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-good-to-meet.mp3",
        dianneAudio: "Audio/greetings-dianne-good-to-meet.mp3",
        english: "Good to meet you.",
        spanish: "Qué alegría conocerte."
    },
    {
        id: 39,
        sentence: ["What's", "your", "name"],
        correctOrder: ["What's", "your", "name"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-whats-your-name.mp3",
        dianneAudio: "Audio/greetings-dianne-whats-your-name.mp3",
        english: "What's your name?",
        spanish: "¿Cómo te llamas?"
    },
    
    {
        id: 47,
        sentence: ["My", "name", "is", "Dianne"],
        correctOrder: ["My", "name", "is", "Dianne"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-my-name-is.mp3",
        dianneAudio: "Audio/greetings-dianne-my-name-is.mp3",
        english: "My name is Dianne.",
        spanish: "Mi nombre es Dianne."
    },
    {
        id: 41,
        sentence: ["How", "are", "you"],
        correctOrder: ["How", "are", "you"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-how-are-you.mp3",
        dianneAudio: "Audio/greetings-dianne-how-are-you.mp3",
        english: "How are you?",
        spanish: "¿Cómo estás?"
    },
    {
        id: 42,
        sentence: ["How's", "it", "going"],
        correctOrder: ["How's", "it", "going"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-hows-it-going.mp3",
        dianneAudio: "Audio/greetings-dianne-hows-it-going.mp3",
        english: "How's it going?",
        spanish: "¿Cómo le va?"
    },
    {
        id: 43,
        sentence: ["What's", "up"],
        correctOrder: ["What's", "up"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-whats-up.mp3",
        dianneAudio: "Audio/greetings-dianne-whats-up.mp3",
        english: "What's up?",
        spanish: "¿Qué tal?"
    },
    {
        id: 44,
        sentence: ["How", "are", "things"],
        correctOrder: ["How", "are", "things"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-how-are-things.mp3",
        dianneAudio: "Audio/greetings-dianne-how-are-things.mp3",
        english: "How are things?",
        spanish: "¿Cómo van las cosas?"
    },
    {
        id: 45,
        sentence: ["Good", "to", "see", "you"],
        correctOrder: ["Good", "to", "see", "you"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-good-to-see.mp3",
        dianneAudio: "Audio/greetings-dianne-good-to-see.mp3",
        english: "Good to see you!",
        spanish: "Encantado de verte."
    },
    {
        id: 46,
        sentence: ["Nice", "to", "see", "you"],
        correctOrder: ["Nice", "to", "see", "you"], 
        category: "greetings",
        harryAudio: "Audio/greetings-harry-nice-to-see.mp3",
        dianneAudio: "Audio/greetings-dianne-nice-to-see.mp3",
        english: "Nice to see you!",
        spanish: "Me alegro de verte."
    },

    // PRACTICE CATEGORY
    {
        id: 1,
        sentence: ["I'm", "learning", "to", "speak", "English"],
        correctOrder: ["I'm", "learning", "to", "speak", "English"],
        category: "practice",
        adamAudio: "Audio/learning-english-liam.mp3",
        jessicaAudio: "Audio/learning-english-jes.mp3",
        english: "I'm learning to speak English.",
        spanish: "Estoy aprendiendo a hablar inglés."
    },
    
    {
        id: 15,
        sentence: ["Excuse", "me", "do", "you", "speak", "Spanish"],
        correctOrder: ["Excuse", "me", "do", "you", "speak", "Spanish"],
        category: "practice",
        adamAudio: "Audio/practice-adam-excuse-me-speak-spanish.mp3",
        jessicaAudio: "Audio/practice-jessica-excuse-me-speak-spanish.mp3",
        english: "Excuse me, do you speak Spanish?",
        spanish: "Disculpe, ¿hablas español?"
    },
    {
        id: 16,
        sentence: ["I", "need", "help", "with", "my", "English"],
        correctOrder: ["I", "need", "help", "with", "my", "English"],
        category: "practice",
        adamAudio: "Audio/practice-adam-need-help-with-english.mp3",
        jessicaAudio: "Audio/practice-jessica-need-help-with-english.mp3",
        english: "I need help with my English.",
        spanish: "Necesito ayuda con mi inglés."
    },
    {
        id: 17,
        sentence: ["I", "need", "to", "practice", "my", "English"],
        correctOrder: ["I", "need", "to", "practice", "my", "English"],
        category: "practice",
        adamAudio: "Audio/practice-adam-need-practice-english.mp3",
        jessicaAudio: "Audio/practice-jessica-need-practice-english.mp3",
        english: "I need to practice my English.",
        spanish: "Necesito practicar mi inglés."
    },
    
    {
        id: 19,
        sentence: ["I'm", "new", "to", "speaking", "English"],
        correctOrder: ["I'm", "new", "to", "speaking", "English"],
        category: "practice",
        adamAudio: "Audio/practice-adam-new-to-speaking-english.mp3",
        jessicaAudio: "Audio/practice-jessica-new-to-speaking-english.mp3",
        english: "I'm new to speaking English.",
        spanish: "Soy nuevo en hablar inglés."
    },
    {
        id: 20,
        sentence: ["I", "need", "to", "learn", "English"],
        correctOrder: ["I", "need", "to", "learn", "English"],
        category: "practice",
        adamAudio: "Audio/practice-adam-need-to-learn-english.mp3",
        jessicaAudio: "Audio/practice-jessica-need-to-learn-english.mp3",
        english: "I need to learn English.",
        spanish: "Necesito aprender inglés."
    },
    { 
        id: 21,
        sentence: ["Do", "you", "speak", "English"],
        correctOrder: ["Do", "you", "speak", "English"],
        category: "practice",
        adamAudio: "Audio/practice-adam-do-you-speak-english.mp3",
        jessicaAudio: "Audio/practice-jessica-do-you-speak-english.mp3",
        english: "Do you speak English?",
        spanish: "¿Hablas inglés?"
    },
    {
        id: 22,
        sentence: ["I'm", "trying", "hard", "to", "learn", "English"],
        correctOrder: ["I'm", "trying", "hard", "to", "learn", "English"],
        category: "practice",
        adamAudio: "Audio/practice-adam-trying-hard-learn-english.mp3",
        jessicaAudio: "Audio/practice-jessica-trying-hard-learn-english.mp3",
        english: "I'm trying hard to learn English.",
        spanish: "Estoy esforzándome mucho para aprender inglés."
    },
    {
        id: 23,
        sentence: ["Why", "is", "English", "so", "difficult"],
        correctOrder: ["Why", "is", "English", "so", "difficult"],
        category: "practice",
        adamAudio: "Audio/practice-adam-why-english-so-difficult.mp3",
        jessicaAudio: "Audio/practice-jessica-why-english-so-difficult.mp3",
        english: "Why is English so difficult?",
        spanish: "¿Por qué es tan difícil el inglés?"
    },

    // PANIC CATEGORY
    {
        id: 4,
        sentence: ["Sorry", "I", "don't", "understand"],
        correctOrder: ["Sorry", "I", "don't", "understand"],
        category: "panic",
        adamAudio: "Audio/panic-adam-sorry-dont-understand.mp3",
        jessicaAudio: "Audio/panic-jessica-sorry-dont-understand.mp3",
        english: "Sorry I don't understand.",
        spanish: "Disculpa, no entiendo."
    },
    {
        id: 5,
        sentence: ["Can", "you", "repeat", "that", "please"],
        correctOrder: ["Can", "you", "repeat", "that", "please"],
        category: "panic",
        adamAudio: "Audio/panic-adam-repeat-please.mp3",
        jessicaAudio: "Audio/panic-jessica-repeat-please.mp3",
        english: "Can you repeat that please?",
        spanish: "¿Puedes repetir eso, por favor?"
    },
    {
        id: 6,
        sentence: ["Can", "you", "speak", "slower", "please"],
        correctOrder: ["Can", "you", "speak", "slower", "please"],
        category: "panic",
        adamAudio: "Audio/panic-adam-speak-slowly.mp3",
        jessicaAudio: "Audio/panic-jessica-speak-slowly.mp3",
        english: "Can you speak slower please?",
        spanish: "¿Puedes hablar más despacio por favor?"
    },
    {
        id: 7,
        sentence: ["I'm", "still", "learning", "English"],
        correctOrder: ["I'm", "still", "learning", "English"],
        category: "panic",
        adamAudio: "Audio/panic-adam-still-learning.mp3",
        jessicaAudio: "Audio/panic-jessica-still-learning.mp3",
        english: "I'm still learning English.",
        spanish: "Todavía estoy aprendiendo inglés."
    },
    {
        id: 8,
        sentence: ["What", "does", "that", "mean"],
        correctOrder: ["What", "does", "that", "mean"],
        category: "panic",
        adamAudio: "Audio/panic-adam-what-does-mean.mp3",
        jessicaAudio: "Audio/panic-jessica-what-does-mean.mp3",
        english: "What does that mean?",
        spanish: "¿Qué significa eso?"
    },
    {
        id: 9,
        sentence: ["Can", "you", "say", "that", "again"],
        correctOrder: ["Can", "you", "say", "that", "again"],
        category: "panic",
        adamAudio: "Audio/panic-adam-say-again.mp3",
        jessicaAudio: "Audio/panic-jessica-say-again.mp3",
        english: "Can you say that again?",
        spanish: "¿Puedes decir eso de nuevo?"
    },
    {
        id: 10,
        sentence: ["I", "didn't", "get", "that"],
        correctOrder: ["I", "didn't", "get", "that"],
        category: "panic",
        adamAudio: "Audio/panic-adam-didnt-get-that.mp3",
        jessicaAudio: "Audio/panic-jessica-didnt-get-that.mp3",
        english: "I didn't get that.",
        spanish: "No entendí eso."
    },
    {
        id: 11,
        sentence: ["Can", "you", "help", "me", "understand", "this"],
        correctOrder: ["Can", "you", "help", "me", "understand", "this"],
        category: "panic",
        adamAudio: "Audio/panic-adam-help-understand.mp3",
        jessicaAudio: "Audio/panic-jessica-help-understand.mp3",
        english: "Can you help me understand this?",
        spanish: "¿Puedes ayudarme a entender esto?"
    },
    {
        id: 12,
        sentence: ["I'm", "not", "sure", "what", "you", "mean"],
        correctOrder: ["I'm", "not", "sure", "what", "you", "mean"],
        category: "panic",
        adamAudio: "Audio/panic-adam-not-sure-mean.mp3",
        jessicaAudio: "Audio/panic-jessica-not-sure-mean.mp3",
        english: "I'm not sure what you mean.",
        spanish: "No estoy seguro de lo que dices."
    },
    {
        id: 13,
        sentence: ["Can", "you", "explain", "that", "again"],
        correctOrder: ["Can", "you", "explain", "that", "again"],
        category: "panic",
        adamAudio: "Audio/panic-adam-explain-again.mp3",
        jessicaAudio: "Audio/panic-jessica-explain-again.mp3",
        english: "Can you explain that again?",
        spanish: "¿Puedes explicar eso de nuevo?"
    },

    // FINISHERS CATEGORY
    {
        id: 2, 
        sentence: ["I", "hope", "you", "have", "a", "nice", "day"],
        correctOrder: ["I", "hope", "you", "have", "a", "nice", "day"],
        category: "finishers",
        markAudio: "Audio/hope-nice-day-liam.mp3",
        lauraAudio: "Audio/hope-nice-day-jes.mp3",
        english: "I hope you have a nice day.",
        spanish: "Espero que tengas un buen día."
    },
    {
        id: 24,
        sentence: ["Talk", "to", "you", "soon"],
        correctOrder: ["Talk", "to", "you", "soon"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-talk-soon.mp3",
        lauraAudio: "Audio/finishers-laura-talk-soon.mp3",
        english: "Talk to you soon!",
        spanish: "¡Hasta pronto!"
    },
    {
        id: 25,
        sentence: ["Catch", "you", "later"],
        correctOrder: ["Catch", "you", "later"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-catch-later.mp3",
        lauraAudio: "Audio/finishers-laura-catch-later.mp3",
        english: "Catch you later!",
        spanish: "¡Nos vemos luego!"
    },
    {
        id: 26,
        sentence: ["Have", "a", "great", "day"],
        correctOrder: ["Have", "a", "great", "day"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-great-day.mp3",
        lauraAudio: "Audio/finishers-laura-great-day.mp3",
        english: "Have a great day!",
        spanish: "¡Que tengas un buen día!"
    },
    {
        id: 27,
        sentence: ["Take", "care"],
        correctOrder: ["Take", "care"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-take-care.mp3",
        lauraAudio: "Audio/finishers-laura-take-care.mp3",
        english: "Take care!",
        spanish: "¡Cuídate!"
    },
    {
        id: 28,
        sentence: ["Thanks", "for", "your", "help"],
        correctOrder: ["Thanks", "for", "your", "help"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-thanks-help.mp3",
        lauraAudio: "Audio/finishers-laura-thanks-help.mp3",
        english: "Thanks for your help!",
        spanish: "¡Gracias por tu ayuda!"
    },
    {
        id: 29,
        sentence: ["It", "was", "nice", "talking", "to", "you"],
        correctOrder: ["It", "was", "nice", "talking", "to", "you"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-nice-talking.mp3",
        lauraAudio: "Audio/finishers-laura-nice-talking.mp3",
        english: "It was nice talking to you!",
        spanish: "¡Ha sido un placer hablar contigo!"
    },
    {
        id: 30,
        sentence: ["Thanks", "for", "everything"],
        correctOrder: ["Thanks", "for", "everything"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-thanks-everything.mp3",
        lauraAudio: "Audio/finishers-laura-thanks-everything.mp3",
        english: "Thanks for everything!",
        spanish: "¡Gracias por todo!"
    },
    {
        id: 31,
        sentence: ["Have", "a", "wonderful", "afternoon"],
        correctOrder: ["Have", "a", "wonderful", "afternoon"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-wonderful-afternoon.mp3",
        lauraAudio: "Audio/finishers-laura-wonderful-afternoon.mp3",
        english: "Have a wonderful afternoon!",
        spanish: "¡Que tengas una tarde maravillosa!"
    },
    {
        id: 32,
        sentence: ["Thanks", "for", "the", "information"],
        correctOrder: ["Thanks", "for", "the", "information"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-thanks-information.mp3",
        lauraAudio: "Audio/finishers-laura-thanks-information.mp3",
        english: "Thanks for the information!",
        spanish: "¡Gracias por la información!"
    },
    {
        id: 33,
        sentence: ["Thanks", "for", "your", "patience"],
        correctOrder: ["Thanks", "for", "your", "patience"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-thanks-patience.mp3",
        lauraAudio: "Audio/finishers-laura-thanks-patience.mp3",
        english: "Thanks for your patience!",
        spanish: "¡Gracias por tu paciencia!"
    },
    {
        id: 34,
        sentence: ["Hope", "to", "see", "you", "again"],
        correctOrder: ["Hope", "to", "see", "you", "again"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-hope-again.mp3",
        lauraAudio: "Audio/finishers-laura-hope-again.mp3",
        english: "Hope to see you again!",
        spanish: "¡Espero verte de nuevo!"
    },
    {
        id: 35,
        sentence: ["Thanks", "for", "being", "so", "helpful"],
        correctOrder: ["Thanks", "for", "being", "so", "helpful"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-thanks-helpful.mp3",
        lauraAudio: "Audio/finishers-laura-thanks-helpful.mp3",
        english: "Thanks for being so helpful!",
        spanish: "¡Gracias por ser tan servicial!"
    },
    {
        id: 36,
        sentence: ["It's", "been", "a", "pleasure"],
        correctOrder: ["It's", "been", "a", "pleasure"],
        category: "finishers",
        markAudio: "Audio/finishers-mark-been-pleasure.mp3",
        lauraAudio: "Audio/finishers-laura-been-pleasure.mp3",
        english: "It's been a pleasure!",
        spanish: "¡Ha sido un placer!"
    }
];

// GLOBAL STATE VARIABLES - FLAT STRUCTURE
let currentLessonIndex = 0;
let correctAnswers = 0;
let currentLevel = 1;
let lastAddedWord = null;
let canUndo = false;
// LESSON HISTORY TRACKING - FLAT STRUCTURE
let lessonHistory = [];
let historyPosition = -1;

// LEVEL TARGETS - FLAT ARRAY
const levelTargets = [
    { level: 1, target: 10, next: 2 },
    { level: 2, target: 25, next: 3 },
    { level: 3, target: 50, next: 4 },
    { level: 4, target: 100, next: "MAX" }
];

// FIREWORK COLORS - FLAT ARRAY
const fireworkColors = ['#FFD700', '#FF6B47', '#4ECDC4', '#45B7D1', '#FF69B4', '#32CD32', '#FF4500', '#9370DB', '#00CED1', '#FFB6C1'];

// DEVICE DETECTION FUNCTION
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (window.innerWidth <= 800 && window.matchMedia("(orientation: landscape)").matches);
}

// MOBILE CLASS APPLICATION
function applyMobileClasses() {
    if (!isMobileDevice()) return;
    
    console.log('applyMobileClasses called, isMobile:', isMobileDevice());
    if (!isMobileDevice()) return;
    
    // Apply avatar mobile classes based on current lesson category
    const currentLesson = lessons[currentLessonIndex];
    if (currentLesson.category === 'panic') {
        document.getElementById('johnImage').classList.add('mobile-landscape-john-image');
        document.getElementById('beckyImage').classList.add('mobile-landscape-becky-image');
    } else if (currentLesson.category === 'finishers') {
    console.log('Applying finishers mobile classes');
        document.getElementById('markImage').classList.add('mobile-landscape-mark-image');
        document.getElementById('lauraImage').classList.add('mobile-landscape-laura-image');
    } else if (currentLesson.category === 'practice') {
        document.getElementById('adamImage').classList.add('mobile-landscape-adam-image');
        document.getElementById('jessicaImage').classList.add('mobile-landscape-jessica-image');
    } else if (currentLesson.category === 'greetings') {
        document.getElementById('harryImage').classList.add('mobile-landscape-harry-image');
        document.getElementById('dianneImage').classList.add('mobile-landscape-dianne-image');
    }
    document.getElementById('dropZone').classList.add('mobile-landscape-drop-zone');
    document.getElementById('wordBank').classList.add('mobile-landscape-word-bank');
    document.querySelector('.lesson-nav').classList.add('mobile-landscape-lesson-nav');
    document.getElementById('randomNavBtn').classList.add('mobile-landscape-random-nav-btn');
    document.querySelector('.progress-area').classList.add('mobile-landscape-progress-area');
    document.querySelector('.level-badge').classList.add('mobile-landscape-level-badge');
    document.querySelector('.progress-label').classList.add('mobile-landscape-progress-label');
    document.querySelector('.progress-bar-container').classList.add('mobile-landscape-progress-bar-container');
    document.getElementById('translationOverlay').classList.add('mobile-landscape-translation-overlay');
    document.querySelector('.translation-header').classList.add('mobile-landscape-translation-header');
    document.querySelector('.translation-english').classList.add('mobile-landscape-translation-english');
    document.querySelector('.translation-spanish').classList.add('mobile-landscape-translation-spanish');
    document.querySelector('.translation-close-btn').classList.add('mobile-landscape-translation-close-btn');
    // Stats overlay mobile classes
    document.getElementById('statsOverlay').classList.add('mobile-landscape-stats-overlay');
    document.querySelector('.stats-content').classList.add('mobile-landscape-stats-content');
    document.querySelector('.stats-header').classList.add('mobile-landscape-stats-header');
    document.querySelectorAll('.stats-section').forEach(section => section.classList.add('mobile-landscape-stats-section'));
    document.querySelectorAll('.stat-item').forEach(item => item.classList.add('mobile-landscape-stat-item'));
    document.querySelectorAll('.stat-label').forEach(label => label.classList.add('mobile-landscape-stat-label'));
    document.querySelectorAll('.stat-value').forEach(value => value.classList.add('mobile-landscape-stat-value'));
    document.querySelector('.stats-action-btn').classList.add('mobile-landscape-stats-action-btn');
    
    // Apply mobile classes to navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.add('mobile-landscape-nav-btn'));
}

// PROGRESS UPDATE FUNCTION
function updateProgress() {
    // Get total points from our tracking system
    const stats = getStatsData();
    const totalPoints = stats.weeklyPoints || 0;
    
    // Define our new level system
    const levels = [
        { level: 1, title: "Bronze Beginner", minPoints: 0, maxPoints: 49, color: "#CD7F32" },
        { level: 2, title: "Silver Speaker", minPoints: 50, maxPoints: 149, color: "#C0C0C0" },
        { level: 3, title: "Gold Communicator", minPoints: 150, maxPoints: 299, color: "#FFD700" },
        { level: 4, title: "Diamond Fluent", minPoints: 300, maxPoints: 499, color: "#B9F2FF" },
        { level: 5, title: "Master Linguist", minPoints: 500, maxPoints: 999999, color: "#FF6B6B" }
    ];
    
    // Find current level
    const currentLevelData = levels.find(l => totalPoints >= l.minPoints && totalPoints <= l.maxPoints);
    
    // Update level display
    const currentLevelEl = document.getElementById('currentLevel');
    const progressTextEl = document.getElementById('progressText');
    const progressBarEl = document.getElementById('progressBar');
    const levelBadgeEl = document.querySelector('.level-badge');
    
    
    // BADGE SYSTEM 2.0 - TARGET THE VISIBLE CENTER BADGE
const centerBadgeImg = document.getElementById('centerBadgeImg');
if (currentLevelData.level === 1) {
    centerBadgeImg.src = 'Image/bronze.png';
} else if (currentLevelData.level === 2) {
    centerBadgeImg.src = 'Image/silver.png';
} else if (currentLevelData.level === 3) {
    centerBadgeImg.src = 'Image/gold.png';
} else if (currentLevelData.level === 4) {
    centerBadgeImg.src = 'Image/diamond.png';
} else if (currentLevelData.level === 5) {
    centerBadgeImg.src = 'Image/master.png';
}
    
    // Calculate progress to next level
    if (currentLevelData.level === 5) {
        progressTextEl.textContent = `${currentLevelData.title} 🏆`;
        progressBarEl.style.width = "100%";
        document.querySelector('.progress-indicator #progressText').textContent = `${currentLevelData.title} 🏆`;
    } else {
        const nextLevel = levels[currentLevelData.level];
        const pointsInCurrentLevel = totalPoints - currentLevelData.minPoints;
        const pointsNeededForLevel = nextLevel.minPoints - currentLevelData.minPoints;
        const displayLevel = Math.floor(totalPoints / 15) + 1;
        const displayPointsInLevel = totalPoints % 15;
        document.querySelector('.progress-indicator #progressText').textContent = `${displayPointsInLevel}/15 to Level ${displayLevel + 1}`;

        const safeProgressElement = document.querySelector('.progress-indicator #progressText');
        safeProgressElement.textContent = `${displayPointsInLevel}/15 to Level ${displayLevel + 1}`;
        if (safeProgressElement) {
        safeProgressElement.textContent = `${pointsInCurrentLevel}/${pointsNeededForLevel} to Level ${currentLevelData.level + 1}`;
        safeProgressElement.style.color = safeProgressElement.style.color; // Force repaint
}
        const progressElement = document.querySelector('.progress-indicator #progressText');
        console.log('Progress element found:', progressElement);
        console.log('Updating to:', `${pointsInCurrentLevel}/${pointsNeededForLevel} to Level ${currentLevelData.level + 1}`);
        console.log('Debug - totalPoints:', totalPoints, 'pointsInCurrentLevel:', pointsInCurrentLevel, 'pointsNeededForLevel:', pointsNeededForLevel);
       progressTextEl.textContent = `${displayPointsInLevel}/15 to Level ${displayLevel + 1}`;
        
        const progressPercent = (pointsInCurrentLevel / pointsNeededForLevel) * 100;
        progressBarEl.style.width = Math.min(progressPercent, 100) + "%";
    }
}

// LEVEL UP FUNCTION
function levelUp() {
    currentLevel++;
    
    const levelBadge = document.querySelector('.level-badge');
    levelBadge.style.transform = 'scale(1.2)';
    levelBadge.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)';
    
    setTimeout(() => {
        levelBadge.style.transform = 'scale(1)';
        levelBadge.style.background = 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)';
    }, 1000);
    
    updateProgress();
}

// INCREMENT CORRECT ANSWERS
function incrementCorrectAnswers() {
    correctAnswers++;
    updateProgress();
}

// UNDO BUTTON UPDATE
function updateUndoButton() {
    const undoBtn = document.getElementById('undoButton');
    undoBtn.classList.remove('undo-btn-active');
    
    if (canUndo && lastAddedWord) {
        undoBtn.disabled = false;
        undoBtn.classList.add('undo-btn-active');
    } else {
        undoBtn.disabled = true;
    }
}

// PERFORM UNDO
function performUndo() {
    if (!canUndo || !lastAddedWord) return;
    
    const wordBank = document.getElementById('wordBank');
    const dropZone = document.getElementById('dropZone');
    
    if (lastAddedWord.parentElement === dropZone) {
        wordBank.appendChild(lastAddedWord);
        lastAddedWord = null;
        canUndo = false;
        updateUndoButton();
        setupInteraction();
    }
}

// LESSON HISTORY MANAGEMENT - FLAT STRUCTURE
function addToHistory(lessonIndex) {
    // Remove any future history if we're in the middle
    if (historyPosition < lessonHistory.length - 1) {
        lessonHistory = lessonHistory.slice(0, historyPosition + 1);
    }
    
    // Add new lesson to history
    lessonHistory.push(lessonIndex);
    historyPosition = lessonHistory.length - 1;
}

function canGoBack() {
    return historyPosition > 0;
}

function getPreviousLesson() {
    if (canGoBack()) {
        historyPosition--;
        return lessonHistory[historyPosition];
    }
    return null;
}

// FISHER-YATES SHUFFLE
function fisherYatesShuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// FIREWORK CREATION
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    firework.style.backgroundColor = color;
    firework.style.color = color;
    firework.style.borderRadius = '50%';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 100;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    
    firework.style.setProperty('--dx', dx + 'px');
    firework.style.setProperty('--dy', dy + 'px');
    
    const size = Math.random() * 6 + 4;
    firework.style.width = size + 'px';
    firework.style.height = size + 'px';
    
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    
    return firework;
}

// EXPLODE FIREWORKS
function explodeFireworks() {
    const container = document.getElementById('fireworksContainer');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const burstPoints = [
        { x: centerX - 200, y: centerY - 100 },
        { x: centerX + 200, y: centerY - 100 },
        { x: centerX, y: centerY - 150 },
        { x: centerX - 100, y: centerY + 50 },
        { x: centerX + 100, y: centerY + 50 }
    ];
    
    for (let wave = 0; wave < 2; wave++) {
        setTimeout(() => {
            burstPoints.forEach((point, burstIndex) => {
                setTimeout(() => {
                    for (let i = 0; i < 15; i++) {
                        setTimeout(() => {
                            const firework = createFirework(point.x, point.y);
                            container.appendChild(firework);
                            
                            requestAnimationFrame(() => {
                                firework.classList.add('firework-active');
                            });
                            
                            setTimeout(() => {
                                if (firework.parentNode) {
                                    firework.parentNode.removeChild(firework);
                                }
                            }, 3000);
                        }, i * 20);
                    }
                }, burstIndex * 200);
            });
        }, wave * 1000);
    }
}

// SHOW TRY AGAIN
function showTryAgain() {
    const tryAgainText = document.getElementById('tryAgainText');
    tryAgainText.classList.add('try-again-text-show');
    
    setTimeout(() => {
        tryAgainText.classList.remove('try-again-text-show');
    }, 1500);
}

// TRANSLATION OVERLAY FUNCTIONS
function showTranslationOverlay(lesson) {
    const overlay = document.getElementById('translationOverlay');
    const englishEl = document.getElementById('translationEnglish');
    const spanishEl = document.getElementById('translationSpanish');
    
    englishEl.textContent = lesson.english;
    spanishEl.textContent = lesson.spanish;
    
    overlay.classList.add('translation-overlay-show');
}

function hideTranslationOverlay() {
    console.log('hideTranslationOverlay called!');
    const overlay = document.getElementById('translationOverlay');
    overlay.classList.remove('translation-overlay-show');
    overlay.classList.add('translation-overlay-hide');
    
    setTimeout(() => {
    overlay.classList.remove('translation-overlay-hide');
    
    // AUTO-ADVANCE TO NEXT LESSON
    if (isRandomMode) {
        // In random mode, go to random lesson
        const randomIndex = getRandomLesson();
        currentLessonIndex = randomIndex;
        loadLesson(currentLessonIndex);
    } else {
        // In sequential mode, go to next lesson
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;
            loadLesson(currentLessonIndex);

            // SPEEDRUN AUTO-PLAY FEATURE
            if (speedrunActive) {
                setTimeout(() => {
                    autoPlaySpeedrunAudio();
                console.log('Calling autoPlaySpeedrunAudio from hideTranslationOverlay'); 
                console.log('Calling autoPlaySpeedrunAudio from hideTranslationOverlay');
                    autoPlaySpeedrunAudio();   
                }, 800);
            }
        }
    }
}, 500);
}

// SPEEDRUN AUTO-PLAY AUDIO FUNCTION
function autoPlaySpeedrunAudio() {
    const currentLesson = lessons[currentLessonIndex];
    console.log('Auto-play function called! Speedrun active:', speedrunActive);
    console.log('Current lesson category:', currentLesson.category);
    if (currentLesson.category === 'practice') {
        // Randomly choose between Adam or Jessica
        const randomChoice = Math.random() < 0.5 ? 'adam' : 'jessica';
        if (randomChoice === 'adam') {
            document.getElementById('adamAudio').play();
        } else {
            document.getElementById('jessicaAudio').play();
        }
    } else if (currentLesson.category === 'panic') {
        // Randomly choose between John or Becky  
        const randomChoice = Math.random() < 0.5 ? 'john' : 'becky';
        if (randomChoice === 'john') {
            document.getElementById('johnAudio').play();
        } else {
            document.getElementById('beckyAudio').play();
        }
    } else if (currentLesson.category === 'finishers') {
        // Randomly choose between Mark or Laura
        const randomChoice = Math.random() < 0.5 ? 'mark' : 'laura';
        if (randomChoice === 'mark') {
            document.getElementById('markAudio').play();
        } else {
            document.getElementById('lauraAudio').play();
        }
    } else if (currentLesson.category === 'greetings') {
        // Randomly choose between Harry or Dianne
        const randomChoice = Math.random() < 0.5 ? 'harry' : 'dianne';
        if (randomChoice === 'harry') {
            document.getElementById('harryAudio').play();
        } else {
            document.getElementById('dianneAudio').play();
        }
    }
}

// ANIMATE WORD TO DROP ZONE
function animateWordToDropZone(wordTile, dropZone) {
    const startRect = wordTile.getBoundingClientRect();
    const dropRect = dropZone.getBoundingClientRect();
    
    const startX = startRect.left;
    const startY = startRect.top;
    const endX = dropRect.right - startRect.width - 20;
    const endY = dropRect.top + (dropRect.height - startRect.height) / 2;
    
    const clone = wordTile.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.left = startX + 'px';
    clone.style.top = startY + 'px';
    clone.style.zIndex = '999';
    clone.style.pointerEvents = 'none';
    clone.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    wordTile.style.opacity = '0';
    document.body.appendChild(clone);
    
    requestAnimationFrame(() => {
        clone.style.left = endX + 'px';
        clone.style.top = endY + 'px';
        clone.style.transform = 'scale(1.05)';
    });
    
    setTimeout(() => {
        document.body.removeChild(clone);
        dropZone.appendChild(wordTile);
        wordTile.style.opacity = '1';
        wordTile.style.transform = '';
        
        lastAddedWord = wordTile;
        canUndo = true;
        updateUndoButton();

        // Auto-check if all words are placed
        const currentLesson = lessons[currentLessonIndex];
        if (dropZone.children.length === currentLesson.correctOrder.length) {
            // All words placed - auto-check the answer!
            setTimeout(() => {
                checkAnswer();
            }, 500);
        }
        
        // Check if word is in correct position
const currentPosition = dropZone.children.length - 1;
const lesson = lessons[currentLessonIndex];
const isCorrect = wordTile.textContent === lesson.correctOrder[currentPosition];

if (isCorrect) {
    wordTile.style.background = '#10b981';
    wordTile.style.color = 'white';
} else {
    wordTile.style.background = '#ff9500';
    wordTile.style.color = 'white';
}

setTimeout(() => {
    wordTile.style.background = 'white';
    wordTile.style.color = 'black';
}, 50);
    }, 400);
}

// TAP TO ADD FUNCTIONALITY
function addTapToAdd() {
    const wordTiles = document.querySelectorAll('.word-tile');
    const dropZone = document.getElementById('dropZone');
    
    wordTiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (tile.parentElement.id === 'wordBank') {
                animateWordToDropZone(tile, dropZone);
            }
        });
        
        tile.addEventListener('touchstart', () => {
            tile.classList.add('word-tile-active');
        });
        
        tile.addEventListener('touchend', () => {
            tile.classList.remove('word-tile-active');
        });
    });
}



// SETUP INTERACTION
function setupInteraction() {
    addTapToAdd();
    
    // Apply mobile classes to word tiles if on mobile
    if (isMobileDevice()) {
        document.querySelectorAll('.word-tile').forEach(tile => {
            tile.classList.add('mobile-landscape-word-tile');
        });
    }
}

// UPDATE NAVIGATION BUTTONS
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.classList.remove('nav-btn-disabled');
    nextBtn.classList.remove('nav-btn-disabled');
    
    if (currentLessonIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('nav-btn-disabled');
    } else {
        prevBtn.disabled = false;
    }
    
    if (currentLessonIndex === lessons.length - 1) {
        nextBtn.disabled = true;
        nextBtn.classList.add('nav-btn-disabled');
    } else {
        nextBtn.disabled = false;
    }
}

// LOAD LESSON FUNCTION
function loadLesson(index) {
    const lesson = lessons[index];
    addToHistory(index);
    const wordBank = document.getElementById('wordBank');
    const dropZone = document.getElementById('dropZone');
    
    wordBank.innerHTML = '';
    dropZone.innerHTML = '';
    
    lastAddedWord = null;
    canUndo = false;
    updateUndoButton();
    
    const scrambled = fisherYatesShuffle(lesson.sentence);
    
    scrambled.forEach((word, wordIndex) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.className = 'word-tile';
        span.setAttribute('id', `word-${wordIndex}`);
        wordBank.appendChild(span);
    });
    
    // Set audio sources based on category
    if (lesson.category === 'finishers') {
        document.getElementById('markAudio').src = lesson.markAudio;
        document.getElementById('lauraAudio').src = lesson.lauraAudio;
    } else if (lesson.category === 'panic') {
        document.getElementById('johnAudio').src = lesson.adamAudio;  // Use adamAudio for John
        document.getElementById('beckyAudio').src = lesson.jessicaAudio;  // Use jessicaAudio for Becky
        } else if (lesson.category === 'greetings') {
        document.getElementById('harryAudio').src = lesson.harryAudio;
        document.getElementById('dianneAudio').src = lesson.dianneAudio;
    } else {
        document.getElementById('adamAudio').src = lesson.adamAudio;
        document.getElementById('jessicaAudio').src = lesson.jessicaAudio;
    }
    
    // AVATAR SWITCHING BASED ON CATEGORY
    // Hide all avatars first
    document.getElementById('adamImage').style.display = 'none';
    document.getElementById('jessicaImage').style.display = 'none';
    document.getElementById('johnImage').style.display = 'none';
    document.getElementById('beckyImage').style.display = 'none';
    document.getElementById('markImage').style.display = 'none';
    document.getElementById('lauraImage').style.display = 'none';
    document.getElementById('harryImage').style.display = 'none';
    document.getElementById('dianneImage').style.display = 'none';
    
    // Show the correct avatars based on category
    if (lesson.category === 'panic') {
        document.getElementById('johnImage').style.display = 'none';
        document.getElementById('beckyImage').style.display = 'block';
    } else if (lesson.category === 'finishers') {
        document.getElementById('markImage').style.display = 'block';
        document.getElementById('lauraImage').style.display = 'none';
    } else if (lesson.category === 'greetings') {
        document.getElementById('harryImage').style.display = 'none';
        document.getElementById('dianneImage').style.display = 'block';
    } else if (lesson.category === 'practice') {
        document.getElementById('adamImage').style.display = 'block';
        document.getElementById('jessicaImage').style.display = 'none';
    }
    
    updateNavigationButtons();
    setupInteraction();
    applyMobileClasses();
}

// EVENT LISTENERS - FLAT STRUCTURE
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        loadLesson(currentLessonIndex);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (isRandomMode) {
        // In random mode, both prev and next go to random lessons
        const randomIndex = getRandomLesson();
        currentLessonIndex = randomIndex;
        loadLesson(currentLessonIndex);
    } else {
        // Normal sequential navigation
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;
            loadLesson(currentLessonIndex);
        }
    }
});

// Avatar click handlers for audio playback
document.getElementById('adamImage').addEventListener('click', () => {
    document.getElementById('adamAudio').play();
});

document.getElementById('jessicaImage').addEventListener('click', () => {
    document.getElementById('jessicaAudio').play();
});

document.getElementById('johnImage').addEventListener('click', () => {
    document.getElementById('johnAudio').play();
});

document.getElementById('beckyImage').addEventListener('click', () => {
    document.getElementById('beckyAudio').play();
});

document.getElementById('markImage').addEventListener('click', () => {
    document.getElementById('markAudio').play();
});

document.getElementById('lauraImage').addEventListener('click', () => {
    document.getElementById('lauraAudio').play();
});

document.getElementById('harryImage').addEventListener('click', () => {
    document.getElementById('harryAudio').play();
});

document.getElementById('dianneImage').addEventListener('click', () => {
    document.getElementById('dianneAudio').play();
});

document.getElementById('resetButton').addEventListener('click', () => {
    lastAddedWord = null;
    canUndo = false;
    updateUndoButton();
    loadLesson(currentLessonIndex);
});

document.getElementById('undoButton').addEventListener('click', performUndo);



document.getElementById('translationCloseBtn').addEventListener('click', hideTranslationOverlay);

document.getElementById('translationOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'translationOverlay') {
        hideTranslationOverlay();
    }
});


// HOVER EFFECTS - FLAT EVENT LISTENERS
document.getElementById('prevBtn').addEventListener('mouseenter', (e) => {
    if (!e.target.disabled) e.target.classList.add('nav-btn-hover');
});
document.getElementById('prevBtn').addEventListener('mouseleave', (e) => {
    e.target.classList.remove('nav-btn-hover');
});

document.getElementById('nextBtn').addEventListener('mouseenter', (e) => {
    if (!e.target.disabled) e.target.classList.add('nav-btn-hover');
});
document.getElementById('nextBtn').addEventListener('mouseleave', (e) => {
    e.target.classList.remove('nav-btn-hover');
});

document.getElementById('undoButton').addEventListener('mouseenter', (e) => {
    if (!e.target.disabled) e.target.classList.add('undo-btn-hover-active');
});
document.getElementById('undoButton').addEventListener('mouseleave', (e) => {
    e.target.classList.remove('undo-btn-hover-active');
});

document.getElementById('translationCloseBtn').addEventListener('mouseenter', (e) => {
    e.target.classList.add('translation-close-btn-hover');
});
document.getElementById('translationCloseBtn').addEventListener('mouseleave', (e) => {
    e.target.classList.remove('translation-close-btn-hover');
});

// MENU SYSTEM FUNCTIONALITY
function showMenu() {
    document.getElementById('menuOverlay').style.display = 'flex';
}

function hideMenu() {
    document.getElementById('menuOverlay').style.display = 'none';
}

function jumpToCategory(category) {
    // AUTOMATICALLY SWITCH TO CATEGORY MODE
    toggleRandomMode(false);
    
    // Find first lesson of the specified category
    const categoryIndex = lessons.findIndex(lesson => lesson.category === category);
    if (categoryIndex !== -1) {
        currentLessonIndex = categoryIndex;
        loadLesson(currentLessonIndex);
        hideMenu();
    }
}

// STATS SYSTEM FUNCTIONALITY
function showStatsOverlay() {
    updateStatsDisplay();
    const overlay = document.getElementById('statsOverlay');
    overlay.style.display = 'flex';
    overlay.classList.remove('stats-overlay-show'); // Reset any previous state
    
    // Force a reflow to ensure display is applied
    overlay.offsetHeight;
    
    // Add the animation class immediately
    overlay.classList.add('stats-overlay-show');
}

function hideStatsOverlay() {
    const overlay = document.getElementById('statsOverlay');
    overlay.classList.remove('stats-overlay-show');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}

function updateStatsDisplay() {
    console.log('DEBUG: lifetimePoints element:', document.getElementById('lifetimePoints'));
    console.log('DEBUG: lifetimeSentences element:', document.getElementById('lifetimeSentences'));
    console.log('DEBUG: currentStreak element:', document.getElementById('currentStreak'));
    console.log('DEBUG: longestStreak element:', document.getElementById('longestStreak'));
    console.log('DEBUG: totalDaysActive element:', document.getElementById('totalDaysActive'));
    
    const today = new Date().toDateString();
    const stats = getStatsData();
    
    // Only update elements that actually exist in HTML
document.getElementById('weeklyPoints').textContent = stats.weeklyPoints || 0;
document.getElementById('activeDays').textContent = stats.activeDays || 0;
// Update weekly sentences (MISSING!)
document.getElementById('weeklySentences').textContent = stats.weeklySentences || 0;
// Update daily stats (MISSING!)
document.getElementById('todayPoints').textContent = stats.todayPoints || 0;
document.getElementById('todaySentences').textContent = stats.todaySentences || 0;

   // Update lifetime stats (gamification metrics) - TEMPORARILY DISABLED
 document.getElementById('lifetimePoints').textContent = stats.lifetimePoints || 0;
 document.getElementById('lifetimeSentences').textContent = stats.lifetimeSentences || 0;
 document.getElementById('totalDaysActive').textContent = stats.totalDaysActive || 0;
 document.getElementById('longestStreak').textContent = stats.longestStreak || 0;
 document.getElementById('currentStreak').textContent = stats.currentStreak || 0;
}

function getStatsData() {
    const today = new Date().toDateString();
    const progressData = JSON.parse(localStorage.getItem('englishLearningProgress') || '{}');
    
    // Calculate today's stats
    let todayPoints = 0;
    let todaySentences = 0;
    if (progressData.weeklyStats && progressData.weeklyStats[today]) {
        todayPoints = progressData.weeklyStats[today].points;
        todaySentences = progressData.weeklyStats[today].sentences;
    }
    
    // Calculate weekly totals (last 7 days)
    let weeklyPoints = 0;
    let activeDays = 0;
    let weeklySentences = 0;
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    if (progressData.weeklyStats) {
        Object.keys(progressData.weeklyStats).forEach(date => {
            const statDate = new Date(date);
            if (statDate >= oneWeekAgo) {
                weeklySentences += progressData.weeklyStats[date].sentences || 0;
                weeklyPoints += progressData.weeklyStats[date].points;
                if (progressData.weeklyStats[date].sentences > 0) {
                    activeDays++;
                }
            }
        });
    }

    // Calculate lifetime totals (all-time stats)
    let lifetimePoints = 0;
    let lifetimeSentences = 0;
    let totalDaysActive = 0;
    let longestStreak = 0;
    let currentStreak = 0;
    
    if (progressData.weeklyStats) {
        const allDates = Object.keys(progressData.weeklyStats).sort();
        
        // Calculate lifetime totals
        allDates.forEach(date => {
            lifetimePoints += progressData.weeklyStats[date].points || 0;
            lifetimeSentences += progressData.weeklyStats[date].sentences || 0;
            if (progressData.weeklyStats[date].sentences > 0) {
                totalDaysActive++;
            }
        });
        
        // Calculate streaks
        let streak = 0;
        const today = new Date();
        for (let i = 0; i < 365; i++) { // Check last year
            const checkDate = new Date(today);
            checkDate.setDate(today.getDate() - i);
            const dateStr = checkDate.toDateString();
            
            if (progressData.weeklyStats[dateStr] && progressData.weeklyStats[dateStr].sentences > 0) {
                streak++;
                if (i === 0) currentStreak = streak; // Current streak from today
            } else {
                if (streak > longestStreak) longestStreak = streak;
                if (i === 0) currentStreak = 0; // Broke streak today
                streak = 0;
            }
        }
        if (streak > longestStreak) longestStreak = streak;
    }
    
    return {
    todayPoints: todayPoints,
    todaySentences: todaySentences,
    weeklyPoints: weeklyPoints,
    weeklySentences: weeklySentences,
    activeDays: activeDays,
    lifetimePoints: lifetimePoints,
    lifetimeSentences: lifetimeSentences,
    totalDaysActive: totalDaysActive,
    longestStreak: longestStreak,
    currentStreak: currentStreak
};
}

function checkAnswer() {
    const dropZone = document.getElementById('dropZone');
    const droppedWords = Array.from(dropZone.children);
    const lesson = lessons[currentLessonIndex];
    
    if (droppedWords.length !== lesson.correctOrder.length) {
        alert("Please arrange all the words first!");
        return;
    }
    
    const userOrder = droppedWords.map(word => word.textContent);
    const isCorrect = userOrder.every((word, index) => word === lesson.correctOrder[index]);
    
    if (isCorrect) {
        incrementCorrectAnswers();
        
        // POINT TRACKING SYSTEM
        const currentLesson = lessons[currentLessonIndex];
        const pointsEarned = currentLesson.sentence.length; // Points = word count
        awardPoints(currentLesson.id, pointsEarned);

        // SPEEDRUN SCORING SYSTEM
        if (speedrunActive) {
        const multiplier = getCurrentSpeedrunMultiplier();
        const bonusPoints = Math.floor(pointsEarned * multiplier);
        speedrunScore += bonusPoints;
        updateSpeedrunDisplay();
        }
        updateProgress(); // FORCE IMMEDIATE REFRESH AFTER POINTS AWARDED
        
        explodeFireworks();
        
        const cat = lessons[currentLessonIndex].category;
        if (cat === 'greetings') {
            document.getElementById('harryImage').style.display = 'block';
        } else if (cat === 'panic') {
            document.getElementById('johnImage').style.display = 'block';
        } else if (cat === 'finishers') {
            document.getElementById('lauraImage').style.display = 'block';
        } else {
            document.getElementById('jessicaImage').style.display = 'block';
        }
    } else {
        showTryAgain();
    }
}

function awardPoints(lessonId, points) {
    const today = new Date().toDateString();
    let progressData = JSON.parse(localStorage.getItem('englishLearningProgress') || '{}');
    
    // Initialize data structure if needed
    if (!progressData.dailyProgress) progressData.dailyProgress = {};
    if (!progressData.lessonHistory) progressData.lessonHistory = {};
    if (!progressData.weeklyStats) progressData.weeklyStats = {};
    
    // Check daily cooldown - can only earn points once per day per lesson
    const todayKey = `${lessonId}_${today}`;
    //if (progressData.dailyProgress[todayKey]) {
        //console.log('Already completed this lesson today - no points awarded');
        //return; // No points awarded - already done today
   // }
    
    // Check max completion limit (3 times total per lesson)
    //if (!progressData.lessonHistory[lessonId]) progressData.lessonHistory[lessonId] = 0;
    //if (progressData.lessonHistory[lessonId] >= 3) {
       // console.log('Lesson completed maximum times - no points awarded');
        //return; // No points - reached 3-time limit
    //}
    
    // Award points!
    progressData.dailyProgress[todayKey] = points;
    progressData.lessonHistory[lessonId]++;
    
    // Update today's totals
    if (!progressData.weeklyStats[today]) {
        progressData.weeklyStats[today] = { points: 0, sentences: 0 };
    }
    progressData.weeklyStats[today].points += points;
    progressData.weeklyStats[today].sentences += 1;
    
    // Save progress
    localStorage.setItem('englishLearningProgress', JSON.stringify(progressData));
    
    console.log(`Awarded ${points} points for completing lesson ${lessonId}!`);
}

// MENU EVENT LISTENERS
document.getElementById('menuButton').addEventListener('click', showMenu);
document.getElementById('menuCloseBtn').addEventListener('click', hideMenu);
document.getElementById('backToGameBtn').addEventListener('click', hideMenu);

// Category button event listeners
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        jumpToCategory(category);
    });
    
    // Hover effects
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('category-btn-hover');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('category-btn-hover');
    });
});

// Click outside menu to close
document.getElementById('menuOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'menuOverlay') {
        hideMenu();
    }
});


// SPEEDRUN OVERLAY FUNCTIONS
function showSpeedrunOverlay() {
    const overlay = document.getElementById('speedrunOverlay');
    overlay.style.display = 'flex';
    overlay.offsetHeight; // Force reflow
    overlay.classList.add('speedrun-overlay-show');
}

function hideSpeedrunOverlay() {
    const overlay = document.getElementById('speedrunOverlay');
    overlay.classList.remove('speedrun-overlay-show');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}

// SPEEDRUN EVENT LISTENERS
document.getElementById('speedrunBtn').addEventListener('click', () => {
    hideMenu();
    showSpeedrunOverlay();
});

// Click outside speedrun overlay to close
document.getElementById('speedrunOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'speedrunOverlay') {
        hideSpeedrunOverlay();
    }
});

// SPEEDRUN GAME MODE FUNCTIONS
let speedrunActive = false;
let speedrunTimer = 120; // 2 minutes in seconds
let speedrunTimerInterval = null;
let speedrunScore = 0;

function startSpeedrunGameMode() {
    // Hide speedrun overlay
    hideSpeedrunOverlay();
    
    // Initialize speedrun state
    speedrunActive = true;
    speedrunTimer = 120;
    speedrunScore = 0;
    
    // Show blue overlay with timer
    setTimeout(() => {
        const gameOverlay = document.getElementById('speedrunGameOverlay');
        gameOverlay.style.display = 'block';
        updateSpeedrunDisplay();
        startSpeedrunCountdown();
    }, 500);
}

function updateSpeedrunDisplay() {
    const minutes = Math.floor(speedrunTimer / 60);
    const seconds = speedrunTimer % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('floatingTimer').textContent = timeString;
    document.getElementById('floatingScore').textContent = speedrunScore;
}

function startSpeedrunCountdown() {
    speedrunTimerInterval = setInterval(() => {
        speedrunTimer--;
        updateSpeedrunDisplay();
        
        if (speedrunTimer <= 0) {
            endSpeedrunGameMode();
        }
    }, 1000);
}

function endSpeedrunGameMode() {
    // Stop timer
    if (speedrunTimerInterval) {
        clearInterval(speedrunTimerInterval);
        speedrunTimerInterval = null;
    }
    
    // Hide blue overlay
    document.getElementById('speedrunGameOverlay').style.display = 'none';
    
    // Reset state
    speedrunActive = false;
    
    // Show speedrun results overlay
    setTimeout(() => {
        showSpeedrunOverlay();
       // Update speedrun overlay with final results
document.getElementById('speedrunScore').textContent = speedrunScore;
// UPDATE DAILY RUN TRACKING
        updateDailyRunProgress();
        updateSpeedrunMultiplier();
    }, 500);
}

// DAILY RUN TRACKING SYSTEM
function updateDailyRunProgress() {
    const today = new Date().toDateString();
    let speedrunData = JSON.parse(localStorage.getItem('speedrunProgress') || '{}');
    
    // Initialize today's data if needed
    if (!speedrunData[today]) {
        speedrunData[today] = { runs: 0, totalScore: 0 };
    }
    
    // Increment runs and add score
    speedrunData[today].runs++;
    speedrunData[today].totalScore += speedrunScore;
    
    // Save progress
    localStorage.setItem('speedrunProgress', JSON.stringify(speedrunData));
    
    // Update display
    const runsToday = speedrunData[today].runs;
    document.getElementById('speedrunProgress').textContent = `Daily Runs: ${runsToday}/8`;
}

function updateSpeedrunMultiplier() {
    const today = new Date().toDateString();
    let speedrunData = JSON.parse(localStorage.getItem('speedrunProgress') || '{}');
    const runsToday = speedrunData[today]?.runs || 0;
    
    let multiplier = "1x POINTS";
    if (runsToday >= 6) {
        multiplier = "2x POINTS";
    } else if (runsToday >= 3) {
        multiplier = "1.5x POINTS";
    }
    
    document.getElementById('currentMultiplier').textContent = multiplier;
}

function getCurrentSpeedrunMultiplier() {
    const today = new Date().toDateString();
    let speedrunData = JSON.parse(localStorage.getItem('speedrunProgress') || '{}');
    const runsToday = speedrunData[today]?.runs || 0;
    
    if (runsToday >= 5) return 2.0;      // 6th+ run = 2x points
    if (runsToday >= 2) return 1.5;     // 3rd-5th run = 1.5x points  
    return 1.0;                         // 1st-2nd run = 1x points
}

// START CHALLENGE BUTTON EVENT LISTENER
document.getElementById('speedrunStartBtn').addEventListener('click', startSpeedrunGameMode);

// RANDOM LEARNING SYSTEM
let isRandomMode = true;
let usedLessonsInRandomMode = [];

function getRandomLesson() {
    // If in random mode and we've used all lessons, reset the used list
    if (isRandomMode && usedLessonsInRandomMode.length >= lessons.length) {
        usedLessonsInRandomMode = [];
    }
    
    let availableLessons;
    if (isRandomMode) {
        // Get lessons not yet used in this cycle
        availableLessons = lessons.filter((lesson, index) => 
            !usedLessonsInRandomMode.includes(index)
        );
    } else {
        // For random jump button, any lesson is available
        availableLessons = lessons;
    }
    
    const randomIndex = Math.floor(Math.random() * availableLessons.length);
    const selectedLesson = availableLessons[randomIndex];
    const actualIndex = lessons.indexOf(selectedLesson);
    
    if (isRandomMode) {
        usedLessonsInRandomMode.push(actualIndex);
    }
    
    return actualIndex;
}

function toggleRandomMode(enable) {
    isRandomMode = enable;
    
    const categoryBtn = document.getElementById('categoryModeBtn');
    const randomBtn = document.getElementById('randomModeBtn');
    
    if (enable) {
        categoryBtn.classList.remove('mode-active');
        randomBtn.classList.add('mode-active');
        usedLessonsInRandomMode = []; // Reset when entering random mode
        document.getElementById('randomNavBtn').style.display = 'none';
    } else {
        randomBtn.classList.remove('mode-active');
        document.getElementById('randomNavBtn').style.display = 'inline-block';
        categoryBtn.classList.add('mode-active');
    }
}

// RANDOM SYSTEM EVENT LISTENERS

document.getElementById('categoryModeBtn').addEventListener('click', () => {
    toggleRandomMode(false);
});

document.getElementById('randomModeBtn').addEventListener('click', () => {
    toggleRandomMode(true);
});


// NAVIGATION RANDOM BUTTON FUNCTIONALITY
document.getElementById('randomNavBtn').addEventListener('click', () => {
    const randomIndex = getRandomLesson();
    currentLessonIndex = randomIndex;
    loadLesson(currentLessonIndex);
});

// Add hover effects for navigation random button
document.getElementById('randomNavBtn').addEventListener('mouseenter', (e) => {
    e.target.classList.add('random-nav-btn-hover');
});
document.getElementById('randomNavBtn').addEventListener('mouseleave', (e) => {
    e.target.classList.remove('random-nav-btn-hover');
});

// INITIALIZE APP
document.addEventListener("DOMContentLoaded", () => {
    // STATS SYSTEM EVENT LISTENERS
    document.getElementById('statsBtn').addEventListener('click', showStatsOverlay);
    document.getElementById('statsCloseBtn').addEventListener('click', hideStatsOverlay);
    document.getElementById('statsBackBtn').addEventListener('click', () => {
        hideStatsOverlay();
        showMenu();
    });
    document.getElementById('statsOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'statsOverlay') {
            hideStatsOverlay();
        }
    });
    
    applyMobileClasses();
    toggleRandomMode(true);
    loadLesson(0);
    loadLesson(0);
updateProgress(); // LOAD SAVED PROGRESS ON STARTUP
});

navigator.serviceWorker.register('sw.js'); 
7