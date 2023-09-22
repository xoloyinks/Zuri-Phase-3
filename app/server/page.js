import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Gallery from "../pages/gallary/page";

export default async function ServerPage(){
    const session = await getServerSession(options);

    if(!session){
        redirect("/api/auth/signin?callbackUrl=/server");
    }
    return (
        <>
            <Gallery />
        </>
    )
}