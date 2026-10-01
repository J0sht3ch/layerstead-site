import { Header, Footer } from "../SiteChrome";
export const metadata = {
  title: "Website Terms & Acceptable Use | Layerstead Technologies",
};
export default function Policy() {
  return (
    <>
      <Header />
      <main id="main" className="wrap section policy">
        <p className="eyebrow">LAYERSTEAD TECHNOLOGIES LLC</p>
        <h1>Website Terms & Acceptable Use</h1>
        <p className="small">Updated October 1, 2026</p>
        <section>
          <h2>About this website</h2>
          <p>
            Layerstead Technologies LLC provides information about networking
            and technology services in Hampton Roads, Virginia. Website
            descriptions are general information; they are not a diagnosis, a
            guaranteed result, or a binding quotation.
          </p>
        </section>
        <section>
          <h2>Inquiries and bookings</h2>
          <p>
            Submitting a consultation request does not create a service
            contract, confirm an appointment, or authorize charges.
            Availability, scope, pricing, equipment costs, and scheduling must
            be agreed separately before work begins.
          </p>
        </section>
        <section>
          <h2>Service arrangements</h2>
          <p>
            The written quote or service agreement for a job should describe the
            work, payment terms, access requirements, cancellation arrangements,
            and relevant responsibilities. These website terms do not replace
            that agreement or set a cancellation fee.
          </p>
        </section>
        <section>
          <h2>Acceptable website use</h2>
          <p>
            Use the website and contact form for legitimate inquiries. Do not
            submit spam, impersonate another person, upload malicious content,
            attempt unauthorized access, or intentionally disrupt the website or
            its providers.
          </p>
        </section>
        <section>
          <h2>Equipment authorization</h2>
          <p>
            Request work only on equipment or networks you own or are authorized
            to manage. Any access to devices, accounts, or premises must be
            agreed for the specific job. Do not send account passwords through
            the public form.
          </p>
        </section>
        <section>
          <h2>Website content and third-party services</h2>
          <p>
            Layerstead’s name, branding, and original website content may not be
            used to misrepresent affiliation or endorsement. Links to external
            services are provided for convenience; those services have their own
            terms and practices.
          </p>
        </section>
        <section>
          <h2>Availability and corrections</h2>
          <p>
            Website information may change and the site may be temporarily
            unavailable. Contact Layerstead to confirm details important to your
            project. These terms do not exclude rights or protections that
            applicable law does not allow to be excluded.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Questions about the website or a proposed service can be sent to
            breckenridge.josiah@layersteadtech.com or discussed at (812)
            252-9644.
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
