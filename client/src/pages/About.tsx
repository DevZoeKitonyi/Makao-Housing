
import React from "react";
import { Link } from "react-router-dom";
import MakaoHeader from "@/components/MakaoHeader";
import MakaoSectionHeader from "@/components/MakaoSectionHeader";
import { Button } from "@/components/ui/button";
import MakaoNav from "@/components/MakaoNav";
import MakaoFooter from "@/components/MakaoFooter";

// Kenyan hero section theme
const AboutHero = () => (
  <section className="relative bg-gradient-to-r from-black via-red-700 to-green-700 text-white py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
        About Makao
      </h2>
      <p className="text-xl md:text-2xl mb-4">
        Empowering Kenyans to find the perfect home and manage rentals hassle-free.
      </p>
      <p className="hidden md:block max-w-2xl mx-auto text-lg text-white/90">
        Built by Kenyans, for Kenya. Safe, transparent and easy rental—join our community today!
      </p>
    </div>
  </section>
);

const FounderCard = () => (
  <div className="bg-green-50 rounded-lg shadow p-6 text-center">
    <img
      src="/placeholder.svg"
      alt="Makao Founder"
      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-700 object-cover"
    />
    <h3 className="text-xl font-bold text-black">Brian Kitonyi</h3>
    <p className="text-green-700 text-sm font-medium mb-2">Founder & CEO</p>
    <p className="text-gray-600">
      Driven by the desire to simplify property rental for Kenyans, Jane
      founded Makao to connect reliable tenants with trusted landlords
      using technology tailored for our local needs.
    </p>
  </div>
);

const About = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <MakaoNav />
    <main className="flex-1 flex flex-col">
      <AboutHero />
      <section className="max-w-3xl mx-auto px-4 py-10">
        <MakaoSectionHeader
          title="About Makao"
          subtitle="Empowering Kenyans to find the perfect home and manage rentals hassle-free."
        />
        <div className="bg-white rounded-lg shadow p-6 mb-10 text-center space-y-6">
          <p className="text-lg text-gray-700">
            Makao is a homegrown platform helping tenants and landlords in
            Kenya navigate property rentals securely and conveniently.
            We use the Kenyan colors of green, red, and black to symbolize
            our local roots and commitment to a better renting experience for all.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <FounderCard />
            <div>
              <h4 className="font-semibold text-black mb-2">Our Values</h4>
              <ul className="text-left space-y-2 text-gray-600">
                <li><span className="font-medium text-green-700">Trust:</span> Connecting only verified landlords and tenants.</li>
                <li><span className="font-medium text-red-700">Transparency:</span> Clear pricing, instant communication, secure payments.</li>
                <li><span className="font-medium text-black">Local Focus:</span> Made by Kenyans for Kenya’s housing market.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/properties">
            <Button className="bg-red-700 hover:bg-green-700 text-white">Browse Properties</Button>
          </Link>
        </div>
      </section>
    </main>
    <MakaoFooter />
  </div>
);

export default About;
