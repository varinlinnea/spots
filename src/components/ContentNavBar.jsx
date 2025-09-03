import ViewButton from "./ViewButton"
import SpotSearchBar from "./SpotSearchBar"
import "../styles/mainContentContainer.css"

export default function ContentNavBar({ setCurrentContentView }) {

    return (
        <div id="contentNavBar">
            <SpotSearchBar />
            <ViewButton setCurrentContentView={setCurrentContentView} />
        </div>
    )
}