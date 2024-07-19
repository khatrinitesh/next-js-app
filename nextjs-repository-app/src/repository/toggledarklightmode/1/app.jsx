import React,{useState} from 'react';
import './style.css';

const CustomApp = () => {
    const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
  }
  return (
    <>
       <Switch isOn={switchOn} onSwitched={toggleSwitch} />
      <Bulb isOn={switchOn} />
    </>
  )
}

export default CustomApp

const Switch = ({ isOn, onSwitched }) => {
    const switchClass = isOn ? "cube-switch active" : "cube-switch";
    return (
      <div className={switchClass}>
        <span className="switch" onClick={onSwitched}>
          <span className="switch-state off">Off</span>
          <span className="switch-state on">On</span>
        </span>
      </div>
    );
  }
  
  const Bulb = ({ isOn }) => {
    const lightClass = isOn ? "light-bulb on" : "light-bulb off";
    return (
      <div className={lightClass}></div>
    );
  }
