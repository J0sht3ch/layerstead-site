import LegalPage from "../components/LegalPage";
export const metadata = { title: "Website Terms of Use" };
export default function Page() {
 return <LegalPage title="Website Terms of Use" intro="Information about using the Layerstead website and requesting help." sections={[
  {
    "title": "Website information",
    "paragraphs": [
      "This website introduces Layerstead Technologies and its local technology services. Descriptions provide general information; recommendations depend on your equipment, space, connectivity, and needs."
    ]
  },
  {
    "title": "Consultation requests",
    "paragraphs": [
      "A form submission starts a conversation. It does not book an appointment, authorize work, or commit you to a purchase. Availability, scope, pricing, and any applicable service terms are confirmed separately before work begins."
    ]
  },
  {
    "title": "Responsible use",
    "paragraphs": [
      "Provide accurate contact information and submit only information you are authorized to share. Do not send spam, passwords, malicious content, or requests intended to interfere with this website or its form service."
    ]
  },
  {
    "title": "Third-party services",
    "paragraphs": [
      "Formspree processes the consultation form and Vercel hosts the website. Third-party services operate under their own terms and privacy practices. Their availability can affect website access and request delivery."
    ]
  },
  {
    "title": "Questions and corrections",
    "paragraphs": [
      "Contact Josiah using the information below if you notice an error or have a question about the website. Job-specific commitments are documented separately from this website."
    ]
  }
]} />;
}
