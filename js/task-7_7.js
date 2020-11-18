/*
Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>

*/
const inputFontRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");
inputFontRef.addEventListener("input", () => {
  inputTextRef.style.fontSize = `${inputFontRef.valueAsNumber}px`;
});
