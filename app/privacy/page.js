import LegalPage from "../components/LegalPage";
export const metadata = { title: "Privacy Policy" };
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What the consultation form collects, why it is used, and how to contact Layerstead about your information."
      review="Confirm the contact details, Formspree account settings, retention schedule, hosting provider logs, and the proposed no-sale practice before publishing this as a final policy."
      sections={[
        {
          title: "Information you provide",
          paragraphs: [
            "The consultation form collects your name, email address, optional phone number, service area or city, service interest, and a short description of your problem. It also records a booking clarification acknowledgment and the notice version displayed with your request. Do not include passwords, payment-card information, or unnecessary sensitive information.",
            "If you contact Layerstead by email or phone, your correspondence and any details you choose to provide may also be retained.",
          ],
        },
        {
          title: "How inquiries are used",
          paragraphs: [
            "Consultation information is used to respond to your inquiry, assess the requested assistance, coordinate availability, and discuss next steps. A request does not automatically subscribe you to marketing.",
            "Proposed practice, subject to owner confirmation: Layerstead does not sell personal information. [CONFIRM THIS REFLECTS ACTUAL BUSINESS PRACTICE.]",
          ],
        },
        {
          title: "Formspree and email delivery",
          paragraphs: [
            "This website submits consultation requests to Formspree, a third-party contact-form processor, using the existing form endpoint. Formspree processes requests and routes notifications according to the business account configuration. Requests are routed to the receiving inbox configured in Layerstead’s Formspree account. This destination is managed separately from the public contact email displayed on this website.",
            "Formspree and the business email provider handle the information necessary to process and deliver inquiries under their own practices. Formspree may apply its spam filtering or require additional verification according to account settings. [REVIEW ENABLED SPAM-PREVENTION SERVICES AND THEIR DATA PRACTICES.] See Formspree’s privacy policy at https://formspree.io/legal/privacy-policy/.",
          ],
        },
        {
          title: "Browser storage and technical records",
          paragraphs: [
            "The website uses session storage to remember that its small welcome message has already appeared in the current browser session. That flag contains no consultation details. The form does not deliberately save your entered contact details in browser storage.",
            "No analytics, advertising pixels, or tracking-cookie code has been added to this implementation. The hosting, form, and email providers may process technical records such as IP address, request time, device or browser information, delivery records, and spam signals. [CONFIRM HOSTING PROVIDER, LOG FIELDS, LOG RETENTION, AND ANY SERVICES ENABLED OUTSIDE THIS REPOSITORY.]",
          ],
        },
        {
          title: "Retention and deletion",
          paragraphs: [
            "Retention schedule: [INSERT THE APPROVED RETENTION PERIOD FOR INQUIRIES, FORMSPREE SUBMISSIONS, EMAIL COPIES, AND CUSTOMER RECORDS, INCLUDING HOW DELETION IS PERFORMED.] Until that schedule is approved, no particular deletion deadline is promised.",
            "Records may need to be retained for legal, accounting, dispute, or contractual reasons. Any approved retention policy should distinguish inquiry records from records of an actual service engagement and account for provider backups.",
          ],
        },
        {
          title: "Correction and deletion requests",
          paragraphs: [
            "Contact Josiah using the email or phone below to request correction or deletion of consultation information. Describe the request without sending additional sensitive data. Layerstead may need reasonable information to verify the request and locate the relevant records.",
            "Requests will be considered subject to applicable law, necessary record retention, and provider capabilities. This policy does not assume that the Virginia Consumer Data Protection Act applies to Layerstead or that every visitor has rights under that statute. Applicable legal rights are not limited by this policy.",
          ],
        },
        {
          title: "Security and changes",
          paragraphs: [
            "The form is sent to an HTTPS Formspree endpoint. This implementation limits requested information, avoids intentional browser persistence of form details, and includes a hidden spam-trap field. Account access, email security, provider protections, and hosting settings also affect security and should be reviewed. No website, email system, or transmission method is completely secure.",
            "If the website’s collection practices change, this policy should be updated with an effective date and version. Material changes should be explained where appropriate.",
          ],
        },
      ]}
    />
  );
}
