import { useContext, useState } from 'react';
import { TodosContext } from '../context/TodosContext.js';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

export default function Todo({ todo }) {

    const { updateTodo, deleteTodo } = useContext(TodosContext);

    const [loading, setLoading] = useState(false);

    const handleToggleCompleted = async () => {
        const updatedFields = {
            ...todo.fields,
            completed: !todo.fields.completed,
        };
        const updatedTodo = { id: todo.id, fields: updatedFields };
        updateTodo(updatedTodo);
        setLoading(true);
        toast.success('Yay! Todo Successfully Updated', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    };

    return (
        <>
            {!loading &&
                <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
                    <input
                        name="completed"
                        type="checkbox"
                        checked={todo.fields.completed}
                        onChange={handleToggleCompleted}
                        className="mr-2 form-checkbox h-5 w-5 cursor-pointer"
                    />
                    <span
                        className={`flex-1 text-gray-800  ${todo.fields.completed ? 'line-through' : ''
                            }`}
                    >
                        {todo.fields.description}
                    </span>
                    <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline font-secondary"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            }

            {loading &&
                <li className=" flex items-center shadow-lg rounded-lg my-2 py-2 px-4 blur-[1px]">
                    <input
                        name="completed"
                        type="checkbox"
                        checked={todo.fields.completed}
                        onChange={handleToggleCompleted}
                        className="mr-2 form-checkbox h-5 w-5 cursor-pointer"
                        disabled
                    />
                    <span
                        className={`flex-1 text-gray-800 ${todo.fields.completed ? 'line-through' : ''
                            }`}
                    >
                        {todo.fields.description}
                    </span>
                    <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline font-secondary"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            }
            <ToastContainer />
        </>
    );
}