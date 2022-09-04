// interface Instrument {
//     playNote(note): void;
// }
// /**
//  * Скрипку чи віолончель ми зможемо тоді описати так:
//  */
//  class Violin implements Instrument {
//     playNote(note) {
//         console.log(`Играю ${note} на скрипке!`);
//     }
// }

// class Cello implements Instrument {
//     playNote(note) {
//         console.log(`Играю ${note} на виолончели!`);
//     }
// }

// /**
//  * Музиканти оркестру грають строго кожен на своєму інструменті, але всіх музикантів ми можемо описати інтерфейсом Musician:
//  */
//  interface Musician {
//     play(piece): void;
// }
// /**
//  * Тоді, наприклад, скрипалів та віолончелістів ми зможемо уявити так:
//  */
//  class Violinist implements Musician {
//     private instrument: Instrument = new Violin()

//     play = (piece) => piece.forEach((note) => this.instrument.playNote(note))
  
// }

// class Cellist implements Musician {
//     private instrument: Instrument = new Cello()

//     play = (piece) => piece.forEach((note) => this.instrument.playNote(note))

// }

// // Така функція буде дуже тендітною,
// //  * і її доведеться оновлювати при зміні складу оркестру.
// //  * Ми хочемо створити один інтерфейс для резервування
// //  * будь-яких інструментів. Цей інтерфейс буде гарантією того,
// //  * що хоч би скільки було музикантів, які б вони не були,
// //  * ми завжди зможемо викликати один метод для резервування.
// //  *
// //  * Аби вирішити це завдання якраз підійде абстрактна фабрика:


// // Общий интерфейс:
// interface ReservationFactory {
//     reserveInstrument(): Instrument;
//     notifyPlayer(): Musician;
// }

// // Реализации под разные инструменты:
// class ViolinReservation implements ReservationFactory {
//     reserveInstrument = () => new Violin()
//     notifyPlayer = () => new Violinist()
// }

// class CelloReservation implements ReservationFactory {
//     reserveInstrument = () => new Cello()
//     notifyPlayer = () => new Cellist()
// }

// /**
//  * Тоді функція стане прямолінійнішою і менш крихкою:reserve()
//  */
// function reserve(reservation: ReservationFactory): void {
//     reservation.notifyPlayer()
//     reservation.reserveInstrument()
// }

