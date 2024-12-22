# Онлайн Застосунок для Викладачів Мов

Цей проєкт є застосунком для компанії, що пропонує послуги викладачів для
вивчення мов онлайн. Застосунок включає три основні сторінки: "Home", "Teachers"
та "Favorites". Користувач може зареєструватися, авторизуватися, фільтрувати
викладачів за різними критеріями та додавати викладачів у "Обрані".

## Технології:

- **React.js** для розробки інтерфейсу користувача.
- **Firebase** для авторизації користувачів та збереження даних.
- **React Router** для маршрутизації.
- **React Hook Form** та **Yup** для валідації форм.

## Сторінки:

1. **Home**: Сторінка з переліком переваг компанії та посиланням на сторінку
   "Teachers".
2. **Teachers**: Сторінка з переліком викладачів, де користувач може фільтрувати
   викладачів за мовою, рівнем знань та ціною за годину.
3. **Favorites**: Приватна сторінка для авторизованих користувачів, де вони
   можуть переглядати викладачів, яких додали в обрані.

## Функціональність:

- Авторизація користувачів за допомогою **Firebase** (реєстрація, логінізація,
  логаут).
- Реалізація карток викладачів, з можливістю додавання до "Обраних" та перегляду
  детальної інформації.
- Можливість бронювання пробного заняття через модальне вікно.
- Інтерактивні фільтри для пошуку викладачів.

## Технічне Завдання:

1. Реалізована авторизація через **Firebase**.
2. Реалізація форм реєстрації та авторизації з валідацією за допомогою
   **react-hook-form** та **Yup**.
3. Створена база даних викладачів у **Firebase Realtime Database**.
4. Картки викладачів з інформацією та можливістю додавання у "Обрані".
5. Функціонал для фільтрації викладачів за різними критеріями.
6. Реалізація приватної сторінки "Favorites" для авторизованих користувачів.

## Посилання:

- [Макет](https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=0-1&p=f)
- [Технічне завдання](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit?tab=t.0)

## Встановлення:

1. Клонуйте цей репозиторій:

   ```bash
   git clone https://github.com/kholodaet/learnlingo/
   ```

2. Встановіть залежності:

```npm install

```

3.  Запустіть проєкт:

```npm start

```

**Деплой**:

Проєкт задеплоєний на GitHub Pages.

**Ліцензія**:

Цей проєкт ліцензується за умовами MIT License.
