import DistrictDirectory from "./components/DistrictDirectory.jsx";
import { useLayoutEffect } from "react";
import { mountExperience } from "./runtime/experience.js";
import Header from "./components/Header.jsx";
import HeroAtlas from "./components/HeroAtlas.jsx";
import Destinations from "./components/Destinations.jsx";
import Heritage from "./components/Heritage.jsx";
import Wildlife from "./components/Wildlife.jsx";
import Stories from "./components/Stories.jsx";
import Footer from "./components/Footer.jsx";
import DetailDialog from "./components/DetailDialog.jsx";

export default function App() {
  useLayoutEffect(() => mountExperience(), []);
  return <>
<a className="skip" href="#explore">{"Skip to the interactive map"}</a><Header /><main>{"\n"}<HeroAtlas />{"\n"}<Destinations /><DistrictDirectory />{"\n"}<Heritage />{"\n"}<Wildlife />{"\n"}<Stories />{"\n"}</main><Footer /><DetailDialog />
</>;
}
