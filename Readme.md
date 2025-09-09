ЗАДАЧА: Імітація подій через setTimeout із підпискою (pub/sub) — без Promises
та async/await
Мета: реалізувати найпростішу подійну шину (Event Bus) у браузері, яка вміє
підписуватися на події, відписуватися та емісити події асинхронно через setTimeout.
Обмеження:

Лише браузерний JavaScript.
Заборонено: Promises, async/await, сторонні бібліотеки.
Дозволено: setTimeout, DOM-події для ручної перевірки.
Інтерфейс, який потрібно реалізувати:
on(topic: string, handler: (payload:any) => void): () => void — підписка, повертає функцію відписки.
emit(topic: string, payload?: any, delay = 0): void — асинхронна емісія через setTimeout із
вказаною затримкою.
off(topic: string, handler: Function): void — відписка.

Сценарії перевірки (виконуються послідовно):

1) Базова асинхронність і порядок викликів
   const bus = createBus();
   bus.on('tick', (x) => console.log('tick:', x));

bus.emit('tick', { step: 1 }, 0);
console.log('after schedule');
// Очікування: лог хендлера з’являється пізніше за "after schedule".

2) Ланцюжок подій у наступному тіку
   bus.on('tick', (x) => {
   console.log('handler step:', x.step);
   if (x.step === 1) {
   bus.emit('tick', { step: 2 }, 0);
   }
   });

bus.emit('tick', { step: 1 }, 0);
// Завдання: зафіксувати послідовність появи step 1 та step 2
// і пояснити, чому другий виклик приходить пізніше.

3) Відписка між подіями
   const off = bus.on('news', (x) => {
   console.log('news:', x);
   off(); // відписка після першого спрацювання
   });

bus.emit('news', 'A', 0);
bus.emit('news', 'B', 0);
// Завдання: перевірити, що 'B' більше не доходить до хендлера.

4) Кілька підписників і гарантія виклику кожного
   bus.on('ev', (v) => console.log('h1', v));
   bus.on('ev', (v) => console.log('h2', v));
   bus.on('ev', (v) => console.log('h3', v));

bus.emit('ev', 42, 0);
// Завдання: переконатися, що всі три обробники викликаються у межах одного емісу.



