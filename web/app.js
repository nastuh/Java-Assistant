const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); }

const TRANSLATIONS = {
    ru: {
        home: "Главная", lessons: "Уроки", examples: "Примеры", contacts: "Контакты", profile: "Профиль",
        title: "Java Уроки", subtitle: "Изучай Java шаг за шагом",
        hero_title: "Java — твой путь к большим возможностям",
        hero_desc: "Пошаговые уроки, примеры, практика и видеоуроки для уверенного старта.",
        start_learning: "Начать обучение", total_progress: "Общий прогресс", lessons_done: "уроков пройдено",
        by_order: "По порядку", done: "Пройден", in_progress: "В процессе", not_started: "Не начат",
        completed: "Пройдено", mark_done: "Отметить пройденным", quiz: "Тест", back: "Назад",
        settings: "Настройки", statistics: "Статистика",
        lessons_completed: "Пройдено уроков", quizzes_completed: "Пройдено тестов",
        name: "Имя", theme: "Тема", language: "Язык", reset: "Сбросить прогресс",
        theme_light: "Светлая", theme_dark: "Тёмная", save: "Сохранить", cancel: "Отмена",
        go: "Перейти", questions: "Вопрос",
        quiz_finished: "Тест завершён", correct_answers: "Правильных ответов", return: "Вернуться",
        developer_contacts: "Контакты разработчика", tap_to_open: "Нажми, чтобы открыть",
        code_examples: "Примеры кода", tap_to_view: "Нажми, чтобы посмотреть",
        video_lessons: "Видеоуроки", video_lessons_desc: "Обучающие видео с YouTube по Java",
        help: "Справка", help_desc: "Как пользоваться приложением",
        privacy: "Обработка данных", privacy_desc: "Соглашение об обработке персональных данных",
        open_video: "Открыть видео",
        code_tab: "Примеры", video_tab: "Видео",
    },
    en: {
        home: "Home", lessons: "Lessons", examples: "Examples", contacts: "Contacts", profile: "Profile",
        title: "Java Lessons", subtitle: "Learn Java step by step",
        hero_title: "Java — your path to great opportunities",
        hero_desc: "Step-by-step lessons, examples, practice and video tutorials.",
        start_learning: "Start learning", total_progress: "Total progress", lessons_done: "lessons completed",
        by_order: "By order", done: "Completed", in_progress: "In progress", not_started: "Not started",
        completed: "Completed", mark_done: "Mark completed", quiz: "Quiz", back: "Back",
        settings: "Settings", statistics: "Statistics",
        lessons_completed: "Lessons completed", quizzes_completed: "Quizzes completed",
        name: "Name", theme: "Theme", language: "Language", reset: "Reset progress",
        theme_light: "Light", theme_dark: "Dark", save: "Save", cancel: "Cancel",
        go: "Go", questions: "Question",
        quiz_finished: "Quiz finished", correct_answers: "Correct answers", return: "Return",
        developer_contacts: "Developer contacts", tap_to_open: "Tap to open",
        code_examples: "Code examples", tap_to_view: "Tap to view",
        video_lessons: "Video tutorials", video_lessons_desc: "Educational videos on YouTube about Java",
        help: "Help", help_desc: "How to use the app",
        privacy: "Data processing", privacy_desc: "Personal data processing agreement",
        open_video: "Open video",
        code_tab: "Examples", video_tab: "Video",
    }
};

const STICKERS = ["☕", "🚀", "💻", "📚", "⚡", "🎯", "🔥", "🧠", "🌟", "🏆"];

const CONTACTS = [
    { name: "GitHub", url: "https://github.com/nastuh" },
    { name: "Instagram", url: "https://www.instagram.com/di9star_q" },
    { name: "TikTok", url: "https://www.tiktok.com/@di9star" },
    { name: "YouTube", url: "https://www.youtube.com/@yelleye" },
    { name: "Steam", url: "https://steamcommunity.com/profiles/76561199707319124" },
    { name: "TryHackMe", url: "https://tryhackme.com/p/nastuh" },
    { name: "Telegram", url: "https://t.me/di9star" },
    { name: "Telegram Channel", url: "https://t.me/buenoodle" },
];

