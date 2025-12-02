// --- ДАННЫЕ ПРОДУКТОВ ---
const products = {
  "OGSM": {
    title: "Адаптивная система стратегического управления OGSM",
    description: "OGSM — это не просто методология, а «живая» система управления компанией. Её суть — в создании эффективной связки между долгосрочным видением (3-5 лет) и ежедневными действиями каждого сотрудника через прозрачные стратегические инициативы, KPI и регулярный трекинг."
  },
  "Agile": {
    title: "Инновации в бизнесе через Agile & Change",
    description: "Комплексный подход к управлению изменениями и разработке продуктов, сочетающий создание подразделения Change и внедрение Agile/Scrum. Позволяет безопасно тестировать идеи и масштабировать их, обеспечивая устойчивый рост."
  },
  "Academy": {
    title: "Академия Развития Клиентов и Партнеров",
    description: "Системный подход к переходу от транзакций к стратегическому партнёрству. Создаёт взаимовыгодные отношения через совместные инвестиции (JBP, JV), повышая маржинальность и предсказуемость бизнеса."
  },
  "F2": {
    title: "Финансовый Диагноз и Дорожная Карта",
    description: "Экспресс-аудит финансовой функции за 4 недели. Вы получите чёткую картину «как есть», выявите риски и получите приоритизированную дорожную карту на 6–12 месяцев."
  },
  "F1": {
    title: "Запуск финансового менеджмента с нуля",
    description: "Комплексный проект по построению финансовой службы «под ключ»: структура, процессы, ИТ-системы, команда. Для быстрорастущих компаний, вышедших из Excel."
  },
  "F3": {
    title: "AI-интеллект для финансового директора",
    description: "Пилотный проект по внедрению AI в рутинные финансовые процессы: автоматизация обработки документов, чат-бот для запросов, прогнозирование ДДС. Освобождает до 30% времени команды."
  }
};

// --- ВЕСА ИЗ ФАЙЛА ---
const weights = {
  "1A": { agility: 0, partnership: 0, automation: 1, system: 2 },
  "1B": { agility: 3, partnership: 1, automation: 0, system: 0 },
  "1C": { agility: 2, partnership: 2, automation: 0, system: 3 },
  "1D": { agility: 1, partnership: 0, automation: 2, system: 1 },
  "2A": { agility: 0, partnership: 0, automation: 1, system: 1 },
  "2B": { agility: 1, partnership: 2, automation: 0, system: 1 },
  "2C": { agility: 2, partnership: 3, automation: 1, system: 2 },
  "2D": { agility: 0, partnership: 1, automation: 0, system: 0 },
  "3A": { agility: 0, partnership: 0, automation: 3, system: 2 },
  "3B": { agility: 0, partnership: 0, automation: 3, system: 1 },
  "3C": { agility: 1, partnership: 0, automation: 0, system: 3 },
  "3D": { agility: 0, partnership: 0, automation: 3, system: 2 },
  "4A": { agility: 3, partnership: 1, automation: 0, system: 1 },
  "4B": { agility: 0, partnership: 0, automation: 0, system: 1 },
  "4C": { agility: 1, partnership: 3, automation: 0, system: 2 },
  "4D": { agility: 0, partnership: 1, automation: 0, system: 0 },
  "5A": { agility: 3, partnership: 1, automation: 2, system: 2 },
  "5B": { agility: 0, partnership: 0, automation: 0, system: 1 },
  "5C": { agility: 1, partnership: 2, automation: 0, system: 1 },
  "5D": { agility: 1, partnership: 3, automation: 0, system: 1 },
  "6A": { agility: 3, partnership: 1, automation: 0, system: 2 },
  "6B": { agility: 0, partnership: 0, automation: 1, system: 0 },
  "6C": { agility: 0, partnership: 0, automation: 1, system: 0 },
  "6D": { agility: 1, partnership: 1, automation: 2, system: 3 },
  "7A": { agility: 0, partnership: 0, automation: 2, system: 2 },
  "7B": { agility: 1, partnership: 1, automation: 1, system: 2 },
  "7C": { agility: 2, partnership: 1, automation: 3, system: 2 },
  "7D": { agility: 1, partnership: 3, automation: 0, system: 1 },
  "8A": { F_SYS: 3, F_AUTO: 2, F_GROW: 2 },
  "8B": { F_SYS: 1, F_AUTO: 0, F_GROW: 1 },
  "8C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "8D": { F_SYS: 3, F_AUTO: 3, F_GROW: 2 },
  "9A": { F_SYS: 3, F_AUTO: 2, F_GROW: 3 },
  "9B": { F_SYS: 1, F_AUTO: 0, F_GROW: 1 },
  "9C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "9D": { F_SYS: 3, F_AUTO: 3, F_GROW: 2 },
  "10A": { F_SYS: 2, F_AUTO: 3, F_GROW: 1 },
  "10B": { F_SYS: 1, F_AUTO: 0, F_GROW: 0 },
  "10C": { F_SYS: 0, F_AUTO: 1, F_GROW: 0 },
  "10D": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "11A": { F_SYS: 3, F_AUTO: 2, F_GROW: 3 },
  "11B": { F_SYS: 1, F_AUTO: 1, F_GROW: 1 },
  "11C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "11D": { F_SYS: 1, F_AUTO: 0, F_GROW: 1 },
  "12A": { F_SYS: 3, F_AUTO: 2, F_GROW: 3 },
  "12B": { F_SYS: 1, F_AUTO: 1, F_GROW: 1 },
  "12C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "12D": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 }
};

