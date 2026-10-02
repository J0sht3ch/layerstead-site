import LegalPage from "../components/LegalPage";
export const metadata = { title: "Service Agreement" };
export default function Page() {
 return <LegalPage title="Service Agreement" intro="Your project agreement is prepared for your specific work and confirmed separately." sections={[
  {
    "title": "Before work begins",
    "paragraphs": [
      "Discuss the problem, location, desired outcome, and any equipment or access constraints with Josiah. Your project documentation should identify the agreed scope, deliverables, pricing, schedule, and responsibilities."
    ]
  },
  {
    "title": "Project-specific details",
    "paragraphs": [
      "Equipment purchases, payment arrangements, changes to scope, cancellation arrangements, and any applicable warranties should be clarified in the agreement for your project. This page does not set prices, warranty periods, cancellation charges, or other job-specific terms."
    ]
  },
  {
    "title": "Review and approval",
    "paragraphs": [
      "Review your proposed agreement and ask questions before authorizing work. A consultation request is not a signed agreement, and this page does not authorize services or accept a contract on your behalf.",
      "Contact Josiah to discuss your project and obtain the applicable service documents."
    ]
  }
]} />;
}
