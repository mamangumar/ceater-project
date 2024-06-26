import { Inertia } from "@inertiajs/inertia";
import { Button, DarkThemeToggle, Modal, Navbar } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function NavbarLanding() {
    const customTheme = {
        color: {
            primary:
                "bg-amber-50 hover:bg-stone-300 dark:bg-amber-50 dark:hover:bg-amber-100 ",
        },
    };

    const GoToPageLogin = () => {
        Inertia.get("/login");
    };
    const GoToPageRegister = () => {
        Inertia.get("/register");
    };
    return (
        <>
            <Navbar fluid>
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        CEATER
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <DarkThemeToggle />
                    <Button
                        color="light"
                        className="ml-4"
                        onClick={GoToPageLogin}
                    >
                        Login
                    </Button>
                    <Button
                        color="warning"
                        className="text-white ml-4"
                        onClick={GoToPageRegister}
                    >
                        Register
                    </Button>
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
        </>
    );
}
