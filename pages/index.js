import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { table, getMinifiedRecord } from './api/utils/AirTable';

export default function Home({ initialTodos }) {
    console.log(initialTodos);
    return (
        <div>
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main>
                <h1>Todo App</h1>
                {initialTodos.map(todo =>
                    <Todo key={todo.id} todo={todo} />
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
