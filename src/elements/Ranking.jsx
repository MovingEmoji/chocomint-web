import background from '../images/background.png'
import '../css/RankingCSS.css'
import { useEffect, useState } from 'react';
import { axiosInstance } from './ChocomintMain';
function Ranking() {

    const [rankings, setRankings] = useState();
    const [lastref, setLastRef] = useState();

    useEffect(() => {
        function getJson() {
            axiosInstance.get("/dynamicvalue")
                .then(res => {
                    var json = res.data;
                    setLastRef(json.lastrankref / 20);
                    var ranking = json.ranking;
                    var rankingsbody = []
                    for(var kit in ranking) {
                        rankingsbody.push(getRanking(kit, ranking[kit], rankingsbody.length))
                    }
                    setRankings(rankingsbody);
                });
        }
        getJson();
        const interval = setInterval(() => {
            getJson();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function getRanking(kit, datas, len) {
        var bodys = [];
        for(var data in datas) {
            var json = datas[data];
            bodys.push(
                <div className="data" key={ kit + data }>
                    <div className="profile">
                        <p>{ data }</p>
                        <img src={ "http://cravatar.eu/helmavatar/" + json.username + "/400.png"} alt="userHead" />
                        <p>{ json.username }</p>
                    </div>
                    <div className="rps">
                        <p className="rp" key="rp1">{ json.rp }</p>
                        <p className="rp" key="rp2">RP</p>
                    </div>
                </div>
            );
        }
        return(
            <div className="ranking" key={ kit }>
                <div className="title">
                    <p>{ kit }</p>
                </div>
                <div className="datas">
                    { bodys }
                </div>
            </div>
        );
    }

    return(
        <main>
            <img src={background} alt='background' className='back'/>
            <div className="flexContainer">
                <div className="mainContent">
                    <div className="rankings">
                        <div className="rankingRow">
                            { rankings }
                        </div>
                    </div>
                    <p>Last Refreshed: { lastref }</p>
                </div>
            </div>
        </main>
    );
}

export default Ranking;