export const NAMES = {
    brand: 'brand',
    model: 'model',
    year: 'year',
    price: 'price'
}

export const FIELD = {
    [NAMES.brand]: 'Марка телефона:',
    [NAMES.model]: 'Модель телефона:',
    [NAMES.year]: 'Год выпуска:',
    [NAMES.price]: 'Цена:'
}

export const PATTERN = {
    [NAMES.brand]:/^[а-яА-ЯёЁa-zA-Z0-9]+$/,
    [NAMES.model]: /^[а-яА-ЯёЁa-zA-Z0-9]+$/,    
    [NAMES.year]: /\d{4}/,   
    [NAMES.price]: /^[0-9]+$/
}

export const MESSAGE = 'Заполните поле'