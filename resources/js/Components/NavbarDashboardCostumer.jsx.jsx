import { Inertia } from "@inertiajs/inertia";
import { DarkThemeToggle, Navbar, Avatar, Dropdown } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
export default function NavCostumer() {
    return (
        <Navbar fluid>
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    CEATER
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle />
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>Profile</Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse color="yellow">
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Vendor</Navbar.Link>
                <Navbar.Link href="#">My Order</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
