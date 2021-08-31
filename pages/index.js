import Head from 'next/head';
import Link from 'next/link';
import { getSession, useSession, signIn } from "next-auth/client";
import { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { TodosContext } from '../context/TodosContext';
import { table, getMinifiedRecord } from './api/utils/AirTable';

export default function Home({ initialTodos }) {

    const [session] = useSession();
    { console.log(session); }
    //{ console.log(user); }

    const { todos, setTodos } = useContext(TodosContext);

    useEffect(() => {
        setTodos(initialTodos);
    }, []);

    console.log(initialTodos);
    return (
        <div>
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main>
                {!session && (
                    <>
                        <h1 className="text-2xl"><button onClick={() => signIn()} className="underline">Login</button> to see your Todos</h1>
                    </>
                )}
                {session && (
                    <>
                        <div className="text-center font-secondary">Welcome {session.user.name} <br /> Signed in as {session.user.email} <br /><br /></div>
                        <h1 className='text-2xl text-center mb-4 font-main'>My Todo List</h1>
                        <TodoForm />

                        <ul>
                            {todos &&
                                todos.map(todo =>
                                    <Todo key={todo.id} todo={todo} />
                                )
                            }
                        </ul>
                    </>
                )}

            </main>
        </div>
    );
}

export async function getServerSideProps(context) {

    const session = await getSession(context);
    let todos = [];


    try {
        if (session?.user) {
            todos = await table.select({
                filterByFormula: `userId = '${session?.user?.email}'`
            }).firstPage();
        }
        return {
            props: {
                initialTodos: getMinifiedRecord(todos),
            }
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                err: "Something went wrong"
            }
        };
    }
}
