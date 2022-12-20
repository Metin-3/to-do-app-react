import { useRef } from "react";


const Form = () => {

    const inputHeight = useRef(null);
    const inputWidth = useRef(null);

    const height = function () {
        if (inputHeight.current.value > 700) {

            console.log(inputHeight.current.value);
        } else {
            alert("700 den boyuk eded daxil edin")
        }

    }


    const width = function () {
        if (inputWidth.current.value > 700) {

            console.log(inputWidth.current.value);
        } else {
            alert("700 den boyuk eded daxil edin")
        }

    }

    return (
        <div>
            <input ref={inputHeight} type="text" placeholder='Enter width' />
            <input ref={inputWidth} type="text" placeholder='Enter height' />

            <button onClick={height}>Click height</button>
            <button onClick={width}>Click width</button>

        </div>
    )
}

export default Form