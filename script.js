// ===== Данные вузов =====
const universities = [
    {
        id: 1,
        name: 'МГУ им. Ломоносова',
        rating: 9.5,
        price: 400000,
        minScore: 270,
        metro: 'Университет',
        metroLine: 'Сокольническая',
        direction: 'Естественные науки',
        description: 'Ведущий классический университет России. Сильнейшие научные школы, огромный кампус и международное признание.',
        tags: ['наука', 'исследования', 'биология', 'химия', 'математика', 'академическая карьера'],
        aiFocus: 'подойдёт тем, кто хочет строить академическую или исследовательскую траекторию',
        pros: ['Мировой рейтинг', 'Сильная наука', 'Большой кампус'],
        cons: ['Высокий проходной балл', 'Дорогое обучение']
    },
    {
        id: 2,
        name: 'МГТУ им. Баумана',
        rating: 9.2,
        price: 320000,
        minScore: 250,
        metro: 'Бауманская',
        metroLine: 'Арбатско-Покровская',
        direction: 'Инженерия',
        description: 'Ведущий технический университет страны. Готовит инженеров мирового уровня для высокотехнологичных отраслей.',
        tags: ['инженерия', 'робототехника', 'машиностроение', 'космос', 'техника', 'проектирование'],
        aiFocus: 'хорош для интереса к инженерным проектам, технике и сложным прикладным задачам',
        pros: ['Лучшая инженерная школа', 'Связи с индустрией', 'Военная кафедра'],
        cons: ['Очень высокая нагрузка', 'Старые корпуса']
    },
    {
        id: 3,
        name: 'НИУ ВШЭ',
        rating: 9.0,
        price: 500000,
        minScore: 260,
        metro: 'Китай-город',
        metroLine: 'Калужско-Рижская',
        direction: 'Экономика',
        description: 'Ведущий исследовательский университет в области экономики и социальных наук. Современный подход к образованию.',
        tags: ['аналитика', 'финансы', 'данные', 'бизнес', 'стартапы', 'исследования'],
        aiFocus: 'сильный выбор для аналитики, экономики, данных и проектной карьеры',
        pros: ['Современные программы', 'Международные обмены', 'Сильная аналитика'],
        cons: ['Высокая стоимость', 'Конкурентная среда']
    },
    {
        id: 4,
        name: 'МИФИ',
        rating: 8.8,
        price: 280000,
        minScore: 240,
        metro: 'Каширская',
        metroLine: 'Замоскворецкая',
        direction: 'Естественные науки',
        description: 'Национальный исследовательский ядерный университет. Лидер подготовки специалистов в области ядерной физики и IT.',
        tags: ['физика', 'it', 'кибербезопасность', 'ядерные технологии', 'исследования', 'программирование'],
        aiFocus: 'подходит для физики, программирования и технологичных исследовательских направлений',
        pros: ['Уникальные специальности', 'Высокие стипендии', 'Связь с Росатомом'],
        cons: ['Узкая специализация', 'Строгий режим']
    },
    {
        id: 5,
        name: 'РАНХиГС',
        rating: 8.5,
        price: 350000,
        minScore: 230,
        metro: 'Юго-Западная',
        metroLine: 'Сокольническая',
        direction: 'Гуманитарные науки',
        description: 'Крупнейший университет государственного управления. Готовит управленцев, юристов и специалистов в сфере госслужбы.',
        tags: ['управление', 'право', 'социология', 'госслужба', 'коммуникации', 'политика'],
        aiFocus: 'логичен для интереса к управлению, праву, обществу и публичной сфере',
        pros: ['Связи с госструктурами', 'Много направлений', 'Практика в министерствах'],
        cons: ['Большой размер — меньше внимания', 'Разный уровень программ']
    },
    {
        id: 6,
        name: 'МГИМО',
        rating: 9.3,
        price: 600000,
        minScore: 280,
        metro: 'Проспект Вернадского',
        metroLine: 'Сокольническая',
        direction: 'Международные отношения',
        description: 'Элитный университет международных отношений. Готовит дипломатов, переводчиков и специалистов по мировой политике.',
        tags: ['языки', 'дипломатия', 'политика', 'международный бизнес', 'культура', 'право'],
        aiFocus: 'подойдёт для международной карьеры, языков и дипломатической среды',
        pros: ['Престиж', 'Языковая подготовка', 'Карьерные связи'],
        cons: ['Очень дорого', 'Самый высокий проходной']
    },
    {
        id: 7,
        name: 'Финансовый университет',
        rating: 8.3,
        price: 300000,
        minScore: 220,
        metro: 'Аэропорт',
        metroLine: 'Замоскворецкая',
        direction: 'Экономика',
        description: 'Ведущий финансово-экономический вуз при Правительстве РФ. Сильные программы по финансам, учёту и налогам.',
        tags: ['финансы', 'банки', 'налоги', 'учёт', 'аналитика', 'карьера'],
        aiFocus: 'практичный вариант для финансов, банковской сферы и прикладной экономики',
        pros: ['Хорошее трудоустройство', 'Стажировки в банках', 'Доступные баллы'],
        cons: ['Узкий профиль', 'Много студентов']
    },
    {
        id: 8,
        name: 'МИРЭА',
        rating: 8.0,
        price: 250000,
        minScore: 200,
        metro: 'Проспект Вернадского',
        metroLine: 'Сокольническая',
        direction: 'IT',
        description: 'Технологический университет с фокусом на IT и программировании. Доступные баллы и современные программы.',
        tags: ['программирование', 'кибербезопасность', 'разработка', 'данные', 'сетевые технологии', 'робототехника'],
        aiFocus: 'хорошо ложится на интерес к разработке, кибербезопасности и прикладным IT-навыкам',
        pros: ['Доступные баллы', 'Сильное IT-направление', 'Доступная цена'],
        cons: ['Молодой бренд', 'Менее известен за рубежом']
    },
    {
        id: 9,
        name: 'СПбПУ Петра Великого',
        rating: 8.6,
        price: 290000,
        minScore: 225,
        metro: 'Политехническая',
        metroLine: 'Кировско-Выборгская',
        direction: 'Инженерия',
        description: 'Крупный политехнический университет с сильными инженерными, энергетическими и IT-программами.',
        tags: ['инженерия', 'робототехника', 'энергетика', 'it', 'проектирование', 'стартапы'],
        aiFocus: 'подходит для инженерных проектов, промышленности и технологического предпринимательства',
        pros: ['Сильная инженерная база', 'Проектное обучение', 'Кампус в Санкт-Петербурге'],
        cons: ['Высокая нагрузка', 'Часть программ сильно техническая']
    },
    {
        id: 10,
        name: 'ИТМО',
        rating: 9.1,
        price: 340000,
        minScore: 245,
        metro: 'Горьковская',
        metroLine: 'Московско-Петроградская',
        direction: 'IT',
        description: 'Один из лидеров IT-образования, олимпиадного программирования, искусственного интеллекта и продуктовых проектов.',
        tags: ['программирование', 'искусственный интеллект', 'data science', 'стартапы', 'робототехника', 'продукты'],
        aiFocus: 'сильный выбор для программирования, ИИ, данных и запуска технологичных продуктов',
        pros: ['Сильное IT-сообщество', 'Проектная среда', 'Международные победы'],
        cons: ['Высокая конкуренция', 'Нужна самостоятельность']
    },
    {
        id: 11,
        name: 'КФУ',
        rating: 8.1,
        price: 190000,
        minScore: 205,
        metro: 'Площадь Тукая',
        metroLine: 'Центральная',
        direction: 'Естественные науки',
        description: 'Классический федеральный университет с широким выбором естественно-научных и исследовательских программ.',
        tags: ['биология', 'химия', 'медицина', 'математика', 'исследования', 'экология'],
        aiFocus: 'подойдёт для естественных наук с более мягким бюджетом и широким выбором программ',
        pros: ['Доступная стоимость', 'Широкий выбор программ', 'Сильная научная база'],
        cons: ['Не Москва', 'Разный уровень факультетов']
    },
    {
        id: 12,
        name: 'РГГУ',
        rating: 8.0,
        price: 260000,
        minScore: 210,
        metro: 'Новослободская',
        metroLine: 'Кольцевая',
        direction: 'Гуманитарные науки',
        description: 'Гуманитарный университет с программами по истории, медиа, культуре, лингвистике и социальным коммуникациям.',
        tags: ['история', 'медиа', 'культура', 'языки', 'коммуникации', 'журналистика'],
        aiFocus: 'подходит для гуманитарных интересов, медиа, языков и культурных проектов',
        pros: ['Сильный гуманитарный профиль', 'Много творческих направлений', 'Доступнее топовых вузов'],
        cons: ['Меньше технических программ', 'Нужно внимательно выбирать факультет']
    },
    {
        id: 13,
        name: 'РЭУ им. Плеханова',
        rating: 8.2,
        price: 280000,
        minScore: 215,
        metro: 'Серпуховская',
        metroLine: 'Серпуховско-Тимирязевская',
        direction: 'Экономика',
        description: 'Экономический университет с программами по бизнесу, маркетингу, менеджменту, финансам и предпринимательству.',
        tags: ['маркетинг', 'бизнес', 'финансы', 'менеджмент', 'предпринимательство', 'аналитика'],
        aiFocus: 'подходит для бизнеса, маркетинга, менеджмента и предпринимательских интересов',
        pros: ['Практичный экономический профиль', 'Много бизнес-программ', 'Доступные баллы'],
        cons: ['Высокий поток студентов', 'Меньше академической науки']
    },
    {
        id: 14,
        name: 'СПбГУ',
        rating: 8.9,
        price: 360000,
        minScore: 255,
        metro: 'Василеостровская',
        metroLine: 'Невско-Василеостровская',
        direction: 'Международные отношения',
        description: 'Классический университет с сильными программами по международным отношениям, политологии, языкам и праву.',
        tags: ['языки', 'политика', 'международное право', 'дипломатия', 'культура', 'аналитика'],
        aiFocus: 'хороший вариант для международной повестки, языков и политической аналитики',
        pros: ['Классический университет', 'Сильные гуманитарные школы', 'Престижный диплом'],
        cons: ['Высокий проходной балл', 'Конкурс на популярные программы']
    }
];

