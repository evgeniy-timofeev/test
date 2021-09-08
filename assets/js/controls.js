$(function () {
    let leftSide = document.querySelector('.left-side > p'),
        upSide = document.querySelector('.right-side-up > p'),
        changer1 = document.querySelector('#changer1'),
        changer2 = document.querySelector('#changer2')

    $(".resizable1").resizable({
            autoHide: true,
            handles: 'e',
            resize: (e, ui) => {
                let parent = ui.element.parent(),
                    remainingSpace = parent.width() - ui.element.outerWidth(),
                    divTwo = ui.element.next(),
                    divThree = divTwo.next(),
                    divTwoWidth = (remainingSpace - (divTwo.outerWidth() - divTwo.width())) / parent.width() * 100 + "%",
                    divThreeWidth = (remainingSpace - (divThree.outerWidth() - divThree.width())) / parent.width() * 100 + "%"
                divTwo.width(divTwoWidth)
                divThree.width(divThreeWidth)
            },
            stop: (e, ui) => {
                let parent = ui.element.parent()
                ui.element.css(
                    {
                        width: ui.element.width() / parent.width() * 100 + "%",
                    })
            }
    })

    $(".resizable2").resizable({
            autoHide: true,
            handles: 's',
            resize: (s, ui) => {
                let parent = ui.element.parent(),
                    remainingSpace = parent.height() - ui.element.outerHeight(),
                    divTwoS = ui.element.next(),
                    divTwoHeight = (remainingSpace - (divTwoS.outerHeight() - divTwoS.height())) / parent.height() * 100 + "%"
                divTwoS.height(divTwoHeight)
            },
            stop: (e, ui) => {
                let parent = ui.element.parent()
                ui.element.css(
                    {
                        height: ui.element.height() / parent.height() * 100 + "%",
                    })
            }
    })

    changer1.innerText = leftSide.innerText
    changer1.onkeyup = () => {
        leftSide.innerText = changer1.value
    }

    changer2.innerText = upSide.innerText
    changer2.onkeyup = () => {
        upSide.innerText = changer2.value
    }
})
