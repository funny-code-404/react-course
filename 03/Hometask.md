# Component lifecycle

1. Перейдите в ветку `master`.
2. Обновите проект.
3. Создайте ветку `lesson-36` из ветки `master`.
4. Убедитесь, что вы находитесь в ветке `lesson-36`.
5. Добавте ESLint к вашему проекту.
6. Получите и отобразите контент блока "Homes guests loves" на основе данных, полученных по url `https://fe-student-api.herokuapp.com/api/hotels/popular`
7. Используя форму из вашей верстки, сделайте поиск отелей:
   - вам нужно работать только с полем "Your destination or hotel name";
   - запрос `GET https://fe-student-api.herokuapp.com/api/hotels`;
   - запрос принимает параметр `search` - строка;
   - пример запроса: `https://fe-student-api.herokuapp.com/api/hotels?search=us`;
   - из поля формы "Your destination or hotel name" вы должны записать значение в параметр `search`;
   - в ответ вы получите массив;
   - массив из ответа необходимо вывести в блок "Available hotels", который вы добавите сразу после блока "Top-section";
   - дизайн блока "Available hotels" идентичен блоку "Homes guests loves", только имеет заголовок "Available hotels".
8. Сделайте `commit` с комментарием, описывающим проделанную вами работу.
9. Сделайте `push`.
10. Сделайте `pull request` на GitHub и при этом добавьте в ревьюеры `bogomolov-and` и `mezzija`.
