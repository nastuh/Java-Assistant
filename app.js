const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
    tg.setHeaderColor("bg_color");
    tg.setBackgroundColor("bg_color");

    tg.onEvent("themeChanged", () => {
        applyTelegramTheme();
    });

    applyTelegramTheme();
}

function applyTelegramTheme() {
    if (!tg) return;
    const root = document.documentElement;

    if (tg.themeParams.bg_color) root.style.setProperty("--bg", tg.themeParams.bg_color);
    if (tg.themeParams.text_color) root.style.setProperty("--text", tg.themeParams.text_color);
    if (tg.themeParams.hint_color) root.style.setProperty("--hint", tg.themeParams.hint_color);
    if (tg.themeParams.link_color) root.style.setProperty("--link", tg.themeParams.link_color);
    if (tg.themeParams.button_color) root.style.setProperty("--button", tg.themeParams.button_color);
    if (tg.themeParams.button_text_color) root.style.setProperty("--button-text", tg.themeParams.button_text_color);
    if (tg.themeParams.secondary_bg_color) root.style.setProperty("--secondary-bg", tg.themeParams.secondary_bg_color);
}

const TOPICS = {
    basics: {
        name: "Основы Java",
        level: 1,
        content: "Java — язык программирования, созданный в 1995 году.\n\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n\nЛюбая Java-программа содержит класс и метод main."
    },
    variables: {
        name: "Переменные",
        level: 1,
        content: "Переменная — ячейка для хранения данных.\n\nint age = 25;\nString name = \"Анна\";\ndouble price = 99.99;\nboolean isReady = true;\n\nПравила именования:\n- Начинается с буквы или _\n- Регистрозависимо\n- Осмысленные имена"
    },
    data_types: {
        name: "Типы данных",
        level: 1,
        content: "Примитивные типы:\nbyte, short, int, long\nfloat, double\nchar, boolean\n\nСсылочные:\nString, массивы, классы\n\nЧаще всего:\nint — целые\ndouble — дробные\nString — текст\nboolean — true/false"
    },
    operators: {
        name: "Операторы",
        level: 1,
        content: "Арифметические: + - * / %\nСравнения: == != > < >= <=\nЛогические: && || !\n\nПример:\nint a = 10, b = 3;\nint sum = a + b;\nboolean isAdult = age >= 18;"
    },
    if_else: {
        name: "Условные операторы",
        level: 1,
        content: "if (условие) {\n}\n\nif (условие) {\n} else {\n}\n\nif (условие1) {\n} else if (условие2) {\n} else {\n}\n\nПример:\nint score = 85;\nif (score >= 90) {\n    System.out.println(\"A\");\n} else if (score >= 80) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"C\");\n}"
    },
    loops: {
        name: "Циклы",
        level: 1,
        content: "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\nint i = 0;\nwhile (i < 5) {\n    System.out.println(i);\n    i++;\n}\n\nfor (String name : names) {\n    System.out.println(name);\n}"
    },
    arrays: {
        name: "Массивы",
        level: 1,
        content: "int[] numbers = {1, 2, 3, 4, 5};\nString[] names = {\"Анна\", \"Пётр\"};\n\nДоступ: numbers[0]\nДлина: numbers.length\n\nfor (int i = 0; i < numbers.length; i++) {\n    System.out.println(numbers[i]);\n}"
    },
    methods: {
        name: "Методы",
        level: 1,
        content: "public int add(int a, int b) {\n    return a + b;\n}\n\npublic void sayHello() {\n    System.out.println(\"Hello\");\n}\n\nint result = add(5, 3);\nsayHello();"
    },
    oop: {
        name: "ООП",
        level: 2,
        content: "Четыре столпа:\n1. Инкапсуляция\n2. Наследование\n3. Полиморфизм\n4. Абстракция\n\nКласс — чертёж объектов.\nОбъект — экземпляр класса."
    },
    classes: {
        name: "Классы",
        level: 2,
        content: "public class Car {\n    String brand;\n    String color;\n    int year;\n    \n    public Car(String brand, String color, int year) {\n        this.brand = brand;\n        this.color = color;\n        this.year = year;\n    }\n    \n    public void drive() {\n        System.out.println(brand + \" едет\");\n    }\n}"
    },
    inheritance: {
        name: "Наследование",
        level: 2,
        content: "public class Animal {\n    String name;\n    public void eat() {\n        System.out.println(name + \" ест\");\n    }\n}\n\npublic class Dog extends Animal {\n    public void bark() {\n        System.out.println(name + \" лает\");\n    }\n}"
    },
    polymorphism: {
        name: "Полиморфизм",
        level: 2,
        content: "public class Animal {\n    public void makeSound() {\n        System.out.println(\"Звук\");\n    }\n}\n\npublic class Dog extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"Гав-гав\");\n    }\n}\n\nAnimal a1 = new Dog();\na1.makeSound();"
    },
    encapsulation: {
        name: "Инкапсуляция",
        level: 2,
        content: "public class Person {\n    private String name;\n    private int age;\n    \n    public String getName() { return name; }\n    \n    public void setName(String name) {\n        if (name != null && !name.isEmpty()) {\n            this.name = name;\n        }\n    }\n}"
    },
    abstraction: {
        name: "Абстракция",
        level: 2,
        content: "public abstract class Shape {\n    public abstract double getArea();\n}\n\npublic class Circle extends Shape {\n    private double radius;\n    \n    @Override\n    public double getArea() {\n        return Math.PI * radius * radius;\n    }\n}"
    },
    interfaces: {
        name: "Интерфейсы",
        level: 2,
        content: "public interface Drawable {\n    void draw();\n}\n\npublic class Circle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Рисую круг\");\n    }\n}"
    },
    collections: {
        name: "Коллекции",
        level: 3,
        content: "Основные интерфейсы:\n- List: упорядоченный\n- Set: без дубликатов\n- Map: ключ-значение\n\nList: ArrayList, LinkedList\nSet: HashSet, TreeSet\nMap: HashMap, TreeMap"
    },
    list: {
        name: "List",
        level: 3,
        content: "List<String> names = new ArrayList<>();\nnames.add(\"Анна\");\nnames.add(\"Пётр\");\n\nString first = names.get(0);\nnames.set(1, \"Мария\");\nnames.remove(0);\nint size = names.size();"
    },
    arraylist: {
        name: "ArrayList",
        level: 3,
        content: "ArrayList<String> fruits = new ArrayList<>();\nfruits.add(\"Яблоко\");\nfruits.add(\"Банан\");\nfruits.add(1, \"Виноград\");\n\nString first = fruits.get(0);\nfruits.set(1, \"Груша\");\nfruits.remove(2);\n\nДоступ: O(1), вставка: O(n)"
    },
    linkedlist: {
        name: "LinkedList",
        level: 3,
        content: "LinkedList<String> queue = new LinkedList<>();\nqueue.add(\"Первый\");\nqueue.addFirst(\"Новый\");\nqueue.addLast(\"Последний\");\n\nString first = queue.removeFirst();\nString last = queue.getLast();"
    },
    set: {
        name: "Set",
        level: 3,
        content: "Set<String> cities = new HashSet<>();\ncities.add(\"Москва\");\ncities.add(\"Лондон\");\ncities.add(\"Москва\");\n\nboolean hasLondon = cities.contains(\"Лондон\");\n\nTreeSet — сортированный, LinkedHashSet — порядок вставки."
    },
    map: {
        name: "Map",
        level: 3,
        content: "Map<String, Integer> scores = new HashMap<>();\nscores.put(\"Анна\", 95);\nscores.put(\"Пётр\", 87);\n\nint annaScore = scores.get(\"Анна\");\n\nfor (Map.Entry<String, Integer> entry : scores.entrySet()) {\n    System.out.println(entry.getKey() + \": \" + entry.getValue());\n}"
    },
    hashmap: {
        name: "HashMap",
        level: 3,
        content: "HashMap<String, String> dict = new HashMap<>();\ndict.put(\"hello\", \"привет\");\ndict.put(\"world\", \"мир\");\n\nString t = dict.get(\"hello\");\n\nОперации O(1). Разрешает null. Ключи должны реализовать hashCode() и equals()."
    },
    stream: {
        name: "Stream API",
        level: 4,
        content: "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n\nList<Integer> result = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * 2)\n    .collect(Collectors.toList());\n\nОперации: filter, map, sorted, forEach, collect, count, reduce."
    },
    filter: {
        name: "filter()",
        level: 4,
        content: "List<Integer> even = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());\n\nList<String> longWords = words.stream()\n    .filter(s -> s.length() > 3)\n    .collect(Collectors.toList());"
    },
    map_stream: {
        name: "map()",
        level: 4,
        content: "List<Integer> doubled = numbers.stream()\n    .map(n -> n * 2)\n    .collect(Collectors.toList());\n\nList<String> names = people.stream()\n    .map(Person::getName)\n    .collect(Collectors.toList());"
    },
    collect: {
        name: "collect()",
        level: 4,
        content: "List<Integer> list = numbers.stream()\n    .filter(n -> n > 3)\n    .collect(Collectors.toList());\n\nSet<Integer> set = numbers.stream()\n    .collect(Collectors.toSet());\n\nString joined = words.stream()\n    .collect(Collectors.joining(\", \"));"
    },
    reduce: {
        name: "reduce()",
        level: 4,
        content: "int sum = numbers.stream()\n    .reduce(0, (a, b) -> a + b);\n\nOptional<Integer> max = numbers.stream()\n    .reduce(Integer::max);\n\nString result = words.stream()\n    .reduce(\"\", (a, b) -> a + \" \" + b);"
    },
    exceptions: {
        name: "Исключения",
        level: 5,
        content: "Типы:\n- Checked: IOException\n- Unchecked: NullPointerException\n- Error: OutOfMemoryError\n\ntry {\n} catch (ExceptionType e) {\n} finally {\n}\n\nthrow new Exception(\"Ошибка\");"
    },
    try_catch: {
        name: "Try Catch",
        level: 5,
        content: "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Деление на ноль\");\n}\n\ntry (FileReader fr = new FileReader(\"file.txt\")) {\n} catch (IOException e) {\n    e.printStackTrace();\n}"
    },
    multithreading: {
        name: "Многопоточность",
        level: 5,
        content: "Thread t = new Thread(() -> {\n    System.out.println(\"Поток работает\");\n});\nt.start();\n\nСостояния: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED\n\nМетоды: start(), join(), sleep(), interrupt()"
    },
    thread: {
        name: "Потоки",
        level: 5,
        content: "Thread t1 = new Thread(() -> {\n    System.out.println(\"Работает\");\n});\nt1.start();\n\nПриоритеты:\nt.setPriority(Thread.MAX_PRIORITY);\n\nDaemon:\nt.setDaemon(true);"
    },
    synchronization: {
        name: "Синхронизация",
        level: 5,
        content: "public synchronized void increment() {\n    count++;\n}\n\nsynchronized(lock) {\n}\n\nvolatile boolean running = true;\n\nAtomicInteger count = new AtomicInteger(0);\ncount.incrementAndGet();"
    },
    executor: {
        name: "ExecutorService",
        level: 5,
        content: "ExecutorService executor = Executors.newFixedThreadPool(5);\n\nexecutor.submit(() -> {\n    System.out.println(\"Задача\");\n});\n\nexecutor.shutdown();"
    },
    jdbc: {
        name: "JDBC",
        level: 6,
        content: "Connection conn = DriverManager.getConnection(url, user, password);\nStatement stmt = conn.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM users\");\n\nwhile (rs.next()) {\n    int id = rs.getInt(\"id\");\n    String name = rs.getString(\"name\");\n}\n\nconn.close();"
    },
    spring: {
        name: "Spring",
        level: 7,
        content: "Модули:\n- Spring Core: DI и IoC\n- Spring MVC: веб\n- Spring Data: БД\n- Spring Security\n- Spring Boot\n\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}"
    },
    spring_boot: {
        name: "Spring Boot",
        level: 7,
        content: "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    \n    @GetMapping\n    public List<User> getAll() {\n        return userService.findAll();\n    }\n}\n\napplication.properties:\nserver.port=8080"
    },
    spring_data: {
        name: "Spring Data",
        level: 7,
        content: "@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    List<User> findByName(String name);\n    \n    @Query(\"SELECT u FROM User u WHERE u.name LIKE %:name%\")\n    List<User> searchByName(@Param(\"name\") String name);\n}"
    },
    dependency_injection: {
        name: "Dependency Injection",
        level: 7,
        content: "@Service\npublic class UserService {\n    @Autowired\n    private UserRepository repository;\n}\n\n@Configuration\npublic class AppConfig {\n    @Bean\n    public UserService userService() {\n        return new UserService();\n    }\n}"
    }
};

