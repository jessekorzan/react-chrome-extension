/* global chrome */
import React, { useState } from 'react';
// you don't have to do your CSS like this, but one of the benefits of Shadow Dom
// is encapsulating your styles from the target webpage (prevent collusion, etc)
import { styles } from './_Extension.css';

function App() {
    const [ message, setMessage ] = useState(false);

    let handleMessage = async () => {
        // everything is "in view"  
        chrome.runtime.sendMessage({message: "click"}, function(response) {
            setMessage(response.message)
        });
    }
    return (
        <>
            <style>{styles}</style>
            <div id="ext--dialogue">
                <div>
                    <h1>Extension Shell</h1>
                    { message && <p>Random { message }</p>}
                    <button onClick={handleMessage}>Click Me</button>
                </div>
            </div>  
        </>
    )
}

export default App;