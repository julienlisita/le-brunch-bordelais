// src/components/ContactSection.js

import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import Button from "./Button";

export default function ContactSection()
{
    return (
      <Section bgColor="creme">
        <SectionTitle>Infos & Contact</SectionTitle>
        <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center justify-center gap-2">
          <LuClock3 className="text-[#D8973C] text-xl" />
        <span>Ouvert du mardi au dimanche, 9h – 15h</span>
        </div>
        <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center justify-center gap-2">
          <HiPhone className="text-ocre text-xl" />
          <a href="tel:+335 56 12 34 78" className="hover:underline">05 56 12 34 78</a>
        </div>
        <div className="mt-4 sm:mt-6 lg:mt-8 flex items-center justify-center gap-2">
          <HiOutlineLocationMarker className="text-[#D8973C] text-xl" />
          <span>12 rue Lagrange, Bordeaux</span>
        </div>
        <div className="mt-3 sm:mt-4 lg:mt-5 text-center ">
          <Button href="/contact">Nous écrire</Button>
        </div>
          {/* Carte Google Maps embed (responsive) */}
        <div className="mt-6">
          <iframe
            title="Plan Le Brunch Bordelais"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10823.638219780081!2d-0.5854443661977932!3d44.85445171192195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552873e23fbe17%3A0x9947b21ab595d7fa!2s12%20Rue%20Lagrange%2C%2033000%20Bordeaux!5e1!3m2!1sfr!2sfr!4v1766763977430!5m2!1sfr!2sfr"
            width="100%"
            height="250"
            className="rounded-xl border border-[#D8973C]"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Section>
    )
}