import NavCostumer from "@/Components/NavbarDashboardCostumer.jsx";
import { Checkbox } from "flowbite-react";
export default function DashboardCostumer({ auth }) {
    return (
        <>
            <NavCostumer />
            <main className="flex">
                <div className="w-1/4">
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
                <div className="w-3/4">
                    <p>P ingpo 2</p>
                </div>
            </main>
        </>
    );
}
