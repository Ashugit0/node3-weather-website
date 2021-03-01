var product = {
    label: 'Comic',
    stock: 222
}



const trans = (type, { label, stock = 0 } = {}) => {
    console.log(type,label,stock)
}

trans('order',product)