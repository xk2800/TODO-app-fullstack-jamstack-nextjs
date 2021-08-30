import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-red-500">My Todos</p>
            <div className="flex">
                <Link href='/api/logout'>
                    <a className="rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">Logout</a>
                </Link>

                <Link href='/api/login'>
                    <a className="rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">Login</a>
                </Link>
            </div>
        </nav>
    );
}