const CODE_EXAMPLES = [
    { id: "hello", title: { ru: "Hello World", en: "Hello World" }, desc: { ru: "Первая программа", en: "First program" }, code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' },
    { id: "variables", title: { ru: "Переменные", en: "Variables" }, desc: { ru: "Объявление переменных", en: "Declaring variables" }, code: 'int age = 25;\nString name = "Anna";\ndouble price = 99.99;\nboolean isReady = true;\n\nSystem.out.println(age);\nSystem.out.println(name);' },
    { id: "if_else", title: { ru: "Условия", en: "Conditions" }, desc: { ru: "if / else", en: "if / else" }, code: 'int score = 85;\n\nif (score >= 90) {\n    System.out.println("A");\n} else if (score >= 80) {\n    System.out.println("B");\n} else {\n    System.out.println("C");\n}' },
    { id: "loops", title: { ru: "Циклы", en: "Loops" }, desc: { ru: "for и while", en: "for and while" }, code: 'for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\nint j = 0;\nwhile (j < 5) {\n    System.out.println(j);\n    j++;\n}' },
    { id: "arrays", title: { ru: "Массивы", en: "Arrays" }, desc: { ru: "Одномерные массивы", en: "One-dimensional arrays" }, code: 'int[] numbers = {1, 2, 3, 4, 5};\n\nfor (int n : numbers) {\n    System.out.println(n);\n}' },
    { id: "class", title: { ru: "Класс и объект", en: "Class and object" }, desc: { ru: "Создание класса", en: "Creating a class" }, code: 'public class Car {\n    String brand;\n    int year;\n    \n    public Car(String brand, int year) {\n        this.brand = brand;\n        this.year = year;\n    }\n    \n    public void drive() {\n        System.out.println(brand + " is driving");\n    }\n}\n\nCar myCar = new Car("Tesla", 2023);\nmyCar.drive();' },
    { id: "inheritance", title: { ru: "Наследование", en: "Inheritance" }, desc: { ru: "extends", en: "extends" }, code: 'public class Animal {\n    void eat() {\n        System.out.println("Eating");\n    }\n}\n\npublic class Dog extends Animal {\n    void bark() {\n        System.out.println("Woof");\n    }\n}\n\nDog dog = new Dog();\ndog.eat();\ndog.bark();' },
    { id: "list", title: { ru: "ArrayList", en: "ArrayList" }, desc: { ru: "Список", en: "List" }, code: 'import java.util.ArrayList;\n\nArrayList<String> names = new ArrayList<>();\nnames.add("Anna");\nnames.add("Peter");\n\nfor (String name : names) {\n    System.out.println(name);\n}' },
    { id: "map", title: { ru: "HashMap", en: "HashMap" }, desc: { ru: "Словарь", en: "Map" }, code: 'import java.util.HashMap;\n\nHashMap<String, Integer> ages = new HashMap<>();\nages.put("Anna", 25);\nages.put("Peter", 30);\n\nSystem.out.println(ages.get("Anna"));' },
    { id: "stream", title: { ru: "Stream API", en: "Stream API" }, desc: { ru: "filter и map", en: "filter and map" }, code: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n\nList<Integer> result = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * 2)\n    .collect(Collectors.toList());\n\nSystem.out.println(result);' },
    { id: "try_catch", title: { ru: "Try Catch", en: "Try Catch" }, desc: { ru: "Обработка ошибок", en: "Error handling" }, code: 'try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Cannot divide by zero");\n} finally {\n    System.out.println("Done");\n}' },
    { id: "thread", title: { ru: "Потоки", en: "Threads" }, desc: { ru: "Создание потока", en: "Creating a thread" }, code: 'Thread thread = new Thread(() -> {\n    for (int i = 0; i < 5; i++) {\n        System.out.println(i);\n    }\n});\nthread.start();' },
];

const VIDEOS = [
    { id: "v1", title: { ru: "Java с нуля — полный курс", en: "Java from scratch — full course" }, desc: { ru: "Основы Java для начинающих", en: "Java basics for beginners" }, url: "https://www.youtube.com/results?search_query=java+с+нуля+полный+курс" },
    { id: "v2", title: { ru: "ООП в Java", en: "OOP in Java" }, desc: { ru: "Объектно-ориентированное программирование", en: "Object-oriented programming" }, url: "https://www.youtube.com/results?search_query=ООП+java" },
    { id: "v3", title: { ru: "Коллекции Java", en: "Java Collections" }, desc: { ru: "List, Set, Map и их реализация", en: "List, Set, Map and their implementations" }, url: "https://www.youtube.com/results?search_query=коллекции+java" },
    { id: "v4", title: { ru: "Stream API", en: "Stream API" }, desc: { ru: "Функциональная обработка коллекций", en: "Functional collection processing" }, url: "https://www.youtube.com/results?search_query=stream+api+java" },
    { id: "v5", title: { ru: "Многопоточность", en: "Multithreading" }, desc: { ru: "Thread, Runnable, synchronized", en: "Thread, Runnable, synchronized" }, url: "https://www.youtube.com/results?search_query=многопоточность+java" },
    { id: "v6", title: { ru: "Spring Framework", en: "Spring Framework" }, desc: { ru: "Spring Core, Spring Boot", en: "Spring Core, Spring Boot" }, url: "https://www.youtube.com/results?search_query=spring+framework+java" },
    { id: "v7", title: { ru: "JDBC и базы данных", en: "JDBC and databases" }, desc: { ru: "Работа с БД из Java", en: "Database access from Java" }, url: "https://www.youtube.com/results?search_query=jdbc+java" },
    { id: "v8", title: { ru: "Собеседование по Java", en: "Java interview" }, desc: { ru: "Вопросы и ответы", en: "Questions and answers" }, url: "https://www.youtube.com/results?search_query=собеседование+java" },
];

const HELP_TEXT = {
    ru: `Справка

Как пользоваться приложением:

1. Главная
Здесь показан общий прогресс и список всех уроков. Нажми «Начать обучение», чтобы перейти к следующему непройденному уроку.

2. Уроки
Все уроки разбиты по уровням: Основы, ООП, Коллекции, Stream API, Исключения и потоки, Базы данных, Spring. Выбери нужный уровень и урок.

3. Примеры
Готовые примеры кода: Hello World, переменные, условия, циклы, массивы, классы, наследование, коллекции, Stream API, потоки, обработка ошибок.

4. Видео
Подборка обучающих видео по Java на YouTube: полный курс для начинающих, ООП, коллекции, Stream API, многопоточность, Spring, JDBC, вопросы с собеседований.

5. Контакты
Все контакты разработчика: GitHub, Instagram, TikTok, YouTube, Steam, TryHackMe, Telegram.

6. Профиль
Здесь можно:
- Сменить аватар (нажми на круг)
- Сменить язык (русский / английский)
- Сменить тему (светлая / тёмная)
- Сбросить прогресс

В боте доступны:
- Вопросы и ответы по Java
- Контакты
- Настройки
- Команды /start, /menu, /help, /faq

Если что-то не работает — напиши разработчику в Telegram: @di9star`,
    en: `Help

How to use the app:

1. Home
Shows your overall progress and a list of all lessons. Tap "Start learning" to jump to the next unfinished lesson.

2. Lessons
All lessons are grouped by levels: Basics, OOP, Collections, Stream API, Exceptions and threads, Databases, Spring.

3. Examples
Ready-to-use code examples: Hello World, variables, conditions, loops, arrays, classes, inheritance, collections, Stream API, threads, error handling.

4. Video
Curated YouTube videos on Java: full course for beginners, OOP, collections, Stream API, multithreading, Spring, JDBC, interview questions.

5. Contacts
All developer contacts: GitHub, Instagram, TikTok, YouTube, Steam, TryHackMe, Telegram.

6. Profile
Here you can:
- Change avatar (tap the circle)
- Change language (Russian / English)
- Change theme (light / dark)
- Reset progress

In the bot you can:
- Ask questions about Java
- Get contacts
- Change settings
- Use commands /start, /menu, /help, /faq

If something doesn't work — write to the developer on Telegram: @di9star`
};

const PRIVACY_TEXT = {
    ru: `Соглашение об обработке персональных данных

1. Общие положения
Настоящее соглашение описывает, какие данные собирает приложение Java Assistant (Telegram Mini App и бот) и как они используются.

2. Какие данные собираются
При использовании приложения могут собираться:
- Ваш Telegram user ID
- Ваше имя и username из Telegram
- Выбранный язык интерфейса
- Выбранный уровень подготовки
- Пройденные уроки и результаты тестов
- История вопросов, заданных боту

3. Как используются данные
Все данные используются исключительно для:
- Сохранения вашего прогресса в обучении
- Отображения статистики
- Улучшения работы приложения
- Ответов на ваши вопросы

4. Где хранятся данные
Данные хранятся в локальной базе данных SQLite на сервере разработчика. Прогресс в Mini App дополнительно сохраняется в localStorage вашего устройства.

5. Передача третьим лицам
Ваши данные не передаются третьим лицам. Мы не продаём и не обмениваем персональные данные.

6. Удаление данных
Вы можете сбросить прогресс в любой момент через раздел «Профиль» → «Сбросить прогресс». Для удаления всех данных напишите разработчику: @di9star.

7. Согласие
Используя приложение, вы соглашаетесь с обработкой указанных данных в описанных выше целях.

8. Контакты
По всем вопросам: @di9star`,
    en: `Personal data processing agreement

1. General
This agreement describes what data the Java Assistant app (Telegram Mini App and bot) collects and how it is used.

2. What data is collected
When using the app, the following may be collected:
- Your Telegram user ID
- Your first name and username from Telegram
- Selected interface language
- Selected skill level
- Completed lessons and quiz results
- History of questions asked to the bot

3. How data is used
All data is used solely for:
- Saving your learning progress
- Displaying statistics
- Improving the app
- Answering your questions

4. Where data is stored
Data is stored in a local SQLite database on the developer's server. Progress in the Mini App is additionally saved in your device's localStorage.

5. Third parties
Your data is not shared with third parties. We do not sell or exchange personal data.

6. Data deletion
You can reset progress at any time via "Profile" → "Reset progress". To delete all data, contact the developer: @di9star.

7. Consent
By using the app, you agree to the processing of the above data for the purposes described.

8. Contacts
For any questions: @di9star`
};

const TOPICS = {
    basics: { name: { ru: "Введение в Java", en: "Introduction to Java" }, desc: { ru: "Что такое Java, где применяется", en: "What is Java, where it is used" }, level: 1, icon: "▤", content: { ru: "Java — объектно-ориентированный язык программирования, созданный в 1995 году компанией Sun Microsystems.\n\nПринцип «Write Once, Run Anywhere» — напиши один раз, запускай где угодно.\n\nГде применяется:\n- Веб-приложения (Spring)\n- Android-приложения\n- Десктопные программы\n- Корпоративные системы\n- Big Data\n- Игры\n\nПервая программа:\n\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}", en: "Java is an object-oriented programming language created in 1995 by Sun Microsystems.\n\nUsed for web, Android, desktop, enterprise, Big Data, games.\n\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}" } },
    variables: { name: { ru: "Переменные и типы данных", en: "Variables and data types" }, desc: { ru: "Типы данных, объявление", en: "Types, declaration" }, level: 1, icon: "</>", content: { ru: "Переменная — именованная ячейка памяти.\n\nint age = 25;\nString name = \"Anna\";\ndouble price = 99.99;\nboolean isReady = true;\n\nПримитивные типы: byte, short, int, long, float, double, char, boolean.\nСсылочные: String, массивы, классы.", en: "int age = 25;\nString name = \"Anna\";\ndouble price = 99.99;" } },
    if_else: { name: { ru: "Условные операторы", en: "Conditional operators" }, desc: { ru: "if, else, switch", en: "if, else, switch" }, level: 1, icon: "◇", content: { ru: "if (условие) {\n} else if (условие2) {\n} else {\n}\n\nint score = 85;\nif (score >= 90) {\n    System.out.println(\"A\");\n} else if (score >= 80) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"C\");\n}", en: "if (condition) {\n} else {\n}" } },
    loops: { name: { ru: "Циклы", en: "Loops" }, desc: { ru: "for, while, do-while", en: "for, while, do-while" }, level: 1, icon: "↻", content: { ru: "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\nwhile (i < 5) {\n    i++;\n}\n\nfor-each:\nfor (String name : names) {\n}", en: "for (int i = 0; i < 5; i++) {\n}" } },
    arrays: { name: { ru: "Массивы", en: "Arrays" }, desc: { ru: "Одномерные и многомерные", en: "One and multi-dimensional" }, level: 1, icon: "≡", content: { ru: "int[] numbers = {1, 2, 3, 4, 5};\nString[] names = {\"Anna\", \"Peter\"};\n\nnumbers[0]\nnumbers.length\n\nfor (int n : numbers) {\n    System.out.println(n);\n}", en: "int[] numbers = {1, 2, 3};" } },
    methods: { name: { ru: "Методы", en: "Methods" }, desc: { ru: "Объявление и вызов", en: "Declaration and call" }, level: 1, icon: "ƒ", content: { ru: "public int add(int a, int b) {\n    return a + b;\n}\n\nint result = add(5, 3);", en: "public int add(int a, int b) {\n    return a + b;\n}" } },
    oop: { name: { ru: "ООП", en: "OOP" }, desc: { ru: "4 столпа", en: "4 pillars" }, level: 2, icon: "◯", content: { ru: "1. Инкапсуляция\n2. Наследование\n3. Полиморфизм\n4. Абстракция", en: "1. Encapsulation\n2. Inheritance\n3. Polymorphism\n4. Abstraction" } },
    classes: { name: { ru: "Классы и объекты", en: "Classes and objects" }, desc: { ru: "Создание классов", en: "Creating classes" }, level: 2, icon: "□", content: { ru: "public class Car {\n    String brand;\n    \n    public Car(String brand) {\n        this.brand = brand;\n    }\n}\n\nCar myCar = new Car(\"Tesla\");", en: "public class Car {\n    String brand;\n}" } },
    inheritance: { name: { ru: "Наследование", en: "Inheritance" }, desc: { ru: "extends, super", en: "extends, super" }, level: 2, icon: "↑", content: { ru: "public class Dog extends Animal {\n    @Override\n    public void eat() { }\n}", en: "public class Dog extends Animal { }" } },
    polymorphism: { name: { ru: "Полиморфизм", en: "Polymorphism" }, desc: { ru: "Перегрузка, переопределение", en: "Overloading, overriding" }, level: 2, icon: "◇", content: { ru: "@Override\npublic void makeSound() {\n    System.out.println(\"Гав\");\n}", en: "@Override\npublic void makeSound() { }" } },
    encapsulation: { name: { ru: "Инкапсуляция", en: "Encapsulation" }, desc: { ru: "private, getters", en: "private, getters" }, level: 2, icon: "▣", content: { ru: "private String name;\npublic String getName() { return name; }", en: "private String name;" } },
    abstraction: { name: { ru: "Абстракция", en: "Abstraction" }, desc: { ru: "abstract классы", en: "abstract classes" }, level: 2, icon: "◇", content: { ru: "public abstract class Shape {\n    public abstract double getArea();\n}", en: "public abstract class Shape { }" } },
    interfaces: { name: { ru: "Интерфейсы", en: "Interfaces" }, desc: { ru: "implements", en: "implements" }, level: 2, icon: "◇", content: { ru: "public interface Drawable {\n    void draw();\n}", en: "public interface Drawable {\n    void draw();\n}" } },
    collections: { name: { ru: "Коллекции", en: "Collections" }, desc: { ru: "List, Set, Map", en: "List, Set, Map" }, level: 3, icon: "▤", content: { ru: "List — упорядоченный\nSet — без дубликатов\nMap — ключ-значение", en: "List, Set, Map" } },
    list: { name: { ru: "List и ArrayList", en: "List and ArrayList" }, desc: { ru: "Упорядоченная коллекция", en: "Ordered collection" }, level: 3, icon: "▤", content: { ru: "List<String> names = new ArrayList<>();\nnames.add(\"Anna\");", en: "List<String> names = new ArrayList<>();" } },
    set: { name: { ru: "Set", en: "Set" }, desc: { ru: "Без дубликатов", en: "No duplicates" }, level: 3, icon: "◯", content: { ru: "Set<String> cities = new HashSet<>();", en: "Set<String> cities = new HashSet<>();" } },
    map: { name: { ru: "Map и HashMap", en: "Map and HashMap" }, desc: { ru: "Ключ-значение", en: "Key-value" }, level: 3, icon: "▦", content: { ru: "Map<String, Integer> scores = new HashMap<>();", en: "Map<String, Integer> scores = new HashMap<>();" } },
    stream: { name: { ru: "Stream API", en: "Stream API" }, desc: { ru: "Функциональная обработка", en: "Functional processing" }, level: 4, icon: "→", content: { ru: "numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());", en: "numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());" } },
    exceptions: { name: { ru: "Исключения", en: "Exceptions" }, desc: { ru: "try, catch, finally", en: "try, catch, finally" }, level: 5, icon: "!", content: { ru: "try {\n} catch (Exception e) {\n} finally {\n}", en: "try {\n} catch (Exception e) {\n}" } },
    multithreading: { name: { ru: "Многопоточность", en: "Multithreading" }, desc: { ru: "Thread, Runnable", en: "Thread, Runnable" }, level: 5, icon: "∥", content: { ru: "Thread t = new Thread(() -> { });\nt.start();", en: "Thread t = new Thread(() -> { });" } },
    jdbc: { name: { ru: "JDBC", en: "JDBC" }, desc: { ru: "Работа с БД", en: "Database access" }, level: 6, icon: "▤", content: { ru: "Connection conn = DriverManager.getConnection(url, user, password);", en: "Connection conn = DriverManager.getConnection(url, user, password);" } },
    spring: { name: { ru: "Spring", en: "Spring" }, desc: { ru: "Фреймворк", en: "Framework" }, level: 7, icon: "◇", content: { ru: "@SpringBootApplication\npublic class Application { }", en: "@SpringBootApplication" } },
    spring_boot: { name: { ru: "Spring Boot", en: "Spring Boot" }, desc: { ru: "Быстрый старт", en: "Rapid start" }, level: 7, icon: "◇", content: { ru: "@RestController", en: "@RestController" } },
    dependency_injection: { name: { ru: "Dependency Injection", en: "Dependency Injection" }, desc: { ru: "Внедрение зависимостей", en: "Injecting dependencies" }, level: 7, icon: "◇", content: { ru: "@Autowired\nprivate UserRepository repository;", en: "@Autowired" } },
};

const LEVELS = {
    1: { ru: "Основы", en: "Basics" },
    2: { ru: "ООП", en: "OOP" },
    3: { ru: "Коллекции", en: "Collections" },
    4: { ru: "Stream API", en: "Stream API" },
    5: { ru: "Исключения и потоки", en: "Exceptions and threads" },
    6: { ru: "Базы данных", en: "Databases" },
    7: { ru: "Spring", en: "Spring" }
};

const QUIZ = {
    basics: [
        { q: { ru: "Какой метод — точка входа?", en: "Which method is the entry point?" }, options: ["start()", "main()", "run()", "init()"], correct: 1 },
        { q: { ru: "Что означает JVM?", en: "What does JVM stand for?" }, options: ["Java Virtual Machine", "Java Visual Model", "Java Version Manager", "Java Variable Method"], correct: 0 },
        { q: { ru: "Какой файл содержит байт-код?", en: "Which file contains bytecode?" }, options: [".java", ".class", ".jar", ".exe"], correct: 1 },
        { q: { ru: "Что такое JRE?", en: "What is JRE?" }, options: ["Среда разработки", "Среда выполнения", "Компилятор", "Отладчик"], correct: 1 },
        { q: { ru: "Какая компания создала Java?", en: "Which company created Java?" }, options: ["Microsoft", "Apple", "Sun Microsystems", "Google"], correct: 2 }
    ],
    variables: [
        { q: { ru: "Тип для целых чисел?", en: "Type for integers?" }, options: ["double", "int", "String", "boolean"], correct: 1 },
        { q: { ru: "Тип для текста?", en: "Type for text?" }, options: ["int", "double", "String", "char"], correct: 2 },
        { q: { ru: "Тип для true/false?", en: "Type for true/false?" }, options: ["boolean", "int", "char", "String"], correct: 0 },
        { q: { ru: "Что означает final?", en: "What does final mean?" }, options: ["Изменяема", "Константа", "Удалена", "Приватна"], correct: 1 },
        { q: { ru: "Тип для одного символа?", en: "Type for a single character?" }, options: ["String", "char", "int", "boolean"], correct: 1 }
    ],
    loops: [
        { q: { ru: "Какой цикл выполняется хотя бы раз?", en: "Which loop runs at least once?" }, options: ["for", "while", "do-while", "foreach"], correct: 2 },
        { q: { ru: "Что делает break?", en: "What does break do?" }, options: ["Пропускает", "Прерывает", "Перезапускает", "Ничего"], correct: 1 },
        { q: { ru: "Что делает continue?", en: "What does continue do?" }, options: ["Прерывает", "Пропускает итерацию", "Перезапускает", "Ничего"], correct: 1 },
        { q: { ru: "Сколько раз for (int i=0; i<5; i++)?", en: "How many times for (int i=0; i<5; i++)?" }, options: ["4", "5", "6", "бесконечно"], correct: 1 },
        { q: { ru: "Что такое for-each?", en: "What is for-each?" }, options: ["По индексам", "По элементам", "Условие", "Метод"], correct: 1 }
    ],
    oop: [
        { q: { ru: "Сколько столпов у ООП?", en: "How many pillars does OOP have?" }, options: ["2", "3", "4", "5"], correct: 2 },
        { q: { ru: "Что такое класс?", en: "What is a class?" }, options: ["Объект", "Шаблон", "Метод", "Переменная"], correct: 1 },
        { q: { ru: "Что такое объект?", en: "What is an object?" }, options: ["Класс", "Экземпляр", "Метод", "Поле"], correct: 1 },
        { q: { ru: "Ключ для наследования?", en: "Keyword for inheritance?" }, options: ["implements", "extends", "inherits", "super"], correct: 1 },
        { q: { ru: "Что такое полиморфизм?", en: "What is polymorphism?" }, options: ["Один интерфейс — много реализаций", "Скрытие данных", "Наследование", "Создание"], correct: 0 }
    ],
    collections: [
        { q: { ru: "Без дубликатов?", en: "Without duplicates?" }, options: ["List", "Set", "Map", "Queue"], correct: 1 },
        { q: { ru: "Самая быстрая List?", en: "Fastest List?" }, options: ["LinkedList", "ArrayList", "Vector", "Stack"], correct: 1 },
        { q: { ru: "Что такое Map?", en: "What is Map?" }, options: ["Список", "Множество", "Ключ-значение", "Очередь"], correct: 2 },
        { q: { ru: "Быстрая Map?", en: "Fastest Map?" }, options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"], correct: 1 },
        { q: { ru: "Что такое итератор?", en: "What is an iterator?" }, options: ["Объект для перебора", "Класс", "Метод", "Интерфейс"], correct: 0 }
    ],
    stream: [
        { q: { ru: "Что делает filter()?", en: "What does filter() do?" }, options: ["Преобразует", "Отбирает", "Сортирует", "Считает"], correct: 1 },
        { q: { ru: "Что делает map()?", en: "What does map() do?" }, options: ["Отбирает", "Преобразует", "Сортирует", "Группирует"], correct: 1 },
        { q: { ru: "Что делает collect()?", en: "What does collect() do?" }, options: ["Собирает", "Фильтрует", "Сортирует", "Преобразует"], correct: 0 },
        { q: { ru: "Что делает reduce()?", en: "What does reduce() do?" }, options: ["Удаляет", "Свёртка", "Преобразует", "Отбирает"], correct: 1 },
        { q: { ru: "Что такое лямбда?", en: "What is a lambda?" }, options: ["Анонимная функция", "Класс", "Метод", "Переменная"], correct: 0 }
    ],
    exceptions: [
        { q: { ru: "Какой блок всегда?", en: "Which block always?" }, options: ["try", "catch", "finally", "throw"], correct: 2 },
        { q: { ru: "Unchecked?", en: "Unchecked?" }, options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: 2 },
        { q: { ru: "Что делает throw?", en: "What does throw do?" }, options: ["Ловит", "Выбрасывает", "Игнорирует", "Обрабатывает"], correct: 1 },
        { q: { ru: "Что делает catch?", en: "What does catch do?" }, options: ["Выбрасывает", "Ловит", "Игнорирует", "Пропускает"], correct: 1 },
        { q: { ru: "Checked исключение?", en: "Checked exception?" }, options: ["Проверяется компилятором", "Не проверяется", "Ошибка", "Предупреждение"], correct: 0 }
    ],
    multithreading: [
        { q: { ru: "Какой метод запускает поток?", en: "Which method starts a thread?" }, options: ["run()", "start()", "begin()", "exec()"], correct: 1 },
        { q: { ru: "Что делает synchronized?", en: "What does synchronized do?" }, options: ["Ускоряет", "Блокирует", "Удаляет", "Завершает"], correct: 1 },
        { q: { ru: "Сколько потоков на одном ядре?", en: "Threads on one core?" }, options: ["1", "2", "4", "много"], correct: 0 },
        { q: { ru: "Что такое deadlock?", en: "What is a deadlock?" }, options: ["Взаимная блокировка", "Завершение", "Ошибка", "Исключение"], correct: 0 },
        { q: { ru: "Что делает join()?", en: "What does join() do?" }, options: ["Запускает", "Ждёт", "Прерывает", "Пауза"], correct: 1 }
    ],
    spring: [
        { q: { ru: "Что такое DI?", en: "What is DI?" }, options: ["Direct Injection", "Dependency Injection", "Data Import", "Debug Interface"], correct: 1 },
        { q: { ru: "Аннотация бина?", en: "Bean annotation?" }, options: ["@Component", "@Value", "@Config", "@Inject"], correct: 0 },
        { q: { ru: "Что такое Spring Boot?", en: "What is Spring Boot?" }, options: ["Фреймворк", "Надстройка", "База данных", "Язык"], correct: 1 },
        { q: { ru: "REST контроллер?", en: "REST controller?" }, options: ["@Controller", "@RestController", "@Service", "@Component"], correct: 1 },
        { q: { ru: "Что делает @Autowired?", en: "What does @Autowired do?" }, options: ["Внедряет", "Создаёт", "Удаляет", "Ничего"], correct: 0 }
    ]
};

let state = {
    currentTab: "home",
    currentView: "home",
    currentTopic: null,
    examplesTab: "code",
    completed: JSON.parse(localStorage.getItem("completed") || "[]"),
    inProgress: JSON.parse(localStorage.getItem("inProgress") || "[]"),
    quizState: null,
    quizPassed: JSON.parse(localStorage.getItem("quizPassed") || "[]"),
    theme: localStorage.getItem("theme") || "light",
    language: localStorage.getItem("language") || "ru",
    userSticker: localStorage.getItem("userSticker") || "☕",
    userName: localStorage.getItem("userName") || ""
};

const contentEl = document.getElementById("content");
const titleEl = document.getElementById("header-title");
const subtitleEl = document.getElementById("header-subtitle");
const backBtn = document.getElementById("back-btn");

if (state.theme === "dark") document.body.classList.add("dark");

function T(key) { return TRANSLATIONS[state.language][key] || key; }
function L(obj) {
    if (obj && typeof obj === "object") return obj[state.language] || obj.ru || obj.en || "";
    return obj;
}

function saveState() {
    localStorage.setItem("completed", JSON.stringify(state.completed));
    localStorage.setItem("inProgress", JSON.stringify(state.inProgress));
    localStorage.setItem("quizPassed", JSON.stringify(state.quizPassed));
}

function isCompleted(t) { return state.completed.includes(t); }
function isInProgress(t) { return state.inProgress.includes(t); }

function markCompleted(topic) {
    if (!state.completed.includes(topic)) state.completed.push(topic);
    state.inProgress = state.inProgress.filter(t => t !== topic);
    saveState();
}

function markInProgress(topic) {
    if (!state.completed.includes(topic) && !state.inProgress.includes(topic)) {
        state.inProgress.push(topic);
        saveState();
    }
}

function haptic() { if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged(); }

function getProgressPercent() {
    const total = Object.keys(TOPICS).length;
    return total > 0 ? Math.round((state.completed.length / total) * 100) : 0;
}

function updateTabs() {
    const tabs = document.querySelectorAll(".tab");
    const keys = ["home", "lessons", "examples", "contacts", "profile"];
    tabs.forEach((tab, i) => {
        const label = tab.querySelector(".tab-label");
        if (label) label.textContent = T(keys[i]);
    });
}

function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2000);
}

