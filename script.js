// --- FULLSCREEN MODE FOR ANDROID ---
function enterFullscreen() {
  if (document.body.requestFullscreen && !document.fullscreenElement) {
    document.body.requestFullscreen({ navigationUI: "hide" }).catch(err => {
      console.error(`Fullscreen error: ${err.message}`);
    });
  }
}
document.addEventListener('click', enterFullscreen, { once: true });
document.addEventListener('touchstart', enterFullscreen, { once: true });

// FIREWORK COLORS
const fireworkColors = ['#FFD700', '#FF6B47', '#4ECDC4', '#45B7D1', '#FF69B4', '#32CD32', '#FF4500', '#9370DB', '#00CED1', '#FFB6C1'];

// GLOBAL STATE
let currentLessonIndex = 0;
let lastAddedWord = null;
let canUndo = false;

function updateUndoButton() {
    const undoBtn = document.getElementById('undoButton');
    if (canUndo && lastAddedWord) {
        undoBtn.disabled = false;
        undoBtn.classList.add('undo-btn-active');
    } else {
        undoBtn.disabled = true;
        undoBtn.classList.remove('undo-btn-active');
    }
}

function performUndo() {
    const dropZone = document.getElementById('dropZone');
    const wordBank = document.getElementById('wordBank');
    if (dropZone.children.length === 0) return;
    const lastWord = dropZone.children[dropZone.children.length - 1];
    lastWord.classList.remove('word-tile-wrong');
    wordBank.appendChild(lastWord);
    canUndo = dropZone.children.length > 0;
    lastAddedWord = dropZone.children.length > 0 ? dropZone.children[dropZone.children.length - 1] : null;
    updateUndoButton();
    setupInteraction();
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

// FIREWORKS
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    firework.style.backgroundColor = color;
    firework.style.color = color;
    firework.style.borderRadius = '50%';
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 100;
    firework.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
    firework.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
    const size = Math.random() * 6 + 4;
    firework.style.width = size + 'px';
    firework.style.height = size + 'px';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    return firework;
}

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
                            requestAnimationFrame(() => firework.classList.add('firework-active'));
                            setTimeout(() => {
                                if (firework.parentNode) firework.parentNode.removeChild(firework);
                            }, 3000);
                        }, i * 20);
                    }
                }, burstIndex * 200);
            });
        }, wave * 1000);
    }
}

// TRY AGAIN
function showTryAgain() {
    const el = document.getElementById('tryAgainText');
    el.classList.add('try-again-text-show');
    setTimeout(() => el.classList.remove('try-again-text-show'), 1500);
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
        canUndo = dropZone.children.length > 0;
        updateUndoButton();

        // Color flash
        const currentPosition = dropZone.children.length - 1;
        const lesson = lessons[currentLessonIndex];
        const isCorrect = wordTile.textContent === lesson.correctOrder[currentPosition];

        if (isCorrect) {
            wordTile.style.background = '#10b981';
            wordTile.style.color = 'white';
            setTimeout(() => {
                wordTile.style.background = 'white';
                wordTile.style.color = 'black';
            }, 50);
        } else {
              wordTile.classList.add('word-tile-wrong');
        }

        // Auto-check when all words placed
        if (dropZone.children.length === lesson.correctOrder.length) {
            setTimeout(checkAnswer, 500);
        }
    }, 400);
}

// TAP TO ADD
function setupInteraction() {
    const wordTiles = document.querySelectorAll('.word-tile');
    const dropZone = document.getElementById('dropZone');

    wordTiles.forEach(tile => {
        const newTile = tile.cloneNode(true);
        tile.parentNode.replaceChild(newTile, tile);
        
        newTile.addEventListener('click', (e) => {
            e.preventDefault();
            if (newTile.parentElement.id === 'wordBank') {
                animateWordToDropZone(newTile, dropZone);
            }
        });
        newTile.addEventListener('touchstart', () => newTile.classList.add('word-tile-active'));
        newTile.addEventListener('touchend', () => newTile.classList.remove('word-tile-active'));
    });
}

// CHECK ANSWER
function checkAnswer() {
    const lesson = lessons[currentLessonIndex];
    const dropZone = document.getElementById('dropZone');
    const userOrder = Array.from(dropZone.children).map(w => w.textContent);
    const isCorrect = userOrder.every((word, i) => word === lesson.correctOrder[i]);
    

    if (isCorrect) {
        explodeFireworks();
         recordCompletion();
        const narrator = lesson.narrator;
        const avatarEl = document.getElementById(narrator + 'Image');
        avatarEl.classList.remove('dianne-flipped');
        avatarEl.onclick = () => {
            document.getElementById('answerAudio').play();
        };

        
        // Highlight phrasal verb words
setTimeout(() => {
    Array.from(dropZone.children).forEach(tile => {
        if (lesson.phrasal.includes(tile.textContent)) {
            tile.classList.add('word-tile-phrasal');
        }
    });
}, 1000);
    } else {
        showTryAgain();
    }
}

