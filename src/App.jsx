import DistrictDirectory from "./components/DistrictDirectory.jsx";
import { useLayoutEffect, useState, useEffect } from "react";
import { mountExperience } from "./runtime/experience.js";
import Header from "./components/Header.jsx";
import HeroAtlas from "./components/HeroAtlas.jsx";
import Destinations from "./components/Destinations.jsx";
import GujaratGaurav from "./components/GujaratGaurav.jsx";
import Heritage from "./components/Heritage.jsx";
import Wildlife from "./components/Wildlife.jsx";
import Stories from "./components/Stories.jsx";
import Footer from "./components/Footer.jsx";
import DetailDialog from "./components/DetailDialog.jsx";
import PersonalitiesPage from "./components/PersonalitiesPage.jsx";
import ExploreDeeperHub from "./components/ExploreDeeperHub.jsx";
import Explorers from "./components/Explorers.jsx";

export default function App() {
  const [route, setRoute] = useState(() => typeof window !== 'undefined' ? window.location.hash : '');
  
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useLayoutEffect(() => {
    mountExperience();
  }, []);

  const isMainRoute = !route.startsWith('#explore-') && route !== '#personalities' && route !== '#atlas-explorer' && route !== '#connections-explorer' && route !== '#objects-explorer' && route !== '#people-explorer' && route !== '#environment-explorer';

  return <>
    <a className="skip" href="#explore">{"Skip to the interactive map"}</a>
    <Header />
    <main style={{ display: isMainRoute ? 'block' : 'none' }}>
      <HeroAtlas />
      <Destinations />
      <DistrictDirectory />
      <GujaratGaurav />
      <Heritage />
      <Wildlife />
      <Stories />
    </main>
    {route === '#personalities' && <PersonalitiesPage />}
    {route === '#explore-deeper' && <ExploreDeeperHub />}
    {(route === '#atlas-explorer' || route === '#connections-explorer' || route === '#objects-explorer' || route === '#people-explorer' || route === '#environment-explorer') && <Explorers route={route} />}
    <Footer />
    <DetailDialog />
  </>;
}
