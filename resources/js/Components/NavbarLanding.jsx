import { Inertia } from "@inertiajs/inertia";
import { Button, DarkThemeToggle, Modal, Navbar } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function NavbarLanding() {

    const GoToPageLogin = () => {
        Inertia.get("/login");
    };
    const GoToPageRegister = () => {
        Inertia.get("/register");
    };
    return (
        <>
            <Navbar fluid className=" bg-[#d67d00] dark:bg-[#1a1a1a]">
                
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
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
                    <Navbar.Link className="text-base text-[#241500]" href="/">Home</Navbar.Link>
                    <Navbar.Link className="text-base text-[#241500]" href="/catalog">Catalog</Navbar.Link>
                    <Navbar.Link className="text-base text-[#241500]"href="/about">About</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}