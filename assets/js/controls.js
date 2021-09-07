let resizable = document.querySelector('.resizable'),
    splitterTop = document.querySelector('.splitter-top'),
    splitterRight = document.querySelector('.splitter-right'),
    splitterBottom = document.querySelector('.splitter-bottom'),
    splitterLeft = document.querySelector('.splitter-left'),
    changeTextarea = document.querySelector('#changed'),
    leftSide = document.querySelector('.left-side > p'),
    editDiv = document.querySelector('#editDiv'),
    upDiv = document.querySelector('.controls > div')

splitterTop.addEventListener('mousedown', initDragYT, false)
splitterBottom.addEventListener('mousedown', initDragYB, false)
splitterLeft.addEventListener('mousedown', initDragXL, false)
splitterRight.addEventListener('mousedown', initDragXR, false)


let startX, startY, startWidth, startHeight

function initDragXL(e) {
    startX = e.clientX
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10)
    startMargin = parseInt(document.defaultView.getComputedStyle(resizable).marginLeft, 10)
    document.documentElement.addEventListener('mousemove', doDragXL, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
}

function initDragXR(e) {
    startX = e.clientX
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10)
    document.documentElement.addEventListener('mousemove', doDragXR, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
}

function initDragYT(e) {
    startY = e.clientY
    startHeight = parseInt(document.defaultView.getComputedStyle(resizable).height, 10)
    startMargin = parseInt(document.defaultView.getComputedStyle(resizable).marginTop, 10)
    document.documentElement.addEventListener('mousemove', doDragYT, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
}

function initDragYB(e) {
    startY = e.clientY
    startHeight = parseInt(document.defaultView.getComputedStyle(resizable).height, 10)
    document.documentElement.addEventListener('mousemove', doDragYB, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
}

function doDragXL(e) {
    resizable.style.width = (startWidth - e.clientX + startX) + 'px'
    resizable.style.marginLeft = (startMargin + e.clientX - startX) + 'px'
}

function doDragXR(e) {
    resizable.style.width = (startWidth + e.clientX - startX) + 'px'
}

function doDragYT(e) {
    resizable.style.height = (startHeight - e.clientY + startY) + 'px'
    resizable.style.marginTop = (startMargin + e.clientY - startY) + 'px'
}

function doDragYB(e) {
    resizable.style.height = (startHeight + e.clientY - startY) + 'px'
}

function stopDrag() {
    document.documentElement.removeEventListener('mousemove', doDragXR, false)
    document.documentElement.removeEventListener('mousemove', doDragXL, false)
    document.documentElement.removeEventListener('mousemove', doDragYB, false)
    document.documentElement.removeEventListener('mousemove', doDragYT, false)
    document.documentElement.removeEventListener('mouseup', stopDrag, false)
}


changeTextarea.innerText = leftSide.innerText
changeTextarea.onkeyup = () => {
    leftSide.innerText = changeTextarea.value
}

editDiv.innerText = upDiv.innerText
editDiv.onkeyup = () => {
    upDiv.innerText = editDiv.value
}