// ===== Состояние =====
let compareList = [];

// ===== Floating Particles =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 20;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (8 + Math.random() * 12) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        const colors = ['var(--primary)', 'var(--accent)', 'rgba(255,255,255,0.3)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
    }
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== Header Scroll Effect =====
function initHeaderScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = window.scrollY;
    }, { passive: true });
}

// ===== Toast Notifications =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== Навигация =====
function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        // Re-trigger animation
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = '';
    }

    document.querySelectorAll(`.nav-link[data-section="${sectionId}"]`).forEach(l => l.classList.add('active'));

    // Close mobile menu
    document.querySelector('.nav').classList.remove('open');
    document.querySelector('.mobile-menu-btn').classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-observe scroll animations in the new section
    setTimeout(initScrollAnimations, 100);
}

// Navigation event listeners
document.querySelectorAll('[data-section]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(el.dataset.section);
    });
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.mobile-menu-btn').classList.toggle('active');
});

// ===== Карточки =====
function createCard(uni, showCompareBtn = false) {
    const isInCompare = compareList.some(u => u.id === uni.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <div class="card-title">${uni.name}</div>
            <div class="card-rating">${uni.rating}/10</div>
        </div>
        <div class="card-direction">${uni.direction}</div>
        <div class="card-metro">метро ${uni.metro}</div>
        <div class="card-description">${uni.description}</div>
        <div class="card-pros-cons">
            <div class="card-pros">
                <h4>Плюсы</h4>
                <ul>${uni.pros.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="card-cons">
                <h4>Минусы</h4>
                <ul>${uni.cons.map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
        </div>
        <div class="card-details">
            <span class="card-price">${uni.price.toLocaleString('ru-RU')} ₽/год</span>
            <span class="card-score">от ${uni.minScore} баллов ЕГЭ</span>
        </div>
        ${showCompareBtn ? `
            <div class="card-actions">
                <button class="btn btn-sm ${isInCompare ? 'btn-primary' : 'btn-outline'}" onclick="toggleCompare(${uni.id})">
                    ${isInCompare ? 'В сравнении' : 'Сравнить'}
                </button>
            </div>
        ` : ''}
    `;
    return card;
}

function renderPopularCards() {
    const container = document.getElementById('popular-cards');
    container.innerHTML = '';
    universities.slice(0, 3).forEach(uni => {
        container.appendChild(createCard(uni));
    });
}

function renderSearchCards(filtered = null) {
    const container = document.getElementById('search-cards');
    container.innerHTML = '';
    const list = filtered || universities;

    if (list.length === 0) {
        container.innerHTML = '<div class="no-results"><p>Ничего не найдено. Попробуйте изменить фильтры.</p></div>';
        return;
    }

    list.forEach(uni => {
        container.appendChild(createCard(uni, true));
    });
}

// ===== Фильтры =====
function applyFilters() {
    const direction = document.getElementById('filter-direction').value;
    const budget = parseInt(document.getElementById('filter-budget').value) || Infinity;
    const score = parseInt(document.getElementById('filter-score').value) || 0;

    const filtered = universities.filter(uni => {
        if (direction && uni.direction !== direction) return false;
        if (uni.price > budget) return false;
        if (score > 0 && uni.minScore > score) return false;
        return true;
    });

    renderSearchCards(filtered);
    showToast(`Найдено вузов: ${filtered.length}`);
}

function resetFilters() {
    document.getElementById('filter-direction').value = '';
    document.getElementById('filter-budget').value = '';
    document.getElementById('filter-score').value = '';
    renderSearchCards();
    showToast('Фильтры сброшены');
}

document.getElementById('apply-filters').addEventListener('click', applyFilters);
document.getElementById('reset-filters').addEventListener('click', resetFilters);

// ===== Сравнение =====
function toggleCompare(uniId) {
    const uni = universities.find(u => u.id === uniId);
    const idx = compareList.findIndex(u => u.id === uniId);

    if (idx >= 0) {
        compareList.splice(idx, 1);
        showToast(`${uni.name} убран из сравнения`);
    } else {
        if (compareList.length >= 3) {
            showToast('Максимум 3 вуза для сравнения');
            return;
        }
        compareList.push(uni);
        showToast(`${uni.name} добавлен к сравнению`);
    }

    renderSearchCards(getFilteredList());
    renderCompareTable();
}

function getFilteredList() {
    const direction = document.getElementById('filter-direction').value;
    const budget = parseInt(document.getElementById('filter-budget').value) || Infinity;
    const score = parseInt(document.getElementById('filter-score').value) || 0;

    if (!direction && budget === Infinity && score === 0) return null;

    return universities.filter(uni => {
        if (direction && uni.direction !== direction) return false;
        if (uni.price > budget) return false;
        if (score > 0 && uni.minScore > score) return false;
        return true;
    });
}

function renderCompareTable() {
    const hint = document.getElementById('compare-hint');
    const content = document.getElementById('compare-content');
    const table = document.getElementById('compare-table');

    if (compareList.length === 0) {
        hint.classList.remove('hidden');
        content.classList.add('hidden');
        return;
    }

    hint.classList.add('hidden');
    content.classList.remove('hidden');

    const bestRating = Math.max(...compareList.map(u => u.rating));
    const bestPrice = Math.min(...compareList.map(u => u.price));
    const bestScore = Math.min(...compareList.map(u => u.minScore));

    const rows = [
        {
            label: 'Рейтинг',
            values: compareList.map(u => ({ text: `${u.rating}/10`, isBest: u.rating === bestRating }))
        },
        {
            label: 'Направление',
            values: compareList.map(u => ({ text: u.direction, isBest: false }))
        },
        {
            label: 'Метро',
            values: compareList.map(u => ({ text: u.metro, isBest: false }))
        },
        {
            label: 'Стоимость',
            values: compareList.map(u => ({ text: `${u.price.toLocaleString('ru-RU')} ₽`, isBest: u.price === bestPrice }))
        },
        {
            label: 'Мин. баллы ЕГЭ',
            values: compareList.map(u => ({ text: `${u.minScore}`, isBest: u.minScore === bestScore }))
        },
        {
            label: 'Плюсы',
            values: compareList.map(u => ({ text: u.pros.join(', '), isBest: false }))
        },
        {
            label: 'Минусы',
            values: compareList.map(u => ({ text: u.cons.join(', '), isBest: false }))
        }
    ];

    let html = '<thead><tr><th>Параметр</th>';
    compareList.forEach(u => {
        html += `<th>${u.name}</th>`;
    });
    html += '</tr></thead><tbody>';

    rows.forEach(row => {
        html += '<tr>';
        html += `<td>${row.label}</td>`;
        row.values.forEach(v => {
            html += `<td class="${v.isBest ? 'best-value' : ''}">${v.text}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody>';
    table.innerHTML = html;
}

document.getElementById('clear-compare').addEventListener('click', () => {
    compareList = [];
    renderCompareTable();
    renderSearchCards(getFilteredList());
    showToast('Сравнение очищено');
});

// ===== ИИ-рекомендация =====
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function normalizeText(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/ё/g, 'е');
}

function normalizeMetro(value) {
    return normalizeText(value).replace(/-/g, ' ');
}

function formatPrice(value) {
    return `${value.toLocaleString('ru-RU')} ₽/год`;
}

function getInterestTerms(value) {
    const stopWords = new Set(['для', 'это', 'мне', 'хочу', 'люблю', 'интересно', 'или', 'про', 'как', 'что', 'где', 'при']);
    return normalizeText(value)
        .split(/[^a-zа-я0-9]+/i)
        .filter(term => term.length > 1 && !stopWords.has(term));
}

function getInterestMatches(uni, terms) {
    if (!terms.length) return [];

    const searchableText = normalizeText([
        uni.direction,
        uni.description,
        uni.aiFocus,
        ...uni.tags,
        ...uni.pros
    ].join(' '));

    const matchedTags = uni.tags.filter(tag => {
        const normalizedTag = normalizeText(tag);
        return terms.some(term => normalizedTag.includes(term) || term.includes(normalizedTag));
    });

    const matchedTerms = terms.filter(term =>
        searchableText.includes(term) &&
        !matchedTags.some(tag => normalizeText(tag).includes(term) || term.includes(normalizeText(tag)))
    );

    return [...new Set([...matchedTags, ...matchedTerms])].slice(0, 4);
}

function getMetroLine(station) {
    const normalizedStation = normalizeMetro(station);
    const match = universities.find(uni => normalizeMetro(uni.metro) === normalizedStation);
    return match ? match.metroLine : '';
}

function isSameMetro(uniMetro, userMetro) {
    const normalizedUniMetro = normalizeMetro(uniMetro);
    const normalizedUserMetro = normalizeMetro(userMetro);

    return Boolean(normalizedUserMetro) && normalizedUniMetro === normalizedUserMetro;
}

function isSameMetroLine(uni, userMetro) {
    const selectedLine = getMetroLine(userMetro);
    return Boolean(selectedLine) && uni.metroLine === selectedLine;
}

function getAiProfile() {
    const metro = document.getElementById('ai-metro').value;
    const direction = document.getElementById('ai-direction').value;
    const interests = document.getElementById('ai-interests').value.trim();
    const budget = parseInt(document.getElementById('ai-budget').value, 10);
    const score = parseInt(document.getElementById('ai-score').value, 10);

    return {
        metro,
        direction,
        interests,
        interestTerms: getInterestTerms(interests),
        budget,
        score
    };
}

function showAiMessage(message) {
    const resultDiv = document.getElementById('ai-result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <div class="ai-empty">
            <strong>Анкета пока неполная.</strong>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
}

function validateAiProfile(profile) {
    if (!profile.metro) return 'Выберите ближайшую станцию метро, чтобы я мог точнее расставить приоритеты.';
    if (!profile.direction) return 'Выберите направление обучения.';
    if (!profile.interests) return 'Опишите интересы: технологии, языки, бизнес, медиа, наука или любые другие темы.';
    if (!Number.isFinite(profile.budget) || profile.budget <= 0) return 'Укажите годовой бюджет на обучение.';
    if (!Number.isFinite(profile.score) || profile.score <= 0) return 'Укажите сумму баллов ЕГЭ.';
    return '';
}

function scoreRecommendation(uni, profile) {
    const metroMatch = isSameMetro(uni.metro, profile.metro);
    const lineMatch = !metroMatch && isSameMetroLine(uni, profile.metro);
    const interestMatches = getInterestMatches(uni, profile.interestTerms);
    const budgetReserve = profile.budget - uni.price;
    const scoreReserve = profile.score - uni.minScore;
    const budgetBonus = Math.min(7, Math.max(0, Math.floor(budgetReserve / 35000)));
    const scoreBonus = Math.min(7, Math.max(0, Math.floor(scoreReserve / 8)));
    const interestBonus = Math.min(12, interestMatches.length * 4);
    const metroBonus = metroMatch ? 9 : lineMatch ? 4 : 0;
    const matchPercent = Math.min(98, Math.round(68 + uni.rating * 2 + budgetBonus + scoreBonus + interestBonus + metroBonus));

    return {
        uni,
        metroMatch,
        lineMatch,
        interestMatches,
        matchPercent,
        rank: matchPercent + (metroMatch ? 12 : lineMatch ? 5 : 0) + interestMatches.length * 3 + uni.rating
    };
}

function getAiRecommendations(profile) {
    return universities
        .filter(uni => uni.direction === profile.direction)
        .filter(uni => uni.price <= profile.budget)
        .filter(uni => uni.minScore <= profile.score)
        .map(uni => scoreRecommendation(uni, profile))
        .sort((a, b) => b.rank - a.rank)
        .slice(0, 4);
}

function buildRecommendationReasons(match, profile) {
    const { uni, metroMatch, lineMatch, interestMatches } = match;
    const reasons = [
        `направление «${uni.direction}» совпадает с анкетой`,
        `${formatPrice(uni.price)} не превышает бюджет ${formatPrice(profile.budget)}`,
        `проходной балл ${uni.minScore} не выше ваших ${profile.score}`
    ];

    if (metroMatch) {
        reasons.push(`ближайшее метро совпадает: ${uni.metro}`);
    } else if (lineMatch) {
        reasons.push(`станция ${uni.metro} на той же линии метро: ${uni.metroLine}`);
    } else {
        reasons.push(`кампус удобнее смотреть от метро ${uni.metro}`);
    }

    if (interestMatches.length > 0) {
        reasons.push(`по интересам есть пересечения: ${interestMatches.join(', ')}`);
    } else {
        reasons.push(uni.aiFocus);
    }

    return reasons;
}

function renderAiRecommendations(profile, recommendations) {
    const resultDiv = document.getElementById('ai-result');
    const safeMetro = escapeHtml(profile.metro);
    const safeDirection = escapeHtml(profile.direction);
    const safeInterests = escapeHtml(profile.interests);

    if (recommendations.length === 0) {
        const sameDirection = universities.filter(uni => uni.direction === profile.direction);
        const nearest = sameDirection
            .slice()
            .sort((a, b) => {
                const aGap = Math.max(0, a.price - profile.budget) / 10000 + Math.max(0, a.minScore - profile.score);
                const bGap = Math.max(0, b.price - profile.budget) / 10000 + Math.max(0, b.minScore - profile.score);
                return aGap - bGap;
            })
            .slice(0, 2);

        resultDiv.innerHTML = `
            <div class="ai-result-header">
                <span class="ai-result-kicker">ИИ-помощник NewStage</span>
                <h3>Пока нет точного совпадения</h3>
                <p class="ai-summary">Я искал направление «${safeDirection}», стоимость до ${formatPrice(profile.budget)} и проходной балл не выше ${profile.score}. При таких условиях подходящих вузов в базе не нашлось.</p>
            </div>
            <div class="ai-empty">
                <p><strong>Что можно сделать:</strong> немного увеличить бюджет, проверить баллы или выбрать соседнюю станцию метро. Интересы «${safeInterests}» я сохраню как ориентир для следующего подбора.</p>
                ${nearest.length ? `<p>Ближайшие по направлению варианты: ${nearest.map(uni => `<strong>${uni.name}</strong> (метро ${uni.metro}, ${formatPrice(uni.price)}, от ${uni.minScore} баллов)`).join('; ')}.</p>` : ''}
            </div>
        `;
        return;
    }

    const cards = recommendations.map(match => {
        const { uni, interestMatches, matchPercent } = match;
        const isInCompare = compareList.some(item => item.id === uni.id);
        const badges = [`метро ${uni.metro}`, uni.metroLine, uni.direction, formatPrice(uni.price), `от ${uni.minScore} баллов`];
        const reasons = buildRecommendationReasons(match, profile);
        const interestText = interestMatches.length > 0
            ? `Интересы совпали с темами: ${interestMatches.join(', ')}.`
            : `По интересам «${safeInterests}» этот вуз стоит рассмотреть: ${uni.aiFocus}.`;

        return `
            <article class="ai-recommendation-card">
                <div class="ai-card-top">
                    <h4>${uni.name}</h4>
                    <span class="ai-match-score">${matchPercent}%</span>
                </div>
                <div class="ai-match-badges">
                    ${badges.map(badge => `<span class="ai-badge">${badge}</span>`).join('')}
                </div>
                <ul class="ai-fit-list">
                    ${reasons.map(reason => `<li>${reason}</li>`).join('')}
                </ul>
                <p class="ai-next-step">${interestText}</p>
                <button class="btn btn-sm ${isInCompare ? 'btn-primary' : 'btn-outline'}" onclick="toggleCompare(${uni.id})">
                    ${isInCompare ? 'В сравнении' : 'Добавить к сравнению'}
                </button>
            </article>
        `;
    }).join('');

    resultDiv.innerHTML = `
        <div class="ai-result-header">
            <span class="ai-result-kicker">ИИ-помощник NewStage</span>
            <h3>Персональная подборка для профиля «${safeDirection}»</h3>
            <p class="ai-summary">Я отобрал ${recommendations.length} ${recommendations.length === 1 ? 'вуз' : 'вуза'} под метро ${safeMetro}, бюджет ${formatPrice(profile.budget)}, баллы ${profile.score} и интересы «${safeInterests}». Метро влияет на приоритет: точная станция и та же линия поднимают вуз выше, но не скрывают сильные варианты по профилю.</p>
        </div>
        <div class="ai-recommendation-grid">
            ${cards}
        </div>
    `;
}

document.getElementById('ai-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const profile = getAiProfile();
    const validationError = validateAiProfile(profile);

    if (validationError) {
        showAiMessage(validationError);
        return;
    }

    const resultDiv = document.getElementById('ai-result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = '<div class="ai-loading"><span></span><span></span><span></span></div>';

    setTimeout(() => {
        renderAiRecommendations(profile, getAiRecommendations(profile));
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 700);
});

// ===== Инициализация =====
createParticles();
initScrollAnimations();
initHeaderScroll();
renderPopularCards();
renderSearchCards();
renderCompareTable();
