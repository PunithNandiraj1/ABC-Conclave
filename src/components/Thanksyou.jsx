"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ThankYouPage() {
  const [ticketData, setTicketData] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTicketData = async () => {
      const cx_session_id = searchParams.get('cx_session_id');
      if (cx_session_id) {
        try {
          const response = await fetch(`https://api.copperx.io/api/v1/payment-pages/for-checkout-session/${cx_session_id}`);
          const data = await response.json();
          setTicketData(data);
        } catch (error) {
          console.error('Error fetching ticket data:', error);
        }
      }
    };
    fetchTicketData();
  }, [searchParams]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-700 to-purple-800 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="mb-6">
          <svg className="mx-auto h-24 w-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Thank You For Purchasing Your Ticket!
        </h1>
        <p className="text-lg leading-7 text-gray-600 mb-8">
          Your ticket has been successfully purchased and confirmed. We&apos;re excited to see you at the event!
        </p>
        {ticketData && (
          <div className="mb-8  text-black text-center">
            <h2 className="text-xl font-semibold mb-2">Ticket Details:</h2>
            <p><strong>Name:</strong> {ticketData.customerDetails?.name}</p>
            <p><strong>Email:</strong> {ticketData.customerDetails?.email}</p>
            <p><strong>Event:</strong> {ticketData.lineItems?.data[0]?.product?.name}</p>
            <p><strong>Ticket Type:</strong> {ticketData.lineItems?.data[0]?.product?.description}</p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  )
}