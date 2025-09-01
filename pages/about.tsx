import { useAboutUsContentQuery } from "@/store/api/apiSlice";
import Loader from "./components/Loader";

export default function About() {
    const { data: aboutUsData, isLoading, error } = useAboutUsContentQuery();
    if (isLoading) {
        return <Loader size="medium" />;
    }
    if (error) {
        console.error('Error loading content:', error);
        return <div>Error loading content. Please try again later.</div>;
    }
    return (
        <main>
            <hr className="section-base" />
            <section className="section-base">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: aboutUsData?.data?.aboutUs?.content || '' }} />
                </div>
            </section>
        </main>
    )
}