const LEVELS = {
    1: "Уровень 1: Основы",
    2: "Уровень 2: ООП",
    3: "Уровень 3: Коллекции",
    4: "Уровень 4: Stream API",
    5: "Уровень 5: Исключения и многопоточность",
    6: "Уровень 6: Базы данных",
    7: "Уровень 7: Spring"
};

const QUIZ = {
    basics: [
        { q: "Какой метод является точкой входа в Java-программу?", options: ["start()", "main()", "run()", "init()"], correct: 1 },
        { q: "Что означает JVM?", options: ["Java Virtual Machine", "Java Visual Model", "Java Version Manager", "Java Variable Method"], correct: 0 }
    ],
    variables: [
        { q: "Какой тип используется для целых чисел?", options: ["double", "int", "String", "boolean"], correct: 1 },
        { q: "Что означает final для переменной?", options: ["Изменяема", "Константа", "Удалена", "Приватна"], correct: 1 }
    ],
    loops: [
        { q: "Какой цикл выполняется хотя бы один раз?", options: ["for", "while", "do-while", "foreach"], correct: 2 },
        { q: "Что делает break?", options: ["Пропускает итерацию", "Прерывает цикл", "Перезапускает", "Ничего"], correct: 1 }
    ],
    oop: [
        { q: "Сколько столпов у ООП?", options: ["2", "3", "4", "5"], correct: 2 },
        { q: "Что такое наследование?", options: ["Создание объекта", "Перенимание свойств", "Удаление класса", "Копирование"], correct: 1 }
    ],
    collections: [
        { q: "Какая коллекция не допускает дубликаты?", options: ["List", "Set", "Map", "Queue"], correct: 1 },
        { q: "Самая быстрая по доступу реализация List?", options: ["LinkedList", "ArrayList", "Vector", "Stack"], correct: 1 }
    ],
    stream: [
        { q: "Что делает filter()?", options: ["Преобразует", "Отбирает", "Сортирует", "Считает"], correct: 1 },
        { q: "Что делает map()?", options: ["Отбирает", "Преобразует", "Сортирует", "Группирует"], correct: 1 }
    ],
    exceptions: [
        { q: "Какой блок выполняется всегда?", options: ["try", "catch", "finally", "throw"], correct: 2 },
        { q: "Какое исключение unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: 2 }
    ],
    multithreading: [
        { q: "Какой метод запускает поток?", options: ["run()", "start()", "begin()", "exec()"], correct: 1 },
        { q: "Что делает synchronized?", options: ["Ускоряет", "Блокирует доступ", "Удаляет", "Завершает"], correct: 1 }
    ],
    jdbc: [
        { q: "Что такое JDBC?", options: ["Java Database Connectivity", "Java Data Control", "Java Debug Console", "Java Direct Call"], correct: 0 },
        { q: "Какой класс читает результаты?", options: ["Statement", "Connection", "ResultSet", "Driver"], correct: 2 }
    ],
    spring: [
        { q: "Что такое DI?", options: ["Direct Injection", "Dependency Injection", "Data Import", "Debug Interface"], correct: 1 },
        { q: "Какая аннотация создаёт бин?", options: ["@Component", "@Value", "@Config", "@Inject"], correct: 0 }
    ]
};

let state = {
    currentTab: "topics",
    currentView: "list",
    currentTopic: null,
    completed: JSON.parse(localStorage.getItem("completed") || "[]"),
    quizState: null
};

const contentEl = document.getElementById("content");
const titleEl = document.getElementById("header-title");
const backBtn = document.getElementById("back-btn");
const tabs = document.querySelectorAll(".tab");

function isCompleted(topic) {
    return state.completed.includes(topic);
}

function markCompleted(topic) {
    if (!isCompleted(topic)) {
        state.completed.push(topic);
        localStorage.setItem("completed", JSON.stringify(state.completed));
    }
}

function renderTopics() {
    state.currentView = "list";
    titleEl.textContent = "Java Помощник";
    backBtn.classList.add("hidden");

    const grouped = {};
    Object.keys(TOPICS).forEach(key => {
        const level = TOPICS[key].level;
        if (!grouped[level]) grouped[level] = [];
        grouped[level].push(key);
    });

    let html = "";
    Object.keys(grouped).sort().forEach(level => {
        html += `<div class="level-title">${LEVELS[level]}</div>`;
        html += `<div class="topic-grid">`;
        grouped[level].forEach(key => {
            const completed = isCompleted(key);
            html += `
                <div class="topic-card ${completed ? 'completed' : ''}" data-topic="${key}">
                    <div class="topic-name">${TOPICS[key].name}</div>
                    <div class="topic-status">${completed ? 'Пройдено' : 'Не начато'}</div>
                </div>
            `;
        });
        html += `</div>`;
    });

    contentEl.innerHTML = html;

    document.querySelectorAll(".topic-card").forEach(card => {
        card.addEventListener("click", () => openTopic(card.dataset.topic));
    });
}

function openTopic(topicKey) {
    state.currentView = "topic";
    state.currentTopic = topicKey;
    const topic = TOPICS[topicKey];
    const completed = isCompleted(topicKey);

    titleEl.textContent = topic.name;
    backBtn.classList.remove("hidden");

    contentEl.innerHTML = `
        <div class="lesson-content">${topic.content}</div>
        <div class="lesson-actions">
            <button class="btn btn-secondary" id="complete-btn">
                ${completed ? 'Пройдено' : 'Отметить пройденным'}
            </button>
            <button class="btn btn-primary" id="quiz-btn">Тест</button>
        </div>
    `;

    document.getElementById("complete-btn").addEventListener("click", () => {
        markCompleted(topicKey);
        openTopic(topicKey);
        if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred("success");
    });

    document.getElementById("quiz-btn").addEventListener("click", () => {
        if (QUIZ[topicKey]) {
            startQuiz(topicKey);
        } else {
            if (tg) tg.showAlert("Тест для этой темы пока недоступен");
        }
    });
}

function startQuiz(topicKey) {
    state.currentView = "quiz";
    state.quizState = { topic: topicKey, index: 0, correct: 0 };
    titleEl.textContent = "Тест: " + TOPICS[topicKey].name;
    backBtn.classList.remove("hidden");
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const qs = QUIZ[state.quizState.topic];
    const idx = state.quizState.index;

    if (idx >= qs.length) {
        const total = qs.length;
        const correct = state.quizState.correct;
        contentEl.innerHTML = `
            <div class="empty-state">
                <h2>Тест завершён</h2>
                <p>Правильных ответов: ${correct} из ${total}</p>
                <button class="btn btn-primary" id="quiz-done" style="margin-top: 20px;">Вернуться</button>
            </div>
        `;
        document.getElementById("quiz-done").addEventListener("click", renderTopics);
        return;
    }

    const q = qs[idx];
    let html = `<div class="quiz-question">Вопрос ${idx + 1}/${qs.length}<br><br>${q.q}</div>`;
    html += `<div class="quiz-options">`;
    q.options.forEach((opt, i) => {
        html += `<button class="quiz-option" data-index="${i}">${opt}</button>`;
    });
    html += `</div>`;

    contentEl.innerHTML = html;

    document.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
            const chosen = parseInt(btn.dataset.index);
            const isCorrect = chosen === q.correct;

            if (isCorrect) {
                btn.classList.add("correct");
                state.quizState.correct++;
                if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred("success");
            } else {
                btn.classList.add("wrong");
                document.querySelectorAll(".quiz-option")[q.correct].classList.add("correct");
                if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred("error");
            }

            document.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);

            setTimeout(() => {
                state.quizState.index++;
                renderQuizQuestion();
            }, 1200);
        });
    });
}

