import 'tailwindcss/tailwind.css';
import { TodosProvider } from '../context/TodosContext';

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <div className="container mx-auto my-10 mx-w-xl">
        <Component {...pageProps} />
      </div>
    </TodosProvider>
  );
}

export default MyApp;
