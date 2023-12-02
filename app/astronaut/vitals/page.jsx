import style from './page.modules.scss';
import Vitals from "@/components/vitals/vitals";
import Button from "@/components/button/Button";

export default function Page() {
    return(
        <div>
            <Vitals title={"Your vitals"} />
            <Button additionalClassName={style.buttonEx} btnText={"Report current vitals"} href={"/astronaut/vitals"} />
        </div>
    )
}
