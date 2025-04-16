import { useState } from "react";
import { GrLanguage } from "react-icons/gr";

import "./LanguageToggle.css";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("english");

  return (
    <div className="lang-toggle-wrapper">
      <GrLanguage size={24} />
    </div>
  );
};

export default LanguageToggle;
