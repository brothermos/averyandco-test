import { useState } from "react";

function App() {
    /* state to calculate */
    let [factorial, setFactorial] = useState(1);
    let [result, setResult] = useState(1);

    let calFactorial = (event) => {
        event.preventDefault();
        result = 1;

        if (factorial === 1 || factorial === "") {
            alert("Please enter a valid Factorial");
        }
        for (let i = 1; i <= factorial; i++) {
            result *= i;
        }
        setResult(result);
    };

    return (
        <div className=" text-center mt-52">
            <h1 className="text-6xl font-bold text-[#cf2027]">
                Factorial Calculator
            </h1>
            <form className="mt-16">
                <p className="text-3xl mb-6 ">Enter a number</p>
                <input
                    className="w-60 h-9 rounded-lg text-xl text-right"
                    type="number"
                    placeholder="Enter a number"
                    value={factorial}
                    onChange={(event) => setFactorial(event.target.value)}
                />
                <br />
                <button
                    type="submit"
                    onClick={calFactorial}
                    className="text-white text-2xl mt-6 px-2 py-1 bg-[#cf2027] rounded-lg"
                >
                    Submit
                </button>
                <p className="mt-6 text-2xl">
                    The factorial of the number {factorial} is {result}
                </p>
            </form>
        </div>
    );
}

export default App;
