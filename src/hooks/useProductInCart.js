import {useMemo} from "react";

export default function useProductInCart(product, cartItems) {
    return useMemo(() => {
        let result = false;
        if (product.id && cartItems.length) {
            result = cartItems.findIndex(item => item.id === product.id) !== -1
        }
        return result
    }, [cartItems])

}