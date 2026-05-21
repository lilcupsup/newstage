const directions = {
    it: 'IT и программирование',
    engineering: 'Инженерия',
    economics: 'Экономика и финансы',
    media: 'Медиа и дизайн',
    humanities: 'Гуманитарные науки',
    science: 'Естественные науки',
    international: 'Международные отношения',
    architecture: 'Строительство и архитектура',
    law: 'Право и управление'
};

const institutions = [
    {
        id: 1,
        name: 'МГУ имени М. В. Ломоносова',
        type: 'university',
        exam: 'ege',
        direction: 'science',
        rating: 9.6,
        price: 430000,
        minScore: 270,
        metro: 'Университет',
        metroLine: 'Сокольническая',
        description: 'Фундаментальный университет для академической траектории, науки, математики, биологии, химии и исследовательских проектов.',
        tags: ['наука', 'математика', 'исследования', 'биология', 'химия'],
        pros: ['сильная научная среда', 'высокий академический статус', 'широкий выбор факультетов'],
        cons: ['очень высокий проходной балл', 'интенсивная нагрузка'],
        risks: ['нужен высокий запас по профильным предметам', 'конкурс может сильно отличаться по факультетам'],
        next: ['сверить факультет и предметы ЕГЭ', 'посмотреть дни открытых дверей', 'подготовить резервный вариант'],
        aiFocus: 'подходит тем, кто хочет фундаментальное образование и научную карьеру'
    },
    {
        id: 2,
        name: 'МГТУ имени Н. Э. Баумана',
        type: 'university',
        exam: 'ege',
        direction: 'engineering',
        rating: 9.3,
        price: 360000,
        minScore: 255,
        metro: 'Бауманская',
        metroLine: 'Арбатско-Покровская',
        description: 'Инженерная школа для робототехники, машиностроения, космоса, промышленной разработки и сложных технических проектов.',
        tags: ['робототехника', 'проектирование', 'машиностроение', 'космос', 'инженерия'],
        pros: ['репутация инженерного вуза', 'связь с индустрией', 'прикладные проекты'],
        cons: ['сложная учебная нагрузка', 'часть корпусов требует привыкания'],
        risks: ['технические предметы быстро становятся барьером', 'лучше иметь запас по математике и физике'],
        next: ['проверить профильные кафедры', 'сравнить с МАИ и Московским Политехом', 'оценить дорогу до кампуса'],
        aiFocus: 'хорош для школьников, которым важны техника, физика и инженерные проекты'
    },
    {
        id: 3,
        name: 'НИУ ВШЭ',
        type: 'university',
        exam: 'ege',
        direction: 'economics',
        rating: 9.1,
        price: 520000,
        minScore: 265,
        metro: 'Китай-город',
        metroLine: 'Калужско-Рижская',
        description: 'Исследовательский университет с сильными программами по экономике, работе с данными, менеджменту, социологии и продуктовой аналитике.',
        tags: ['экономика', 'данные', 'аналитика', 'финансы', 'стартапы'],
        pros: ['современные программы', 'международная среда', 'сильная аналитика'],
        cons: ['высокая стоимость', 'конкурентная среда'],
        risks: ['для топовых программ нужен запас по баллам', 'стоимость может быть выше комфортного бюджета'],
        next: ['сравнить кампусы и программы', 'посмотреть скидки и гранты', 'проверить профильные олимпиады'],
        aiFocus: 'подходит для аналитики, экономики, данных и проектной карьеры'
    },
    {
        id: 4,
        name: 'РТУ МИРЭА',
        type: 'university',
        exam: 'ege',
        direction: 'it',
        rating: 8.5,
        price: 280000,
        minScore: 218,
        metro: 'Проспект Вернадского',
        metroLine: 'Сокольническая',
        description: 'Технологический университет для входа в IT: разработка, информационная безопасность, сети и прикладные цифровые продукты.',
        tags: ['программирование', 'кибербезопасность', 'сети', 'разработка', 'данные'],
        pros: ['доступнее по баллам', 'сильный IT-фокус', 'разумная стоимость'],
        cons: ['репутация зависит от конкретной программы', 'нужно заранее выбрать институт'],
        risks: ['важно заранее выбрать институт внутри вуза', 'нужна самостоятельность в проектах'],
        next: ['изучить институт ИТ', 'сравнить с МАИ и Московским Политехом', 'посмотреть карьерные треки'],
        aiFocus: 'хорошо ложится на интерес к разработке и прикладным IT-навыкам'
    },
    {
        id: 5,
        name: 'Финансовый университет',
        type: 'university',
        exam: 'ege',
        direction: 'economics',
        rating: 8.6,
        price: 330000,
        minScore: 235,
        metro: 'Аэропорт',
        metroLine: 'Замоскворецкая',
        description: 'Практичный вариант для финансов, банков, налогов, учета, бизнес-аналитики и экономической карьеры.',
        tags: ['финансы', 'банки', 'учет', 'налоги', 'аналитика'],
        pros: ['прикладная экономика', 'стажировки в финансовой сфере', 'понятные карьерные треки'],
        cons: ['узкий профиль', 'много студентов на популярных направлениях'],
        risks: ['важно понять разницу между программами', 'для аналитики понадобится сильная математика'],
        next: ['сравнить факультеты', 'проверить стажировки партнеров', 'оценить проходные по выбранной программе'],
        aiFocus: 'подходит для финансовой сферы и прикладной экономики'
    },
    {
        id: 6,
        name: 'МГИМО',
        type: 'university',
        exam: 'ege',
        direction: 'international',
        rating: 9.4,
        price: 620000,
        minScore: 282,
        metro: 'Проспект Вернадского',
        metroLine: 'Сокольническая',
        description: 'Сильный бренд для международных отношений, языков, дипломатии, международного бизнеса и политологии.',
        tags: ['языки', 'дипломатия', 'политология', 'международный бизнес', 'право'],
        pros: ['престиж', 'языковая подготовка', 'сильные карьерные связи'],
        cons: ['очень высокая стоимость', 'максимально конкурентный вход'],
        risks: ['нужен серьезный запас по баллам', 'стоимость стоит сравнить с альтернативами'],
        next: ['проверить языковые требования', 'сравнить с РАНХиГС и ВШЭ', 'оценить резервные направления'],
        aiFocus: 'подходит для международной карьеры, языков и публичной сферы'
    },
    {
        id: 7,
        name: 'РАНХиГС Москва',
        type: 'university',
        exam: 'ege',
        direction: 'law',
        rating: 8.4,
        price: 380000,
        minScore: 238,
        metro: 'Юго-Западная',
        metroLine: 'Сокольническая',
        description: 'Вариант для управления, права, государственной службы, коммуникаций и социально-гуманитарных программ.',
        tags: ['управление', 'право', 'госслужба', 'коммуникации', 'общество'],
        pros: ['много программ', 'связь с публичным сектором', 'практические кейсы'],
        cons: ['уровень зависит от программы', 'большой университетский масштаб'],
        risks: ['важно смотреть не только бренд, но и конкретный институт', 'на популярных программах высокий конкурс'],
        next: ['сравнить институты внутри академии', 'посмотреть практики', 'проверить проходные по программе'],
        aiFocus: 'логичен для интереса к управлению, праву и общественным процессам'
    },
    {
        id: 8,
        name: 'МАИ',
        type: 'university',
        exam: 'ege',
        direction: 'engineering',
        rating: 8.3,
        price: 305000,
        minScore: 225,
        metro: 'Сокол',
        metroLine: 'Замоскворецкая',
        description: 'Инженерный университет для авиации, беспилотников, двигателей, материалов, IT-систем и промышленной разработки.',
        tags: ['авиация', 'беспилотники', 'двигатели', 'материалы', 'инженерия'],
        pros: ['прикладной профиль', 'связь с промышленностью', 'доступнее топовых инженерных вузов'],
        cons: ['не всем подходит авиационный фокус', 'много технической базы'],
        risks: ['нужно заранее проверить интерес к отрасли', 'математика и физика остаются критичными'],
        next: ['сравнить с Бауманкой', 'посмотреть лаборатории', 'уточнить проектные треки'],
        aiFocus: 'подходит для инженерии с промышленным и авиационным фокусом'
    },
    {
        id: 9,
        name: 'Колледж связи №54',
        type: 'college',
        exam: 'oge',
        direction: 'it',
        rating: 8.2,
        price: 160000,
        minScore: 4.2,
        metro: 'ВДНХ',
        metroLine: 'Калужско-Рижская',
        description: 'Колледж для раннего входа в IT после 9 класса: сети, разработка, администрирование, информационная безопасность и практика.',
        tags: ['сети', 'разработка', 'администрирование', 'кибербезопасность', 'практика'],
        pros: ['практический старт после 9 класса', 'понятный IT-профиль', 'можно продолжить в вузе'],
        cons: ['важен средний балл аттестата', 'меньше академической теории'],
        risks: ['нужно проверить специальность и бюджетные места', 'после колледжа вузовский маршрут стоит планировать заранее'],
        next: ['сверить специальности СПО', 'посмотреть условия практики', 'спланировать продолжение в вузе'],
        aiFocus: 'подходит для раннего старта в IT после 9 класса'
    },
    {
        id: 10,
        name: 'КАДР №26',
        type: 'college',
        exam: 'oge',
        direction: 'architecture',
        rating: 8.1,
        price: 180000,
        minScore: 4.3,
        metro: 'Тульская',
        metroLine: 'Серпуховско-Тимирязевская',
        description: 'Колледж архитектуры, дизайна и реинжиниринга для строительства, дизайна среды, 3D-моделирования и проектной работы.',
        tags: ['архитектура', 'дизайн', 'строительство', '3d', 'проектирование'],
        pros: ['портфолио и практика', 'прикладные навыки', 'подходит визуальным ребятам'],
        cons: ['нужно собирать портфолио', 'часть направлений требует усидчивости'],
        risks: ['творческий профиль стоит проверить на пробных заданиях', 'важно заранее оценить материалы и оборудование'],
        next: ['собрать первые работы', 'посмотреть требования к поступлению', 'сравнить дизайн и строительство'],
        aiFocus: 'подходит для архитектуры, дизайна и проектного мышления'
    },
    {
        id: 11,
        name: 'Московский политехнический колледж',
        type: 'college',
        exam: 'oge',
        direction: 'engineering',
        rating: 7.9,
        price: 145000,
        minScore: 4.0,
        metro: 'Технопарк',
        metroLine: 'Замоскворецкая',
        description: 'Практичный маршрут после 9 класса для техники, производства, эксплуатации оборудования, робототехники и прикладной инженерии.',
        tags: ['техника', 'робототехника', 'производство', 'оборудование', 'практика'],
        pros: ['доступный вход', 'практическая база', 'понятные рабочие навыки'],
        cons: ['меньше теории, чем в вузе', 'важен выбор специальности'],
        risks: ['не все специальности одинаково востребованы', 'лучше заранее смотреть работодателей-партнеров'],
        next: ['сравнить специальности', 'узнать про практику', 'проверить возможность продолжения в вузе'],
        aiFocus: 'подходит для прикладной техники и раннего профессионального старта'
    },
    {
        id: 12,
        name: 'Колледж предпринимательства №11',
        type: 'college',
        exam: 'oge',
        direction: 'economics',
        rating: 7.8,
        price: 150000,
        minScore: 4.1,
        metro: 'Калужская',
        metroLine: 'Калужско-Рижская',
        description: 'СПО-маршрут после 9 класса для бизнеса, сервиса, экономики, маркетинга, продаж и первых предпринимательских проектов.',
        tags: ['бизнес', 'маркетинг', 'экономика', 'продажи', 'сервис'],
        pros: ['прикладная экономика', 'быстрый старт профессии', 'понятные бизнес-навыки'],
        cons: ['не заменяет сильный экономический вуз', 'нужно добирать аналитику самостоятельно'],
        risks: ['важно смотреть качество практики', 'для финансовой карьеры может понадобиться дальнейший вуз'],
        next: ['уточнить практику', 'сравнить программы бизнеса и маркетинга', 'спланировать вуз после колледжа'],
        aiFocus: 'подходит для бизнеса и практической экономики после 9 класса'
    }
];