function renderHome() {
    state.currentView = "home";
    titleEl.textContent = T("title");
    subtitleEl.textContent = T("subtitle");
    backBtn.classList.add("hidden");

    const total = Object.keys(TOPICS).length;
    const done = state.completed.length;
    const percent = getProgressPercent();
    const circumference = 2 * Math.PI * 26;
    const offset = circumference - (percent / 100) * circumference;

    let html = `
        <div class="hero">
            <h2>${T("hero_title")}</h2>
            <p>${T("hero_desc")}</p>
            <button class="hero-btn" id="start-learning-btn">${T("start_learning")} →</button>
        </div>
        <div class="progress-card">
            <div class="circular-progress">
                <svg>
                    <circle class="bg-circle" cx="31" cy="31" r="26"></circle>
                    <circle class="fg-circle" cx="31" cy="31" r="26" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
                </svg>
                <div class="percent-text">${percent}%</div>
            </div>
            <div class="progress-info">
                <h3>${T("total_progress")}</h3>
                <p>${done} / ${total} ${T("lessons_done")}</p>
                <div class="progress-bar-mini"><div class="progress-bar-mini-fill" style="width: ${percent}%"></div></div>
            </div>
        </div>
        <div class="section-title">${T("lessons")}</div>
    `;

    let num = 1;
    Object.keys(TOPICS).forEach(key => {
        const topic = TOPICS[key];
        let statusClass, statusText, numClass = "";
        if (isCompleted(key)) { statusClass = "status-done"; statusText = "✓ " + T("done"); numClass = "done"; }
        else if (isInProgress(key)) { statusClass = "status-progress"; statusText = "◐ " + T("in_progress"); }
        else { statusClass = "status-not-started"; statusText = "→ " + T("not_started"); }
        html += `
            <div class="topic-list-item" data-topic="${key}">
                <div class="topic-number ${numClass}">${num}</div>
                <div class="topic-info"><h4>${L(topic.name)}</h4><p>${L(topic.desc)}</p></div>
                <div class="topic-status ${statusClass}">${statusText}</div>
            </div>
        `;
        num++;
    });

    contentEl.innerHTML = html;

    document.getElementById("start-learning-btn").addEventListener("click", () => {
        const next = findNextTopic();
        if (next) openTopic(next);
        else openTopic(Object.keys(TOPICS)[0]);
    });

    document.querySelectorAll(".topic-list-item").forEach(item => {
        item.addEventListener("click", () => openTopic(item.dataset.topic));
    });
}

