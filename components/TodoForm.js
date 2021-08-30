import { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

export default function TodoForm() {

    const [todo, setTodo] = useState('');
    const { addTodo } = useContext(TodosContext);

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
        setIsPending(true);
        toast.success('Yay! New Todo Successfully Added', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setTimeout(() => {
            setIsPending(false);
        }, 1000);
    };


    return (
        <form className="form my-6" onSubmit={handleSubmit}>
            <div className="flex flex-col text-sm mb-2">
                <label htmlFor="todo" className="font-bold mb-2 text-gray-800">Todo</label>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    required
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Learn About Logging In"
                    className="border border-gray-200 p-2 rounded-lg appearance-none focus:outline-none focus:border-red-400"
                />
            </div>
            {!isPending && <button type="submit" className="w-full rounded bg-blue-500 text-white hover:bg-blue-700 py-2 px-4">Submit</button>}
            {isPending && <button disabled type="submit" className="w-full rounded bg-blue-200 text-white hover:bg-blue-700 py-2 px-4">Submitting</button>}
            <ToastContainer />
        </form>
    );
}
