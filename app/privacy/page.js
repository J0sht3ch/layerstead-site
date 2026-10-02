import LegalPage from "../components/LegalPage";
export const metadata = { title: "Privacy Policy" };
export default function Page() {
 return <LegalPage title="Privacy Policy" intro="How consultation requests are processed and how to contact Layerstead about your information." sections={[
  {
    "title": "Information submitted with your request",
    "paragraphs": [
      "The consultation form asks for your name, email, optional phone number, city, service interest, and a description of your problem. It also submits your booking acknowledgment and the notice version. Please do not include passwords, payment information, or sensitive personal details.",
      "These details allow Josiah to respond, understand the requested help, and discuss availability and next steps."
    ]
  },
  {
    "title": "Form processing and hosting",
    "paragraphs": [
      "Formspree processes consultation submissions and routes email notifications to Layerstead. The website is hosted on Vercel. These providers and the email service may process technical information needed to operate their services, deliver messages, and prevent abuse.",
      "Provider privacy information is available at https://formspree.io/legal/privacy-policy/ and https://vercel.com/legal/privacy-policy."
    ]
  },
  {
    "title": "Browser storage",
    "paragraphs": [
      "This website uses session storage to remember whether the welcome prompt has appeared during your browser session. That flag does not contain your consultation details. The form does not deliberately save your entered details in browser storage."
    ]
  },
  {
    "title": "Your information and requests",
    "paragraphs": [
      "Submitting a request sends information to Formspree and may create email copies. Contact Josiah at the email below to ask about stored inquiry information or request a correction or deletion. Include enough information to identify your inquiry without sending passwords or other sensitive details.",
      "Deletion timing depends on the records involved, provider capabilities, and any applicable recordkeeping requirements. No automatic deletion period is specified here."
    ]
  },
  {
    "title": "Security and updates",
    "paragraphs": [
      "The form sends requests through an HTTPS endpoint. No website or email service can guarantee complete security. If the request is sensitive, first contact Josiah to discuss an appropriate way to share it.",
      "This notice describes the website consultation process. Project-specific information handling can be discussed before services begin. Updates will be dated on this page."
    ]
  }
]} />;
}
