import NavVendor from "@/Components/NavbarDashboardVendor";
import React from "react";
import { Card, Button } from "flowbite-react";

export default function OrdersVendor(props) {
    const { auth } = props;
    const orders = props.orders;
    return (
        <>
            <NavVendor
                username={auth.user.name}
                userEmail={auth.user.email}
                userImage={auth.user.image}
            />
            <p>{JSON.stringify(props.orders)}</p>
            <h1>Order Vendor</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {props.orders.map((order, index) => (
                    <Card key={index} className="max-w-sm mx-auto">
                        <div className="p-4">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {order.name_customer}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Price: Rp. {order.price_buy}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Status: {order.status}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Order Date:{" "}
                                {new Date(
                                    order.order_date
                                ).toLocaleDateString()}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Payment Method: {order.payment_method}
                            </p>
                            <div className="flex items-center mt-4">
                                <Button className="mr-2">View</Button>
                                <Button>Delete</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}
