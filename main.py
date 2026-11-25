import logging
import os
import sqlite3
from datetime import datetime

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import (
    Application,
    CommandHandler,
    MessageHandler,
    CallbackQueryHandler,
    filters,
    ContextTypes,
)

TOKEN = "8864798043:AAHHCvPs_LUW_VWTC486bdUHy0goHNOuHXM"
WEBAPP_URL = os.environ.get("WEBAPP_URL", "").strip()

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)
logger.info("Mini App URL: %s", WEBAPP_URL if WEBAPP_URL else "not set")

DB_PATH = "bot_data.db"

CONTACTS = {
    "GitHub": "https://github.com/nastuh",
    "Instagram": "https://www.instagram.com/di9star_q",
    "TikTok": "https://www.tiktok.com/@di9star",
    "YouTube": "https://www.youtube.com/@yelleye",
    "Steam": "https://steamcommunity.com/profiles/76561199707319124",
    "TryHackMe": "https://tryhackme.com/p/nastuh",
    "Telegram": "https://t.me/di9star",
    "Telegram Channel": "https://t.me/buenoodle",
}

FAQ = {
    "как дела": "У меня всё отлично! Я бот-помощник по Java. Готов помочь тебе с обучением. А у тебя как?",
    "привет": "Привет! Я бот-помощник по Java. Чем могу помочь?",
    "здравствуй": "Здравствуй! Готов помочь с изучением Java.",
    "что такое java": "Java — это объектно-ориентированный язык программирования, созданный в 1995 году компанией Sun Microsystems. Используется для разработки веб-приложений, мобильных приложений (Android), десктопных программ и корпоративных систем.",
    "что такое jvm": "JVM (Java Virtual Machine) — виртуальная машина, которая выполняет байт-код Java. Благодаря JVM Java-программы работают на любой платформе — Windows, macOS, Linux.",
    "что такое jdk": "JDK (Java Development Kit) — набор инструментов для разработки на Java: компилятор javac, JVM, стандартные библиотеки.",
    "что такое jre": "JRE (Java Runtime Environment) — среда выполнения Java-программ. Включает JVM и стандартные библиотеки. Нужна для запуска, но не для разработки.",
    "что такое класс": "Класс — это шаблон или чертёж для создания объектов. Он описывает поля (данные) и методы (действия).",
    "что такое объект": "Объект — это экземпляр класса. Создаётся с помощью оператора new.",
    "что такое наследование": "Наследование — механизм ООП, при котором один класс (дочерний) перенимает свойства и методы другого класса (родительского). Реализуется через extends.",
    "что такое полиморфизм": "Полиморфизм — способность объектов с одинаковым интерфейсом иметь разную реализацию. Проявляется через перегрузку и переопределение методов.",
    "что такое инкапсуляция": "Инкапсуляция — скрытие внутреннего состояния объекта и предоставление доступа только через публичные методы. Реализуется через модификаторы доступа (private, protected, public).",
    "что такое абстракция": "Абстракция — выделение существенных характеристик объекта и отбрасывание несущественных. Реализуется через абстрактные классы и интерфейсы.",
    "что такое интерфейс": "Интерфейс — это контракт, который определяет набор методов без реализации. Класс, реализующий интерфейс, обязан реализовать все его методы.",
    "что такое коллекции": "Коллекции в Java — это структуры данных для хранения групп объектов. Основные: List, Set, Map, Queue.",
    "что такое list": "List — упорядоченная коллекция, допускающая дубликаты. Основные реализации: ArrayList, LinkedList.",
    "что такое set": "Set — коллекция, не допускающая дубликатов. Основные реализации: HashSet, TreeSet, LinkedHashSet.",
    "что такое map": "Map — коллекция пар ключ-значение. Основные реализации: HashMap, TreeMap, LinkedHashMap.",
    "что такое arraylist": "ArrayList — реализация List на основе динамического массива. Быстрый доступ по индексу O(1), медленная вставка/удаление O(n).",
    "что такое linkedlist": "LinkedList — реализация List на основе двусвязного списка. Быстрая вставка/удаление O(1), медленный доступ O(n).",
    "что такое hashmap": "HashMap — реализация Map на основе хэш-таблицы. Операции O(1) в среднем. Не синхронизирован, разрешает null.",
    "что такое stream api": "Stream API — инструмент для функциональной обработки коллекций. Позволяет писать более компактный и читаемый код с помощью filter, map, collect и других операций.",
    "что такое лямбда": "Лямбда-выражение — анонимная функция. Пример: (a, b) -> a + b. Используется для сокращения кода и передачи функций как параметров.",
    "что такое исключение": "Исключение — это событие, нарушающее нормальный ход программы. Обрабатывается через try-catch-finally. Бывают checked и unchecked.",
    "что такое try catch": "try-catch — конструкция для обработки исключений. Код в try может выбросить исключение, catch его перехватывает, finally выполняется всегда.",
    "что такое поток": "Поток (Thread) — это независимая единица выполнения внутри процесса. Java поддерживает многопоточность через класс Thread и интерфейс Runnable.",
    "что такое многопоточность": "Многопоточность — способность программы выполнять несколько задач параллельно. В Java реализуется через Thread, Runnable, ExecutorService.",
    "что такое synchronized": "synchronized — ключевое слово для синхронизации доступа к общим ресурсам. Гарантирует, что только один поток может выполнять блок кода одновременно.",
    "что такое jdbc": "JDBC (Java Database Connectivity) — API для работы с базами данных из Java. Позволяет подключаться к БД, выполнять SQL-запросы и обрабатывать результаты.",
    "что такое spring": "Spring — популярный фреймворк для разработки Java-приложений. Основные модули: Spring Core, Spring MVC, Spring Data, Spring Security, Spring Boot.",
    "что такое spring boot": "Spring Boot — надстройка над Spring, упрощающая настройку и запуск приложений. Включает автоконфигурацию, встроенный сервер, стартеры.",
    "что такое maven": "Maven — инструмент для сборки Java-проектов и управления зависимостями. Конфигурация описывается в файле pom.xml.",
    "что такое gradle": "Gradle — система сборки, альтернатива Maven. Использует Groovy или Kotlin DSL. Быстрее и гибче Maven.",
    "что такое junit": "JUnit — фреймворк для модульного тестирования Java-кода. Основные аннотации: @Test, @BeforeEach, @AfterEach.",
    "что такое git": "Git — система контроля версий. Позволяет отслеживать изменения в коде, работать в команде, откатываться к предыдущим версиям.",
    "как установить java": "Скачай JDK с сайта oracle.com или adoptium.net. Установи как обычную программу. Проверь командой java -version в терминале.",
    "как начать программировать": "Установи JDK и IDE (например, IntelliJ IDEA Community). Напиши первую программу: public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello\"); } }",
    "с чего начать": "Начни с основ: переменные, типы данных, операторы, условия, циклы. Затем переходи к ООП: классы, объекты, наследование. Потом коллекции, Stream API, многопоточность.",
    "какой язык учить первым": "Если интересует разработка под Android или корпоративные системы — учи Java. Она простая и востребованная.",
    "где применять java": "Java применяется в веб-разработке (Spring), Android-разработке, корпоративных системах, Big Data (Hadoop, Spark), играх (Minecraft).",
    "что такое hello world": "Hello World — традиционная первая программа. Выводит текст на экран: System.out.println(\"Hello, World!\");",
    "что такое переменная": "Переменная — это именованная ячейка памяти для хранения данных. Объявляется с указанием типа: int age = 25;",
    "что такое тип данных": "Тип данных определяет, какие значения могут храниться в переменной. Примитивные: int, double, boolean, char. Ссылочные: String, массивы, объекты.",
    "что такое оператор": "Оператор — символ, выполняющий операцию над значениями. Арифметические: + - * / %. Сравнения: == != > <. Логические: && || !.",
    "что такое цикл": "Цикл — конструкция для повторения действий. Виды: for, while, do-while, for-each.",
    "что такое массив": "Массив — структура данных для хранения нескольких значений одного типа. Объявляется как int[] numbers = {1, 2, 3};",
    "что такое метод": "Метод — это блок кода, который выполняет определённую задачу. Может принимать параметры и возвращать значение.",
    "что такое конструктор": "Конструктор — специальный метод класса, вызываемый при создании объекта. Имеет то же имя, что и класс, и не возвращает значение.",
    "что такое перегрузка": "Перегрузка (overloading) — создание нескольких методов с одинаковым именем, но разными параметрами.",
    "что такое переопределение": "Переопределение (overriding) — замена метода родительского класса в дочернем классе. Аннотация @Override.",
    "что такое abstract": "abstract — ключевое слово для объявления абстрактного класса или метода. Абстрактный метод не имеет реализации и должен быть переопределён в дочерних классах.",
    "что такое final": "final — ключевое слово. Для переменной означает константу (нельзя изменить), для метода — нельзя переопределить, для класса — нельзя наследовать.",
    "что такое static": "static — ключевое слово для создания статических полей и методов. Они принадлежат классу, а не объекту.",
    "спасибо": "Пожалуйста! Если нужна помощь — обращайся.",
    "пока": "До связи! Удачи в изучении Java!",
    "ты кто": "Я бот-помощник по изучению Java. Помогу с уроками, примерами кода и ответами на вопросы.",
}


