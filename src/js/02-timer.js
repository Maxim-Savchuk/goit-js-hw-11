// import '../sass/timer.scss';
// import Swal from 'sweetalert2';

// const refs = {
//     startBtn: document.querySelector('button[data-start]'),
//     targetDate: document.querySelector('#date-selector'),
// }

// class Timer {
//   constructor({ selector, targetDate }) {
//     this.targetDate = targetDate;
//     this.selector = selector;
//     this.refs = {
//       days: document.querySelector(`${this.selector} [data-days]`),
//       hours: document.querySelector(`${this.selector} [data-hours]`),
//       minutes: document.querySelector(`${this.selector} [data-minutes]`),
//       seconds: document.querySelector(`${this.selector} [data-seconds]`),
//     };
//   }

//   getDate() {
//     const targetDate = Date.parse(this.targetDate);
//     const currentDate = new Date();
//     return targetDate - currentDate;
//   }

//   timerStart() {
//     this.clearInterval = setInterval(() => {
//       const diffMs = this.getDate();
//       const { days, hours, minutes, seconds } = this.convertMs(diffMs);
//       this.refs.days.textContent = this.pad(days);
//       this.refs.hours.textContent = this.pad(hours);
//       this.refs.minutes.textContent = this.pad(minutes);
//       this.refs.seconds.textContent = this.pad(seconds);
//     }, 1000);
//   }

//   pad(value) {
//     return String(value).padStart(2, 0);
//   }

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   }
// }

// const startTime = refs.currentDate.value;



// const timer = new Timer({ selector: '#timer', targetDate: startTime });

// refs.startBtn.addEventListener('click', () => {
//     console.log('click');
// });