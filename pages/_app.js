import "../styles/globals.css";

import { Provider } from "next-auth/client";

import Container from "../components/Container";
import TodoFooter from "../components/Footer";
import { TodosProvider } from "../context/TodosContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <TodosProvider>
        <div className="dark:bg-black">
          <Container>
            <Component {...pageProps} />
            <TodoFooter />
          </Container>
        </div>
      </TodosProvider>
    </Provider>
  );
}

export default MyApp;
