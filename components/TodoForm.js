import { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from './Spinner/index';
import SkeletonCard from '../components/SkeletonLoader';

import 'react-toastify/dist/ReactToastify.min.css';

export default function TodoForm() {

    const [todo, setTodo] = useState('');
    const [loading, setLoading] = useState(false);

    const [isPending, setIsPending] = useState(false);

    const { addTodo } = useContext(TodosContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
        setIsPending(true);
        setLoading(true);


        setTimeout(() => {
            setIsPending(false);
            setLoading(false);
            toast.success('Yay! New Todo Successfully Added', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }, 1000);
    };


    return (
        <>
        <form className="form my-6" onSubmit={handleSubmit}>
            <div className="flex flex-col text-sm mb-2">
                {/* <label htmlFor="todo" className="font-bold mb-2 text-gray-800">Todo</label> */}
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    required
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Need To Wash Car"
                    className="border border-gray-200 p-2 rounded-lg appearance-none focus:outline-none focus:border-[color:var(--brown)] font-secondary dark:bg-black dark:text-white dark:border-[2.5px]"
                />
            </div>
            {!isPending && <button type="submit" className="w-full rounded-[5px] border-[color:var(--darkbrown)] bg-[color:var(--darkbrown)] hover:bg-[color:var(--brown)] hover:border-[color:var(--brown)] hover:text-black dark:bg-[color:var(--lesserbrown)] dark:text-black dark:hover:bg-[color:var(--brown)] dark:hover:text-white text-white py-2 px-4 font-secondary">Submit</button>}
            {isPending && <button disabled type="submit" className="w-full rounded-[5px] border-[color:var(--lesserbrown)] bg-[color:var(--lesserbrown)] text-white py-2 px-4 font-secondary dark:bg-[color:var(--evenlesserbrown)] dark:text-black cursor-wait">{/*Submitting*/}<Spinner className="mx-auto" /> </button>}
            <ToastContainer />
        </form>
        {loading && <SkeletonCard />}
        </>
    );
}
