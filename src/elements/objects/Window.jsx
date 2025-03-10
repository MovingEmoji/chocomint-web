import '../../css/WindowCSS.css'

function Window(props) {
    return(
        <div className="windowBox" style={{'width': props.size + "px"}}>
            <div className="windowHeader">
                <div className="circle1" style={{'backgroundColor': '#FF5C67'}}></div>
                <div className="circle1" style={{'backgroundColor': '#FFE887'}}></div>
                <div className="circle1" style={{'backgroundColor': '#8EEA43'}}></div>
            </div>
            <img src= {props.img} alt="window"></img>
        </div>
    );
}

export default Window;