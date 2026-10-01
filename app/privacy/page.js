import { Header, Footer } from "../SiteChrome";
export const metadata = { title: "Privacy Policy | Layerstead Technologies" };
export default function Policy() {
  return (
    <>
      <Header />
      <main id="main" className="wrap section policy">
        <p className="eyebrow">LAYERSTEAD TECHNOLOGIES LLC</p>
        <h1>Privacy Policy</h1>
        <p className="small">Updated October 1, 2026</p>
        <section>
          <h2>Information you provide</h2>
          <p>
            The consultation form asks for your name, email address, optional
            phone number, property type, and a description of your request. A
            selected service may also be included. Please do not send passwords,
            payment card numbers, or other sensitive records through the form.
          </p>
        </section>
        <section>
          <h2>How inquiry information is used</h2>
          <p>
            Inquiry information is used to respond, understand the requested
            service, discuss availability, and communicate about possible work.
            A website inquiry does not subscribe you to a mailing list.
          </p>
        </section>
        <section>
          <h2>Providers involved</h2>
          <p>
            This website is hosted by Vercel. Formspree processes consultation
            form submissions, which may be delivered to the business email inbox
            and stored in Formspree’s submission archive. Hosting, form, and
            email providers may process technical information such as IP
            addresses, timestamps, browser information, and request logs for
            service operation and security.
          </p>
        </section>
        <section>
          <h2>Cookies and browser storage</h2>
          <p>
            The website code does not add advertising trackers, analytics
            scripts, or optional tracking cookies. Hosting and form providers
            may use their own operational or security technologies. Third-party
            sites linked from this website have their own policies.
          </p>
        </section>
        <section>
          <h2>Retention and your requests</h2>
          <p>
            Inquiry information may remain in business email and provider
            archives while the inquiry or related work is being handled. Contact
            Josiah to request access, correction, or deletion of your inquiry
            information. Records needed for ongoing work, accounting, disputes,
            or applicable legal requirements may need to be retained.
          </p>
        </section>
        <section>
          <h2>Security</h2>
          <p>
            The site uses HTTPS to encrypt information in transit. No internet
            service can guarantee complete security. If you think a submission
            included sensitive information by mistake, contact us directly.
          </p>
        </section>
        <section>
          <h2>Policy updates</h2>
          <p>
            This notice applies to website inquiries. Additional information may
            be provided for a separately agreed service. Changes will be
            reflected on this page with an updated date.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions, email breckenridge.josiah@layersteadtech.com
            or call (812) 252-9644.
          </p>
        </section>
        <a className="text-link" href="/#contact">
          Contact Layerstead ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
