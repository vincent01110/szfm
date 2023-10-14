
export function calculateDiscount(product, discount){
    if(product.discount_id){
        const discountedPrice =  Math.floor((product.price * (1 - (discount[0].percentage /100))))
        return discountedPrice
    } else {
        return ''
    }
}
