import { providers, signIn, getSession, csrfToken } from "next-auth/client";


export default function SignIn({ providers, csrfToken }) {
    return (
        <>
            <div className="text-3xl font-main text-[color:var(--darkbrown)] mb-[10px]">
                Login to continue
            </div>
            <div className="text-xl font-secondary pl-[30px] ">
                {/* <button className="border-[2px] border-black px-[10px]"> */}
                    {Object.values(providers).map((provider) => {
                        if (provider.name === "Email") {
                            return;
                        }
                        return (
                            <div key={provider.name}>
                                <button variant="outline" onClick={() => signIn(provider.id)} className="rounded-[10px] border-[2px] border-[color:var(--darkbrown)] bg-[color:var(--darkbrown)] hover:bg-[color:var(--brown)] hover:border-[color:var(--brown)] hover:text-black text-white px-[15px] py-[20px]">
                                    Login with {provider.name}
                                </button>
                            </div>
                        );
                    })}
                {/* </button> */}
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