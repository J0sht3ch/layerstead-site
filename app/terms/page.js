import LegalPage from "../components/LegalPage";
export const metadata = { title: "Website Terms of Use" };
export default function Terms() {
  return (
    <LegalPage
      title="Website Terms of Use"
      intro="Straightforward guidance for using this website. Project-specific service terms are documented separately."
      review="Confirm the legal entity and have the proposed Virginia law, dispute process, and liability language reviewed. Visiting this website alone is not represented as forming an enforceable contract."
      sections={[
        {
          title: "Purpose and scope",
          paragraphs: [
            "This website introduces Layerstead Technologies and lets visitors request consultations. These proposed website terms explain acceptable use and general limitations. They are distinct from the Privacy Policy, booking clarification, and any signed service agreement.",
            "Merely visiting the website is not represented as establishing an enforceable contract. If contractual acceptance is needed for a particular feature, Layerstead should present an explicit acknowledgment of the applicable terms and retain the accepted version. The consultation form acknowledgment concerns booking status only; it is not acceptance of a service engagement or these terms.",
          ],
        },
        {
          title: "Acceptable use",
          paragraphs: [
            "Use the website for lawful inquiries and provide accurate information to the best of your knowledge. Do not submit spam, impersonate others, introduce malicious content, probe or attempt unauthorized access, interfere with availability, or misuse another person’s information.",
            "Do not use automated submissions to overwhelm the consultation endpoint or attempt to bypass spam-prevention measures. Access may be limited where reasonably necessary to address abuse, subject to applicable law.",
          ],
        },
        {
          title: "Content and ownership",
          paragraphs: [
            "Layerstead retains its rights in original website text, branding, logos, photographs, and other content it owns or is authorized to use. Third-party materials, software, and trademarks remain the property of their respective owners. No ownership of third-party content is claimed.",
            "Visitors may view the website and make reasonable personal reference copies. Reuse of Layerstead branding or owned content for commercial purposes requires permission unless otherwise permitted by law. Contact Layerstead to discuss requested reuse.",
          ],
        },
        {
          title: "General information",
          paragraphs: [
            "Website descriptions and troubleshooting tips are general information. They are not a substitute for assessing your equipment, building, connectivity, security requirements, and other relevant conditions.",
            "Do not assume that a general recommendation is appropriate for your environment. Any specific services, commitments, deliverables, and applicable warranties will be stated in the signed service agreement and project scope.",
          ],
        },
        {
          title: "Availability and limitations",
          paragraphs: [
            "Reasonable efforts may be made to keep website information useful and accurate, but it may contain errors or become outdated. The website and general information are provided as available, without promises of uninterrupted availability or suitability for every purpose, to the extent permitted by law.",
            "To the extent permitted by applicable law, Layerstead seeks to limit liability for losses caused by reliance on general website information or interruptions of website access. This language does not claim blanket immunity, exclude liability that cannot lawfully be excluded, or restrict nonwaivable consumer rights. Any specific liability allocation for paid work must be addressed separately in an agreed service contract.",
          ],
        },
        {
          title: "Third-party services and links",
          paragraphs: [
            "Formspree processes consultation requests. The website may link to third-party services for context. Those providers operate under their own terms and privacy practices, and Layerstead does not control their availability or content.",
            "A link does not establish an endorsement or make Layerstead responsible for every aspect of that provider’s service. Review third-party information before relying on it.",
          ],
        },
        {
          title: "Proposed law and disputes",
          paragraphs: [
            "Proposed for legal review: where enforceable and applicable, Virginia law would govern website-related disputes, without overriding mandatory consumer protections or conflict-of-law rules that require otherwise.",
            "Proposed process: first contact Layerstead to try to resolve a concern informally. [CONFIRM THE APPROPRIATE VIRGINIA COURT LOCATION AND WHETHER ANY ADDITIONAL DISPUTE PROVISIONS ARE NEEDED.] No mandatory arbitration, class-action waiver, or selected court venue is imposed by this draft.",
          ],
        },
        {
          title: "Updates",
          paragraphs: [
            "Any final version should carry its effective date and version. Website changes do not automatically amend a signed service agreement. Contractual changes, if needed, must follow that agreement’s applicable process.",
          ],
        },
      ]}
    />
  );
}
