import { useState } from "react";

const Body = () => {

    const [name, setName] = useState("School")

    return (
        <div className="flex">
            <div className="flex justify-content">
                <button className="btn">List</button>
                <span>{name}</span>
                <button className="btn">Create</button>
            </div>
        </div>
    )
}

export default Body;