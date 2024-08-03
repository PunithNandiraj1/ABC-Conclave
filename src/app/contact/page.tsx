"use client";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  LinkIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
// import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
// import { db } from "@/utils/firebase";
export default function Page() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    fname: "",
    lname: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regex.test(data.email)) {
      setError("Enter email");
    } else {
      setError("");
      setSuccess(true);
      try {
        let docname = data.phonenumber == null ? data.email : data.phonenumber + "a";
        // await setDoc(doc(db, "Contacts", docname), data);
        console.log("Data added successfully to Firestore!");
        // Clear the form fields after submission
        setData({
          fname: "",
          lname: "",
          phonenumber: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
    }
  };

  return (
    <div className="bg-cover bg-img">
      <div className="grid grid-cols-1 py-12 mx-auto max-w-7xl lg:grid-cols-2">
        <img src="/glowgr.svg" alt="" className="absolute left-0 z-[-1] w-[750px]" />
        <img src="/glowgr.svg" alt="" className="absolute right-0 z-[-1] w-[750px]" />

        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-24">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-white font-display">
              FOMO getting built? 👀
            </h2>
            <p className="mt-6 text-base leading-6 text-gray-300">
              Have something to share, inquire about, or discuss? We&apos;re all
              ears! Whether you&apos;re a participant, sponsor, media
              representative, or just curious about Abcconclave, we&apos;re
              ready to assist. Reach out to us using any of the methods below,
              and let&apos;s start a conversation.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>

                <Link href="https://palmmeadowsresort.com/gallery/"  target="_blank" > <dd>Dubai</dd></Link>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+919697777762">
                  +91 97397 18149
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Calendly</span>
                  <LinkIcon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    target="_blank"
                    className="hover:text-white"
                    href="https://calendly.com/abc_2024/30min"
                  >
                    Book a Call on Calendly
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:contact@web3carnival.world"
                  >
                    info@abcconclave.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-24"
        >
          <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    value={data.fname}
                    onChange={handleChange}
                    name="fname"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    value={data.lname}
                    type="text"
                    onChange={handleChange}
                    name="lname"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    value={data.email}
                    required
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    value={data.phonenumber}
                    type="tel"
                    required
                    name="phonenumber"
                    id="phone-number"
                    onChange={handleChange}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    value={data.message}
                    name="message"
                    id="message"
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {success ? (
              <div
                className="flex items-center p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <InformationCircleIcon
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Thank You! </span> We will reach out
                  to you soon
                </div>
              </div>
            ) : null}
            {error == "" ? null : (
              <div
                className="flex items-center p-4 my-4 text-sm font-semibold text-red-600 rounded bg-red-50"
                role="alert"
              >
                <InformationCircleIcon
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span className="sr-only">Info</span>
                <div>{error}</div>
              </div>
            )}
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-6 py-4 text-sm font-semibold text-center text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16463.464702793543!2d77.70871431010981!3d13.200349214953972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1cfe75446265%3A0x296c70e9a129418e!2sKempegowda%20International%20Airport%20Bengaluru!5e0!3m2!1sen!2sin!4v1693826486615!5m2!1sen!2sin"
        width="100%"
        height="650"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.28370526958!2d77.74022945!3d12.96277345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae120580b51d13%3A0x7f39487a31d7376c!2sWhitefield%2C%20Palm%20Meadows%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1700139911506!5m2!1sen!2sin"
        width="100%"
        height="650"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> 
    </div>
  );
}