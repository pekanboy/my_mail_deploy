# Тестовое задание

Дан файл [data.json](my-app/src/data/data.json), в нём содержится информация о письмах.
Взяв всю необходимую информацию из файла, необходимо сверстать список писем с возможностью их удаления (в том числе множественного), добавить список в Storybook и задеплоить Storybook в Интернет. В случае пустого списка необходимо отображать заглушку. В качестве макета можно использовать [веб-версию Почты](https://e.mail.ru).

## Технологический стек

+ [React](https://reactjs.org/)
+ [Storybook](https://storybook.js.org/)

## Плюсом будет

+ [Typescript](https://www.typescriptlang.org/)
+ Документация
+ Покрытие тестами
+ CI / CD

## Стуктура письма в [data.json](my-app/src/data/data.json)

![Список писем на примере](list_explained.png)

`id` - уникальный идентификатор письма

`avatar` - ссылка на аватар отправителя ![red](https://placehold.it/15/ff0000/000000?text=+)

`sender` - имя отправителя ![orange](https://placehold.it/15/ffa500/000000?text=+)

`theme` - тема (заголовок) письма ![green](https://placehold.it/15/008000/000000?text=+)

`snippet` - фрагмент тела письма, отображаемый в списке писем ![blue](https://placehold.it/15/0000ff/000000?text=+)
