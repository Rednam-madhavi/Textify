export default function About(props) {

    const myStyle = {
        color: props.mode === 'dark' ? 'white' : '#161616',
        backgroundColor: props.mode === 'dark' ? '#161616' : 'white',
    }

    return (
        <div className='container my-3' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>About TextUtils</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is designed with a user-friendly interface and offers various customization options to fit your specific needs. Whether you're cleaning up data, preparing reports, or automating text-based tasks, TextUtils makes text processing efficient and effortless.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to Use?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Yes</strong>, TextUtils is completely free to use! It provides a wide range of features without any cost, making it accessible for individuals and teams alike. You can take advantage of its powerful text processing capabilities without worrying about subscription fees or hidden charges. Feel free to explore and utilize TextUtils for all your text manipulation needs!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Browser Compatible?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Yes</strong>, TextUtils is designed to be fully compatible with modern web browsers. Whether you're using Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, or any other popular browser, TextUtils ensures a seamless experience. Its web-based interface is optimized for performance and responsiveness, making it easy to access and use its features from any device with an internet connection. Enjoy a consistent and efficient text processing experience across all your browsing platforms!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
