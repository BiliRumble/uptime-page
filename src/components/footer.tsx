import React from "react";
import CustomLink from "../components/customLink";
import Package from "../../package.json";

const Footer = () => {
  // 加载配置
  const siteIcp = import.meta.env.VITE_SITE_ICP;
  const copyry = import.meta.env.VITE_COPYR_STARTYEAR;
  const copyrn = import.meta.env.VITE_COPYR_NAME;
  const copyrnu = import.meta.env.VITE_COPYR_NAME_URL;

  return (
    <footer id="footer">
      <div className="text">
        <p>
        <CustomLink to="https://github.com/bilirumble/upzilla" text="Upzilla" />&nbsp;v&nbsp;{Package.version},&nbsp;Based on&nbsp;
        <CustomLink to="https://uptimerobot.com/" text="UptimeRobot" />
        </p>
        <p>
          Copyright&nbsp;&copy;&nbsp;{copyry}&nbsp;-&nbsp;{new Date().getFullYear()}
          &nbsp;
          <CustomLink to={copyrnu} text={copyrn} />
          {siteIcp ? (
            <React.Fragment>
              &nbsp;|&nbsp;
              <CustomLink to="https://beian.miit.gov.cn/" text={siteIcp} />
            </React.Fragment>
          ) : null}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
