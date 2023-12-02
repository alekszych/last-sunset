import style from './page.modules.scss';
import Vitals from "@/components/vitals/vitals";
import Button from "@/components/button/Button";

export default function Page() {
    return(
        <div>
            <Vitals title={"Your vitals"} />
            <Button btnText={"Report current vitals"} additionalClassName={"buttonEx"} href={"/astronaut/report-vitals"} />
        </div>
    )
}
