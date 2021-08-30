import { providers, signIn, getSession, csrfToken } from "next-auth/client";


export default function SignIn({ providers, csrfToken }) {
    return (
        <>
            <div className="bg-red-100">
                Welcome to our custom page
            </div>
            <div className="text-green-200">
                <div>
                    {Object.values(providers).map((provider) => {
                        if (provider.name === "Email") {
                            return;
                        }
                        return (
                            <div key={provider.name}>
                                <button variant="outline" onClick={() => signIn(provider.id)}>
                                    Sign in with {provider.name}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

SignIn.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res ) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context),
    };
};