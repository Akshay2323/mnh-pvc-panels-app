import { getAboutUsDetails } from "@/utils/api";
import { AboutUsContent } from "@/utils/app.model";
import { GetStaticProps } from "next";
import SEO from "../components/SEO";

export default function About(aboutUsData: AboutUsContent) {
    return (
        <main>
            <SEO
                title={
                    aboutUsData?.keywords.title || "About"}
                description={aboutUsData?.keywords.description || "About Page"}
                keywords={aboutUsData?.keywords.keywords?.split(",") || []}
                image={aboutUsData?.keywords.imagePath}
            />
            <section className="section-base">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: aboutUsData?.aboutUs?.content || '' }} />
                </div>
            </section>
        </main>
    )
}
export const getStaticProps: GetStaticProps<AboutUsContent> = async () => {
    try {
        const response = await getAboutUsDetails();
        const data = response.status ? response.data : new AboutUsContent();

        return {
            props: {
                ...data,
            },
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching about us data:', error);
        return {
            props: {
                ...new AboutUsContent(),
            },
        };
    }
};