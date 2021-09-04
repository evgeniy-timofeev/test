// 3. Напишите html+css+js страницу, содержащую поле ввода типа textarea, которое «убегает» от мышки, то есть перемещается в любое другое место при наведении на него курсора мыши. Можно использовать jquery-функции.
let elemLeft, elemTop, maxElemLeft, maxElemTop, elem

elem = document.querySelector('.runner')

maxElemLeft = document.querySelector('#element').clientWidth - elem.offsetWidth;
maxElemTop = document.querySelector('#element').clientHeight - elem.offsetHeight;

elem.onmousemove = () => {
    elemLeft = Math.random() * maxElemLeft;
    elem.style.left = elemLeft + 'px';
    elemTop = Math.random() * maxElemTop;
    elem.style.top = elemTop + 'px';
}