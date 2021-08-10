import './Separator.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Separator() {
    const [show, setShow] = useState(true);
    const { theme } = useParams();
    useEffect(() => {
        const interval = setInterval(() =>
            setShow(!show), 500
        );
        return () => clearInterval(interval);
    }, [show, setShow])
    return (
        <div className={"separator" + (theme ? ` separator--${theme}` : "") + (show ? "" : " separator--hidden")}>:</div>
    )
}

export default Separator;