function findNextTopic() {
    for (const key of Object.keys(TOPICS)) if (!isCompleted(key)) return key;
    return null;
}

function renderTopics() {
    state.currentView = "topics";
    titleEl.textContent = T("title");
    subtitleEl.textContent = T("lessons");
    backBtn.classList.add("hidden");

    const grouped = {};
    Object.keys(TOPICS).forEach(key => {
        const level = TOPICS[key].level;
        if (!grouped[level]) grouped[level] = [];
        grouped[level].push(key);
    });

    let html = "";
    Object.keys(grouped).sort().forEach(level => {
        html += `<div class="section-title">${L(LEVELS[level])}</div><div class="grid-2">`;
        grouped[level].forEach(key => {
            const topic = TOPICS[key];
            const completed = isCompleted(key);
            html += `
                <div class="menu-card" data-topic="${key}">
                    <div class="icon">${topic.icon}</div>
                    <h4>${L(topic.name)}</h4>
                    <p>${L(topic.desc)}</p>
                    <button class="menu-card-btn">${completed ? "✓ " + T("completed") : T("go") + " →"}</button>
                </div>
            `;
        });
        html += `</div>`;
    });

    contentEl.innerHTML = html;
    document.querySelectorAll("[data-topic]").forEach(card => {
        card.addEventListener("click", () => openTopic(card.dataset.topic));
    });
}

