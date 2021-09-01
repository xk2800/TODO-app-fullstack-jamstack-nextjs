import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


export default function SkeletonLoader() {
    return (
        <SkeletonTheme color="#E5E7EB" highlightColor="#4B5563">
            <section>
                <Skeleton height={35} width={'100%'} />
            </section>
        </SkeletonTheme>
    );
}