// NAVIGATION BUTTONS
function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === lessons.length - 1;
    prevBtn.classList.toggle('nav-btn-disabled', currentLessonIndex === 0);
    nextBtn.classList.toggle('nav-btn-disabled', currentLessonIndex === lessons.length - 1);
}

// ALL AVATARS
const allAvatars = ['dianne', 'adam', 'becky', 'harry', 'mark', 'jessica', 'john', 'laura'];

// STATS TRACKING
function getStats() {
    const today = new Date().toDateString();
    const data = JSON.parse(localStorage.getItem('unscramble3Stats') || '{}');
    return {
        todayCount: data[today] || 0,
        totalCount: data.total || 0
    };
}

function updateCompletionDot() {
    const today = new Date().toDateString();
    const data = JSON.parse(localStorage.getItem('unscramble3Stats') || '{}');
    const lessonKey = `lesson_${currentLessonIndex}_${today}`;
    const dot = document.getElementById('completionDot');
    dot.style.display = data[lessonKey] ? 'flex' : 'none';
}

function recordCompletion() {
    const today = new Date().toDateString();
    let data = JSON.parse(localStorage.getItem('unscramble3Stats') || '{}');
    
    // Check if this lesson was already completed today
    const lessonKey = `lesson_${currentLessonIndex}_${today}`;
    if (data[lessonKey]) return; // Already done today!
    
    // Mark as completed today
    data[lessonKey] = true;
    data[today] = (data[today] || 0) + 1;
    data.total = (data.total || 0) + 1;
    localStorage.setItem('unscramble3Stats', JSON.stringify(data));
}

function showStats() {
    const stats = getStats();
    document.getElementById('todayCount').textContent = stats.todayCount;
    document.getElementById('totalCount').textContent = stats.totalCount;
    document.getElementById('statsOverlay3').style.display = 'flex';
}

// STATS EVENT LISTENERS
document.getElementById('statsButton').addEventListener('click', showStats);
document.getElementById('statsCloseBtn3').addEventListener('click', () => {
    document.getElementById('statsOverlay3').style.display = 'none';
});

// RANDOM/SEQUENTIAL MODE
let isRandomMode = false;

function getRandomLessonIndex() {
    return Math.floor(Math.random() * lessons.length);
}

document.getElementById('sequentialBtn3').addEventListener('click', () => {
    isRandomMode = false;
    document.getElementById('sequentialBtn3').classList.add('mode-active-3');
    document.getElementById('randomBtn3').classList.remove('mode-active-3');
});

document.getElementById('randomBtn3').addEventListener('click', () => {
    isRandomMode = true;
    document.getElementById('randomBtn3').classList.add('mode-active-3');
    document.getElementById('sequentialBtn3').classList.remove('mode-active-3');
    const randomIndex = getRandomLessonIndex();
    currentLessonIndex = randomIndex;
    loadLesson(currentLessonIndex);
    document.getElementById('statsOverlay3').style.display = 'none';
});


// LOAD LESSON
function loadLesson(index) {
    const lesson = lessons[index];
    const wordBank = document.getElementById('wordBank');
    const dropZone = document.getElementById('dropZone');
    document.getElementById('lessonNumber').textContent = index + 1;

    wordBank.innerHTML = '';
    dropZone.innerHTML = '';

    lastAddedWord = null;
    canUndo = false;
    updateUndoButton();

    // Set audio
    document.getElementById('narratorAudio').src = lesson.narratorAudio;
    document.getElementById('answerAudio').src = lesson.answerAudio;

    // Hide all avatars
    allAvatars.forEach(name => {
        const el = document.getElementById(name + 'Image');
        if (el) {
            el.style.display = 'none';
            el.classList.remove('dianne-flipped');
        }
    });

    // Show correct avatar
    const avatarEl = document.getElementById(lesson.narrator + 'Image');
    avatarEl.style.display = 'block';
    avatarEl.classList.add('dianne-flipped');
    avatarEl.onclick = () => {
        document.getElementById('narratorAudio').play();
    };

    // Build word bank
    const scrambled = fisherYatesShuffle(lesson.sentence);
    scrambled.forEach((word, i) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.className = 'word-tile';
        wordBank.appendChild(span);
    });

    updateNavButtons();
    setupInteraction();
    updateCompletionDot();
}

