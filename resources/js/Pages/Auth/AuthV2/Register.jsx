import { useForm } from "@inertiajs/react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "Rizal Dwi Anggoro",
        email: "rizal@email.com",
        password: "password",
        password_confirmation: "password",
    });

    return (
        <div className="mx-2 mt-14">
            <div className="max-w-sm mx-auto gap-16 items-center py-8 lg:py-16 ">
                <div className="font-light text-center text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">
                        Register Ceater
                    </h2>
                </div>
                <Card className="max-w-sm">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            post(route("register"), {
                                onSuccess: (e) => console.log(e),
                                onError: (e) => console.log(e),
                            });
                        }}
                    >
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name">Your Name</Label>
                            </div>
                            <TextInput
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                                value={data.name}
                                onChange={(e) =>
                                    setData({ ...data, name: e.target.value })
                                }
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email">Your Email</Label>
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="name@google.com"
                                required
                                value={data.email}
                                onChange={(e) =>
                                    setData({ ...data, email: e.target.value })
                                }
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                required
                                value={data.password}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
