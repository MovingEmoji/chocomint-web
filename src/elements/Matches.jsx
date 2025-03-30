import background from '../images/background.png'
import '../css/MatchesCSS.css'
import { useEffect, useState } from 'react';
import { axiosInstance } from './ChocomintMain';
function Matches() {

    const [matches, setMatches] = useState();

    useEffect(() => {

        var matchinfos = {};

        function getJson() {
            axiosInstance.get("/dynamicvalue")
                .then(res => {
                    var json = res.data;
                    var matchnum = json.matchnumber;
                    for(var i = 1; i <= matchnum; i++) {
                        axiosInstance.get("/match/info/" + i)
                            .then( res => {
                                var json = res.data;
                                var config = res.config;
                                var url = config.url.split("/")[3];
                                matchinfos[url] = json;

                                if(matchnum === Object.keys(matchinfos).length) {
                                    var num = Object.keys(matchinfos).length;
                                    var cnt = Math.ceil(num / 10);
                                    var matchesbody = []
                                    for(var i = 0; i < cnt; i++) {
                                        matchesbody.push(getMatch(num - i * 10, i));
                                    }
                                    setMatches(matchesbody);
                                }

                            }).catch(() => {
                                console.log("no data");
                            })
                    }
                })
        }

        function getMatch(num, num2) {
            var bodys = [];
            for(let i = num; i > 0; i--) {
                if(num - i >= 10) {
                    break;
                }
                var json = matchinfos[i];
                bodys.push(
                    <div className="data" key={ i } onClick={ () => {window.location.href="/match/" + i} }>
                        <p>{ i }</p>
                        <div className="profile">
                            <img src={ "http://cravatar.eu/helmavatar/" + json.winner + "/400.png"} alt="userHead" />
                            <p style={{paddingRight : "0"}}>{ json.winner }</p>
                            <p>vs</p>
                            <img src={ "http://cravatar.eu/helmavatar/" + json.loser + "/400.png"} alt="userHead" />
                            <p>{ json.loser }</p>
                        </div>
                    </div>
                );
            }
            return(
                <div className="match" key={ "matches" + num2 } style={{ animation: "slideinBottom " + (num2 + 1) + "s"}}>
                    <div className="title">
                        <p>RECENTMATCHES</p>
                    </div>
                    <div className="datas">
                        { bodys }
                    </div>
                </div>
            );
        }

        getJson();
        const interval = setInterval(() => {
            getJson();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return(
        <main>
            <img src={background} alt='background' className='back'/>
            <div className="flexContainer">
                <div className="mainContent">
                    <div className="matches">
                        <div className="matchRow">
                            { matches }
                        </div>
                    </div>
                    <p>Clear when server restart</p>
                </div>
            </div>
        </main>
    );
}

export default Matches;