// html файла нет, я искал через готовой ссылке и Chrome Dev Tools

// 1. находим по айди : таблица  `id="age-table"`.
let table = document.getElementById('age-table')

// 2. из таблицы даного, находим все существующие label
table.getElementsByTagName('label')

// 3. Задача нахождения td by tag
table.rows[0].cells[0]
table.getElementsByTagName('td')[0]

// 4. по имени name search
let form = document.getElementsByName('search')[0]
// второй вариант 
//document.querySelector('form[name="search"]')

// 5. Нам первый нужно найти , а в массиве первый [0] 
form.getElementsByTagName('input')[0]

// 6. в последнем просто чекаем все и чтобы last найти юзаем .length-1
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]