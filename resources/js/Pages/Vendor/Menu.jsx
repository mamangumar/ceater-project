import { useForm } from "@inertiajs/react";
import {
    Button,
    Card,
    Checkbox,
    Label,
    TextInput,
    FileInput,
} from "flowbite-react";

export default function Menu(props) {
    const { data, setData, post, processing, errors, reset, put } = useForm({
        vendor_id: props.vendor.id,
        name: "",
        description: "",
        price: "",
        amount: "",
        image: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("vendor.menu.post"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <p>{JSON.stringify(props)}</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center dark:text-white">
                Menu Form
            </h1>
            <div className="max-w-md mx-auto mt-10">
                <Card>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="name" value="Menu Name" />
                            <TextInput
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Nama Menu"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="description"
                                value="Description Menu"
                            />
                            <TextInput
                                id="description"
                                type="text"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                placeholder="Deskripsi Menu"
                                sizing="lg"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="price" value="Price Menu" />
                            <TextInput
                                id="price"
                                type="number"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                placeholder="Harga Menu"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="amount" value="Amount Menu" />
                            <TextInput
                                id="amount"
                                type="number"
                                value={data.amount}
                                onChange={(e) =>
                                    setData("amount", e.target.value)
                                }
                                placeholder="Banyak Menu"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div id="fileUpload" className="max-w-md">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="image"
                                        value="Upload Image Menu"
                                    />
                                </div>
                                <FileInput
                                    id="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                    helperText="Insert Menu Image"
                                />
                            </div>
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
