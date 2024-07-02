import NavCostumer from "@/Components/NavbarDashboardCostumer.jsx";
import { Checkbox } from "flowbite-react";
export default function DashboardCostumer(props) {
    return (
        <>
            <NavCostumer />
            <main className="flex">
                {/* <div className="w-1/4">
                    <p>Filters</p>
                    <div>
                        <h1 className="font-bold text-lg ">Maybe you want</h1>
                        <p>
                            <Checkbox /> <span> Chicken</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Noodles</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Rice</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Vegetables</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Red meat</span>
                        </p>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg ">Type Food</h1>
                        <p>
                            <Checkbox /> <span> Snacks</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Meals</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Beverages</span>
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold text-lg ">Flavors</h1>
                        <p>
                            <Checkbox /> <span> Spicy</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Sweet</span>
                        </p>
                        <p>
                            <Checkbox />
                            <span> Cold</span>
                        </p>
                    </div>
                </div> */}
                <div className="flex flex-wrap mx-14 my-2">
                    <div>
                        <Card
                            className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                            imgAlt="Bakso Urat Daging Mantap"
                            imgSrc="Bakso Urat Daging Mantap Praktis Juara - Resep _ ResepKoki.jpeg"
                        >
                            <a href="#">
                                <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                    Nama Vendor
                                </h5>
                                <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                    Description Vendor
                                </h6>
                            </a>

                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-white dark:text-white">
                                    Address Vendor
                                </span>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card
                            className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                            imgAlt="Bakso Urat Daging Mantap"
                            imgSrc="Bakso Urat Daging Mantap Praktis Juara - Resep _ ResepKoki.jpeg"
                        >
                            <a href="#">
                                <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                    Nama Vendor
                                </h5>
                                <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                    Description Vendor
                                </h6>
                            </a>

                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-white dark:text-white">
                                    Address Vendor
                                </span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* <div className="w-3/4">
                    <p>{JSON.stringify(props)}</p>
                    <p>P ingpo 2</p>
                </div> */}
            </main>
        </>
    );
}
