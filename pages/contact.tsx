export default function Contact() {
    return (
        <div>
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
                                <form action="themekit/scripts/contact-form/contact-form.php" className="form-box form-ajax" method="post" data-email="example@domain.com">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p>Name</p>
                                            <input id="name" name="name" placeholder="Name" type="text" className="input-text" required />
                                        </div>
                                        <div className="col-lg-6">
                                            <p>Email</p>
                                            <input id="email" name="email" placeholder="Email" type="email" className="input-text" required />
                                        </div>
                                    </div>
                                    <p>Messagge</p>
                                    <textarea id="messagge" name="messagge" className="input-textarea" placeholder="Write something ..." required></textarea>
                                    <div className="form-checkbox">
                                        <input type="checkbox" id="check" name="check" value="check" required />
                                        <label>You accept the terms of service and the privacy policy</label>
                                    </div>
                                    <button className="btn btn-sm" type="submit">Send messagge</button>
                                    <div className="success-box">
                                        <div className="alert alert-success">Congratulations. Your message has been sent successfully</div>
                                    </div>
                                    <div className="error-box">
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
                                    <li><b>Address</b><hr /><p>Pellegrino, Veneto, Italy</p></li>
                                    <li><b>Web</b><hr /><p>domain.com</p></li>
                                    <li><b>Email</b><hr /><p>info@domain.com</p></li>
                                    <li><b>Phone</b><hr /><p>(02) 123 456 789999</p></li>
                                    <li><b>Skype</b><hr /><p>example.name</p></li>
                                </ul>
                                <hr className="space-sm" />
                                <div className="icon-links icon-social icon-links-grid social-colors-hover">
                                    <a className="facebook"><i className="icon-facebook"></i></a>
                                    <a className="twitter"><i className="icon-twitter"></i></a>
                                    <a className="instagram"><i className="icon-instagram"></i></a>
                                    <a className="google"><i className="icon-google"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
