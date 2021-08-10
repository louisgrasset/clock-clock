import './Separator.scss';
import React, { useEffect, useState } from 'react';

function Separator() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const interval = setInterval(() =>
            setShow(!show), 500
        );
        return () => clearInterval(interval);
    }, [show, setShow])
    return (
        <div className={"separator" + (show ? "" : " separator--hidden")}>:</div>
    )
}

export default Separator;