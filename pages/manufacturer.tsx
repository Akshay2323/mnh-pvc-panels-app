import { GetStaticProps } from "next";
import { ManufacturerContentData } from "@/utils/app.model";
import { getManufacturerDetails } from "@/utils/api";
import SEO from "@/components/SEO";
import React from "react";
import PageHeader from "@/components/PageHeader";

export default function Manufaturer(manufacturerData: ManufacturerContentData) {

    return (
        <React.Fragment>
            <SEO
                title={
                    manufacturerData?.keywords.title || "Manufacturer"}
                description={manufacturerData?.keywords.description || "Manufacturer Page"}
                keywords={manufacturerData?.keywords.keywords?.split(",") || []}
                image={manufacturerData?.keywords.imagePath}
            />
            <PageHeader
                title={"Manufacturer"}
                description={"Crafting quality panels with care"}
                breadcrumbs={[
                    { label: 'Manufacturer', href: '/manufacturer' },
                ]}
            />
            <main>
                <section className="section-base">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: manufacturerData?.manufacturerContent?.content || '' }} />
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps<ManufacturerContentData> = async () => {
    try {
        const response = await getManufacturerDetails();
        const data = response.status ? response.data : new ManufacturerContentData();

        return {
            props: JSON.parse(JSON.stringify(data)),
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching manufacturer data:', error);
        return {
            props: JSON.parse(JSON.stringify(new ManufacturerContentData())),
        };
    }
};