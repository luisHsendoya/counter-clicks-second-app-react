import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/Counter.css'


function Counter({numClicks}) {
    return(
        <p className="container text-dark bg-light  text-center mt-5 numclik">
            {numClicks}

        </p>
    );

}

export default Counter;