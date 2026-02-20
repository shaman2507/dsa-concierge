import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service - DSA Concierge"
        description="Review the Terms of Service for DSA Concierge luxury concierge services in Montenegro."
      />
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert prose-gold max-w-none space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Last updated: December 2024
            </p>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using DSA Concierge services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, clients, and others who access or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                DSA Concierge provides luxury concierge services including but not limited to:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Private yacht charters and maritime experiences</li>
                <li>Private aviation and airport services</li>
                <li>Luxury accommodation arrangements</li>
                <li>Event planning and organization</li>
                <li>Lifestyle management and personal assistance</li>
                <li>Security and protection services</li>
                <li>Transportation and transfer services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                As a client of DSA Concierge, you agree to:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Provide accurate and complete information when making requests</li>
                <li>Make timely payments for services rendered</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Treat our staff and partners with respect</li>
                <li>Provide reasonable notice for cancellations or changes</li>
                <li>Maintain confidentiality of any proprietary information shared</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">4. Booking and Reservations</h2>
              <p className="text-muted-foreground leading-relaxed">
                All bookings and reservations are subject to availability and confirmation. We reserve the right to decline any request at our discretion. Confirmed bookings constitute a binding agreement between you and DSA Concierge, subject to these terms and any specific terms communicated at the time of booking.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms vary depending on the service requested. Generally:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>A deposit may be required to secure bookings</li>
                <li>Full payment is due as specified in the service agreement</li>
                <li>All prices are quoted in the currency specified at the time of quotation</li>
                <li>Additional charges may apply for last-minute requests or changes</li>
                <li>We accept major credit cards and bank transfers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">6. Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancellation policies vary by service type and will be communicated at the time of booking. Generally, cancellations made with adequate notice may be eligible for partial or full refunds. Last-minute cancellations may incur fees. Force majeure events will be handled on a case-by-case basis.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                DSA Concierge acts as an intermediary between clients and service providers. While we carefully vet our partners, we are not liable for:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Acts or omissions of third-party service providers</li>
                <li>Weather conditions or natural events affecting services</li>
                <li>Personal injury or property damage not directly caused by our negligence</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability shall not exceed the fees paid for the specific service in question.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of DSA Concierge and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">9. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to maintaining the confidentiality of our clients. All personal information and service details are treated with the utmost discretion. We expect the same level of confidentiality from our clients regarding our proprietary methods, contacts, and business practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">10. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these terms or our services shall first be addressed through good-faith negotiation. If resolution cannot be reached, disputes shall be submitted to mediation or arbitration in Montenegro, in accordance with applicable laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">11. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective upon posting to this website. Continued use of our services after any modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">12. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Montenegro, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">13. AI Assistant</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website features an AI-powered conversational assistant provided by ElevenLabs. By using this feature, you acknowledge and agree that:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>The AI assistant is designed to provide general information and assistance</li>
                <li>Responses generated by the AI are for informational purposes only and do not constitute professional advice</li>
                <li>Conversations may be recorded and analyzed to improve service quality</li>
                <li>The AI assistant requires cookie consent to function</li>
                <li>We are not liable for any decisions made based on AI-generated responses</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-gold">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="text-muted-foreground space-y-2">
                <p>DSA Concierge</p>
                <p>Email: reservation@dsa-concierge.com</p>
                <p>Phone: +382 67 726 999</p>
                <p>Address: Montenegro</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
