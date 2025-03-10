import '../../css/RibbonCSS.css'
function Ribbon(props) {
    return(
        <div class="RibbonWrapper">
            <div class="Ribbon">
                <h3>{ props.text }</h3>
            </div>
        </div>
    );
}
export default Ribbon;