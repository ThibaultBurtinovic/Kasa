import logo from "../../assets/LogoWhite.svg";
import './footer.scss'

function Footer(){
return(
<footer className="footerWrapper">
<img src={logo} alt="Kasa Logo" className="footerLogo" />

<p>© 2020 Kasa. All rights reserved</p>
</footer>
)
}

export default Footer;