import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `GameGalaxy | ${title}`;
    }, [title])
}

export default useTitle;