
import { GetStaticProps } from "next";
import { ManufacturerContentData } from "@/utils/app.model";
import { getManufacturerDetails } from "@/utils/api";

export default function Manufaturer(manufacturerData: ManufacturerContentData) {

    return (
        <main>
            <hr className="section-base" />
            <section className="section-base">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: manufacturerData?.manufacturerContent?.content || '' }} />
                </div>
            </section>
        </main>
    )
}

export const getStaticProps: GetStaticProps<ManufacturerContentData> = async () => {
    try {
        const response = await getManufacturerDetails();
        const data = response.status ? response.data : new ManufacturerContentData();

        return {
            props: {
                ...data,
            },
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching manufacturer data:', error);
        return {
            props: {
                ...new ManufacturerContentData(),
            },
        };
    }
};