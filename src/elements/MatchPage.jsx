import { useParams } from 'react-router-dom';
import '../css/MatchPageCSS.css'
import { useEffect } from 'react';
import { axiosInstance } from './ChocomintMain';

function MatchPage() {
    const {id} = useParams();
    useEffect(() => {
        axiosInstance.get("/match/info/" + id)
            .then(res => {
                console.log(res.data);
            })
    }, [])


    return (
        <main>

        </main>
    )
    // const [infos, setJson] = useState([]);
    // const [inventories, setInventories] = useState([]);
    // useEffect(() => {
    //     axios.get('https://api.chocomint.cc/match/info/' + id)
    //     .then(response => {
    //         setJson(response.data);
    //     })
    //     .catch(error => {
    //         console.log('api error.', error);
    //     });
    //     axios.get('https://api.chocomint.cc/match/inventory/' + id)
    //     .then(response => {
    //         setInventories(response.data);
    //     })
    //     .catch(error => {
    //         console.log('api error.', error);
    //     });
    // }, [])
    // console.log(infos)
    // console.log(inventories)
    // return(
    //     <div class="MainContainer">
    //         <h1>- Match history -</h1>
    //         <div class="MatchCard-Base">
    //             <div class="MatchCard">
    //                 <div class="WinnerCard">
    //                     <img src={ "http://cravatar.eu/helmavatar/" + infos["winner"] + "/400.png"} alt="WinnerHead" />   
    //                     <article>
    //                         <h2>{ infos["winner"] }</h2>
    //                         <a href={ "https://ja.namemc.com/profile/" + infos["winnerUUID"] } >{ infos["winnerUUID"] }</a>
    //                     </article>
    //                 </div>
    //                 <h1>vs</h1>
    //                 <div class="LoserCard">
    //                     <img src={ "http://cravatar.eu/helmavatar/" + infos["loser"] + "/400.png"} alt="LoserHead" />   
    //                     <article>
    //                         <h2>{ infos["loser"] }</h2>
    //                         <a href={ "https://ja.namemc.com/profile/" + infos["loserUUID"] } >{ infos["loserUUID"] }</a>
    //                     </article>
    //                 </div>
    //             </div>
    //         </div>
    //         <Ribbon text="- WINNER -" />
    //         <div class="WinnerInfo-Base">
    //             <div class="WinnerContentBox">
    //                 <h1>{ infos["winner"] }</h1>
    //                 <img src={ "http://cravatar.eu/head/" + infos["winner"] + "/400.png"} alt="WinnerHead3D" />
    //             </div>
    //             <div class="WinnerContentBox">
    //                 <div class="WinnerInfo">
    //                     <h1>Match infomation</h1>
    //                     <h2>{ "Duration : " + infos["duration"] }</h2>
    //                     <h2>{ "PotDifference : " + infos["pots"] +  "pot(s)" }</h2>
    //                 </div>
    //             </div>
    //         </div>
    //         <Ribbon text="- INVENTORIES -" />
    //     </div>
    // );
    
}

export default MatchPage;