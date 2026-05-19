import { useState } from "react";

const TogglePara = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                Toggle
            </button>

            {show && (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis sit et amet est eveniet hic quos autem necessitatibus quidem.
                </p>
            )}
        </div>
    )
}

export default TogglePara;