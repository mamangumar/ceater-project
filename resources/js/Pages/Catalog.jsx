import NavbarLanding from "@/Components/NavbarLanding";
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Footer } from "flowbite-react";
import { Button, Popover } from "flowbite-react";

export default function Catalog() {
    return (
        <>
            <NavbarLanding />

            <div className="h-56 sm:h-64 xl:h-80 3xl:h-96">
                <Carousel slide={false}>
                    <img src="top-view-table-full-delicious-food-composition.jpg" />
                    <img src="top-view-table-full-food.jpg" />
                    <img src="salmooonnnn.jpg" />
                </Carousel>
            </div>

            <div className="mt-12 ml-16"> 
                <h5 className="text-2xl font-bold text-[#5e2a00] dark:text-white">
                    You may like one of our menu: 
                </h5>
            </div>

            <div className="flex flex-wrap mx-14 my-2">
                <div>
                    <Card
                        className="my-8 mx-3 max-w-48 max-h-96 border-none bg-[#242323] dark:bg-[#8a440f]"
                        imgAlt="Bakso Urat Daging Mantap"
                        imgSrc="Bakso Urat Daging Mantap Praktis Juara - Resep _ ResepKoki.jpeg"
                        
                        >
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                        <   h5 className="text-base font-semibold tracking-tight text-white dark:text-white">
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                                Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold  text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold  text-white dark:text-white">Rp75000,00</span>
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
                            Bakso Urat Daging Mantap
                            </h5>
                            <h6 className="text-xs font-normal tracking-tight text-[#848484] dark:text-white">
                            Dibuat dengan sapi yang dibesarkan seperti anak sendiri.
                            </h6>
                        </a>
                        
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white dark:text-white">Rp75000,00</span>
                        </div>
                    </Card>
                </div>

            </div>
        
        <Footer container>
        <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                {/* <Footer.Brand
                    href="https://flowbite.com"
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="Flowbite Logo"
                    name="Flowbite"
                /> */}
            <Footer.LinkGroup>
                <Footer.Link href="#">About className</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright href="#" by="ceater™" year={2024} />
        </div>
        </Footer>   
        </>
    );
}
