Вязвши за основу файли з уроку вам треба дописати редагування посту.
Має бути фрома як на сторінці Create Post
Перехід на неї має бути при натисканні в таблиці на кнопку Edit
Після переходу на сторінку едіт треба завантажити дані про пост, як це зроблено на сторінці View
Після, треба підставити завантажені дані в поля форми і дати можливість редагувати
Коли юзер засабмітить форму треба відправити put реквест на сервер

fetch('https://jsonplaceholder.typicode.com/posts/1', {
method: 'PUT',
body: JSON.stringify({
id: 1,
title: 'foo',
body: 'bar',
userId: 1,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));

Обв 'язково переряйте body запиту, має бути як в прикладі з post запитом
Далі флоу роботи після запиту таке саме як і на сторінці Create Post

