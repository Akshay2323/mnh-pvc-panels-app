import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { getContactDetails, sendBecomeDealer } from "@/utils/api";
import { ContactContent } from "@/utils/app.model";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import Loader from "../components/Loader";

export default function BecomeDealer(contactContentData: ContactContent) {
  const [name, setName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gstNo, setGstNo] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [errorSend, setErrorSend] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Optional: extra manual validation (browser already validates required fields)
    if (!name || !companyName || !email || !phone || !gstNo || !address || !message) {
      setErrorSend(true);
      return;
    }

    try {
      setIsSending(true);
      await sendBecomeDealer({
        name,
        companyName,
        gstNo,
        address,
        email,
        phoneNo: phone,
        message,
      });

      // Reset form
      setName("");
      setCompanyName("");
      setGstNo("");
      setAddress("");
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
    <React.Fragment>
      <SEO
        title={contactContentData?.becomeDealerKeywords.title || "Become Dealer"}
        description={
          contactContentData?.becomeDealerKeywords.description ||
          "Become Dealer Page"
        }
        keywords={
          contactContentData?.becomeDealerKeywords.keywords?.split(",") || []
        }
        image={contactContentData?.becomeDealerKeywords.imagePath}
      />

      <PageHeader
        title={"Become a Dealer"}
        description={"Write us to become a dealer"}
        breadcrumbs={[{ label: "Become Dealer", href: "/become-dealer" }]}
      />

      <main>
        <section className="section-base">
          <div className="container">

            {/* Form START */}
            <form className="form-box form-ajax" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <p>Name</p>
                  <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="input-text"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <p>Company Name</p>
                  <input
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    type="text"
                    className="input-text"
                    required
                  />
                </div>

                <div className="col-lg-4">
                  <p>Email</p>
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="input-text"
                    required
                  />
                </div>

                <div className="col-lg-4">
                  <p>Phone No</p>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Phone No"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="input-text"
                    required
                  />
                </div>

                <div className="col-lg-4">
                  <p>GST No</p>
                  <input
                    id="gstNo"
                    name="gstNo"
                    placeholder="GST No"
                    value={gstNo}
                    onChange={(e) => setGstNo(e.target.value)}
                    type="text"
                    className="input-text"
                    required
                  />
                </div>
              </div>

              <p>Address</p>
              <textarea
                id="address"
                name="address"
                className="input-textarea"
                placeholder="Write something ..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>

              <p>Message</p>
              <textarea
                id="message"
                name="message"
                className="input-textarea"
                placeholder="Write something ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              {isSending && <Loader size="small" />}

              <button className="btn btn-sm" type="submit" disabled={isSending}>
                Send message
              </button>

              <div
                className="success-box"
                style={{ display: success ? "block" : "none" }}
              >
                <div className="alert alert-success">
                  Congratulations. Your message has been sent successfully
                </div>
              </div>

              <div
                className="error-box"
                style={{ display: errorSend ? "block" : "none" }}
              >
                <div className="alert alert-warning">
                  Error, please retry. Your message has not been sent
                </div>
              </div>
            </form>
            {/* Form END */}

          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps<ContactContent> = async () => {
  try {
    const response = await getContactDetails();
    const data = response.status ? response.data : new ContactContent();

    return {
      props: JSON.parse(JSON.stringify(data)),
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return {
      props: JSON.parse(JSON.stringify(new ContactContent())),
    };
  }
};