def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY,
            username TEXT,
            first_name TEXT,
            language TEXT DEFAULT 'ru',
            registered_at TEXT
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS faq_usage (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            question TEXT,
            timestamp TEXT
        )
    """)
    conn.commit()
    conn.close()


def register_user(user_id, username, first_name):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute(
        "INSERT OR IGNORE INTO users (user_id, username, first_name, registered_at) VALUES (?, ?, ?, ?)",
        (user_id, username, first_name, datetime.now().isoformat())
    )
    conn.commit()
    conn.close()


def get_user(user_id):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT language FROM users WHERE user_id = ?", (user_id,))
    row = c.fetchone()
    conn.close()
    if row:
        return {"language": row[0] or "ru"}
    return None


def update_user(user_id, **kwargs):
    if not kwargs:
        return
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    fields = []
    values = []
    for k, v in kwargs.items():
        fields.append(f"{k} = ?")
        values.append(v)
    values.append(user_id)
    c.execute(f"UPDATE users SET {', '.join(fields)} WHERE user_id = ?", values)
    conn.commit()
    conn.close()


def log_faq(user_id, question):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute(
        "INSERT INTO faq_usage (user_id, question, timestamp) VALUES (?, ?, ?)",
        (user_id, question, datetime.now().isoformat())
    )
    conn.commit()
    conn.close()


def get_main_menu(user_id):
    lang = "ru"
    user = get_user(user_id)
    if user:
        lang = user["language"]

    buttons = []

    if WEBAPP_URL:
        if lang == "en":
            buttons.append([InlineKeyboardButton("Open lessons", web_app=WebAppInfo(url=WEBAPP_URL))])
        else:
            buttons.append([InlineKeyboardButton("Открыть обучение", web_app=WebAppInfo(url=WEBAPP_URL))])

    if lang == "en":
        row1 = [
            InlineKeyboardButton("About", callback_data="about"),
            InlineKeyboardButton("Contacts", callback_data="contacts"),
        ]
        row2 = [
            InlineKeyboardButton("Questions", callback_data="faq_menu"),
            InlineKeyboardButton("Settings", callback_data="settings_menu"),
        ]
    else:
        row1 = [
            InlineKeyboardButton("О боте", callback_data="about"),
            InlineKeyboardButton("Контакты", callback_data="contacts"),
        ]
        row2 = [
            InlineKeyboardButton("Вопросы", callback_data="faq_menu"),
            InlineKeyboardButton("Настройки", callback_data="settings_menu"),
        ]
    buttons.append(row1)
    buttons.append(row2)

    return InlineKeyboardMarkup(buttons)


def get_back_button(target="main_menu"):
    return InlineKeyboardMarkup([[InlineKeyboardButton("Назад", callback_data=target)]])


def get_language_menu():
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("Русский", callback_data="set_lang_ru")],
        [InlineKeyboardButton("English", callback_data="set_lang_en")],
    ])


def get_settings_menu(user_id):
    lang = "ru"
    user = get_user(user_id)
    if user:
        lang = user["language"]

    if lang == "en":
        return InlineKeyboardMarkup([
            [InlineKeyboardButton("Change language", callback_data="change_language")],
            [InlineKeyboardButton("Back", callback_data="main_menu")],
        ])
    else:
        return InlineKeyboardMarkup([
            [InlineKeyboardButton("Сменить язык", callback_data="change_language")],
            [InlineKeyboardButton("Назад", callback_data="main_menu")],
        ])


def get_faq_menu(user_id):
    lang = "ru"
    user = get_user(user_id)
    if user:
        lang = user["language"]

    if lang == "en":
        return InlineKeyboardMarkup([
            [InlineKeyboardButton("Ask your question", callback_data="faq_ask")],
            [InlineKeyboardButton("Popular questions", callback_data="faq_popular")],
            [InlineKeyboardButton("Back", callback_data="main_menu")],
        ])
    else:
        return InlineKeyboardMarkup([
            [InlineKeyboardButton("Задать свой вопрос", callback_data="faq_ask")],
            [InlineKeyboardButton("Популярные вопросы", callback_data="faq_popular")],
            [InlineKeyboardButton("Назад", callback_data="main_menu")],
        ])


def get_popular_faq_keyboard(user_id):
    popular = [
        "что такое java",
        "что такое jvm",
        "с чего начать",
        "что такое класс",
        "что такое коллекции",
        "что такое stream api",
        "что такое spring",
    ]
    buttons = []
    for q in popular:
        if q in FAQ:
            buttons.append([InlineKeyboardButton(q.capitalize(), callback_data=f"faq_q_{q}")])
    buttons.append([InlineKeyboardButton("Назад", callback_data="faq_menu")])
    return InlineKeyboardMarkup(buttons)


def get_contacts_keyboard():
    keyboard = [
        [InlineKeyboardButton("GitHub", url=CONTACTS["GitHub"])],
        [InlineKeyboardButton("Instagram", url=CONTACTS["Instagram"])],
        [InlineKeyboardButton("TikTok", url=CONTACTS["TikTok"])],
        [InlineKeyboardButton("YouTube", url=CONTACTS["YouTube"])],
        [InlineKeyboardButton("Steam", url=CONTACTS["Steam"])],
        [InlineKeyboardButton("TryHackMe", url=CONTACTS["TryHackMe"])],
        [InlineKeyboardButton("Telegram", url=CONTACTS["Telegram"])],
        [InlineKeyboardButton("Telegram Channel", url=CONTACTS["Telegram Channel"])],
        [InlineKeyboardButton("Назад", callback_data="main_menu")],
    ]
    return InlineKeyboardMarkup(keyboard)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    register_user(user.id, user.username or "", user.first_name or "")

    user_data = get_user(user.id)
    if user_data is None:
        await update.message.reply_text(
            "Выберите язык / Choose language:",
            reply_markup=get_language_menu()
        )
        return

    lang = user_data["language"]
    if lang == "en":
        text = (
            f"Hello, {user.first_name}!\n\n"
            "This is a Java learning assistant.\n\n"
            "All lessons, examples and practice are in the Mini App. "
            "Tap «Open lessons» below.\n\n"
            "Here in chat you can:\n"
            "- Ask any question about Java\n"
            "- Get contacts\n"
            "- Change language\n"
            "- Learn about the bot"
        )
    else:
        text = (
            f"Привет, {user.first_name}!\n\n"
            "Это помощник по изучению Java.\n\n"
            "Все уроки, примеры и практика находятся в Mini App. "
            "Нажми «Открыть обучение» ниже.\n\n"
            "Здесь в чате можно:\n"
            "- Задать любой вопрос по Java\n"
            "- Узнать контакты\n"
            "- Сменить язык\n"
            "- Прочитать о боте"
        )
    await update.message.reply_text(text, reply_markup=get_main_menu(user.id))


async def menu_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    lang = "ru"
    user_data = get_user(user.id)
    if user_data:
        lang = user_data["language"]
    text = "Меню:" if lang == "ru" else "Menu:"
    await update.message.reply_text(text, reply_markup=get_main_menu(user.id))


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    lang = "ru"
    user_data = get_user(user.id)
    if user_data:
        lang = user_data["language"]

    if lang == "en":
        text = (
            "Help\n\n"
            "Commands:\n"
            "/start — start\n"
            "/menu — menu\n"
            "/help — this help\n"
            "/about — about the bot\n"
            "/contacts — contacts\n"
            "/faq — questions and answers\n"
            "/settings — settings\n\n"
            "All lessons are in the Mini App."
        )
    else:
        text = (
            "Помощь\n\n"
            "Команды:\n"
            "/start — начать\n"
            "/menu — меню\n"
            "/help — эта справка\n"
            "/about — о боте\n"
            "/contacts — контакты\n"
            "/faq — вопросы и ответы\n"
            "/settings — настройки\n\n"
            "Все уроки в Mini App."
        )
    await update.message.reply_text(text, reply_markup=get_back_button())


async def about_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    lang = "ru"
    user_data = get_user(user.id)
    if user_data:
        lang = user_data["language"]

    if lang == "en":
        text = (
            "About the bot\n\n"
            "Java Assistant is a learning companion for anyone who wants to master Java from scratch to an advanced level.\n\n"
            "What's inside:\n"
            "- Mini App with 40+ lessons from basics to Spring\n"
            "- Detailed theory with examples and code snippets\n"
            "- Code examples and ready-to-use programs\n"
            "- Interactive quizzes to test your knowledge\n"
            "- Progress tracking and achievements\n"
            "- FAQ with answers to popular Java questions\n"
            "- Contacts of the developer\n\n"
            "What you can do in chat:\n"
            "- Ask any Java question\n"
            "- Get step-by-step explanations\n"
            "- Find useful contacts and support\n\n"
            "The bot is designed for beginners and intermediate developers who want a clear, structured path in learning Java.\n\n"
            "Version: 2.0\n"
            "Developer: @di9star"
        )
    else:
        text = (
            "О боте\n\n"
            "Java Assistant — это помощник для тех, кто хочет освоить Java от нуля до продвинутого уровня.\n\n"
            "Что внутри:\n"
            "- Mini App с 40+ уроками от основ до Spring\n"
            "- Подробная теория с примерами и фрагментами кода\n"
            "- Примеры кода и готовые программы\n"
            "- Интерактивные тесты для проверки знаний\n"
            "- Отслеживание прогресса и достижения\n"
            "- База ответов на популярные вопросы по Java\n"
            "- Контакты разработчика\n\n"
            "Что можно делать в чате:\n"
            "- Задавать любой вопрос по Java\n"
            "- Получать пошаговые объяснения\n"
            "- Находить полезные контакты и поддержку\n\n"
            "Бот создан для новичков и продолжающих, которые хотят чёткий и структурированный путь в изучении Java.\n\n"
            "Версия: 2.0\n"
            "Разработчик: @di9star"
        )
    await update.message.reply_text(text, reply_markup=get_back_button())


async def contacts_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    lang = "ru"
    user_data = get_user(user.id)
    if user_data:
        lang = user_data["language"]
    text = "Мои контакты:" if lang == "ru" else "My contacts:"
    await update.message.reply_text(text, reply_markup=get_contacts_keyboard())


async def faq_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    lang = "ru"
    user_data = get_user(user.id)
    if user_data:
        lang = user_data["language"]

    if lang == "en":
        text = "Questions and answers.\n\nChoose an option:"
    else:
        text = "Вопросы и ответы.\n\nВыбери опцию:"
    await update.message.reply_text(text, reply_markup=get_faq_menu(user.id))


async def settings_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    lang = "ru"
    user_data = get_user(user.id)
    if user_data:
        lang = user_data["language"]
    text = "Настройки:" if lang == "ru" else "Settings:"
    await update.message.reply_text(text, reply_markup=get_settings_menu(user.id))


async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    user = query.from_user
    data = query.data

    user_data = get_user(user.id)
    if not user_data:
        register_user(user.id, user.username or "", user.first_name or "")
        user_data = get_user(user.id)

    lang = user_data["language"] if user_data else "ru"

    if data == "main_menu":
        text = "Меню:" if lang == "ru" else "Menu:"
        await query.edit_message_text(text, reply_markup=get_main_menu(user.id))
        return

    if data == "about":
        if lang == "en":
            text = "About the bot\n\nJava Assistant is a learning companion for anyone who wants to master Java."
        else:
            text = "О боте\n\nJava Assistant — помощник для тех, кто хочет освоить Java от нуля до продвинутого уровня."
        await query.edit_message_text(text, reply_markup=get_back_button())
        return

    if data == "contacts":
        text = "Мои контакты:" if lang == "ru" else "My contacts:"
        await query.edit_message_text(text, reply_markup=get_contacts_keyboard())
        return

    if data == "faq_menu":
        text = "Вопросы и ответы." if lang == "ru" else "Questions and answers."
        await query.edit_message_text(text, reply_markup=get_faq_menu(user.id))
        return

    if data == "faq_ask":
        context.user_data["waiting_faq"] = True
        text = (
            "Напишите свой вопрос по Java. Я постараюсь ответить."
            if lang == "ru"
            else "Write your Java question. I will try to answer."
        )
        await query.edit_message_text(text, reply_markup=get_back_button("faq_menu"))
        return

    if data == "faq_popular":
        text = "Популярные вопросы:" if lang == "ru" else "Popular questions:"
        await query.edit_message_text(text, reply_markup=get_popular_faq_keyboard(user.id))
        return

    if data.startswith("faq_q_"):
        question = data.replace("faq_q_", "")
        answer = FAQ.get(question, "Ответ не найден." if lang == "ru" else "Answer not found.")
        log_faq(user.id, question)
        await query.edit_message_text(
            f"Вопрос: {question}\n\nОтвет: {answer}" if lang == "ru" else f"Q: {question}\n\nA: {answer}",
            reply_markup=get_back_button("faq_menu")
        )
        return

    if data == "settings_menu":
        text = "Настройки:" if lang == "ru" else "Settings:"
        await query.edit_message_text(text, reply_markup=get_settings_menu(user.id))
        return

    if data == "change_language":
        await query.edit_message_text(
            "Выберите язык / Choose language:",
            reply_markup=get_language_menu()
        )
        return

    if data == "set_lang_ru":
        update_user(user.id, language="ru")
        await query.edit_message_text("Язык установлен: Русский.", reply_markup=get_main_menu(user.id))
        return

    if data == "set_lang_en":
        update_user(user.id, language="en")
        await query.edit_message_text("Language set: English.", reply_markup=get_main_menu(user.id))
        return


def find_faq_answer(text):
    text = text.lower().strip()
    if text in FAQ:
        return FAQ[text]
    for key, answer in FAQ.items():
        if key in text or text in key:
            return answer
    return None


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    text = update.message.text
    lang = "ru"
    user_data = get_user(user.id)
    if user_data:
        lang = user_data["language"]

    if context.user_data.get("waiting_faq"):
        context.user_data["waiting_faq"] = False
        answer = find_faq_answer(text)
        if answer:
            log_faq(user.id, text)
            await update.message.reply_text(
                f"Вопрос: {text}\n\nОтвет: {answer}" if lang == "ru" else f"Q: {text}\n\nA: {answer}",
                reply_markup=get_back_button("faq_menu")
            )
        else:
            msg = (
                "К сожалению, я не нашёл ответа на этот вопрос. Попробуйте переформулировать или задайте другой вопрос."
                if lang == "ru"
                else "Sorry, I couldn't find an answer. Try rephrasing or asking another question."
            )
            await update.message.reply_text(msg, reply_markup=get_back_button("faq_menu"))
        return

    answer = find_faq_answer(text)
    if answer:
        log_faq(user.id, text)
        await update.message.reply_text(
            f"Ответ: {answer}" if lang == "ru" else f"Answer: {answer}",
            reply_markup=get_main_menu(user.id)
        )
        return

    msg = (
        "Все уроки и примеры находятся в Mini App. Используй /menu, чтобы увидеть доступные команды, или /faq для вопросов."
        if lang == "ru"
        else "All lessons and examples are in the Mini App. Use /menu to see commands or /faq for questions."
    )
    await update.message.reply_text(msg, reply_markup=get_main_menu(user.id))


def main():
    init_db()

    from telegram.request import HTTPXRequest

    request = HTTPXRequest(
        connect_timeout=30.0,
        read_timeout=30.0,
        write_timeout=30.0,
        pool_timeout=30.0
    )

    app = (
        Application.builder()
        .token(TOKEN)
        .request(request)
        .get_updates_request(request)
        .build()
    )

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("menu", menu_command))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("about", about_command))
    app.add_handler(CommandHandler("contacts", contacts_command))
    app.add_handler(CommandHandler("faq", faq_command))
    app.add_handler(CommandHandler("settings", settings_command))

    app.add_handler(CallbackQueryHandler(button_handler))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    app.run_polling(allowed_updates=Update.ALL_TYPES, poll_interval=2.0, timeout=30)


if __name__ == "__main__":
    main()