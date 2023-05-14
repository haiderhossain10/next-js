import { getSession, signOut } from "next-auth/react";

function Home({ user }) {
    const logoutHandler = () => {
        if (confirm("Are you sure you")) {
            signOut();
        }
    };
    return (
        <>
            {user.email}{" "}
            <button
                onClick={logoutHandler}
                className="h-[50px] bg-red-600 px-10 rounded-md font-medium text-md text-white"
            >
                Log out
            </button>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(context);

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: session.user,
        },
    };
}

export default Home;
