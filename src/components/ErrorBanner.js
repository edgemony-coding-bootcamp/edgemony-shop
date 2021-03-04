
import React, { useState } from "react";
import "./ErrorBanner.css"

export default function ErrorBanner({changeStateError,error}) {
    const [isClosed, setClosed] = useState(false)
    return (
        !isClosed &&
        <div className="banner">
            <span>{error}</span>
            <br></br>
            <button type="button" className="btnChangeState" onClick={()=>changeStateError()}>Retry</button>
            <button type="button" className="btnCloseBanner" onClick={()=>setClosed(!isClosed)}>X</button>
        </div>
    )
}
