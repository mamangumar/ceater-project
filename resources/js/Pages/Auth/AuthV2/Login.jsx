import { useForm } from "@inertiajs/react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("login.post"));
    };

    return (
        <div className="mx-2 mt-14">
            <div className="max-w-sm mx-auto gap-16 items-center py-8 lg:py-16 ">
                <div className="font-light text-center text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                        Login Ceater
                    </h2>
                </div>
                <Card className="max-w-sm">
                    <form onSubmit={submit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email">Your Email</Label>
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                value={data.email}
                                placeholder="name@google.com"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password">Your Password</Label>
                            </div>
                            <TextInput
                                value={data.password}
                                id="password"
                                type="password"
                                placeholder="Input your password"
                                required
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <div>
                            <span>
                                Belum punya akun?{" "}
                                <a href="/register" className="text-teal-900 ">
                                    Register disini
                                </a>
                            </span>
                        </div>
                        <Button type="submit">Log in</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