function openTopic(topicKey) {
    state.currentView = "topic";
    state.currentTopic = topicKey;
    const topic = TOPICS[topicKey];
    const completed = isCompleted(topicKey);
    if (!completed) markInProgress(topicKey);

    titleEl.textContent = L(topic.name);
    subtitleEl.textContent = L(LEVELS[topic.level]);
    backBtn.classList.remove("hidden");
    backBtn.onclick = () => renderTopics();

    contentEl.innerHTML = `
        <div class="lesson-content">${L(topic.content)}</div>
        <div class="lesson-actions">
            <button class="btn btn-secondary" id="complete-btn">${completed ? "✓ " + T("completed") : T("mark_done")}</button>
            <button class="btn btn-primary" id="quiz-btn">${T("quiz")}</button>
        </div>
    `;

    document.getElementById("complete-btn").addEventListener("click", () => {
        markCompleted(topicKey);
        openTopic(topicKey);
    });
    document.getElementById("quiz-btn").addEventListener("click", () => {
        if (QUIZ[topicKey]) startQuiz(topicKey);
        else if (tg) tg.showAlert(state.language === "en" ? "Quiz not available" : "Тест для этой темы пока недоступен");
    });
}

function startQuiz(topicKey) {
    state.currentView = "quiz";
    state.quizState = { topic: topicKey, index: 0, correct: 0 };
    titleEl.textContent = T("quiz");
    subtitleEl.textContent = L(TOPICS[topicKey].name);
    backBtn.classList.remove("hidden");
    backBtn.onclick = () => openTopic(topicKey);
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const qs = QUIZ[state.quizState.topic];
    const idx = state.quizState.index;

    if (idx >= qs.length) {
        const total = qs.length;
        const correct = state.quizState.correct;
        if (correct === total && !state.quizPassed.includes(state.quizState.topic)) {
            state.quizPassed.push(state.quizState.topic);
            saveState();
        }
        contentEl.innerHTML = `
            <div class="quiz-result">
                <h2>${T("quiz_finished")}</h2>
                <p>${T("correct_answers")}: ${correct} / ${total}</p>
                <button class="btn btn-primary" id="quiz-done" style="width:100%">${T("return")}</button>
            </div>
        `;
        document.getElementById("quiz-done").addEventListener("click", renderHome);
        return;
    }

    const q = qs[idx];
    let html = `<div class="quiz-question">${T("questions")} ${idx + 1}/${qs.length}<br><br>${L(q.q)}</div><div class="quiz-options">`;
    q.options.forEach((opt, i) => { html += `<button class="quiz-option" data-index="${i}">${opt}</button>`; });
    html += `</div>`;
    contentEl.innerHTML = html;

    document.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
            const chosen = parseInt(btn.dataset.index);
            if (chosen === q.correct) { btn.classList.add("correct"); state.quizState.correct++; }
            else { btn.classList.add("wrong"); document.querySelectorAll(".quiz-option")[q.correct].classList.add("correct"); }
            document.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);
            setTimeout(() => { state.quizState.index++; renderQuizQuestion(); }, 1000);
        });
    });
}

