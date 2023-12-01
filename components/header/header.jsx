'use client'
import style from './header.module.scss';
import { usePathname } from 'next/navigation'
import Image from "next/image";

export default function Header(type) {
    const pathname = usePathname();

    let pathnames = pathname.split("/");
    let pagetype = pathnames[1]; //first slash is before url (/astronaut/my-vitals)

    switch (pagetype) {
        case("astronaut"):
            return(
                <header className={[style.header, style.headerAstro].join(" ")}>
                    <Image src={"/logo.png"} alt={"logo"} width={32} height={32} />
                    <h5>Last sunset</h5>
                    <div className={style.links}>
                        <p>Dashboard</p>
                        <p>Vitals</p>
                        <p>Tasks</p>
                        <p>Missions</p>
                    </div>
                </header>
            );

        case("admin"):
            return(
                <header className={[style.header, style.headerAdmin].join(" ")}>
                    <h1>admin</h1>
                </header>
            )

        default:
            return(
                <header className={[style.header, style.headerHome].join(" ")}>
                    <Image src={"/logo.png"} alt={"logo"} width={32} height={32} />
                    <h5>Last sunset</h5>
                    <Image src={"/profile_icon.png"} className={style.profileIcon} alt={"profile"} width={32} height={32} />
                </header>
            )
    }

}