// EVENT LISTENERS
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        loadLesson(currentLessonIndex);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (isFreshMode) {
        const freshLessons = getFreshLessons();
        if (freshLessons.length > 0) {
            currentLessonIndex = freshLessons[Math.floor(Math.random() * freshLessons.length)];
        }
    } else if (isRandomMode) {
        currentLessonIndex = getRandomLessonIndex();
    } else {
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;
        }
    }
    loadLesson(currentLessonIndex);
});
document.getElementById('resetButton').addEventListener('click', () => {
    loadLesson(currentLessonIndex);
});



// Nav hover effects
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

// INSTRUCTIONS OVERLAY
document.getElementById('helpButton').addEventListener('click', () => {
    document.getElementById('instructionsOverlay').style.display = 'flex';
});

document.getElementById('instructionsCloseBtn').addEventListener('click', () => {
    document.getElementById('instructionsOverlay').style.display = 'none';
});

document.getElementById('endBtn').addEventListener('click', () => {
    currentLessonIndex = lessons.length - 1;
    loadLesson(currentLessonIndex);
});

// LONG PRESS NAVIGATION
let longPressInterval = null;

document.getElementById('prevBtn').addEventListener('mousedown', () => {
    longPressInterval = setInterval(() => {
        if (currentLessonIndex > 0) {
            currentLessonIndex--;
            loadLesson(currentLessonIndex);
        }
    }, 500);
});

document.getElementById('nextBtn').addEventListener('mousedown', () => {
    longPressInterval = setInterval(() => {
        if (isFreshMode) {
    const freshLessons = getFreshLessons();
    if (freshLessons.length > 0) {
        currentLessonIndex = freshLessons[Math.floor(Math.random() * freshLessons.length)];
    }
} else if (isRandomMode) {
    currentLessonIndex = getRandomLessonIndex();
} else {
    if (currentLessonIndex < lessons.length - 1) {
        currentLessonIndex++;
    }
}
loadLesson(currentLessonIndex);
    }, 500);
});

document.addEventListener('mouseup', () => {
    clearInterval(longPressInterval);
});

document.addEventListener('touchend', () => {
    clearInterval(longPressInterval);
});

document.getElementById('prevBtn').addEventListener('touchstart', () => {
    longPressInterval = setInterval(() => {
        if (currentLessonIndex > 0) {
            currentLessonIndex--;
            loadLesson(currentLessonIndex);
        }
    }, 500);
});

document.getElementById('nextBtn').addEventListener('touchstart', () => {
    longPressInterval = setInterval(() => {
       if (isFreshMode) {
    const freshLessons = getFreshLessons();
    if (freshLessons.length > 0) {
        currentLessonIndex = freshLessons[Math.floor(Math.random() * freshLessons.length)];
    }
} else if (isRandomMode) {
    currentLessonIndex = getRandomLessonIndex();
} else {
    if (currentLessonIndex < lessons.length - 1) {
        currentLessonIndex++;
    }
}
loadLesson(currentLessonIndex);
    }, 500);
});

// FRESH ONLY MODE
let isFreshMode = false;

function getFreshLessons() {
    const today = new Date().toDateString();
    const data = JSON.parse(localStorage.getItem('unscramble3Stats') || '{}');
    return lessons.reduce((acc, lesson, index) => {
        if (!data[`lesson_${index}_${today}`]) acc.push(index);
        return acc;
    }, []);
}

document.getElementById('freshBtn3').addEventListener('click', () => {
    isFreshMode = true;
    isRandomMode = false;
    document.getElementById('freshBtn3').classList.add('mode-active-3');
    document.getElementById('randomBtn3').classList.remove('mode-active-3');
    document.getElementById('sequentialBtn3').classList.remove('mode-active-3');
    const freshLessons = getFreshLessons();
    if (freshLessons.length > 0) {
        currentLessonIndex = freshLessons[Math.floor(Math.random() * freshLessons.length)];
        loadLesson(currentLessonIndex);
    }
    document.getElementById('statsOverlay3').style.display = 'none';
});

document.getElementById('sequentialBtn3').addEventListener('click', () => {
    isFreshMode = false;
});

document.getElementById('randomBtn3').addEventListener('click', () => {
    isFreshMode = false;
});

// INITIALIZE
loadLesson(0);
document.getElementById('undoButton').addEventListener('click', performUndo);