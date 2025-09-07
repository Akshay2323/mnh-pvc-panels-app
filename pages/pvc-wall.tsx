import { GetStaticProps } from "next";
import { getPvcWallDetails } from "@/utils/api";
import { PvcWallContentData } from "@/utils/app.model";
import SEO from "@/components/SEO";

export default function PVCWall(pvcWallData: PvcWallContentData) {

    return (
        <main>
            <SEO
                title={
                    pvcWallData?.keywords.title || "PVC Wall"}
                description={pvcWallData?.keywords.description || "PVC Wall Page"}
                keywords={pvcWallData?.keywords.keywords?.split(",") || []}
                image={pvcWallData?.keywords.imagePath}
            />
            <section className="section-base">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: pvcWallData?.pvcWallContent?.content || '' }} />
                </div>
            </section>
        </main>
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