import { Footer } from "@/components/footer";

export default function CharterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Investor Charter</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            In respect of Research Analyst (RA) as prescribed by SEBI.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4 bg-gray-100 dark:bg-gray-800 p-2 rounded">
            A. Vision and Mission Statements for Investors
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <h3 className="font-semibold">Vision</h3>
            <p>Invest with knowledge & safety.</p>
            <h3 className="font-semibold">Mission</h3>
            <p>
              Every investor should be able to invest in right investment
              products based on their needs, manage and monitor them to meet
              their goals, access reports and enjoy financial wellness.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 bg-gray-100 dark:bg-gray-800 p-2 rounded">
            B. Details of business transacted by the Research Analyst with
            respect to the investors
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              To publish research report based on the research activities of the
              RA.
            </li>
            <li>
              To provide an independent objective and unbiased analysis of
              securities.
            </li>
            <li>
              To offer recommendations based on analysis of publicly available
              information and known threshold.
            </li>
            <li>
              To distribute research reports and recommendations to clients
              without discrimination.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 bg-gray-100 dark:bg-gray-800 p-2 rounded">
            C. Details of services provided to investors
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Onboarding of Clients.</li>
            <li>Disclosure to Clients.</li>
            <li>To distribute research reports to the clients.</li>
            <li>
              To maintain confidentiality with respect to publication of the
              research report until made available in the public domain.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 bg-gray-100 dark:bg-gray-800 p-2 rounded">
            D. Expectations from the investors (Responsibilities of investors)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Do's and Don'ts for Investors.</li>
            <li>Maintenance of digital hygiene.</li>
            <li>Always deal with SEBI registered Research Analyst.</li>
            <li>
              Ensure that the Research Analyst uses an official approved
              communication channel.
            </li>
            <li>Don't fall prey to the claims of guaranteed returns.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}
