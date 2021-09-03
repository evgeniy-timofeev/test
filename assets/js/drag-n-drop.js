let dropZone = document.querySelector('.uploader'),
    dataZone = document.querySelector('.dataZone'),
    data,
    maxFileSize = 1000000

let upload = (files) => {
    let formData = new FormData(),
        xhr = new XMLHttpRequest(),
        x

    for (x = 0; x < files.length; x++) {
        formData.append('file[]', files[x])
    }

    xhr.onload = function () {
        data = this.responseText
        dataZone.innerHTML = data
    }

    xhr.upload.addEventListener('progress', uploadProgress, false)
    xhr.onreadystatechange = stateChange
    xhr.open('post', 'model/recursion.php')
    xhr.send(formData)
}

if (typeof (window.FileReader) == 'undefined') {
    dropZone.classList.add('error')
}

if (dropZone) {

    dropZone.ondragover = () => {
        dropZone.classList.remove('drop')
        dropZone.classList.add('hover')
        return false
    }
    
    dropZone.ondragleave = () => {
        dropZone.classList.remove('hover')
        return false
    }
    
    dropZone.ondrop = function (event) {
        event.preventDefault()

        dropZone.classList.remove('hover')
        dropZone.classList.add('drop')

        let file = event.dataTransfer.files[0]
        
        if (file.size > maxFileSize) {
            textZone.classList.remove('error')
            return false
        }

        upload(event.dataTransfer.files)
    }
}

function uploadProgress(event) {
    let percent = parseInt(event.loaded / event.total * 100)
}

function stateChange(event) {
    if (event.target.readyState == 4) {
        if (event.target.status == 200) {
            dropZone.classList.add('drop')
        } else {
            dropZone.classList.add('error')
        }
    }
}