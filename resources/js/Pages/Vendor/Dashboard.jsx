import NavVendor from "@/Components/NavbarDashboardVendor";
import { Card, Button } from "flowbite-react";

export default function DashboardVendor(props) {
    const { auth } = props;
    return (
        <>
            <NavVendor
                username={auth.user.name}
                userEmail={auth.user.email}
                userImage={auth.user.image}
            />
            <div className="pt-10">
                <p>{JSON.stringify(props)}</p>

                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            {auth.user.name}
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                            {auth.user.description}
                        </p>

                        <Card className="max-w-xs mx-auto">
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span>Addres :</span>
                                <span>
                                    <span>{auth.user.address ?? "-"}</span>
                                </span>
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span>City :</span>
                                <span>{auth.user.city ?? "-"}</span>
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span>State :</span>
                                <span>{auth.user.state ?? "-"}</span>
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span>Postal Code :</span>
                                <span>{auth.user.postal_code ?? "-"}</span>
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span>Country :</span>
                                <span>{auth.user.country ?? "-"}</span>
                            </p>
                        </Card>
                        <div className="flex mt-4 flex-col space-y-4 sm:flex-row mb-2 sm:justify-center sm:space-y-0">
                            <a
                                href="/vendor/menu"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            >
                                Add Menu
                            </a>
                        </div>
                    </div>
                </section>
                <div className="mt-12 flex flex-wrap items-center gap-6 mx-6">
                    {props.menus.map((menu, index) => (
                        <div
                            key={menu.id ?? index}
                            className="flex items-center flex-wrap"
                        >
                            <Card className="flex flex-col w-80">
                                <img
                                    src={menu.image}
                                    alt="Menu Image"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="flex flex-col p-4">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {menu.name}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {menu.description}
                                    </p>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Rp. {menu.price}
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <Button className="mr-2">Edit</Button>
                                        <Button>Delete</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <p>Halaman Dashboard Vendor</p>
            </div>
        </>
    );
}
