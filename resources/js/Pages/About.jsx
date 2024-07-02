import NavbarLanding from "@/Components/NavbarLanding";

export default function About() {
    return (
        <>
            <NavbarLanding />

            {/* <section class="max-h-fit bg-cover bg-center bg-[url('top-view-delicious-indonesian-bakso.jpg')] bg-[#878787] bg-blend-multiply"></section> */}
            <section class="bg-[#1a1a1a]">
                <div class="px-4 mx-auto max-w-screen-xl py-10 lg:py-20 ">
                    <h1 class="mb-12 text-4xl text-center font-extrabold leading-none text-white md:text-4xl tracking-[.0em] lg:text-6xl">
                        About Us
                    </h1>
                    <div class=" text-white mb-4">
                        Welcome to Ceater, your premier solution for all your
                        catering needs! Whether you are planning a small
                        gathering or a large event, our application is designed
                        to streamline and enhance your catering experience.{" "}
                    </div>
                </div>
            </section>

            <section className="dark:bg-[#8a440f]/50">
                <div
                    role="status"
                    class="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                    <div class="flex items-center justify-center ">
                        <img
                            src="man-chef-frying-meat-pan-fire.jpg"
                            class="max-w-2xl"
                        />
                    </div>
                    <div class="w-full">
                        <div className="mb-4">
                            <div class="font-extrabold text-white text-2xl mx-12 mb-2">
                                Features
                            </div>
                            <div class="font-bold text-xl text-white max-w-[480px] mx-12 mb-2 ">
                                Extensive Menu Catalog
                            </div>
                            <div class="font-semibold text-white max-w-[480px] mx-12 mb-8">
                                Browse and manage a vast collection of dishes
                                with detailed information about each item,
                                including ingredients, dietary options, and
                                pricing.
                            </div>
                        </div>

                        <div>
                            <div class=" font-bold text-xl text-white max-w-[480px] mx-12 mb-2">
                                Efficient Order Management
                            </div>
                            <div class=" font-semibold text-white max-w-[480px] mx-12 mb-8">
                                Keep track of your orders, from initial request
                                to delivery. Our system ensures that all your
                                catering needs are met on time and within
                                budget.
                            </div>
                        </div>

                        <div>
                            <div class=" font-bold text-xl text-white max-w-[480px] mx-12 mb-2">
                                User-Friendly Interface
                            </div>
                            <div class=" font-semibold text-white max-w-[480px] mx-12 mb-8">
                                Our intuitive interface is designed for users of
                                all ages and technical backgrounds. Easily
                                search, sort, and customize menus with just a
                                few clicks.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-[#1a1a1a]">
                <div class="px-4 mx-12 max-w-screen-xl pt-10 pb-8 lg:py-12 ">
                    <h1 class="mb-4 text-4xl text-left font-bold leading-none text-white md:text-xl tracking-[.0em] lg:text-4xl">
                        Our Team
                    </h1>

                    <div class=" font-semibold text-left text-white mb-10">
                        The Ceater team is composed of passionate food
                        enthusiasts and experienced software developers
                        dedicated to improving the catering experience. Our
                        combined expertise ensures that our application meets
                        the highest standards of quality and usability.
                    </div>
                </div>
            </section>

            <section class="bg-[#1a1a1a]">
                <div class="px-4 mx-12 max-w-screen-xl pt-10 pb-8 lg:py-12 ">
                    <h1 class="mb-4 text-4xl text-right font-bold leading-none text-white md:text-xl tracking-[.0em] lg:text-4xl">
                        Our Mission
                    </h1>

                    <div class=" font-semibold text-right text-white mb-10">
                        At Ceater, our mission is to make catering simple,
                        efficient, and enjoyable. We aim to provide a seamless
                        interface that bridges the gap between technology and
                        traditional catering services, making it easier for you
                        to manage your orders, customize menus, and ensure
                        timely deliveries.
                    </div>
                </div>
            </section>

            <section class="dark:bg-[#8a440f]/50">
                <div
                    role="status"
                    class="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                    <div class="w-full">
                        <div class="px-4 mx-12 max-w-screen-xl ">
                            <h1 class="mb-4 text-4xl text-left font-bold leading-none text-white md:text-6xl tracking-[.0em] lg:text-2xl">
                                Contact Us
                            </h1>
                        </div>
                        <div className="mb-4">
                            <div class="font-bold text-lg text-white max-w-[480px] mx-16 mb-2 ">
                                Email
                            </div>
                            <div class="text-white max-w-[480px] mx-16 mb-4">
                                ceater@gmail.com
                            </div>
                        </div>

                        <div>
                            <div class=" font-bold text-lg text-white max-w-[480px] mx-16 mb-2">
                                Phone
                            </div>
                            <div class=" text-white max-w-[480px] mx-16 mb-4">
                                081234567789
                            </div>
                        </div>

                        <div>
                            <div class=" font-bold text-lg text-white max-w-[480px] mx-16 mb-2">
                                Instagram
                            </div>
                            <div class=" text-white max-w-[480px] mx-16">
                                ceater.id
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center  ">
                        <img src="chefs.jpg" class="max-w-screen " />
                    </div>
                </div>
            </section>

            <footer class="mt-12 rounded-2xl bg-white shadow m-4 dark:bg-gray-200/15">
                <div class="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 <a>Ceater</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    );
}
