import { useForm } from "@inertiajs/react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    return (
        <div className="mx-2 mt-14">
            <div className="max-w-sm mx-auto gap-16 items-center py-8 lg:py-16 ">
                <div className="font-light text-center text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                        Login Ceater
                    </h2>
                </div>
                <Card className="max-w-sm">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
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
                        <Button type="submit">Submit</Button>
                    </form>
                </Card>
            </div>

            {/* <form onSubmit={submit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@google.com"
                        required
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mb-5">
                    <InputLabel
                        htmlFor="password"
                        value="Password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        autoComplete="current-password"
                        placeholder="**********"
                        required
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="mb-5">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4">Log in</PrimaryButton>
                </div>
            </form>{" "} */}
        </div>
    );
}
