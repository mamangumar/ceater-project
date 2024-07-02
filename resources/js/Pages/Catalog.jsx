import NavbarLanding from "@/Components/NavbarLanding";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Footer } from "flowbite-react";
import { Button, Popover } from "flowbite-react";

export default function Catalog() {
    return (
        <>
            <NavbarLanding />

            <div className="h-56 sm:h-64 xl:h-80 3xl:h-96">
                <Carousel slide={false}>
                    <img src="top-view-table-full-delicious-food-composition.jpg" />
                    <img src="top-view-table-full-food.jpg" />
                    <img src="salmooonnnn.jpg" />
                </Carousel>
            </div>

            <div className="mt-12 ml-16">
                <h5 className="text-2xl font-bold text-[#5e2a00] dark:text-white">
                    You may like one of our menu:
                </h5>
            </div>

            <div className="flex flex-wrap mx-14 my-2">
                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Bakso Urat Daging Mantap Praktis Juara - Resep _ ResepKoki.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Bakso Urat 
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp75.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgAlt="Bakso Urat Daging Mantap"
                        imgSrc="13 Resep sayur berkuah, enak, praktis dan mudah dibuat.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Sop
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp55.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Easy Oreo Ice cream ( No-Churn Ice Cream ).jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Es Krim
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp15.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Thai Basil Fried Rice - Khin's Kitchen.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Nasgor 
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp25.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Easy Korean Strawberry Milk (3-Ingredient Recipe!).jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Milksyek
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp25.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="kimbab11.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Kimbab Zayur
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp65.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Bakso Urat Daging Mantap Praktis Juara - Resep _ ResepKoki.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Bakso Urat 
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp75.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgAlt="Bakso Urat Daging Mantap"
                        imgSrc="13 Resep sayur berkuah, enak, praktis dan mudah dibuat.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Sop
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp55.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Easy Oreo Ice cream ( No-Churn Ice Cream ).jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Es Krim
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp15.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Thai Basil Fried Rice - Khin's Kitchen.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Nasgor 
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp25.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="Easy Korean Strawberry Milk (3-Ingredient Recipe!).jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Milksyek
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp25.000,00
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgSrc="kimbab11.jpeg"
                    >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                Kimbab Zayur
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                Dibuat dengan sapi yang dibesarkan seperti anak
                                sendiri.
                            </h6>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">
                                Rp65.000,00
                            </span>
                        </div>
                    </Card>
                </div>
            </div>

            

        <footer class="bg-[#a3a3a3]/10 dark:bg-[#a3a3a3]/10 rounded-lg shadow m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    {/* <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a> */}
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024<a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>


        </>
    );
}
