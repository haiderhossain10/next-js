import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

function Login() {
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getError, setError] = useState(null);

    const router = useRouter();

    // login handler
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email: getEmail,
                password: getPassword,
                redirect: false,
            });
            setError(res.error);

            if (res.status == 200) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // google handler
    const googleHandler = async () => {
        signIn("google", {
            redirect: false,
        });
    };

    return (
        <>
            <section className="py-10">
                <div className="w-4/12 mx-auto shadow-lg p-10 rounded-md">
                    {getError !== null && (
                        <p className="text-red-600 text-sm pb-3">{getError}</p>
                    )}
                    <form onSubmit={loginHandler}>
                        <div className="mb-4">
                            <label className="text-sm font-medium block pb-2">
                                Email
                            </label>
                            <input
                                className="h-[50px] w-full rounded-md px-4 focus:outline-none border"
                                type="email"
                                placeholder="Enter Email"
                                value={getEmail}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-sm font-medium block pb-2">
                                Pasword
                            </label>
                            <input
                                className="h-[50px] w-full rounded-md px-4 focus:outline-none border"
                                type="password"
                                placeholder="Password"
                                value={getPassword}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="h-[50px] px-10 rounded-md bg-blue-600 text-white font-medium text-md">
                            Login
                        </button>
                    </form>
                    <button
                        onClick={googleHandler}
                        className="h-[50px] px-10 rounded-md border font-medium text-md mt-4"
                    >
                        Sign in with Google
                    </button>
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
}

export default Login;
