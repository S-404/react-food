import {useMemo} from "react";

export default function useProductInCart(product, cartItems) {
    return useMemo(() => {
        let result = {};
        if (product.id && cartItems.length) {
            let index = cartItems.findIndex(item => item.id === product.id)
            if (index !== -1) {
                result = cartItems[index]
            }
        }
        return result
    }, [cartItems])

}