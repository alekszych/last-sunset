import style from './input.module.scss';

export default function Input({type, required, placeholder, label, additionalClassName, selectOptionsHTML}) { //required - bool
    if(type == "textarea") {
        return(
            <div style={{display: "flex", flexDirection: "column"}}>
                <label style={{color: "#2A2A2A"}}>{label}</label>
                <textarea placeholder={placeholder} className={[style.textarea, additionalClassName].join(" ")} required={!!required}></textarea>
            </div>
        )
    }

    if(type == "select") {
        return(
            <div style={{display: "flex", flexDirection: "column"}}>
                <label style={{color: "#2A2A2A"}}>{label}</label>
                <select className={[style.select, additionalClassName].join(" ")} required={!!required}>
                    {selectOptionsHTML}
                </select>
            </div>
        )
    }

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <label style={{color: "#2A2A2A"}} >{label}</label>
            <input type={type} placeholder={placeholder} className={[style.input, additionalClassName].join(" ")} required={!!required}></input>
        </div>
    )
}
