Створіть клас URLParser з конструктором, що приймає повний URL.
Додайте геттери:
protocol → повертає http: або https:
hostname → повертає домен
path → повертає шлях (/products/item)
queryParams → повертає об’єкт з query-параметрами ({ search: "book", page: "2" })
!!! ВИКОРИСТАННЯ window.location або location ЗАБОРОНЕНО !!!
Приклад:
const parser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(parser.queryParams); // { search: "book", page: "2" }
