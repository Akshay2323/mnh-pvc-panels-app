import { getAboutUsDetails } from "@/utils/api";
import { AboutUsContent } from "@/utils/app.model";
import { GetStaticProps } from "next";
import React from "react";
import SEO from "../components/SEO";
import PageHeader from "@/components/PageHeader";

export default function About(aboutUsData: AboutUsContent) {
    return (
        <React.Fragment>
            <SEO
                title={
                    aboutUsData?.keywords.title || "About"}
                description={aboutUsData?.keywords.description || "About Page"}
                keywords={aboutUsData?.keywords.keywords?.split(",") || []}
                image={aboutUsData?.keywords.imagePath}
            />
            <PageHeader
                title={"About Us"}
                description={"Crafting style with lasting strength"}
                breadcrumbs={[
                    { label: 'About', href: '/about' },
                ]}
            />
            <main>
                <section className="section-base">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: aboutUsData?.aboutUs?.content || '' }} />
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}
export const getStaticProps: GetStaticProps<AboutUsContent> = async () => {
    try {
        const response = await getAboutUsDetails();
        const data = response.status ? response.data : new AboutUsContent();

        return {
            props: JSON.parse(JSON.stringify(data)),
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching about us data:', error);
        return {
            props: JSON.parse(JSON.stringify(new AboutUsContent())),
        };
    }
};