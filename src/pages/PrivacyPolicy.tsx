import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - DSA Concierge"
        description="Read our Privacy Policy to understand how DSA Concierge collects, uses, and protects your personal information."
      />
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 4, 2024
          </p>

          <div className="space-y-10 text-foreground/90">
            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                DSA Concierge ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our luxury concierge services and visit our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                2. Information We Collect
              </h2>
              <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
              <p className="leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Travel preferences and itinerary details</li>
                <li>Payment and billing information</li>
                <li>Passport and identification details (when required for bookings)</li>
                <li>Special requests and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Provide and manage our concierge services</li>
                <li>Process reservations, bookings, and payments</li>
                <li>Communicate with you about your requests and services</li>
                <li>Personalize your experience and tailor our offerings</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                4. Information Sharing
              </h2>
              <p className="leading-relaxed">
                We may share your information with trusted third-party service providers who 
                assist us in delivering our services, including hotels, airlines, yacht charters, 
                and other luxury service providers. We ensure all partners maintain appropriate 
                confidentiality and data protection standards. We do not sell your personal 
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                5. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your 
                browsing experience, analyze site traffic, and understand where our visitors 
                come from. You can control cookie preferences through our cookie consent banner 
                and your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                7. Your Rights
              </h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                8. Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the 
                purposes for which it was collected, comply with legal obligations, resolve 
                disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                9. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="mt-4 p-6 bg-card border border-border rounded-lg">
                <p className="font-semibold text-gold">DSA Concierge</p>
                <p className="text-muted-foreground">Email: reservation@dsa-concierge.com</p>
                <p className="text-muted-foreground">Montenegro</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-gold mb-4">
                10. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last 
                updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
