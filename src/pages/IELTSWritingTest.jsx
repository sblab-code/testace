import React from "react";
// import WritingApp from "../context/WritingApp";


// const Writing = () => {
//     return (
//         <div>
//             <WritingApp />
//         </div>
//     );
// };

// export default Writing;


import { IELTSProvider } from "../context/ielts";
import IELTSWritingModule from "../components/ui/core/Writing/IELTSWriting";

const Writing = () => {
    return (
        <>
            <IELTSProvider>
                <IELTSWritingModule />
            </IELTSProvider>
        </>
    );
}

export default Writing;