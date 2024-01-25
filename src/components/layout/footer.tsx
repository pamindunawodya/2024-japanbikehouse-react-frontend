import React from "react";
import {Link} from 'react-router-dom';

class Footer extends React.Component<any, any>{

    render() {
        return(
          <footer className={' bg-blue-100  '}>


              <ul className={'flex items-center justify-center gap-[4vw]'} >
                  <li><button> Previous </button></li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li><button>Next</button></li>
              </ul>

              <div className={ ' mt-5 text-center'}>
                  Copyright @ 2024 Japan Bike මහගෙදර.lk
              </div>
          </footer>
        );
    }
}
export default Footer;