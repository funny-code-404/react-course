# Redux Middleware

1. Перейдите в ветку `master`.
2. Обновите проект (git pull upstream master).
3. Создайте ветку `lesson-42` из ветки `master`.
4. Убедитесь, что вы находитесь в ветке `lesson-42`.
5. Добавьте в проект middleware для разработки:
   - [redux-logger](https://github.com/LogRocket/redux-logger)
   - [redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant)
6. Настройте работу [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm) вместе с middleware.
7. Интегрируйте в проект [Redux-thunk](https://github.com/reduxjs/redux-thunk) или [Redux-Saga](https://redux-saga.js.org/)
8. Используя форму из вашей верстки, сделайте поиск отелей:
    - получение данных и их обработка должны находиться в сагах;
    - запрос `GET https://fe-student-api.herokuapp.com/api/hotels`;
    - запрос принимает параметры: `search - строка`, `adults - количество взрослых`, `children - возраст детей перечислен через запятую`, `rooms – количество номеров`, `dateFrom - дата в миллисекундах` и `dateTo - дата в миллисекундах`;
    - из поля формы "Your destination or hotel name" вы должны записать значение в параметр `search`;
    - из полей даты вы должны записать значение в параметры `dateFrom` и `dateTo`;
    - из поля формы "Adults" вы должны записать значение в параметр `adults`;
    - в параметр `children` вы должны записать через запятую возраст детей из выпадающего списка (если ребенок 1, запятую добавлять не нужно);
    - важное правило – дети не могут путешествовать без взрослых. Это значит, что вы не можете передать параметр `children` без параметра `alults`;
    - из поля формы "Rooms" вы должны записать значение в параметр `rooms`;
    - см. возможные передаваемые значения фильтра [здесь](../lesson-10/homework.md)
    - пример запроса: `https://fe-student-api.herokuapp.com/api/hotels?search=us&dateFrom=1617224400000&dateTo=1617234400000&adults=15&children=10,3&rooms=2`;
    - в ответ вы получите массив;
    - массив из ответа необходимо вывести в блок "Available hotels", который вы добавите сразу после блока "Top-section";
    - дизайн блока "Available hotels" идентичен блоку "Homes guests loves", только имеет заголовок "Available hotels".
9. Сделайте `commit` с комментарием, описывающим проделанную вами работу.
10. Сделайте `push`.
