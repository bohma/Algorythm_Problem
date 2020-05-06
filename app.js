let available = [240, 360, 720],
    allowed = [240, 360],
    prefered = ['any', 720],
    returns = []

function attempt(available, allowed, prefered) {

    available.sort((a, b) => a - b)//Cортируем по возрастанию элементы массива
    allowed.sort()                 //Сортируем по алфавиту (Для случая с any)
        .sort((a, b) => a - b)
    prefered.sort()
        .sort((a, b) => a - b)

    let arr = available.filter((item) => { //Отсеиваем значения которые не будут в ответе запрос
        for (let itemAllowed of allowed) {
            if (item == itemAllowed || itemAllowed == 'any') { //Если элемент массива available совпадает с allowed,
                return itemAllowed                             //Тогда этот элемент попадает в новый массив для дальнейшего сравнения 
            }                                                  //itemAllowed == 'any' - если 'any'тогда элементы попадают в новый массив
        }
    })
    for (let itemResult = 0; itemResult < arr.length; itemResult++) {
        for (let itemPrefered = 0; itemPrefered < prefered.length; itemPrefered++) {
            if (arr[itemResult] == prefered[itemPrefered] || prefered[itemPrefered] == 'any') { //Если элемент совпадает с желаемым                                                              
                returns.push(arr[itemResult])                                                   //тогда push в наш финальный массив returns
                break
            }
            if (arr[itemResult] < prefered[itemPrefered] && itemResult == (arr.length - 1)) { //Если элемент нового массива меньше (это делается для того чтобы 
                returns.push(arr[itemResult])                                                //при несовпадении желаемого запушить больший результат)
                break                                                                       //itemResult == (arr.length - 1) чтобы запушить последний(больший тк они отсортированы)элемент
            }
            if (arr[itemResult] != prefered[itemPrefered]//Если элемент нового массива несовпадает
                && itemResult == (arr.length - 1)
                && (prefered.length) == itemPrefered + 1
                && prefered.length == arr.length) {
                returns.push(arr[itemResult])
                break
            }
        }
    }
    return returns
}
console.log(attempt(available, allowed, prefered))
