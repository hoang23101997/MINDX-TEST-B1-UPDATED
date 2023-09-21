import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import "./TodoApp/TodoApp.css";

const Footer = () => {
  const handleChangeLanguague = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column justify-content-center mt-4">
      <h4> {t("Made by Mindx")} 🔥</h4>
      <div className="d-flex justify-content-center">
        <span>{t("Available on")}:</span>
        <div
          type="button"
          className="languague-picker ms-2 me-2"
          onClick={() => handleChangeLanguague("vn")}
        >
          🇻🇳
        </div>
        <div
          type="button"
          className={"languague-picker"}
          onClick={() => handleChangeLanguague("en")}
        >
          🇺🇸
        </div>
      </div>
    </div>
  );
};

export default Footer;
