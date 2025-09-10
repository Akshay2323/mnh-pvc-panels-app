import { getFaq } from "@/utils/api";
import { FaqContent } from "@/utils/app.model";
import { GetStaticProps } from "next";
import React from "react";
import SEO from "../components/SEO";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function Faq(faqData: FaqContent) {
    return (
        <React.Fragment>
            <SEO
                title={
                    faqData?.keywords.title || "FAQ"}
                description={faqData?.keywords.description || "FAQ Page"}
                keywords={faqData?.keywords.keywords?.split(",") || []}
                image={faqData?.keywords.imagePath}
            />
            <PageHeader
                title={"FAQ Us"}
                description={"Everything you need to know, in one place"}
                breadcrumbs={[
                    { label: 'FAQ', href: '' },
                ]}
            />
            <main>
                <section className="section-base">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="accordion-list" data-open="1">
                                    {
                                        (faqData?.faq || []).map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <a href="#">{item.title}</a>
                                                    <div className="content">
                                                        <p>{item.description}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}
export const getStaticProps: GetStaticProps<FaqContent> = async () => {
    try {
        const response = await getFaq();
        const data = response.status ? response.data : new FaqContent();

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
                ...new FaqContent(),
            },
        };
    }
};