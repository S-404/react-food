import {useMemo} from "react";


export const useMenuCategories = (menu) => {
    return useMemo(()=>{
        const resultArray = []
        if(menu.length){
            for(let item of menu){
                if(!resultArray.includes(item.category)){
                    resultArray.push(item.category)
                }
            }
            resultArray.sort()
        }
        return  resultArray
    },[menu])
}