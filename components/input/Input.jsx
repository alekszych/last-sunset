import style from './input.module.scss';

export default function Input({type, required, placeholder, label, additionalClassName, selectOptionsHTML, onChange}) {
    if(type === "textarea") {
        return(
            <div className={style.inputWrapper}>
                <label style={{color: "#2A2A2A"}}>{label}</label>
                <textarea placeholder={placeholder} className={[style.textarea, additionalClassName].join(" ")} required={!!required} onChange={e => onChange(e.target.value)}/>
            </div>
        )
    }

    if(type === "select") {
        return(
            <div className={style.inputWrapper}>
                <label style={{color: "#2A2A2A"}}>{label}</label>
                <select className={[style.select, additionalClassName].join(" ")} required={!!required} onChange={e => onChange(e.target.value)}>
                    {selectOptionsHTML}
                </select>
            </div>
        )
    }

    return(
        <div className={style.inputWrapper}>
            <label style={{color: "#2A2A2A"}} >{label}</label>
            <input type={type} placeholder={placeholder} className={[style.input, additionalClassName].join(" ")} required={!!required} onChange={e => onChange(e.target.value)}/>
        </div>
    )
}
