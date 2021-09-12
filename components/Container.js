export default function Container({children}) {
    return (
        <div className="container mx-auto mx-w-xl w-[80%] dark:bg-black h-screen">{children}</div>
    )
}
