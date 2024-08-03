import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="max-w-7xl font-sato mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Cancellation Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Ticket Delivery</h2>
        <p className="text-gray-100 mb-4">
          Once a successful purchase transaction has been completed, tickets are delivered in electronic soft-copy via email to the email address nominated by the purchaser. For some ticket types it may be necessary to complete required information – such as attendee name or tax identification number – before the tickets can be issued.
        </p>
        <p className="text-gray-100 mb-4">
          The ticket acts as a receipt for the transaction and can be used to redeem entry at the event listed on the ticket. A printed hard-copy ticket or an electronic soft-copy ticket detailing the reference number can be used to register at the event.
        </p>
        <p className="text-gray-100 italic">
          British Virgin Islands law governs these terms and conditions and any dispute is subject to the exclusive jurisdiction of the BVI Courts.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">1. Registration/Booking/Purchasing</h2>
        <div className="space-y-4">
          {[1.1, 1.2, 1.3].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 1.1 && "AlphablockZ may collect data from you in the course of purchasing and or registering for tickets sold by AlphablockZ (and/or other group companies). You give your permission for your user account details to be stored and acknowledge that you may provide AlphablockZ a reasonable timeframe to remove your details at any time that you no longer wish them to be stored..."}
                {item === 1.2 && "Prices are set out on the online booking form and may be subject to change from time to time. All prices are subject to local taxes where appropriate."}
                {item === 1.3 && "If we have not received payment in full and cleared funds by the event start date, you will be asked to make payment using a credit card on the day to gain entry..."}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">2. Refunds/Cancellations/Discounts</h2>
        <div className="space-y-4">
          {[2.1, 2.2, 2.3, 2.4, 2.5].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 2.1 && "All purchases of tickets for conferences and events (including hotel rooms if applicable) are non-refundable in their entirety..."}
                {item === 2.2 && "If for any reason AlphablockZ decides to cancel this event, AlphablockZ accepts no responsibility for covering airfare, hotel or other costs incurred by registrants, including delegates, sponsors, speakers and guests."}
                {item === 2.3 && "No refunds will be issued for cancellations due to weather or other causes beyond the Registrant's control..."}
                {item === 2.4 && "Discounts cannot be combined with any other discount or multiple offer and apply to new bookings only; there will be no adjustments on previous registrations."}
                {item === 2.5 && "For questions about registration or assistance with any registration problems, please contact us at info@abcconclave.com"}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">3. Exhibitor Information</h2>
        <div className="space-y-4">
          {[3.1, 3.2, 3.3].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 3.1 && "AlphablockZ will not provide transport or travel expenses to or from any event or conference. AlphablockZ will consider but not guarantee exhibitors' requests for day changes at any event or conference."}
                {item === 3.2 && "All items (screens, laptops, cabling and other electronic equipment, rooms, furniture etc.) supplied are on a rental basis and no exchange, transfer or refund of ordered items on-site will be entertained..."}
                {item === 3.3 && "Non-standard items may be offered on request, subject to a separate quotation, and are subject to the same terms and conditions..."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;