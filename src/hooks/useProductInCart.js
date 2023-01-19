import {useMemo} from "react";

export function useTotalAmount(cartItems) {
    return useMemo(() => {
        return cartItems
            .reduce((prev, curr) => prev + (curr?.price || 0) * (curr?.cartItemQty || 0)
                , 0)
    }, [cartItems])
}

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
    }, [product, cartItems])

}