// --- ПРОФИЛИ И РЕКОМЕНДАЦИИ ---
const basicProfiles = {
  agility: {
    diagnosis: "Нехватка системы для быстрого тестирования гипотез и масштабирования решений.",
    recommendation: "Agile-трансформация с запуском подразделения Change.",
    product: "Agile"
  },
  partnership: {
    diagnosis: "Транзакционные отношения вместо стратегического партнёрства.",
    recommendation: "Система развития клиентов и партнёров.",
    product: "Academy"
  },
  automation: {
    diagnosis: "Команда тонет в рутине и ручных процессах.",
    recommendation: "Цифровая трансформация и автоматизация.",
    product: "F3"
  },
  system: {
    diagnosis: "Стратегия есть, но нет механизма реализации.",
    recommendation: "Система стратегического управления.",
    product: "OGSM"
  },
  F1: {
    diagnosis: "Отсутствует системный финансовый менеджмент.",
    recommendation: "Срочное построение финансовой функции с нуля.",
    product: "F1"
  },
  F2: {
    diagnosis: "Финансы не стали инструментом для роста.",
    recommendation: "Проведение аудита и оптимизация процессов.",
    product: "F2"
  },
  F3: {
    diagnosis: "Квалифицированные сотрудники тонут в рутине.",
    recommendation: "Внедрение AI и цифровых инструментов.",
    product: "F3"
  }
};

// --- ФУНКЦИИ ---
function calculateProfile(answers) {
  let scores = {
    agility: 0, partnership: 0, automation: 0, system: 0,
    F_SYS: 0, F_AUTO: 0, F_GROW: 0
  };

  answers.forEach(ans => {
    const w = weights[ans];
    if (w) {
      for (let key in w) {
        scores[key] += w[key];
      }
    }
  });

  // Определяем бизнес-профиль
  const businessKeys = ['agility', 'partnership', 'automation', 'system'];
  const businessScores = businessKeys.reduce((obj, key) => {
    obj[key] = scores[key];
    return obj;
  }, {});
  const maxBusiness = Math.max(...Object.values(businessScores));
  let businessProfile = Object.keys(businessScores).find(k => businessScores[k] === maxBusiness);

  // Определяем финансовый профиль
  let financeProfile = "F2"; // по умолчанию
  if (scores.F_SYS <= 2 && scores.F_AUTO <= 1 && scores.F_GROW <= 1) financeProfile = "F1";
  if (scores.F_AUTO >= 3 && scores.F_SYS >= 2) financeProfile = "F3";

  return { businessProfile, financeProfile, scores };
}

function generateReport(businessProfile, financeProfile) {
  // Простейшая логика: если финансовый профиль F1 или F2 — приоритет ему
  if (financeProfile === "F1" || financeProfile === "F2" || financeProfile === "F3") {
    return {
      diagnosis: basicProfiles[financeProfile].diagnosis,
      recommendation: basicProfiles[financeProfile].recommendation,
      productKey: basicProfiles[financeProfile].product
    };
  } else {
    return {
      diagnosis: basicProfiles[businessProfile].diagnosis,
      recommendation: basicProfiles[businessProfile].recommendation,
      productKey: basicProfiles[businessProfile].product
    };
  }
}

// --- ОТОБРАЖЕНИЕ ПРОДУКТОВ ---
function showAllProducts() {
  let html = '';
  for (let key in products) {
    html += `
      <div class="product-item" style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
        <h3>${products[key].title}</h3>
        <p>${products[key].description}</p>
      </div>
    `;
  }
  document.getElementById('productsList').innerHTML = html;
  document.getElementById('allProducts').style.display = 'block';
  document.getElementById('recommendations').style.display = 'none';
}

function showProductDetails(key) {
  const prod = products[key];
  document.getElementById('productTitle').textContent = prod.title;
  document.getElementById('productContent').textContent = prod.description;
  document.getElementById('productDetails').style.display = 'block';
}

// --- ОБРАБОТЧИКИ ---
document.getElementById('submitQuiz').addEventListener('click', function(e) {
  e.preventDefault();
  const form = document.getElementById('diagnosticForm');
  const answers = [];
  for (let i = 1; i <= 12; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if (selected) answers.push(selected.value);
  }

  if (answers.length !== 12) {
    alert('Пожалуйста, ответьте на все вопросы.');
    return;
  }

  const { businessProfile, financeProfile } = calculateProfile(answers);
  const report = generateReport(businessProfile, financeProfile);

  document.getElementById('resultText').innerHTML = `
    <p><strong>Диагноз:</strong> ${report.diagnosis}</p>
    <p><strong>Рекомендация:</strong> ${report.recommendation}</p>
  `;
  showProductDetails(report.productKey);

  document.getElementById('recommendations').style.display = 'block';
  document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('showAllProducts').addEventListener('click', showAllProducts);
document.getElementById('backToRecommendations').addEventListener('click', function() {
  document.getElementById('allProducts').style.display = 'none';
  document.getElementById('recommendations').style.display = 'block';
  document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
});
