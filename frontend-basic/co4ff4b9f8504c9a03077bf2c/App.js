import React from "react"
import boxes from "./boxes"

export default function App() {
    const [squares, setSquaures] = React.useState(boxes);
    const squareEl = squares.map(sq => (
        <div className="box" key={sq.id}></div>
    ))
    return (
        <div>
            hello
            <main>{squareEl}</main>
        </div>
    );
}
