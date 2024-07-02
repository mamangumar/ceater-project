import { Link } from "@inertiajs/react";
import { DarkThemeToggle, Navbar, Avatar, Dropdown } from "flowbite-react";
export default function NavVendor({ username, userEmail, userImage }) {
    return (
        <>
            <Navbar fluid className="fixed w-full">
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl ml-4 font-semibold dark:text-white">
                        CEATER
                    </span>
                </Navbar.Brand>
                <div className="flex gap-4 mr-4 md:order-2">
                    <DarkThemeToggle />
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img={userImage}
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{username}</span>
                            <span className="block truncate text-sm font-medium">
                                {userEmail}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <a
                                className="w-full text-left"
                                href="/vendor/profile"
                            >
                                Profile
                            </a>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse color="yellow">
                    <Navbar.Link href="/vendor/dashboard" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/vendor/orders">
                        Order Costumer
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
