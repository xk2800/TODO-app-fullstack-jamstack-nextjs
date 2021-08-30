import 'tailwindcss/tailwind.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import { TodosProvider } from '../context/TodosContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <TodosProvider>
        <div className="container mx-auto my-10 mx-w-xl">
          <Component {...pageProps} />
        </div>
      </TodosProvider>
    </UserProvider>
  );
}

export default MyApp;