function renderExamples() {
    state.currentView = "examples";
    titleEl.textContent = T("code_examples");
    subtitleEl.textContent = "";
    backBtn.classList.add("hidden");

    let html = `
        <div class="grid-2" style="margin-bottom:16px;">
            <div class="menu-card" style="padding:12px;" data-extab="code">
                <div class="icon" style="width:40px;height:40px;font-size:18px;margin-bottom:6px;">&lt;/&gt;</div>
                <h4 style="font-size:13px;">${T("code_tab")}</h4>
            </div>
            <div class="menu-card" style="padding:12px;" data-extab="video">
                <div class="icon" style="width:40px;height:40px;font-size:18px;margin-bottom:6px;">▶</div>
                <h4 style="font-size:13px;">${T("video_tab")}</h4>
            </div>
        </div>
    `;

    if (state.examplesTab === "video") {
        html += `<div class="section-title">${T("video_lessons")}</div>`;
        VIDEOS.forEach(v => {
            html += `
                <a class="video-item" href="${v.url}" target="_blank">
                    <div class="video-icon">▶</div>
                    <div class="video-info">
                        <h4>${L(v.title)}</h4>
                        <p>${L(v.desc)}</p>
                    </div>
                </a>
            `;
        });
    } else {
        CODE_EXAMPLES.forEach(ex => {
            html += `
                <div class="example-item" data-example="${ex.id}">
                    <h4>${L(ex.title)}</h4>
                    <p>${L(ex.desc)}</p>
                </div>
            `;
        });
    }

    contentEl.innerHTML = html;

    document.querySelectorAll("[data-extab]").forEach(c => {
        c.addEventListener("click", () => { state.examplesTab = c.dataset.extab; renderExamples(); });
    });

    document.querySelectorAll("[data-example]").forEach(item => {
        item.addEventListener("click", () => openExample(item.dataset.example));
    });
}

