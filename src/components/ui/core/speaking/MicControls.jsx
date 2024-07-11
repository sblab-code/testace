import React, { useEffect } from "react";


const MicControls = () => {

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                window.localStream = stream;
                window.localAudio.srcObject = stream;
                window.localAudio.autoplay = true;
            })
            .catch((err) => {
                console.error(`you got an error: ${err}`);
            });
    }, []);

    const handlePlay = () => {

    }

    return (
        <div>
            <button onClick={handlePlay}>Play</button>
        </div>
    );
};

export default MicControls;