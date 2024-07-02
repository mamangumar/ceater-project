import { Button } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { Card } from "flowbite-react";

export default function MenuCostumer() {
    return (
        <>
            <main className="flex">
                <div className="w-1/7">
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
                </div>
                <div className="w-4/7">
                    <div className="flex flex-wrap mx-14 my-2">
                        <div>
                            <Card
                                className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                                imgAlt="Bakso Urat Daging Mantap"
                                imgSrc="Bakso Urat Daging Mantap Praktis Juara - Resep _ ResepKoki.jpeg"
                            >
                                <a href="#">
                                    <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                                        Nama Menu
                                    </h5>
                                    <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                        Description Menu
                                    </h6>
                                </a>

                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-white dark:text-white">
                                        Harga Menu
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-white dark:text-white">
                                        Category 1
                                    </span>
                                    <span className="text-lg font-bold text-white dark:text-white">
                                        Category 2
                                    </span>
                                </div>
                                <Button>Add Order</Button>
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
                                        Nama Menu
                                    </h5>
                                    <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                                        Description Menu
                                    </h6>
                                </a>

                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-white dark:text-white">
                                        Harga Menu
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-white dark:text-white">
                                        Category 1
                                    </span>
                                    <span className="text-lg font-bold text-white dark:text-white">
                                        Category 2
                                    </span>
                                </div>
                                <Button>Add Order</Button>
                            </Card>
                        </div>
                    </div>

                    <p>{JSON.stringify(props)}</p>
                    <p>P ingpo 2</p>
                </div>
                <div className="w-2/7">
                    <h1>Pesanan</h1>
                </div>
            </main>
        </>
    );
}
