import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return (
  <nav>
    {links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
    })}
  </nav>)
}
export default NavBar;

//ALT METHOD
// function NavBar() {
//   const links = ["home", "about", "projects"];
//   const navigation = links.map((link) => {
//     return <a key={link} href={`#${link}`}>{link}</a>
//   })
//   return <nav>{navigation}</nav>;
// }
// export default NavBar;