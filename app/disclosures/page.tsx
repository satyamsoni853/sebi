import { Footer } from "@/components/footer";

export default function DisclosuresPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Regulatory Disclosures</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compliance information as per SEBI (Research Analyst) Regulations,
            2014.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl text-sm leading-relaxed space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-lg font-bold mb-2">
            1. Research Analyst Registration
          </h2>
          <p>
            We are registered with the Securities and Exchange Board of India
            (SEBI) as a Research Analyst with Registration Number INZ000000000.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2">2. Business Activity</h2>
          <p>
            We are engaged in the business of providing Research Services to
            clients. We are not engaged in any other business activities like
            Merchant Banking, Investment Banking, or Portfolio Management
            Services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2">3. Disciplinary History</h2>
          <p>
            There are no outstanding litigations or no disciplinary action has
            been taken against us by SEBI or any other regulatory authority.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2">
            4. Terms and Conditions for Research Report
          </h2>
          <p>
            The Research Report is for the personal information of the
            authorized recipient and is not for public distribution. The report
            is based on publicly available information, internal data, and other
            sources believed to be reliable. However, we do not represent that
            it is accurate or complete.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2">5. Disclosure of Interest</h2>
          <ul className="list-disc pl-5 font-medium space-y-1">
            <li>
              Whether the Research Analyst has any financial interest in the
              subject company:{" "}
              <span className="text-primary dark:text-blue-400">NO</span>
            </li>
            <li>
              Whether the Research Analyst has actual/beneficial ownership of 1%
              or more securities of the subject company:{" "}
              <span className="text-primary dark:text-blue-400">NO</span>
            </li>
            <li>
              Whether the Research Analyst has any other material conflict of
              interest:{" "}
              <span className="text-primary dark:text-blue-400">NO</span>
            </li>
            <li>
              Whether the Research Analyst has received any compensation from
              the subject company in the past 12 months:{" "}
              <span className="text-primary dark:text-blue-400">NO</span>
            </li>
          </ul>
        </section>

        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs mt-8">
          <p className="font-bold mb-2">Standard Warning:</p>
          <p>
            Investment in securities market are subject to market risks. Read
            all the related documents carefully before investing. Registration
            granted by SEBI and certification from NISM in no way guarantee
            performance of the intermediary or provide any assurance of returns
            to investors.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
