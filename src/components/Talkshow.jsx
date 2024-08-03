import React from "react";
import Heading from "./ui/Heading";

const Talkshow = () => {
  return (
    <div>
      <div
        id="talkshow"
        className="grid md:grid-cols-2 gap-x-10 mb-20 max-w-6xl mx-auto p-6"
      >
        <div>
          <Heading title={"ABC AFTER PARTY"} />
          <p className="mt-10 font-sato">
            Revel in the elegance of our VIP Gala Dinner and let loose at the
            After Party, where you can unwind and network in a relaxed
            atmosphere. Enjoy exquisite cuisine, delightful entertainment, and
            the company of industry leaders and innovators. It&apos;s the perfect
            opportunity to build lasting connections and celebrate the successes
            of the event in style.
            <br />
            <br />
            With this exclusive access VIPs can enjoy live music from top DJs
            and bands, dance the night away, or relax in our stylish lounge
            areas. ABC Conclave provides an excellent opportunity to unwind and
            socialise in a more casual setting, fostering both personal and
            professional connections. Join us for this exclusive after-party and
            immerse yourself in a night of luxury, music, and entertainment.
          </p>
        </div>
        <div>
        <iframe  className="mt-20 md:max-w-full md:h-80 h-48 aspect-video" autoPlay src="https://www.youtube.com/embed/9lct-RVXKHQ?si=1Bo3aYGn3vb0XkPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Talkshow;
