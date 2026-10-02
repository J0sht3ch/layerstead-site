import LegalPage from "../components/LegalPage";
export const metadata = { title: "Service Agreement Framework" };
export default function Agreement() {
  return (
    <LegalPage
      title="Service Agreement"
      intro="An unsigned framework for a project-specific agreement. Your final agreement and Statement of Work are prepared and signed separately."
      review="This is a draft framework, not an offer or executed contract. Complete every project field, resolve the business decisions below, and obtain legal review before use. There is no website-based signature or authorization."
      sections={[
        {
          title: "Parties and project",
          paragraphs: [
            "Provider: Layerstead Technologies, [CONFIRM REGISTERED LEGAL BUSINESS NAME AND BUSINESS ADDRESS]. Contact: Josiah Breckenridge using the details below.",
            "Customer: [LEGAL NAME, AUTHORIZED REPRESENTATIVE, CONTACT DETAILS]. Project location: [ADDRESS]. Agreement date and version: [DATE / VERSION]. Identify any Master Services Agreement and the controlling Statement of Work.",
          ],
        },
        {
          title: "Scope and deliverables",
          paragraphs: [
            "[DEFINE ASSESSMENT, APPROVED INSTALLATION OR CONFIGURATION WORK, EQUIPMENT, DOCUMENTATION, HANDOFF, AND EXCLUSIONS.] Describe the environment and any assumptions or dependencies.",
            "[DEFINE COMPLETION CRITERIA, HOW RESULTS ARE CHECKED, AND THE CUSTOMER REVIEW PROCESS.] Services outside that scope require separately approved changes.",
          ],
        },
        {
          title: "Price and payment",
          paragraphs: [
            "[INSERT AGREED PRICING, TAX TREATMENT, DEPOSITS IF ANY, PAYMENT DUE DATES, ACCEPTED PAYMENT METHODS, AND ANY APPROVED LATE-PAYMENT TERMS.] No prices are established by this draft.",
            "[DEFINE HOW EQUIPMENT PURCHASES, CUSTOMER-APPROVED EXPENSES, AND CHANGES ARE QUOTED AND AUTHORIZED.]",
          ],
        },
        {
          title: "Equipment and customer responsibilities",
          paragraphs: [
            "[IDENTIFY WHO PURCHASES AND OWNS EQUIPMENT, WHO HANDLES RETURNS, AND WHO IS RESPONSIBLE FOR MANUFACTURER SUPPORT.]",
            "[DEFINE SITE ACCESS, LANDLORD OR BUILDING APPROVALS, PERMITS IF REQUIRED, ISP COORDINATION, CUSTOMER AUTHORITY, DATA BACKUPS, AND HOW NECESSARY CREDENTIAL ACCESS IS HANDLED.] Credentials should not be collected through the public consultation form.",
          ],
        },
        {
          title: "Schedule, changes, and cancellation",
          paragraphs: [
            "[CONFIRM THE WORK SCHEDULE, CUSTOMER AVAILABILITY, DEPENDENCIES, AND HOW DELAYS ARE COMMUNICATED.] Submission of a consultation request does not reserve a date.",
            "[DEFINE THE WRITTEN CHANGE-APPROVAL PROCESS, RESCHEDULING AND CANCELLATION TERMS, AND ANY APPROVED REFUND PRACTICES.] No cancellation charge is invented here.",
          ],
        },
        {
          title: "Warranties and limitations",
          paragraphs: [
            "[DOCUMENT ANY AGREED WORKMANSHIP WARRANTY, DURATION, COVERED REMEDIES, EXCLUSIONS, AND HOW TO REQUEST SUPPORT.] State equipment manufacturer warranties separately. Do not insert guarantees without business approval.",
            "[OBTAIN LEGAL REVIEW OF ANY LIABILITY LIMITS, RISK ALLOCATION, AND NONWAIVABLE CUSTOMER RIGHTS.] ISP and third-party performance can affect results.",
          ],
        },
        {
          title: "Records, privacy, and disputes",
          paragraphs: [
            "[DEFINE HOW PROJECT INFORMATION, NETWORK DOCUMENTATION, AND ANY REQUIRED ACCESS INFORMATION ARE PROTECTED, HANDED OFF, AND RETAINED.] Consultation information is described separately in the website Privacy Policy.",
            "[CONFIRM VIRGINIA GOVERNING LAW IF APPROPRIATE, VENUE, AND THE DISPUTE PROCESS WITH LEGAL COUNSEL.] Website terms do not replace the signed project agreement.",
          ],
        },
        {
          title: "Approval and signatures",
          paragraphs: [
            "[INSERT PROVIDER AND CUSTOMER SIGNATURES, SIGNER AUTHORITY, DATES, AND ACCEPTED DOCUMENT VERSIONS.] Each party should receive a copy of the complete signed agreement and applicable Statement of Work.",
            "No work is authorized by this page. The final document must reflect the actual scope and business decisions for the particular engagement.",
          ],
        },
      ]}
    />
  );
}
