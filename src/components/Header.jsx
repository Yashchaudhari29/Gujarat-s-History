import { memo } from "react";

// Preserve the existing element structure and styling during migration.
export default memo(function Header() {
  return (<header className="header"><a className="brand" href="#explore" aria-label="Gujarat Unveiled home"><span className="brand-icon">{"✳"}</span><span>{"GUJARAT "}<em>{"UNVEILED"}</em></span></a><nav aria-label="Main navigation"><a href="#explore" className="active">{"Explore"}</a><a href="#gaurav">{"ગુજરાત ગૌરવ"}</a><a href="#personalities">{"Icons"}</a><a href="#explore-deeper">{"Explore deeper"}</a><a href="#heritage">{"Heritage & art"}</a><a href="#wildlife">{"Wildlife"}</a><a href="#stories">{"Stories"}</a></nav><div className="preferences"><button id="motion" aria-pressed="false" title="Reduce motion"><span aria-hidden="true">{"◌"}</span><span className="pref-label">{"Reduce motion"}</span></button></div></header>);
});
