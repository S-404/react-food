import {useMemo} from "react";

export const usePopular = (menu) => {
    return useMemo(() => {
        let resultArray = []
        if (menu.length) {
            resultArray = menu.slice().sort((a, b) => {
                if (a.rating > b.rating) return -1
                if (a.rating < b.rating) return 1
                return 0
            })
        }
        return resultArray.slice(0, 10)
    }, [menu])
}

export const useFilteredMenu = (menu, attr, filter) => {
    return useMemo(() => {
        let resultArray = []
        if (menu.length) {
            resultArray = menu.slice().filter(item => {
                return item[attr] === filter
            })
        }
        return resultArray
    }, [menu])
}