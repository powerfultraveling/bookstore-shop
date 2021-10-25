import style from "./style.css";
function Footer() {
  return (
    <footer>
      <div>
        <img
          style={{ width: "100px", height: "auto" }}
          src="../../img/logo.png"
        ></img>
      </div>
      <div className="footer-infos">
        <span>關於我們</span>
        <span>政策</span>
        <span>臉書</span>
        <span>其他</span>
      </div>
    </footer>
  );
}
export default Footer;