let compareList = [];
let lastFiltered = [...institutions];
let toastTimer = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function normalizeText(value) {
    return String(value || '')
        .toLowerCase()
        .trim()
        .replace(/ё/g, 'е');
}

function parseNumericInput(value) {
    if (value === '') return null;
    const normalized = String(value).replace(',', '.');
    const number = Number(normalized);
    return Number.isFinite(number) ? number : null;
}

function formatPrice(price) {
    if (price === 0) return 'Бюджетные места';
    return `${price.toLocaleString('ru-RU')} ₽/год`;
}

function formatScore(item) {
    return item.exam === 'ege'
        ? `${item.minScore} ЕГЭ`
        : `${item.minScore.toFixed(1)} ср. балл`;
}

function examLabel(exam) {
    return exam === 'ege' ? 'ЕГЭ · 11 класс' : 'ОГЭ/аттестат · 9 класс';
}

function typeLabel(type) {
    return type === 'university' ? 'Университет' : 'Колледж';
}

function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove('hidden');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
    }, 2600);
}

function showSection(sectionId, scrollTarget = '') {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    $$('.section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });

    $$('.nav-link').forEach(link => {
        const sameSection = link.dataset.section === sectionId;
        const sameTarget = scrollTarget
            ? link.dataset.scrollTarget === scrollTarget
            : !link.dataset.scrollTarget;
        link.classList.toggle('active', sameSection && sameTarget);
    });

    const nav = $('#main-nav');
    const menuButton = $('#mobile-menu-btn');
    nav?.classList.remove('open');
    menuButton?.classList.remove('active');
    menuButton?.setAttribute('aria-expanded', 'false');

    requestAnimationFrame(() => {
        if (scrollTarget) {
            const target = document.getElementById(scrollTarget);
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

function initNavigation() {
    document.addEventListener('click', event => {
        const trigger = event.target.closest('[data-section]');
        if (!trigger) return;

        event.preventDefault();
        showSection(trigger.dataset.section, trigger.dataset.scrollTarget || '');
    });

    const menuButton = $('#mobile-menu-btn');
    const nav = $('#main-nav');

    menuButton?.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuButton.classList.toggle('active', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });
}

function initHeaderScroll() {
    const header = $('#page-header');
    const update = () => header?.classList.toggle('scrolled', window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
}

function initRevealAnimations() {
    const elements = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
        elements.forEach(element => element.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(element => observer.observe(element));
}

function getInstitutionText(item) {
    return normalizeText([
        item.name,
        directions[item.direction],
        item.description,
        item.metro,
        item.metroLine,
        item.aiFocus,
        ...item.tags,
        ...item.pros
    ].join(' '));
}

function createInstitutionCard(item) {
    const isAdded = compareList.some(compareItem => compareItem.id === item.id);
    const visibleTags = item.tags.slice(0, 4);

    const pros = item.pros.slice(0, 2).map(pro => `<li>${escapeHtml(pro)}</li>`).join('');
    const cons = item.cons.slice(0, 2).map(con => `<li>${escapeHtml(con)}</li>`).join('');
    const tags = visibleTags.map(tag => `<span class="card-tag">${escapeHtml(tag)}</span>`).join('');

    return `
        <article class="card ${isAdded ? 'is-added' : ''}">
            <div class="card-top">
                <span class="type-badge">${typeLabel(item.type)}</span>
                <span class="card-rating">${item.rating.toFixed(1)}</span>
            </div>
            <h3 class="card-title">${escapeHtml(item.name)}</h3>
            <p class="card-meta">${examLabel(item.exam)} · ${escapeHtml(directions[item.direction])} · метро ${escapeHtml(item.metro)}</p>
            <p class="card-description">${escapeHtml(item.description)}</p>
            <div class="card-tags">${tags}</div>
            <div class="card-metrics">
                <div class="metric">
                    <span>Стоимость</span>
                    <strong>${formatPrice(item.price)}</strong>
                </div>
                <div class="metric">
                    <span>Проходной ориентир</span>
                    <strong>${formatScore(item)}</strong>
                </div>
                <div class="metric">
                    <span>Метро</span>
                    <strong>${escapeHtml(item.metro)}</strong>
                </div>
                <div class="metric">
                    <span>Оценка профиля</span>
                    <strong>${item.rating.toFixed(1)} / 10</strong>
                </div>
            </div>
            <div class="card-list-grid">
                <div class="list-block">
                    <strong>Плюсы</strong>
                    <ul>${pros}</ul>
                </div>
                <div class="list-block risks">
                    <strong>Ограничения</strong>
                    <ul>${cons}</ul>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn ${isAdded ? 'btn-primary' : 'btn-ghost'} btn-sm" type="button" data-compare-id="${item.id}">
                    ${isAdded ? 'В сравнении' : 'Сравнить'}
                </button>
                <button class="btn btn-secondary btn-sm" type="button" data-pick-id="${item.id}">
                    Подобрать по нему
                </button>
            </div>
        </article>
    `;
}

function renderPopularCards() {
    const container = $('#popular-cards');
    if (!container) return;

    const popular = [...institutions]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    container.innerHTML = popular.map(createInstitutionCard).join('');
}

function getFilters() {
    return {
        query: normalizeText($('#filter-query')?.value || ''),
        exam: $('#filter-exam')?.value || '',
        direction: $('#filter-direction')?.value || '',
        budget: parseNumericInput($('#filter-budget')?.value || ''),
        score: parseNumericInput($('#filter-score')?.value || '')
    };
}

function scoreMatchesExam(score, item) {
    if (score === null || score <= 0) return true;
    if (item.exam === 'ege' && score <= 10) return false;
    if (item.exam === 'oge' && score > 10) return false;
    return item.minScore <= score;
}

function filterInstitutions() {
    const filters = getFilters();

    return institutions.filter(item => {
        if (filters.query && !getInstitutionText(item).includes(filters.query)) return false;
        if (filters.exam && item.exam !== filters.exam) return false;
        if (filters.direction && item.direction !== filters.direction) return false;
        if (filters.budget !== null && item.price > filters.budget) return false;
        if (!scoreMatchesExam(filters.score, item)) return false;
        return true;
    });
}

function buildFilterSummary(filters, count) {
    const parts = [];
    if (filters.exam) parts.push(examLabel(filters.exam));
    if (filters.direction) parts.push(directions[filters.direction]);
    if (filters.budget !== null) parts.push(`до ${formatPrice(filters.budget).replace('/год', '')}`);
    if (filters.score !== null) parts.push(`баллы: ${filters.score}`);
    if (filters.query) parts.push(`поиск: ${filters.query}`);

    if (!parts.length) return `Показаны все варианты для подбора: ${count}`;
    return `Активные фильтры: ${parts.join(' · ')}`;
}

function getEmptyAdvice(filters) {
    if (filters.score !== null) {
        return 'Проверьте формат баллов: для ЕГЭ нужна сумма, для ОГЭ — средний балл от 3.0 до 5.0. Если баллов пока не хватает, добавьте резервное направление или расширьте поиск.';
    }
    if (filters.budget !== null) {
        return 'Попробуйте увеличить бюджет, посмотреть колледжи или добавить соседнее направление: так проще найти реалистичный маршрут.';
    }
    return 'Расширьте направление или уберите текстовый поиск. Затем добавьте 2-3 подходящих варианта в сравнение.';
}

function renderSearchCards(list = null) {
    const container = $('#search-cards');
    if (!container) return;

    const filters = getFilters();
    const results = list || filterInstitutions();
    lastFiltered = results;

    $('#result-count').textContent = `${results.length} ${getPlural(results.length, ['вариант', 'варианта', 'вариантов'])}`;
    $('#active-filter-text').textContent = buildFilterSummary(filters, results.length);

    if (!results.length) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon" aria-hidden="true"></span>
                <h3>Ничего не найдено</h3>
                <p>${escapeHtml(getEmptyAdvice(filters))}</p>
                <button class="btn btn-primary" type="button" data-reset-filters>Сбросить фильтры</button>
            </div>
        `;
        return;
    }

    container.innerHTML = results.map(createInstitutionCard).join('');
}

function getPlural(number, forms) {
    const mod10 = number % 10;
    const mod100 = number % 100;
    if (mod10 === 1 && mod100 !== 11) return forms[0];
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
    return forms[2];
}

function applyFilters() {
    renderSearchCards(filterInstitutions());
}

function resetFilters() {
    ['filter-query', 'filter-exam', 'filter-direction', 'filter-budget', 'filter-score'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });

    renderSearchCards([...institutions]);
    showToast('Фильтры сброшены');
}

function initFilters() {
    $('#apply-filters')?.addEventListener('click', () => {
        applyFilters();
        showToast(`Найдено: ${lastFiltered.length}`);
    });

    $('#reset-filters')?.addEventListener('click', resetFilters);

    ['filter-query', 'filter-exam', 'filter-direction', 'filter-budget', 'filter-score'].forEach(id => {
        const field = document.getElementById(id);
        field?.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                applyFilters();
            }
        });
    });

    $('#filter-query')?.addEventListener('input', () => {
        window.clearTimeout($('#filter-query').dataset.timer);
        const timer = window.setTimeout(applyFilters, 180);
        $('#filter-query').dataset.timer = timer;
    });

    ['filter-exam', 'filter-direction'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', applyFilters);
    });
}

function toggleCompare(id) {
    const item = institutions.find(institution => institution.id === id);
    if (!item) return;

    const existingIndex = compareList.findIndex(compareItem => compareItem.id === id);

    if (existingIndex >= 0) {
        compareList.splice(existingIndex, 1);
        showToast(`${item.name} удален из сравнения`);
    } else {
        if (compareList.length >= 3) {
            showToast('В сравнение можно добавить максимум 3 варианта');
            return;
        }
        compareList.push(item);
        showToast(`${item.name} добавлен в сравнение`);
    }

    renderPopularCards();
    renderSearchCards(lastFiltered.length ? filterInstitutions() : []);
    renderCompare();
}

function renderCompare() {
    const empty = $('#compare-empty');
    const content = $('#compare-content');
    const table = $('#compare-table');
    const summary = $('#compare-summary');

    if (!empty || !content || !table || !summary) return;

    if (compareList.length === 0) {
        empty.classList.remove('hidden');
        content.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');
    content.classList.remove('hidden');
    $('#compare-counter').textContent = `${compareList.length} из 3`;

    summary.innerHTML = compareList.map((item, index) => `
        <div class="compare-chip">
            <span>0${index + 1} · ${typeLabel(item.type)}</span>
            <strong>${escapeHtml(item.name)}</strong>
            <p>${escapeHtml(directions[item.direction])} · ${formatPrice(item.price)}</p>
        </div>
    `).join('');

    const bestRating = Math.max(...compareList.map(item => item.rating));
    const bestPrice = Math.min(...compareList.map(item => item.price));
    const bestScore = Math.min(...compareList.map(item => item.minScore));

    const rows = [
        {
            label: 'Формат',
            values: compareList.map(item => ({ text: examLabel(item.exam), best: false }))
        },
        {
            label: 'Направление',
            values: compareList.map(item => ({ text: directions[item.direction], best: false }))
        },
        {
            label: 'Рейтинг',
            values: compareList.map(item => ({ text: `${item.rating.toFixed(1)} / 10`, best: item.rating === bestRating }))
        },
        {
            label: 'Стоимость',
            values: compareList.map(item => ({ text: formatPrice(item.price), best: item.price === bestPrice }))
        },
        {
            label: 'Проходной ориентир',
            values: compareList.map(item => ({ text: formatScore(item), best: item.minScore === bestScore }))
        },
        {
            label: 'Метро',
            values: compareList.map(item => ({ text: `${item.metro}, ${item.metroLine}`, best: false }))
        },
        {
            label: 'Сильные стороны',
            values: compareList.map(item => ({ text: item.pros.join(', '), best: false }))
        },
        {
            label: 'Риски',
            values: compareList.map(item => ({ text: item.risks.slice(0, 2).join(', '), best: false }))
        }
    ];

    const header = `<thead><tr><th>Критерий</th>${compareList.map(item => `<th>${escapeHtml(item.name)}</th>`).join('')}</tr></thead>`;
    const body = rows.map(row => `
        <tr>
            <td>${escapeHtml(row.label)}</td>
            ${row.values.map(value => `<td class="${value.best ? 'best-value' : ''}">${escapeHtml(value.text)}</td>`).join('')}
        </tr>
    `).join('');

    table.innerHTML = `${header}<tbody>${body}</tbody>`;
}

function clearCompare() {
    compareList = [];
    renderPopularCards();
    renderSearchCards(filterInstitutions());
    renderCompare();
    showToast('Сравнение очищено');
}

function getInterestTerms(value) {
    const stopWords = new Set(['хочу', 'мне', 'нужно', 'интересно', 'очень', 'чтобы', 'после', 'есть', 'для', 'или', 'как', 'про', 'это', 'без']);

    return normalizeText(value)
        .split(/[^a-zа-я0-9]+/i)
        .filter(term => term.length > 2 && !stopWords.has(term));
}

function getInterestMatches(item, terms) {
    if (!terms.length) return [];

    const searchable = getInstitutionText(item);
    const matches = item.tags.filter(tag => {
        const normalizedTag = normalizeText(tag);
        return terms.some(term => normalizedTag.includes(term) || term.includes(normalizedTag));
    });

    terms.forEach(term => {
        if (searchable.includes(term) && !matches.some(match => normalizeText(match).includes(term))) {
            matches.push(term);
        }
    });

    return [...new Set(matches)].slice(0, 4);
}

function getAiProfile() {
    const exam = $('#ai-exam').value;
    const direction = $('#ai-direction').value;
    const scoreValue = $('#ai-score').value;
    const budgetValue = $('#ai-budget').value;
    const interests = $('#ai-interests').value.trim();

    return {
        exam,
        direction,
        score: parseNumericInput(scoreValue),
        scoreValue,
        budget: parseNumericInput(budgetValue),
        budgetValue,
        metro: $('#ai-metro').value,
        interests,
        terms: getInterestTerms(interests)
    };
}

function validateAiProfile(profile) {
    if (!profile.exam) return 'Выберите формат поступления.';
    if (!profile.direction) return 'Выберите направление обучения.';
    if (profile.scoreValue === '' || profile.score === null) return 'Укажите баллы: сумму ЕГЭ или средний балл ОГЭ.';
    if (profile.exam === 'ege' && (profile.score <= 0 || profile.score > 310)) return 'Для ЕГЭ укажите сумму баллов от 1 до 310.';
    if (profile.exam === 'oge' && (profile.score < 3 || profile.score > 5)) return 'Для ОГЭ укажите средний балл от 3.0 до 5.0.';
    if (profile.budgetValue === '' || profile.budget === null || profile.budget < 0) return 'Укажите максимальный бюджет в год. Если нужен только бюджет, можно поставить 0.';
    if (!profile.interests) return 'Опишите интересы: предметы, карьеру, формат учебы или ожидания от среды.';
    return '';
}

function getMetroScore(item, metro) {
    if (!metro) return 0;
    if (normalizeText(item.metro) === normalizeText(metro)) return 8;

    const selected = institutions.find(candidate => normalizeText(candidate.metro) === normalizeText(metro));
    if (selected && selected.metroLine === item.metroLine) return 3;

    return 0;
}

function scoreAiItem(item, profile) {
    const interestMatches = getInterestMatches(item, profile.terms);
    const scoreGap = profile.score - item.minScore;
    const budgetGap = profile.budget - item.price;

    let score = 42;
    score += item.direction === profile.direction ? 18 : -8;
    score += item.exam === profile.exam ? 12 : -20;
    score += item.rating * 2.6;
    score += Math.min(10, interestMatches.length * 3);
    score += getMetroScore(item, profile.metro);

    if (budgetGap >= 0) {
        score += Math.min(8, budgetGap / 50000);
    } else {
        score -= Math.min(18, Math.abs(budgetGap) / 30000);
    }

    if (scoreGap >= 0) {
        score += item.exam === 'ege'
            ? Math.min(10, scoreGap / 5)
            : Math.min(10, scoreGap * 16);
    } else {
        score -= item.exam === 'ege'
            ? Math.min(22, Math.abs(scoreGap) * 1.25)
            : Math.min(22, Math.abs(scoreGap) * 24);
    }

    return {
        item,
        percent: Math.max(18, Math.min(98, Math.round(score))),
        interestMatches,
        scoreGap,
        budgetGap
    };
}

function getAiRecommendations(profile) {
    const primary = institutions
        .filter(item => item.exam === profile.exam)
        .filter(item => item.direction === profile.direction)
        .map(item => scoreAiItem(item, profile))
        .sort((a, b) => b.percent - a.percent);

    if (primary.length >= 3) return primary.slice(0, 3);

    const secondary = institutions
        .filter(item => item.exam === profile.exam)
        .filter(item => item.direction !== profile.direction)
        .map(item => scoreAiItem(item, profile))
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 3 - primary.length);

    return [...primary, ...secondary].slice(0, 3);
}

function buildReasons(match, profile) {
    const { item, scoreGap, budgetGap, interestMatches } = match;
    const reasons = [
        `${examLabel(item.exam)} совпадает с выбранным маршрутом`,
        `направление «${directions[item.direction]}» связано с вашей целью`
    ];

    if (scoreGap >= 0) {
        reasons.push(item.exam === 'ege'
            ? `запас по баллам: +${Math.round(scoreGap)}`
            : `средний балл выше ориентира на ${scoreGap.toFixed(1)}`);
    } else {
        reasons.push(item.exam === 'ege'
            ? `вариант амбициозный: не хватает около ${Math.ceil(Math.abs(scoreGap))} баллов`
            : `вариант амбициозный: нужен средний балл выше на ${Math.abs(scoreGap).toFixed(1)}`);
    }

    if (budgetGap >= 0) {
        reasons.push(`стоимость укладывается в бюджет: ${formatPrice(item.price)}`);
    } else {
        reasons.push(`стоимость выше бюджета на ${Math.abs(budgetGap).toLocaleString('ru-RU')} ₽`);
    }

    if (profile.metro) {
        reasons.push(item.metro === profile.metro
            ? `метро совпадает: ${item.metro}`
            : `кампус у метро ${item.metro}; дорогу стоит проверить`);
    }

    if (interestMatches.length) {
        reasons.push(`есть совпадения по интересам: ${interestMatches.join(', ')}`);
    } else {
        reasons.push(item.aiFocus);
    }

    return reasons;
}

function buildRisks(match) {
    const { item, scoreGap, budgetGap } = match;
    const risks = [...item.risks.slice(0, 2)];

    if (scoreGap < 0) {
        risks.unshift(item.exam === 'ege'
            ? `баллы ниже ориентира на ${Math.ceil(Math.abs(scoreGap))}`
            : `средний балл ниже ориентира на ${Math.abs(scoreGap).toFixed(1)}`);
    } else if ((item.exam === 'ege' && scoreGap < 12) || (item.exam === 'oge' && scoreGap < 0.25)) {
        risks.unshift('запас по баллам небольшой, нужен резервный вариант');
    }

    if (budgetGap < 0) {
        risks.unshift('стоимость выше указанного бюджета');
    }

    return [...new Set(risks)].slice(0, 4);
}

function renderAiMessage(message) {
    const result = $('#ai-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="ai-empty">
            <h3>Заполните анкету для точного подбора</h3>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
}

function renderAiRecommendations(profile, recommendations) {
    const result = $('#ai-result');
    result.classList.remove('hidden');

    if (!recommendations.length) {
        result.innerHTML = `
            <div class="ai-empty">
                <h3>Подходящих вариантов пока нет</h3>
                <p>Попробуйте расширить направление, увеличить бюджет или скорректировать баллы. Также можно выбрать соседний профиль и добавить 2-3 варианта в сравнение.</p>
            </div>
        `;
        return;
    }

    const exactCount = recommendations.filter(match => match.item.direction === profile.direction).length;
    const profileBadges = [
        examLabel(profile.exam),
        directions[profile.direction],
        `баллы: ${profile.score}`,
        `бюджет: ${formatPrice(profile.budget).replace('/год', '')}`,
        profile.metro ? `метро: ${profile.metro}` : 'метро: не важно'
    ];

    const cards = recommendations.map(match => {
        const { item, percent } = match;
        const reasons = buildReasons(match, profile);
        const risks = buildRisks(match);
        const isAdded = compareList.some(compareItem => compareItem.id === item.id);

        return `
            <article class="ai-recommendation-card">
                <div class="ai-card-head">
                    <div>
                        <span class="ai-result-kicker">${typeLabel(item.type)} · ${examLabel(item.exam)}</span>
                        <h4>${escapeHtml(item.name)}</h4>
                    </div>
                    <span class="match-ring" style="--match: ${percent}%">${percent}%</span>
                </div>
                <div class="ai-badges">
                    <span class="ai-badge">${escapeHtml(directions[item.direction])}</span>
                    <span class="ai-badge">${formatPrice(item.price)}</span>
                    <span class="ai-badge">${formatScore(item)}</span>
                    <span class="ai-badge">метро ${escapeHtml(item.metro)}</span>
                </div>
                <div class="ai-section">
                    <strong>Почему подходит</strong>
                    <ul>${reasons.slice(0, 5).map(reason => `<li>${escapeHtml(reason)}</li>`).join('')}</ul>
                </div>
                <div class="ai-section risk">
                    <strong>Риски</strong>
                    <ul>${risks.map(risk => `<li>${escapeHtml(risk)}</li>`).join('')}</ul>
                </div>
                <div class="ai-section next">
                    <strong>Следующие шаги</strong>
                    <ul>${item.next.slice(0, 3).map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ul>
                </div>
                <div class="ai-actions">
                    <button class="btn ${isAdded ? 'btn-primary' : 'btn-ghost'} btn-sm" type="button" data-compare-id="${item.id}">
                        ${isAdded ? 'В сравнении' : 'Сравнить'}
                    </button>
                    <button class="btn btn-secondary btn-sm" type="button" data-section="search">Открыть поиск</button>
                </div>
            </article>
        `;
    }).join('');

    result.innerHTML = `
        <div class="ai-result-header">
            <span class="ai-result-kicker">AI-рекомендация NewStage</span>
            <h3>${exactCount ? 'Персональная подборка с объяснением выбора' : 'Точных совпадений мало, показываю ближайшие маршруты'}</h3>
            <p class="ai-summary">Алгоритм сопоставил профиль с базой вариантов: формат, направление, бюджет, проходной ориентир, метро и интересы. Процент показывает не престиж, а практическую пригодность учебного заведения для вашего сценария.</p>
            <div class="ai-profile-row">
                ${profileBadges.map(badge => `<span>${escapeHtml(badge)}</span>`).join('')}
            </div>
        </div>
        <div class="ai-recommendation-grid">${cards}</div>
    `;
}

function updateAiScoreField() {
    const exam = $('#ai-exam')?.value;
    const score = $('#ai-score');
    const label = $('#ai-score-label');
    if (!score || !label) return;

    if (exam === 'oge') {
        label.textContent = 'Средний балл аттестата / ОГЭ';
        score.placeholder = 'Например, 4.4';
        score.max = '5';
        score.min = '3';
        score.step = '0.1';
    } else {
        label.textContent = 'Сумма баллов ЕГЭ';
        score.placeholder = 'Например, 245';
        score.max = '310';
        score.min = '0';
        score.step = '1';
    }
}

function initAiForm() {
    $('#ai-exam')?.addEventListener('change', updateAiScoreField);
    updateAiScoreField();

    $('#ai-form')?.addEventListener('submit', event => {
        event.preventDefault();

        const profile = getAiProfile();
        const validationError = validateAiProfile(profile);

        if (validationError) {
            renderAiMessage(validationError);
            return;
        }

        const result = $('#ai-result');
        result.classList.remove('hidden');
        result.innerHTML = '<div class="ai-loading"><span></span><span></span><span></span></div>';

        window.setTimeout(() => {
            renderAiRecommendations(profile, getAiRecommendations(profile));
            result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 620);
    });
}

function prefillAiFromInstitution(id) {
    const item = institutions.find(institution => institution.id === id);
    if (!item) return;

    showSection('home', 'ai-picker');

    window.setTimeout(() => {
        $('#ai-exam').value = item.exam;
        updateAiScoreField();
        $('#ai-direction').value = item.direction;
        $('#ai-score').value = item.exam === 'ege'
            ? Math.min(310, item.minScore + 14)
            : Math.min(5, item.minScore + 0.2).toFixed(1);
        $('#ai-budget').value = item.price;
        $('#ai-metro').value = item.metro;
        $('#ai-interests').value = item.tags.slice(0, 4).join(', ');
        $('#ai-interests').focus({ preventScroll: true });
    }, 260);

    showToast(`Анкета заполнена под ${item.name}`);
}

function initGlobalActions() {
    document.addEventListener('click', event => {
        const compareButton = event.target.closest('[data-compare-id]');
        if (compareButton) {
            toggleCompare(Number(compareButton.dataset.compareId));
            return;
        }

        const pickButton = event.target.closest('[data-pick-id]');
        if (pickButton) {
            prefillAiFromInstitution(Number(pickButton.dataset.pickId));
            return;
        }

        if (event.target.closest('[data-reset-filters]')) {
            resetFilters();
        }
    });

    $('#clear-compare')?.addEventListener('click', clearCompare);
}

function initBlogTabs() {
    const listView = $('#blog-list-view');
    const articleView = $('#blog-article-view');
    const articlePanels = $$('.blog-article[data-article-panel]');

    const showBlogList = (updateHash = true) => {
        listView?.classList.remove('hidden');
        articleView?.classList.add('hidden');
        articlePanels.forEach(panel => {
            panel.hidden = true;
        });

        if (updateHash && window.history?.pushState) {
            window.history.pushState(null, '', '#blog');
        }

        requestAnimationFrame(() => {
            document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    const openBlogArticle = (articleId, updateHash = true) => {
        const targetPanel = document.querySelector(`[data-article-panel="${articleId}"]`);
        if (!targetPanel) return;

        showSection('blog');
        listView?.classList.add('hidden');
        articleView?.classList.remove('hidden');
        articlePanels.forEach(panel => {
            panel.hidden = panel !== targetPanel;
        });

        if (updateHash && window.history?.pushState) {
            window.history.pushState(null, '', `#${targetPanel.id}`);
        }

        requestAnimationFrame(() => {
            articleView?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetPanel.querySelector('h2')?.focus({ preventScroll: true });
        });
    };

    const openArticleFromHash = () => {
        const hash = decodeURIComponent(window.location.hash.replace('#', ''));
        if (!hash.startsWith('article-')) return false;

        const panel = document.getElementById(hash);
        const articleId = panel?.dataset.articlePanel;
        if (!articleId) return false;

        openBlogArticle(articleId, false);
        return true;
    };

    const syncBlogRoute = () => {
        if (openArticleFromHash()) return;

        if (window.location.hash === '#blog') {
            showSection('blog');
            showBlogList(false);
            return;
        }

        if (articleView && !articleView.classList.contains('hidden')) {
            showBlogList(false);
        }
    };

    $$('.blog-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.blogFilter;
            $$('.blog-tab').forEach(item => item.classList.toggle('active', item === tab));
            $$('.blog-card').forEach(card => {
                const categories = (card.dataset.blogCategories || '').split(' ');
                card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
            });
        });
    });

    $$('.blog-card[data-article-card]').forEach(card => {
        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');

        card.addEventListener('click', event => {
            if (event.target.closest('a, button')) return;
            openBlogArticle(card.dataset.articleCard);
        });

        card.addEventListener('keydown', event => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            openBlogArticle(card.dataset.articleCard);
        });
    });

    document.addEventListener('click', event => {
        const articleTrigger = event.target.closest('[data-article-id]');
        if (articleTrigger) {
            event.preventDefault();
            openBlogArticle(articleTrigger.dataset.articleId);
            return;
        }

        if (event.target.closest('[data-blog-back]')) {
            event.preventDefault();
            showBlogList();
            return;
        }

        if (event.target.closest('[data-section="blog"]')) {
            showBlogList(false);
        }
    });

    window.addEventListener('hashchange', syncBlogRoute);
    window.addEventListener('popstate', syncBlogRoute);
    syncBlogRoute();
}

function initBackgroundFollow() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) return;

    const root = document.documentElement;
    let currentX = 70;
    let currentY = 18;
    let targetX = currentX;
    let targetY = currentY;
    let frameId = null;

    const render = () => {
        currentX += (targetX - currentX) * 0.11;
        currentY += (targetY - currentY) * 0.11;
        root.style.setProperty('--cursor-glow-x', `${currentX.toFixed(2)}%`);
        root.style.setProperty('--cursor-glow-y', `${currentY.toFixed(2)}%`);

        if (Math.abs(targetX - currentX) > 0.03 || Math.abs(targetY - currentY) > 0.03) {
            frameId = window.requestAnimationFrame(render);
        } else {
            frameId = null;
        }
    };

    const updateTarget = event => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        targetX = 58 + x * 26;
        targetY = 8 + y * 24;

        if (!frameId) {
            frameId = window.requestAnimationFrame(render);
        }
    };

    window.addEventListener('pointermove', updateTarget, { passive: true });
    window.addEventListener('mousemove', updateTarget, { passive: true });
}

function init() {
    initNavigation();
    initHeaderScroll();
    initRevealAnimations();
    initFilters();
    initAiForm();
    initGlobalActions();
    initBlogTabs();
    initBackgroundFollow();
    renderPopularCards();
    renderSearchCards([...institutions]);
    renderCompare();
}

document.addEventListener('DOMContentLoaded', init);
