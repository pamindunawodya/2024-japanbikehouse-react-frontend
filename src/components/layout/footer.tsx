import React from "react";
import {Link} from 'react-router-dom';

class Footer extends React.Component<any, any>{

    render() {
        return(
          <footer className={' bg-blue-100  '}>



              <div className={ ' mt-2 text-center'}>
                  Copyright @ 2024 Japan Bike මහගෙදර.lk
              </div>
          </footer>
        );
    }
}
export default Footer;