import { useForm } from "@inertiajs/react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <div className="mx-2 mt-14">
            <div className="max-w-sm mx-auto gap-16 items-center py-8 lg:py-16 ">
                <div className="font-light text-center text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                        Register Ceater
                    </h2>
                </div>
                <Card className="max-w-sm">
                    <form className="flex flex-col gap-4" onSubmit={submit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name">Your Name</Label>
                            </div>
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                type="text"
                                placeholder="Your name"
                                required
                                onChange={(e) =>
                                    setData("name", e.target.value)
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
                                onChange={(e) =>
                                    setData("email", e.target.value)
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
                                onChange={(e) =>
                                    setData("password", e.target.value)
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
