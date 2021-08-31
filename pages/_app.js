import '../styles/globals.css';
import { Provider } from "next-auth/client";
import { TodosProvider } from '../context/TodosContext';
import Container from '../components/Container';
import TodoFooter from '../components/Footer';
import DarkmodeToggler from '../components/DarkmodeToggler';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <TodosProvider>
        <div className="dark:bg-black">
          <Container>
            <Component {...pageProps} />
            <DarkmodeToggler />
            <TodoFooter />
          </Container>
        </div>
      </TodosProvider>
    </Provider>
  );
}

export default MyApp;
