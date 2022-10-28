import { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import "../modules/news-box.css";
import Dropdown from "./dropdown";

const SettingsButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <button className="settings-btn" onClick={() => setOpen(!open)}>
          <AiFillSetting />
        </button>
        {open && <Dropdown/>}
    </div>
  );
};

export default SettingsButton;
