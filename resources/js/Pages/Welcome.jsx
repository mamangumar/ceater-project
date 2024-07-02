import NavbarLanding from "@/Components/NavbarLanding";
import { Head } from "@inertiajs/react";
import { Blockquote } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            {/* <Head title="Welcome" /> */}
            <NavbarLanding />
            {/* header */}

            <section class="bg-cover bg-no-repeat bg-[url('mambanyak.jpg')] bg-[#7f6047] bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-left py-36">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none text-center text-white md:text-5xl lg:text-6xl">
                        Welcome to Ceater!
                    </h1>
                </div>
            </section>

            {/* tengah */}
            <section></section>
            <div className="text-white text-center mt-28 text-3xl font-bold">
                Ceater is your premier solution for all your catering needs.
            </div>
            <div className="ml-80 max-w-[740px] text-white text-center mt-8 font-semibold mb-28 text-sm">
                We have prepared a comprehensive tutorial to help you understand
                and make the most out of our catering services. Let's dive in
                and discover how Ceater can turn your next event into an
                unforgettable culinary experience!"
            </div>
            {/* bawah */}
            <section className="mx-16 py-4 mt-8 mb-28 gap-10 flex flex-wrap">
                <div>
                    <div className="px-6 flex flex-col justify-center bg-white bg-opacity-30 rounded-3xl mb-4 object-center">
                        <div className=" mt-4 w-full flex justify-center">
                            <img
                                src="iconmonstr-key-12-240.png"
                                className="w-24 px-2 object-center"
                            />
                        </div>
                        <div className="font-bold text-lg text-center text-white mx-16 mb-2 ">
                            login
                        </div>
                    </div>
                </div>

                <div>
                    <div className="px-6 flex flex-col justify-center bg-white bg-opacity-30 rounded-3xl mb-4 object-center">
                        <div className=" mt-4 w-full flex justify-center">
                            <img
                                src="iconmonstr-fast-food-21-240.png"
                                className="w-24 px-2 object-center"
                            />
                        </div>
                        <div className="font-bold text-lg text-center text-white mx-16 mb-2 ">
                            pick it
                        </div>
                    </div>
                </div>

                <div>
                    <div className="px-3 flex flex-col justify-center bg-white bg-opacity-30 rounded-3xl mb-4 object-center">
                        <div className=" mt-4 w-full flex justify-center">
                            <img
                                src="iconmonstr-checkout-9-240.png"
                                className="w-24 px-2 object-center"
                            />
                        </div>
                        <div className="font-bold text-lg text-center text-white mx-16 mb-2 ">
                            checkout
                        </div>
                    </div>
                </div>

                <div>
                    <div className="px-2 flex flex-col justify-center bg-white bg-opacity-30 rounded-3xl mb-4 object-center">
                        <div className=" mt-4 w-full flex justify-center">
                            <img
                                src="iconmonstr-coin-1-240.png"
                                className="w-24 px-2 object-center"
                            />
                        </div>
                        <div className="font-bold text-lg text-center text-white mx-16 mb-2 ">
                            payment
                        </div>
                    </div>
                </div>

                <div>
                    <div className="px-2 flex flex-col justify-center bg-white bg-opacity-30 rounded-3xl mb-4 object-center">
                        <div className=" mt-4 w-full flex justify-center">
                            <img
                                src="iconmonstr-delivery-18-240.png"
                                className="w-24 px-2 object-center"
                            />
                        </div>
                        <div className="font-bold text-lg text-center text-white mx-16 mb-2 ">
                            delivered
                        </div>
                    </div>
                </div>
            </section>

            <section class="dark:bg-[#301e11]/80">
                <div
                    role="status"
                    class="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                    <div class="w-full">
                        <div class="px-4 mx-12 max-w-screen-xl ">
                            <h1 class="mb-12 text-left font-bold leading-none text-white md:text-6xl tracking-[.0em] text-9xl">
                                Our Bestseller Product
                            </h1>
                        </div>
                        <div className="mb-4">
                            <div class="font-bold text-lg text-white max-w-[480px] mx-16 mb-2 ">
                                Discover the Dish Everyone Loves!
                            </div>
                            <div class="text-white text-justify max-w-[480px] mx-16 mb-4">
                                At Ceater, we take pride in every item on our
                                menu, but there's one dish that stands out as a
                                crowd favorite:
                            </div>
                            <div class="font-bold text-4xl text-white max-w-[480px] mx-16 mb-2 ">
                                Rendang Daging
                            </div>
                            <div class="text-white text-justify max-w-[480px] mx-16 mb-4">
                                This bestselling delight has won the hearts and
                                taste buds of our clients, making it the
                                highlight of any event.
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center  ">
                        <img
                            src="delicious-goulash-ready-dinner.jpg"
                            class="max-w-[640px]"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="font-bold text-4xl text-white mt-12 mb-12 mx-12">
                    Discover our delicious foods!
                </div>
                <div class="mx-12 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="babikecap.jpeg"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Japanese Katsu Curry.jpeg"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Easy Oreo Ice cream ( No-Churn Ice Cream ).jpeg"
                            />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Thai Basil Fried Rice - Khin's Kitchen.jpeg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="I Found the Key to Perfect Southern-Style Sweet Tea.jpeg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="delicious-goulash-ready-dinner.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Easy Korean Strawberry Milk (3-Ingredient Recipe!).jpeg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Filet Mignon with Shrimp and Lobster Cream Sauce.jpeg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Resep Rawon Daging Sapi Khas Jawa Timur Spesial Enak Empuk.jpeg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Recipe_ How to Make Vegetable Gimbap - Nomtastic Foods.jpeg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="Garlic Butter & White Wine Seafood Pasta -.jpeg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="at meal.jpeg"
                                alt=""
                            />
                        </div>
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
