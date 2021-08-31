import '../styles/globals.css';
import { Provider } from "next-auth/client";
import { TodosProvider } from '../context/TodosContext';
import TodoFooter from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <TodosProvider>
        <div className="container mx-auto my-10 mx-w-xl">
          <Component {...pageProps} />
          <TodoFooter />
        </div>
      </TodosProvider>
    </Provider>
  );
}

export default MyApp;
