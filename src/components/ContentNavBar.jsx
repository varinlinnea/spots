
import "../styles/mainContentContainer.css"

export default function ContentNavBar({ setCurrentContentView }) {

    const clickHandler = (e) => {
        setCurrentContentView(e.target.value);
    }

    return (
        <div id="contentNavBar">
            <form>
                <input placeholder="Search spots..."/>
            </form>
            <div>
                <button value="mapView" onClick={clickHandler}>MAP</button>
                <button value="listView" onClick={clickHandler}>LIST</button>
            </div>
        </div>
    )
}