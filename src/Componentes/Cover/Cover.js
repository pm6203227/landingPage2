import React from 'react'
import "./Cover.css";
import imageherodesktop from "../../Media/imageherodesktop.png"
import client1 from "../../Media/client1.svg";
import client2 from "../../Media/client2.svg";
import client3 from "../../Media/client3.svg";
import client4 from "../../Media/client4.svg";
import mobile from "../../Media/mobile.png";
import ft from "../../Media/ft.png";

const Cover = () => {
  return (
    <div className='container-fluid'>
        <div className='row'> 
        <div className='col-md-6'>
          <br/>
          <br/>
          <br/>
                <img className='mb1 mobile img-responsive text-center' src={mobile} alt="bckg" />
                <h1 className='cn'><b>Make</b></h1>
                <h1 className='cn1'><b>remote work</b></h1>
                <h1 className='zx'><b>Make remote work</b></h1>
                <p className='bm text-justify'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button type="button" className="bt btn btn-outline-secondary btn-lg"><b>Learn more</b></button>
                <br />
                <br />
                <br />
                <br />
                <div className='row'>
                <div className='col-xs-3 col-md-3'>
                <img className='jk1 img-responsive' src={client2} alt="bckg" />
                </div>
                <div className='col-xs-3 col-md-3'>
                <img className='jk2 img-responsive' src={client1} alt="bckg" />
                </div>
                <div className='col-xs-3 col-md-3'>
                <img className='jk3 img-responsive' src={client4} alt="bckg" />
                </div>
                <div className='col-xs-3 col-md-3'>
                <img className='jk4 img-responsive' src={client3} alt="bckg" />
                </div>
                <img className="v img resposive" src={ft} alt="ft" />
                </div>
            </div> 
            <div className='col-md-6 container-fluid'>
                <img className='e img-responsive' src={imageherodesktop} alt="bckg" />
            </div>
        </div>
    </div>
  )
}

export default Cover