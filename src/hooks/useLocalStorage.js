import { useState } from "react"

const useLocalStorage = (item) => {
    const [value, setValue] = useState(() => {
        const lv = localStorage.getItem(item)
        if (lv) {
            return lv
        }
        localStorage.setItem(item, "")
        return ""
    })

    const changeValue = (v) => {
        setValue(() => v)
        localStorage.setItem(item, v)
    }

    return [value, changeValue]
}

export default useLocalStorage