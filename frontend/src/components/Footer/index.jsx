import Brand from "../Brand";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Brand position="footer" />
            <span className="copyright">© 2023 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;
