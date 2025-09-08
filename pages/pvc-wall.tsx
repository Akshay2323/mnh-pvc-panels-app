import { GetStaticProps } from "next";
import { getPvcWallDetails } from "@/utils/api";
import { PvcWallContentData } from "@/utils/app.model";
import SEO from "@/components/SEO";
import React from "react";
import PageHeader from "@/components/PageHeader";

export default function PVCWall(pvcWallData: PvcWallContentData) {

    return (
        <React.Fragment>
            <SEO
                title={
                    pvcWallData?.keywords.title || "PVC Wall"}
                description={pvcWallData?.keywords.description || "PVC Wall Page"}
                keywords={pvcWallData?.keywords.keywords?.split(",") || []}
                image={pvcWallData?.keywords.imagePath}
            />
            <PageHeader
                title={"PVC Wall"}
                description={"Stylish walls with lasting strength"}
                breadcrumbs={[
                    { label: 'PVC Wall', href: '/pvc-wall' },
                ]}
            />
            <main>
                <section className="section-base">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: pvcWallData?.pvcWallContent?.content || '' }} />
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps<PvcWallContentData> = async () => {
    try {
        const response = await getPvcWallDetails();
        const data = response.status ? response.data : new PvcWallContentData();

        return {
            props: {
                ...data,
            },
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching pvc wall data:', error);
        return {
            props: {
                ...new PvcWallContentData(),
            },
        };
    }
};