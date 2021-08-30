import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto my-10 mx-w-xl">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
