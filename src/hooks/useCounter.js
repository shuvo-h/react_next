import { useRef, useState } from "react"

const useCounter = (initialvalue) =>{
    // const count = useRef(0);
    const [customCount,setCustmCount] = useState(initialvalue)
    const [prduct,setProduct] = useState({})

    const countHandler = (value) =>{
        // count.current.value = count.current.value + 1
        const newValue = customCount + value
        if (newValue > 115) {
            alert("Limit exceed")
            return
        }
        setCustmCount(customCount + value)
    }
    const countProduct= (value) =>{
        setProduct(value)
    }

    return [customCount,countHandler,]
    // return {
    //     customCount,
    //     countHandler,
    //     prduct,
    //     countProduct
    // }
}

export default useCounter