function openExample(id) {
    const ex = CODE_EXAMPLES.find(e => e.id === id);
    if (!ex) return;
    state.currentView = "example";
    titleEl.textContent = L(ex.title);
    subtitleEl.textContent = "";
    backBtn.classList.remove("hidden");
    backBtn.onclick = () => renderExamples();

    contentEl.innerHTML = `
        <div class="section-title">${L(ex.title)}</div>
        <div class="code-block">${ex.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
    `;
}

function renderContacts() {
    state.currentView = "contacts";
    titleEl.textContent = T("developer_contacts");
    subtitleEl.textContent = T("tap_to_open");
    backBtn.classList.add("hidden");

    let html = "";
    CONTACTS.forEach(c => {
        html += `
            <a class="contact-item" href="${c.url}" target="_blank">
                <span class="contact-name">${c.name}</span>
                <span class="contact-arrow">›</span>
            </a>
        `;
    });
    contentEl.innerHTML = html;
}

function renderProfile() {
    state.currentView = "profile";
    titleEl.textContent = T("profile");
    subtitleEl.textContent = "";
    backBtn.classList.add("hidden");

    const total = Object.keys(TOPICS).length;
    const done = state.completed.length;
    const percent = getProgressPercent();
    const quizCount = state.quizPassed.length;
    const circumference = 2 * Math.PI * 26;
    const offset = circumference - (percent / 100) * circumference;

    contentEl.innerHTML = `
        <div class="avatar-section">
            <div class="avatar-circle" id="avatar-btn">${state.userSticker}</div>
            <div class="avatar-hint">${state.language === "en" ? "Tap to change avatar" : "Нажми, чтобы сменить аватар"}</div>
            <div style="font-size:20px;font-weight:700;margin-top:14px;">${state.userName || (tg?.initDataUnsafe?.user?.first_name || "User")}</div>
        </div>
        <div class="progress-card">
            <div class="circular-progress">
                <svg>
                    <circle class="bg-circle" cx="31" cy="31" r="26"></circle>
                    <circle class="fg-circle" cx="31" cy="31" r="26" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
                </svg>
                <div class="percent-text">${percent}%</div>
            </div>
            <div class="progress-info">
                <h3>${T("statistics")}</h3>
                <p>${done} / ${total} ${T("lessons_done")}</p>
                <div class="progress-bar-mini"><div class="progress-bar-mini-fill" style="width:${percent}%"></div></div>
            </div>
        </div>
        <div class="settings-row" id="settings-open">
            <div class="settings-row-left"><div class="settings-row-icon">⚙</div><div class="settings-row-text">${T("settings")}</div></div>
            <div class="settings-row-value">›</div>
        </div>
        <div class="settings-row" id="help-open">
            <div class="settings-row-left"><div class="settings-row-icon">?</div><div class="settings-row-text">${T("help")}</div></div>
            <div class="settings-row-value">›</div>
        </div>
        <div class="settings-row" id="privacy-open">
            <div class="settings-row-left"><div class="settings-row-icon">§</div><div class="settings-row-text">${T("privacy")}</div></div>
            <div class="settings-row-value">›</div>
        </div>
        <div class="settings-row">
            <div class="settings-row-left"><div class="settings-row-icon">▤</div><div class="settings-row-text">${T("lessons_completed")}</div></div>
            <div class="settings-row-value">${done}</div>
        </div>
        <div class="settings-row">
            <div class="settings-row-left"><div class="settings-row-icon">✓</div><div class="settings-row-text">${T("quizzes_completed")}</div></div>
            <div class="settings-row-value">${quizCount}</div>
        </div>
    `;

    document.getElementById("avatar-btn").addEventListener("click", openAvatarPicker);
    document.getElementById("settings-open").addEventListener("click", openSettings);
    document.getElementById("help-open").addEventListener("click", () => renderLegal("help"));
    document.getElementById("privacy-open").addEventListener("click", () => renderLegal("privacy"));
}

