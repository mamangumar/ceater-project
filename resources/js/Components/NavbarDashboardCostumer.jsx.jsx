import { Inertia } from "@inertiajs/inertia";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
export default function NavCostumer() {
    return (
        <Navbar fluid>
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    ceater
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle />
                <Navbar.Toggle className="ml-4" />
            </div>
            <Navbar.Collapse color="yellow">
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/catalog">Catalog</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
