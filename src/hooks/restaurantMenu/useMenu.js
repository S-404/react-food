import {useMemo} from "react";

export const useFilteredMenu = (menu, attr, filter) => {
    return useMemo(() => {
        let resultArray = []
        if (menu.length) {
            resultArray = menu.filter(item => {
                return item[attr] === filter
            })
        }
        return resultArray
    }, [menu])
}