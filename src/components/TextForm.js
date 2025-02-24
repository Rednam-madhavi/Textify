import React, { useState } from 'react'

export default function TextForm(props) {

    const myStyle = props.mode === "light"
        ? {
            border: '0.1rem solid black',
            padding: '1rem',
            backgroundColor: 'white'
        }
        : {
            border: '0.1rem solid white',
            padding: '1rem',
            backgroundColor: '#161616',
            color: 'white'
        };

    const handleUpperCaseBtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Upper Case", "success");
    }

    const handleLowerCaseBtn = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lower Case", "success");
    }


    const handleCapilizedCaseBtn = () => {
        let newText = text.split(' ')
            .map(text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
            .join(' ')
        setText(newText);
        props.showAlert("Text is converted to Captilized Form", "success");
    }
    const handleCopyBtn = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text is Copied to Clipboard", "success");
    }

    const handleClearExtraSpacesBtn = (event) => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extraspaces from the text is Cleared", "success");
    }

    const handleClearBtn = (event) => {
        setText(event.target.value);
        props.showAlert("Textbox is Cleared", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container my-3'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} placeholder='Enter the text here...' onChange={handleOnChange} style={myStyle}>
                    </textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-outline-primary m-2`} onClick={handleUpperCaseBtn}>Convert the text to Upper Case</button>
                <button disabled={text.length === 0} className={`btn btn-outline-primary m-2`} onClick={handleLowerCaseBtn}>Convert the text to Lower Case</button>
                <button disabled={text.length === 0} className={`btn btn-outline-primary m-2`} onClick={handleCapilizedCaseBtn}>Convert the text to Captilized Form</button>
                <button disabled={text.length === 0} className={`btn btn-outline-primary m-2`} onClick={handleCopyBtn}>Copy the text to Clipboard</button>
                <button disabled={text.length === 0} className={`btn btn-outline-primary m-2`} onClick={handleClearExtraSpacesBtn}>Clear Extraspaces from the text</button>
                <button disabled={text.length === 0} className={`btn btn-outline-primary m-2`} onClick={handleClearBtn}>Clear the text</button>
            </div>

            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>
                    <strong>{text.length}</strong> Characters, <strong>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</strong> Words, <strong>{text.trim() === "" ? 0 : text.trim().split(/\n+/).length}</strong> Lines
                </p>
                <p>Approximate Reading Duration is <strong>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length * 0.008}</strong> Minutes</p>
                <h5>Preview</h5>
                <p rows="10" style={myStyle}
                >{text.length > 0 ? text : "Enter text to view a live preview..."}</p>
            </div >
        </>
    )
}