function renderLegal(type) {
    state.currentView = type;
    titleEl.textContent = type === "help" ? T("help") : T("privacy");
    subtitleEl.textContent = "";
    backBtn.classList.remove("hidden");
    backBtn.onclick = () => renderProfile();

    const text = type === "help" ? HELP_TEXT[state.language] : PRIVACY_TEXT[state.language];
    contentEl.innerHTML = `<div class="legal-content">${text}</div>`;
}

function openAvatarPicker() {
    let html = `<div class="modal-title">${state.language === "en" ? "Choose avatar" : "Выбери аватар"}</div><div class="sticker-grid">`;
    STICKERS.forEach(s => {
        const sel = s === state.userSticker ? "selected" : "";
        html += `<div class="sticker-item ${sel}" onclick="selectSticker('${s}')">${s}</div>`;
    });
    html += `</div>`;
    document.getElementById("modal-content").innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button>` + html;
    document.getElementById("modal-overlay").classList.remove("hidden");
}

function selectSticker(s) {
    state.userSticker = s;
    localStorage.setItem("userSticker", s);
    closeModal();
    renderProfile();
}

function closeModal() {
    document.getElementById("modal-overlay").classList.add("hidden");
}

function openSettings() {
    let html = `<div class="modal-title">${T("settings")}</div>
        <div class="settings-row" onclick="openLangSelect()">
            <div class="settings-row-left"><div class="settings-row-icon">文</div><div class="settings-row-text">${T("language")}</div></div>
            <div class="settings-row-value">${state.language === "ru" ? "Русский" : "English"} ›</div>
        </div>
        <div class="settings-row" onclick="openThemeSelect()">
            <div class="settings-row-left"><div class="settings-row-icon">◐</div><div class="settings-row-text">${T("theme")}</div></div>
            <div class="settings-row-value">${state.theme === "dark" ? T("theme_dark") : T("theme_light")} ›</div>
        </div>
        <div class="settings-row" onclick="resetProgress()">
            <div class="settings-row-left"><div class="settings-row-icon">↻</div><div class="settings-row-text">${T("reset")}</div></div>
            <div class="settings-row-value">›</div>
        </div>
    `;
    document.getElementById("modal-content").innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button>` + html;
    document.getElementById("modal-overlay").classList.remove("hidden");
}

function openLangSelect() {
    let html = `<div class="modal-title">${T("language")}</div>
        <div class="settings-row" onclick="setLang('ru')"><div class="settings-row-text">${state.language === "ru" ? "✓ " : ""}Русский</div></div>
        <div class="settings-row" onclick="setLang('en')"><div class="settings-row-text">${state.language === "en" ? "✓ " : ""}English</div></div>
    `;
    document.getElementById("modal-content").innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button>` + html;
}

function setLang(lang) {
    state.language = lang;
    localStorage.setItem("language", lang);
    closeModal();
    updateTabs();
    const view = state.currentTab;
    if (view === "home") renderHome();
    else if (view === "topics") renderTopics();
    else if (view === "examples") renderExamples();
    else if (view === "contacts") renderContacts();
    else if (view === "profile") renderProfile();
}

function openThemeSelect() {
    let html = `<div class="modal-title">${T("theme")}</div>
        <div class="settings-row" onclick="setTheme('light')"><div class="settings-row-text">${state.theme === "light" ? "✓ " : ""}${T("theme_light")}</div></div>
        <div class="settings-row" onclick="setTheme('dark')"><div class="settings-row-text">${state.theme === "dark" ? "✓ " : ""}${T("theme_dark")}</div></div>
    `;
    document.getElementById("modal-content").innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button>` + html;
}

function setTheme(t) {
    state.theme = t;
    localStorage.setItem("theme", t);
    document.body.classList.toggle("dark", t === "dark");
    closeModal();
    renderProfile();
}

function resetProgress() {
    state.completed = [];
    state.inProgress = [];
    state.quizPassed = [];
    saveState();
    closeModal();
    showToast(state.language === "en" ? "Progress reset" : "Прогресс сброшен");
    renderHome();
}

document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
});

backBtn.addEventListener("click", () => {
    if (state.currentView === "topic") renderTopics();
    else if (state.currentView === "quiz") renderHome();
    else if (state.currentView === "example") renderExamples();
    else if (state.currentView === "help" || state.currentView === "privacy") renderProfile();
    else renderHome();
});

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        state.currentTab = tab.dataset.tab;
        haptic();
        if (state.currentTab === "home") renderHome();
        else if (state.currentTab === "topics") renderTopics();
        else if (state.currentTab === "examples") renderExamples();
        else if (state.currentTab === "contacts") renderContacts();
        else if (state.currentTab === "profile") renderProfile();
    });
});

updateTabs();
renderHome();