function renderProgress() {
    state.currentView = "progress";
    titleEl.textContent = "Прогресс";
    backBtn.classList.add("hidden");

    const total = Object.keys(TOPICS).length;
    const done = state.completed.length;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;

    let html = `
        <div class="progress-bar-wrapper">
            <div class="progress-bar-label">
                <span>Пройдено тем</span>
                <span>${done} / ${total}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${percent}%"></div>
            </div>
            <div class="progress-bar-label" style="margin-top: 12px; margin-bottom: 0;">
                <span>Прогресс</span>
                <span>${percent}%</span>
            </div>
        </div>
    `;

    if (done > 0) {
        html += `<div class="level-title">Пройденные темы</div>`;
        state.completed.forEach(key => {
            if (TOPICS[key]) {
                html += `
                    <div class="progress-item" data-topic="${key}">
                        <span>${TOPICS[key].name}</span>
                        <span style="color: var(--hint);">›</span>
                    </div>
                `;
            }
        });
    } else {
        html += `<div class="empty-state">Вы ещё не прошли ни одной темы</div>`;
    }

    contentEl.innerHTML = html;

    document.querySelectorAll(".progress-item").forEach(item => {
        item.addEventListener("click", () => openTopic(item.dataset.topic));
    });
}

function renderQuizTab() {
    state.currentView = "quiz-list";
    titleEl.textContent = "Тесты";
    backBtn.classList.add("hidden");

    const available = Object.keys(QUIZ);
    let html = `<div class="level-title">Доступные тесты</div><div class="topic-grid">`;
    available.forEach(key => {
        html += `
            <div class="topic-card" data-quiz="${key}">
                <div class="topic-name">${TOPICS[key] ? TOPICS[key].name : key}</div>
                <div class="topic-status">Тест</div>
            </div>
        `;
    });
    html += `</div>`;

    contentEl.innerHTML = html;

    document.querySelectorAll("[data-quiz]").forEach(card => {
        card.addEventListener("click", () => startQuiz(card.dataset.quiz));
    });
}

backBtn.addEventListener("click", () => {
    if (state.currentView === "topic" || state.currentView === "quiz") {
        renderTopics();
    } else if (state.currentView === "progress") {
        renderTopics();
    } else if (state.currentView === "quiz-list") {
        renderQuizTab();
    }
});

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        state.currentTab = tab.dataset.tab;

        if (state.currentTab === "topics") renderTopics();
        else if (state.currentTab === "quiz") renderQuizTab();
        else if (state.currentTab === "progress") renderProgress();

        if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
    });
});

renderTopics();
