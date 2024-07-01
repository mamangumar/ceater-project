import NavVendor from "@/Components/NavbarDashboardVendor";

export default function DashboardVendor(props) {
    const { auth } = props;
    return (
        <>
            <NavVendor
                username={auth.user.name}
                userEmail={auth.user.email}
                userImage={auth.user.image}
            />
            <p>{JSON.stringify(props)}</p>

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        {auth.user.name}
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                        {auth.user.description}
                    </p>
                    <p>
                        <span>Addres :</span>
                        <span>{auth.user.address}</span>
                    </p>
                    <p>
                        <span>City :</span>
                        <span>{auth.user.city}</span>
                    </p>
                    <p>
                        <span>State :</span>
                        <span>{auth.user.state}</span>
                    </p>
                    <p>
                        <span>Postal Code :</span>
                        <span>{auth.user.postal_code}</span>
                    </p>
                    <p>
                        <span>Country :</span>
                        <span>{auth.user.country}</span>
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a
                            href="#"
                            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Add Menu
                        </a>
                    </div>
                </div>
            </section>
            <p>Bagian tampilan menu</p>
            <p>Halaman Dashboard Vendor</p>
        </>
    );
}
