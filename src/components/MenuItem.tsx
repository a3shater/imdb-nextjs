import Link from "next/link"

type props={
    title:string,
    address:string,
    Icon:anye
}
export default function MenuItem({title,address,Icon}:props){
    return (
        <Link href={address} className="hover:text-amber-500">
            <Icon className="text-2xl sm:hidden"/>
            <p className=" uppercase hidden sm:inline text-sm">{title}</p>
        </Link>
    )
}