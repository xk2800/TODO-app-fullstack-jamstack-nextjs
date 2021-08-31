import { signIn, signOut, useSession } from "next-auth/client";

export default function Navbar() {
    const [session, loading] = useSession();
    return (
        <nav className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-[color:var(--darkbrown)]">My Todos</p>
            <div className="flex">
                {/* <Link href='/api/logout'>
                    <a className="rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">Logout</a>
                </Link> */}
                {!session && (
                    <>
                        {/* Not signed in <br /> */}
                        <button onClick={() => signIn()} className="rounded-[10px] bg-[color:var(--darkbrown)] hover:bg-[color:var(--brown)] hover:text-black text-white py-2 px-4">Sign in</button>
                    </>
                )}

                {session && (
                    <>
                        {/* {console.log(session)} */}
                        <button onClick={() => signOut()} className="rounded-[10px] bg-[color:var(--darkbrown)] hover:bg-[color:var(--brown)] hover:text-black text-white py-2 px-4">Sign out</button>
                    </>
                )}
            </div>
        </nav>
    );
}
