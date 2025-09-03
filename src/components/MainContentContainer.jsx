import { useState } from 'react';
import ContentNavBar from './ContentNavBar';
import MainContent from './MainContent';
import '../styles/mainContentContainer.css'

export default function MainContentContainer({ spots, setSpots }) {

    const [currentContentView, setCurrentContentView] = useState('mapView');

    return (
        <div className="mainContentWrapper">
            <ContentNavBar setCurrentContentView={setCurrentContentView} />
            <MainContent currentContentView={currentContentView} spots={spots} setSpots={setSpots} />
        </div>
    );
}