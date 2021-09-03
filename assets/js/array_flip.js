// 1. Напишите аналог php-функции array_flip на JavaSrcipt (ключи и значения меняются местами). 
let arr = {
  a: 1,
  b: 2,
  с: 3,
}

function array_flip(arr) {
  let temp = {}

  for (let key in arr) {
    temp[arr[key]] = key
  }

  return temp
}

document.querySelector('.datumn').innerHTML = `<strong><pre>${JSON.stringify(array_flip(arr), null, 2)}</pre></strong>`

