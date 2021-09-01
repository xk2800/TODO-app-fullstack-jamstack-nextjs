import { signIn, signOut, useSession } from "next-auth/client";
import DarkmodeToggler from '../components/DarkmodeToggler';

export default function Navbar() {
    const [session, loading] = useSession();
    //const [colorTheme, setTheme] = useDarkMode();

    return (
        <nav className="flex justify-between items-center py-4 dark:bg-black">
            <p className="text-2xl font-bold text-[color:var(--darkbrown)] dark:text-[color:var(--lesserbrown)]">Simple To-do's</p>
            <div className="flex items-center ">
                <DarkmodeToggler />
                {/* <Link href='/api/logout'>
                    <a className="rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">Logout</a>
                </Link> */}
                {!session && (
                    <>
                        {/* Not signed in <br /> */}
                        <button onClick={() => signIn()} className="accessButton">Sign in</button>
                    </>
                )}

                {session && (
                    <>
                        {/* {console.log(session)} */}
                        <button onClick={() => signOut()} className="accessButton">Sign out</button>
                    </>
                )}
            </div>
        </nav>
    );
}
