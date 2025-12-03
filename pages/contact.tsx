import Loader from "../components/Loader";
import { SOCIAL_ICONS } from "@/utils/app.constants";
import { useState } from "react";
import { GetStaticProps } from "next";
import { getContactDetails, sendContact } from "@/utils/api";
import { ContactContent } from "@/utils/app.model";
import SEO from "@/components/SEO";
import React from "react";
import PageHeader from "@/components/PageHeader";

export default function Contact(contactContentData: ContactContent) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [errorSend, setErrorSend] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  // Validation state
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    } = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      setErrors({});
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
        title={contactContentData?.keywords.title || "Contact"}
        description={contactContentData?.keywords.description || "Contact Page"}
        keywords={contactContentData?.keywords.keywords?.split(",") || []}
        image={contactContentData?.keywords.imagePath}
      />
      <PageHeader
        title={"Contact Us"}
        description={"Get in touch, we’d love to hear"}
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
      />
      <main>
        <section className="section-base">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="title">
                  <h2>Write us</h2>
                  {/* <p>Contact us from here</p> */}
                </div>
                <form className="form-box form-ajax">
                  <div className="row">
                    <div className="col-lg-12">
                      <p>Name</p>
                      <div style={{ marginBottom: "10px" }}>
                        <input
                          id="name"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name)
                              setErrors({ ...errors, name: undefined });
                          }}
                          type="text"
                          className={`input-text ${
                            errors.name ? "error-field" : ""
                          }`}
                        />
                        {errors.name && (
                          <span
                            className="error-msg"
                            style={{ color: "red", fontSize: "12px" }}
                          >
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <p>Email</p>
                      <div style={{ marginBottom: "10px" }}>
                        <input
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email)
                              setErrors({ ...errors, email: undefined });
                          }}
                          type="email"
                          className={`input-text ${
                            errors.email ? "error-field" : ""
                          }`}
                        />
                        {errors.email && (
                          <span
                            className="error-msg"
                            style={{ color: "red", fontSize: "12px" }}
                          >
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <p>Phone No</p>
                      <div style={{ marginBottom: "10px" }}>
                        <input
                          id="phone"
                          name="phone"
                          placeholder="Phone No"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone)
                              setErrors({ ...errors, phone: undefined });
                          }}
                          type="text"
                          className={`input-text ${
                            errors.phone ? "error-field" : ""
                          }`}
                        />
                        {errors.phone && (
                          <span
                            className="error-msg"
                            style={{ color: "red", fontSize: "12px" }}
                          >
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <p>Message</p>
                      <div style={{ marginBottom: "10px" }}>
                        <textarea
                          id="messagge"
                          name="messagge"
                          className={`input-textarea ${
                            errors.message ? "error-field" : ""
                          }`}
                          placeholder="Write something ..."
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            if (errors.message)
                              setErrors({ ...errors, message: undefined });
                          }}
                        ></textarea>
                        {errors.message && (
                          <span
                            className="error-msg"
                            style={{ color: "red", fontSize: "12px" }}
                          >
                            {errors.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {isSending && <Loader size="small" />}
                  <button
                    className="btn btn-sm"
                    disabled={isSending}
                    onClick={handleSubmit}
                    type="submit"
                  >
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
              </div>
              <div className="col-lg-4">
                <div className="title">
                  {/* <h2>Contacts</h2> */}
                  <p>Information</p>
                </div>
                <ul className="text-list text-list-line">
                  <li>
                    <b>Address</b>
                    <hr />
                    <p>{contactContentData?.contact?.address}</p>
                  </li>
                  {/* <li><b>Web</b><hr /><p>{contactContentData?.data?.contact?.website}</p></li> */}
                  <li>
                    <b>Email</b>
                    <hr />
                    <p>{contactContentData?.contact?.email}</p>
                  </li>
                  <li>
                    <b>Phone</b>
                    <hr />
                    <p>{contactContentData?.contact?.phoneNo}</p>
                  </li>
                  {/* <li><b>Skype</b><hr /><p>{contactContentData?.data?.contact?.skype}</p></li> */}
                </ul>
                <hr className="space-sm" />
                <div className="icon-links icon-social icon-links-grid social-colors-hover">
                  {contactContentData?.socialLinks?.map((item) => (
                    <>
                      {item.link && (
                        <a
                          className={item.key}
                          target="_blank"
                          href={item.link}
                          key={item.id}
                          rel="noopener noreferrer"
                        >
                          <i className={SOCIAL_ICONS[item.key]} />
                        </a>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
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
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return {
      props: JSON.parse(JSON.stringify(new ContactContent())),
    };
  }
};
