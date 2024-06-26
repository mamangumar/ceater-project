import { Checkbox } from "flowbite-react";
export default function DashboardCostumer({ auth }) {
    return (
        <>
            <main className="flex">
                <div className="w-1/4">
                    <p>Filer Your Food</p>
                    <div>
                        <h1 className="font-bold text-lg ">Filter Jenis</h1>
                        <p>
                            <Checkbox /> <span> Sayuran</span>
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
