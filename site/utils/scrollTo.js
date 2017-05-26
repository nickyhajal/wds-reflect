const scrollToElement = element => {
  const el = document.getElementById(element);
  // const yPos = el.getClientRects()[0].top;
  let yScroll = window.scrollY;
  const interval = setInterval(() => {
    yScroll -= 10;
    window.scroll(0, yScroll);
    if (el.getClientRects()[0].top >= 0) {
      clearInterval(interval);
    }
  }, 5);
};

export default scrollToElement;

// //example easing functions
// const linearEase = (
//   currentIteration,
//   startValue,
//   changeInValue,
//   totalIterations
// ) => changeInValue * currentIteration / totalIterations + startValue;
// const easeOutCubic = (
//   currentIteration,
//   startValue,
//   changeInValue,
//   totalIterations
// ) =>
//   changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) +
//   startValue;

// const scrollToItemId = (containerId, scrollToId) => {
//   const scrollContainer = document.getElementById(containerId);
//   const item = document.getElementById(scrollToId);

//   //with animation
//   const from = scrollContainer.scrollTop;
//   let by = item.offsetTop - scrollContainer.scrollTop;
//   if (from < item.offsetTop) {
//     if (
//       item.offsetTop >
//       scrollContainer.scrollHeight - scrollContainer.clientHeight
//     ) {
//       by =
//         scrollContainer.scrollHeight -
//         scrollContainer.clientHeight -
//         scrollContainer.scrollTop;
//     }
//   }

//   let currentIteration = 0;

//   /**
//          * get total iterations
//          * 60 -> requestAnimationFrame 60/second
//          * second parameter -> time in seconds for the animation
//          **/
//   const animIterations = Math.round(60 * 0.5);

//   (function scroll() {
//     const value = easeOutCubic(currentIteration, from, by, animIterations);
//     scrollContainer.scrollTop = value;
//     currentIteration += 1;
//     if (currentIteration < animIterations) {
//       requestAnimationFrame(scroll);
//     }
//   })();

//   //without animation
//   //scrollContainer.scrollTop = item.offsetTop;
// };

// export default scrollToItemId;
