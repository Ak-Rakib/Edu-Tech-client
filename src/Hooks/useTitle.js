import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=> {
        document.title = `${title}-Edu Tech`
    },[title]);
}

export default useTitle;