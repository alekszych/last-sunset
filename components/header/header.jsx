'use client'
import style from './header.module.scss';
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Header(type) {
    const pathname = usePathname();

    let pathnames = pathname.split("/");
    let pagetype = pathnames[1]; //first slash is before url (/astronaut/vitals)

    switch (pagetype) {
        case("astronaut"):
            return(
                <header className={[style.header, style.headerAstro].join(" ")}>
                    <Link href={"/"} className={style.logoContainer}>
                        <Image src={"/logo.png"} alt={"logo"} width={32} height={32} />
                        <h5>Last sunset</h5>
                    </Link>
                    <div className={style.links}>
                        <Link href={"/astronaut/dashboard"}><p>Dashboard</p></Link>
                        <Link href={"/astronaut/vitals"}><p>Vitals</p></Link>
                        <Link href={"/astronaut/tasks"}><p>Tasks</p></Link>
                        <Link href={"/astronaut/missions"}><p>Missions</p></Link>
                    </div>
                </header>
            );

        case("admin"):
            return(
                <header className={[style.header, style.headerAdmin].join(" ")}>
                    <Image src={"/logo.png"} alt={"logo"} width={32} height={32} />
                    <h5>Last sunset</h5>
                    <div className={style.links}>
                        <Link href={"/admin/tasks"}><p>Tasks</p></Link>
                        <Link href={"/admin/astronauts"}><p>Astronauts</p></Link>
                        <Link href={"/admin/missions"}><p>Missions</p></Link>
                    </div>
                </header>
            )

        default:
            return(
                <header className={[style.header, style.headerHome].join(" ")}>
                    <Image src={"/logo.png"} alt={"logo"} width={32} height={32} />
                    <h5>Last sunset</h5>
                    <FaUser size={32} color={"white"} className={style.profileIcon} />
                </header>
            )
    }

}
