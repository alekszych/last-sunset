import style from './input.module.scss';
import { SlArrowDown } from "react-icons/sl";

export default function Input({type, required, placeholder, label, additionalClassName, selectOptionsHTML, unit, onChange}) {
    if(type === "textarea") {
        return(
            <div className={style.inputWrapper}>
                <label style={{color: "#2A2A2A"}}><p>{label}</p></label>
                <textarea placeholder={placeholder} className={[style.textarea, additionalClassName].join(" ")} required={!!required} onChange={e => onChange(e.target.value)}/>
            </div>
        )
    }

    if(type === "select") {
        return(
            <div className={style.inputWrapper}>
                <label style={{color: "#2A2A2A"}}><p>{label}</p></label>
                <select className={[style.select, additionalClassName].join(" ")} required={!!required} onChange={e => onChange(e.target.value)}>
                    {selectOptionsHTML}
                </select>
                <span className={[style.unit, style.arrow].join(" ")}><SlArrowDown /></span>
            </div>
        )
    }

    return(
        <div className={style.inputWrapper}>
            <label style={{color: "#2A2A2A"}}><p>{label}</p></label>
            <input type={type} placeholder={placeholder} className={[style.input, additionalClassName].join(" ")} required={!!required} onChange={e => onChange(e.target.value)}/>
            {unit != "select" ? <span className={style.unit}><p>{unit}</p></span> : ""}
        </div>
    )
}
