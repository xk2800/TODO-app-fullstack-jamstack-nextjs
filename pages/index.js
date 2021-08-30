import Head from 'next/head';
import { useSession } from "next-auth/client";
import { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { TodosContext } from '../context/TodosContext';
import { table, getMinifiedRecord } from './api/utils/AirTable';

export default function Home({ initialTodos }) {

    const [session] = useSession();
    {console.log(session)}

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
                        <h1>Login to see items</h1>
                    </>
                )}
                {session && (
                    <>
                        <h1 className='text-2xl text-center mb-4'>My Todo List</h1>
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
    try {
        const todos = await table.select({}).firstPage();
        return {
            props: {
                initialTodos: getMinifiedRecord(todos)
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
