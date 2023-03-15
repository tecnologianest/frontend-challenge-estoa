export const debounceEvent = (fn, wait = 1000, time) => {
   return (...args) => {
      const event = args[0];
      clearTimeout(time);
      time = setTimeout(() => fn(...args), wait, event);
   };
};
