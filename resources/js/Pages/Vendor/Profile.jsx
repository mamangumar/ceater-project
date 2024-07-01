import { useForm } from "@inertiajs/react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
export default function Profile(props) {
    const { data, setData, post, processing, errors, reset, put } = useForm({
        name: "",
        description: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        phone_number: "",
    });

    const id = props.auth.user.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("vendor.update", { id: id }), {
            data,
            onSuccess: () => {
                alert("Profile created successfully.");
                reset();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    return (
        <>
            <div className="max-w-md mx-auto mt-10">
                <p>{JSON.stringify(props)}</p>
                <Card>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="name" value="Vendor Name" />
                            <TextInput
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Nama Vendor"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="description"
                                value="Description Vendor"
                            />
                            <TextInput
                                id="description"
                                type="text"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                placeholder="Deskripsi Vendor"
                                sizing="lg"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="address" value="Address" />
                            <TextInput
                                id="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                placeholder="Alamat"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="city" value="City" />
                            <TextInput
                                id="city"
                                type="text"
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                                placeholder="Kota"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="state" value="State" />
                            <TextInput
                                id="state"
                                type="text"
                                value={data.state}
                                onChange={(e) =>
                                    setData("state", e.target.value)
                                }
                                placeholder="Negara Bagian/Provinsi"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="postal_code" value="Postal Code" />
                            <TextInput
                                id="postal_code"
                                type="text"
                                value={data.postal_code}
                                onChange={(e) =>
                                    setData("postal_code", e.target.value)
                                }
                                placeholder="Kode Pos"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="country" value="Country" />
                            <TextInput
                                id="country"
                                type="text"
                                value={data.country}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                                placeholder="Negara"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="phone_number"
                                value="Phone Number"
                            />
                            <TextInput
                                id="phone_number"
                                type="text"
                                value={data.phone_number}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                                placeholder="Nomor Telepon"
                                pattern="[0-9]{10,12}"
                                required
                            />
                        </div>
                        <Button type="submit" disabled={processing}>
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>
        </>
    );
}
