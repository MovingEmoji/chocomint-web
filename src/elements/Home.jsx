import background from '../images/background.png'
import Window from './objects/Window';
import window1 from '../images/window1.png'
import window2 from '../images/window2.png'
import '../css/HomeCSS.css'
import { useEffect, useState } from 'react';
import { axiosInstance } from './ChocomintMain';
function Home () {

    const [onlines, setOnlines] = useState(0);

    useEffect(() => {
        function getJson() {
            axiosInstance.get("/dynamicvalue")
                .then(res => {
                    var json = res.data;
                    setOnlines(json.onlines);
                });
        }
        getJson();
        const interval = setInterval(() => {
            getJson();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <main>
            <img src={background} alt='background' className='back'/>
            <div className="flexContainer">
                <div className="mainContent">
                    <div className="mainWindows">
                        <div className="secondWindow">
                            <Window img={window2} size="600" alt='window'/>
                        </div>
                        
                        <div className="firstWindow">
                            <Window img={window1} size="650" alt='window'/>
                        </div>
                    </div>
                    <h1>-CHOCOMINT NETWORK-</h1>
                    <h2>{ onlines } / 100 players</h2>
                    <h3>-what is chocomint?-</h3>
                    <div className="about">
                        <p>A new PVP server in Japan.</p>
                        <p>BedRock version and Java version can be played together.</p>
                    </div>
                    <h3>-how to play?-</h3>
                    <div className="about">
                        <p>Server Address : chocomint.cc</p>
                        <p>Bedrock Address : be.chocomint.cc</p>
                        <p className="minecraftLeftWrapper">Server Name</p>
                        <p className="minecraftWrapper">ChocomintNetwork</p>
                        <p className="minecraftLeftWrapper">Server Address</p>
                        <p className="minecraftWrapper">chocomint.cc</p>
                        <p className="minecraftButton">Connect to Server</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;