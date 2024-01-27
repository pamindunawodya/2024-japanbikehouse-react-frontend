import React, {JSX} from "react";
import {Link} from "react-router-dom";

function SkipPages(): JSX.Element{
    return (

        <ul className={'flex items-center justify-center gap-[4vw] '} >
            <li><button> Previous </button></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li><button>Next</button></li>
        </ul>

    )
}
export default SkipPages;