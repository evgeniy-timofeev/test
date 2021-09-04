let resizable = document.querySelector('.resizable'),
    resizerX = document.querySelector('#resizableX'),
    resizerY = document.querySelector('#resizableY'),
    changeTextarea = document.querySelector('#changed'),
    leftSide = document.querySelector('.left-side > p'),
    editDiv = document.querySelector('#editDiv'),
    firstDiv = document.querySelector('#control > div')

resizerX.addEventListener('mousedown', initDragX, false)
resizerY.addEventListener('mousedown', initDragY, false)


let startX, startY, startWidth, startHeight;

function initDragX(e) {
    startX = e.clientX
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10)
    document.documentElement.addEventListener('mousemove', doDragX, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
}

function doDragX(e) {
    resizable.style.width = (startWidth + e.clientX - startX) + 'px'
}

function initDragY(e) {
    startY = e.clientY
    startHeight = parseInt(document.defaultView.getComputedStyle(resizable).height, 10)
    document.documentElement.addEventListener('mousemove', doDragY, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
}

function doDragY(e) {
    resizable.style.height = (startHeight + e.clientY - startY) + 'px'
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDragX, false)
    document.documentElement.removeEventListener('mousemove', doDragY, false)
    document.documentElement.removeEventListener('mouseup', stopDrag, false)
}


changeTextarea.innerText = leftSide.innerText
changeTextarea.onchange = (e) => {
    leftSide.innerText = changeTextarea.value
}

editDiv.innerText = firstDiv.innerHTML
editDiv.onchange = (e) => {
    firstDiv.innerHTML = editDiv.value
}
