// 2. Есть страница http://a.ru/1.php, которая содержит textarea с идентификатором id1. Напишите для этой страницы JavaScript-код, который по клику на эту textarea вставляет в неё содержимой страницы http://a.ru/1.txt . Можно использовать jquery-функции.
let textarea = document.querySelector('#id1')

async function ajaxToTextarea(url) {
    let response = await fetch(url)
    response.text().then(text => {
        textarea.value = text
    })
}


textarea.onclick = () => {
    ajaxToTextarea('/test.txt')
}
