import LegalPage from "../components/LegalPage";
export const metadata = { title: "Service Disclaimer & Booking Clarification" };
export default function Disclaimer() {
  return (
    <LegalPage
      title="Service Disclaimer & Booking Clarification"
      intro="A consultation request starts a conversation. Scheduling and service authorization are separate steps."
      review="Confirm scheduling, assessment charges if any, warranty practices, and the signed agreement workflow. No price, warranty period, or service guarantee is established by this page."
      sections={[
        {
          title: "A request is not a booking",
          paragraphs: [
            "Submitting a consultation request does not confirm an appointment. Availability and next steps are confirmed directly by Layerstead. A request alone does not authorize work, commit you to purchasing services, or create a service engagement.",
            "Layerstead must confirm any appointment, assessment arrangements, and applicable charges before they are accepted. No consultation price is stated on this website.",
          ],
        },
        {
          title: "Work requires an agreed scope",
          paragraphs: [
            "Final project scope, pricing, payment terms, equipment responsibilities, and applicable warranty terms are documented in a separate signed Service Agreement or Master Services Agreement and applicable Statement of Work.",
            "Do not treat website descriptions, a form submission, or preliminary recommendations as a substitute for that signed documentation. Additional work or changes should be approved through the agreement’s change process.",
          ],
        },
        {
          title: "Recommendations depend on assessment",
          paragraphs: [
            "Recommendations depend on the customer’s environment, equipment, building layout, cabling, connectivity, and stated needs. Site access and building requirements may affect what work is practical or permitted.",
            "Customers should disclose known constraints and confirm authority to permit work. Decisions about equipment purchase, installation access, data backups, and service changes belong in the project scope.",
          ],
        },
        {
          title: "Performance and third-party factors",
          paragraphs: [
            "ISP performance, existing equipment, interference, building materials, device limitations, and third-party services can affect results. Layerstead does not promise a particular internet speed, continuous connectivity, or protection against every security threat based on the website alone.",
            "Equipment manufacturer warranties and third-party service obligations are separate from any workmanship terms Layerstead may agree to provide. Applicable warranties and limitations should be explained in the signed agreement.",
          ],
        },
        {
          title: "Before work begins",
          paragraphs: [
            "Confirm the appointment and assessment arrangements, review the proposed scope and pricing, identify equipment and access responsibilities, and sign the applicable service documents. Ask Josiah about anything that is unclear.",
            "The Service Agreement page explains what to discuss before work begins. Your project agreement is prepared and approved separately.",
          ],
        },
      ]}
    />
  );
}
