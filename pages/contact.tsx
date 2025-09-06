import Loader from "./components/Loader";
import { SOCIAL_ICONS } from "@/utils/app.constants";
import { useState } from "react";
import { GetStaticProps } from "next";
import { getContactDetails, sendContact } from "@/utils/api";
import { ContactContent } from "@/utils/app.model";

export default function Contact(contactContentData: ContactContent) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const [errorSend, setErrorSend] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSending(true);
            await sendContact({
                name,
                email,
                phoneNo: phone,
                message,
            });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setSuccess(true);
            setErrorSend(false);
        } catch (error) {
            console.error(error);
            setErrorSend(true);
        } finally {
            setIsSending(false);
            setTimeout(() => {
                setSuccess(false);
                setErrorSend(false);
            }, 4000);
        }
    };
    return (
        <main>
            <section className="section-base">
                <div className="container">
                    <hr className="space" />
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="title">
                                <h2>Write us</h2>
                                <p>Contact us from here</p>
                            </div>
                            <form className="form-box form-ajax">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p>Name</p>
                                        <input id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="input-text" required />
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Email</p>
                                        <input id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input-text" required />
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Phone No</p>
                                        <input id="phone" name="phone" placeholder="Phone No" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="input-text" required />
                                    </div>
                                </div>
                                <p>Messagge</p>
                                <textarea id="messagge" name="messagge" className="input-textarea" placeholder="Write something ..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                {
                                    isSending && <Loader size="small" />
                                }
                                <button className="btn btn-sm" disabled={isSending} onClick={handleSubmit} type="submit">
                                    Send messagge
                                </button>
                                <div className="success-box" style={{ display: success ? "block" : "none" }}>
                                    <div className="alert alert-success">Congratulations. Your message has been sent successfully</div>
                                </div>
                                <div className="error-box" style={{ display: errorSend ? "block" : "none" }}>
                                    <div className="alert alert-warning">Error, please retry. Your message has not been sent</div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">
                                <h2>Contacts</h2>
                                <p>Information</p>
                            </div>
                            <ul className="text-list text-list-line">
                                <li><b>Address</b><hr /><p>{contactContentData?.contact?.address}</p></li>
                                {/* <li><b>Web</b><hr /><p>{contactContentData?.data?.contact?.website}</p></li> */}
                                <li><b>Email</b><hr /><p>{contactContentData?.contact?.email}</p></li>
                                <li><b>Phone</b><hr /><p>{contactContentData?.contact?.phoneNo}</p></li>
                                {/* <li><b>Skype</b><hr /><p>{contactContentData?.data?.contact?.skype}</p></li> */}
                            </ul>
                            <hr className="space-sm" />
                            <div className="icon-links icon-social icon-links-grid social-colors-hover">
                                {
                                    contactContentData?.socialLinks?.map((item) => (
                                        <a className={item.key}
                                            target="_blank"
                                            href={item.link}
                                            key={item.id}
                                            rel="noopener noreferrer"
                                        >
                                            <i className={SOCIAL_ICONS[item.key]} />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


export const getStaticProps: GetStaticProps<ContactContent> = async () => {
    try {
        const response = await getContactDetails();
        const data = response.status ? response.data : new ContactContent();

        return {
            props: {
                ...data,
            },
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching contact data:', error);
        return {
            props: {
                ...new ContactContent(),
            },
        };
    }
};