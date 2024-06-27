import NavbarLanding from "@/Components/NavbarLanding";
import { Head } from "@inertiajs/react";
import { Blockquote } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            {/* <Head title="Welcome" /> */}
            <NavbarLanding />
            <div>
                <figure className="mx-auto max-w-screen-md text-left">
                    <img src="thai-food-tom-yum-kung-river-prawn-spicy-soup.png" />

                    <p className="text-lg font-normal text-[#261303] ">
                        Transform your dining experience with Ceater, the
                        premier food catering service tailored to delight your
                        taste buds and simplify your event planning. Whether
                        it's a corporate gathering, a family celebration, or an
                        intimate dinner, Ceater ensures exceptional cuisine and
                        impeccable service.
                    </p>
                    <figcaption className="mt-6 flex items-center justify-center space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite className="pr-3 font-medium text-[#e3e3e3]">
                                Micheal Gough
                            </cite>
                            <cite className="pl-3 text-sm text-gray-500 dark:text-[#e3e3e3]">
                                CEO at Google
                            </cite>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </>
    );
}
