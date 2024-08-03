import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl font-sato mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Terms and Conditions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">1. Introduction</h2>
        <div className="space-y-4">
          {[1.1, 1.2, 1.3, 1.4].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 1.1 && "This website ('Website') is operated by AlphablockZ Ventures, a limited liability company registered in British Virgin Islands."}
                {item === 1.2 && "Please read these Terms & Conditions carefully before using the Website. By accessing any part of the Website, you shall be deemed to have accepted these Terms & Conditions in full."}
                {item === 1.3 && "AlphablockZ may revise these Terms & Conditions at any time by posting an update on the Website. Your continued use of the Website after any such change constitutes your acceptance of the new Terms & Conditions. These Terms & Conditions were last updated in July 2024. AlphablockZ reserves the right to change these Terms & Conditions at any time."}
                {item === 1.4 && "AlphablockZ reserves the right to refuse admission to any event or conference for any behaviour, which it deems unacceptable, or for breach of these Terms & Conditions."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">2. Data Protection and Privacy Policy</h2>
        <div className="space-y-4">
          {[2.1, 2.2].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 2.1 && "By providing your details, you agree to allow AlphablockZ and companies associated with this event to contact you (by mail, email, telephone or fax) regarding their services. If you do not wish to receive such communications please contact us in writing at info@abcconclave.com."}
                {item === 2.2 && "The provision of personal information by you and use of it by AlphablockZ is subject to AlphablockZ Privacy Policy."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">3. Ticket Delivery</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">
            Once a successful purchase transaction has been completed, tickets are delivered in electronic soft-copy via email to the email address nominated by the purchaser. For some ticket types it may be necessary to complete required information – such as attendee name or tax identification number – before the tickets can be issued. The ticket acts as a receipt for the transaction and can be used to redeem entry at the event listed on the ticket. A printed hard-copy ticket or an electronic soft-copy ticket detailing the reference number can be used to register at the event. British Virgin Islands law governs these terms and conditions and any dispute is subject to the exclusive jurisdiction of the BVI Courts.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">4. Registration/Booking/Purchasing</h2>
        <div className="space-y-4">
          {[4.1, 4.2, 4.3].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 4.1 && "AlphablockZ may collect data from you in the course of purchasing and or registering for tickets sold by AlphablockZ (and/or other group companies). You give your permission for your user account details to be stored and acknowledge that you may provide AlphablockZ a reasonable timeframe to remove your details at any time that you no longer wish them to be stored. You acknowledge and accept that your data will be used for commercial purposes in accordance with this Data Protection Policy and Declaration of Consent and will be retained and stored for this purpose. Should you wish your data to be removed you must request AlphablockZ to do so in writing. Requests can be emailed to info@abcconclave.com."}
                {item === 4.2 && "Prices are set out on the online booking form and may be subject to change from time to time. All prices are subject to local taxes where appropriate."}
                {item === 4.3 && "If we have not received payment in full and cleared funds by the event start date, you will be asked to make payment using a credit card on the day to gain entry. Once your booking has been received you are liable for all outstanding payments for your registration, whether or not you attend the event, unless we notify you that your booking was not successful because the event is full."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">5. Refunds/Cancellations/Discounts</h2>
        <div className="space-y-4">
          {[5.1, 5.2, 5.3, 5.4, 5.5].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 5.1 && "All purchases of tickets for conferences and events (including hotel rooms if applicable) are non-refundable in their entirety. Your ticket remains the property of AlphablockZ and is a personal revocable license, which may be withdrawn, and admission refused at any time upon a refund of the printed registration price."}
                {item === 5.2 && "If for any reason AlphablockZ decides to cancel this event, AlphablockZ accepts no responsibility for covering airfare, hotel or other costs incurred by registrants, including delegates, sponsors, speakers and guests."}
                {item === 5.3 && "No refunds will be issued for cancellations due to weather or other causes beyond the Registrant's control. In the unlikely event of cancellation of a conference or event by AlphablockZ, the liability of AlphablockZ is limited to the share of paid registration fees that remains after credit card and payment processing fees have been incurred and deducted."}
                {item === 5.4 && "Discounts cannot be combined with any other discount or multiple offer and apply to new bookings only; there will be no adjustments on previous registrations."}
                {item === 5.5 && "For questions about registration or assistance with any registration problems, please contact us at info@abcconclave.com"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">6. Exhibitor Information</h2>
        <div className="space-y-4">
          {[5.1, 5.2, 5.3].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 5.1 && "AlphablockZ will not provide transport or travel expenses to or from any event or conference. AlphablockZ will consider but not guarantee exhibitors' requests for day changes at any event or conference."}
                {item === 5.2 && "All items (screens, laptops, cabling and other electronic equipment, rooms, furniture etc.) supplied are on a rental basis and no exchange, transfer or refund of ordered items on-site will be entertained. Exhibitors must pay for any damages or losses caused to items supplied to them. Cancelled orders are not refundable."}
                {item === 5.3 && "Non-standard items may be offered on request, subject to a separate quotation, and are subject to the same terms and conditions. Any complaint regarding rental items or installation must be lodged before the opening of the event. In respect of items rented on the day, items should be inspected immediately and tested to ensure they work. Otherwise all items are deemed to be received in good order and condition. The equipment must be insured 'all risk' by the hirer, who will remain liable until the authorised staff has collected the equipment. In case of disappearance, the equipment will be invoiced at the original insurance value"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">7. Limitation of Liability</h2>
        <div className="space-y-4">
          {[6.1, 6.2, 6.3].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 6.1 && "AlphablockZ and its subsidiaries will not be liable for any loss, injury or damage to any person or property howsoever caused (save for death or personal injury as a result of AlphablockZ's negligence or for any other type of liability that cannot by law be excluded or limited.)"}
                {item === 6.2 && "AlphablockZ will not be liable for the granting of any visas that are required to attend any event or conference. In the event that an attendee's visa is not granted tickets will not be refunded for any event or conference."}
                {item === 6.3 && "Please note that while speakers and topics are confirmed at the time of publishing, circumstances beyond the control of AlphablockZ may necessitate substitutions, alterations or cancellations of the speakers and/or topics. As such, AlphablockZ reserves the right to alter or modify the advertised speakers and/or topics if necessary without any liability to you whatsoever. Any substitutions or alterations will be updated on our website as soon as possible."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">8. Indemnity</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">
            You agree to be fully responsible for (and fully indemnify us against) all claims, liability, damages, losses, costs and expenses, including legal fees, suffered by us and arising out of any breach of the terms by you or any other liabilities incurred by us arising out of your use of the website, or use by any other person accessing the website using your pc or internet access account.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">9. Intellectual Property And Right To Use</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">
            You acknowledge and agree that all copyright, trademarks and all other intellectual property rights in all material or content contained within the website shall remain at all times owned by us or our licensors. You are permitted to use this material only as expressly authorised by us. We reserve all rights not expressly granted in and to the website and the content on the website.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">10. General</h2>
        <div className="space-y-4">
          {[10.1, 10.2, 10.3].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 10.1 && "You agree not to: Use the website (or any part of it) for any illegal purpose and agree to use it in accordance with all relevant laws; Upload or transmit through the website (i) any computer viruses, macro viruses, trojan horses, worms or anything else; Use the website in a manner which (i) may cause the website to be interrupted, damaged, rendered less efficient or such designed to interfere with, interrupt or disrupt the normal operating procedures of a computer or (ii) any material which is defamatory, offensive, or of an obscene or menacing character, or that may cause annoyance, inconvenience or needless anxiety; (iii) that the effectiveness or functionality of the website is in any way impaired or (iv) violates or infringes the rights of any person, firm or company (including, but not limited to, rights of intellectual property, rights of confidentiality or rights of privacy) of the website; Create or publish a hypertext link to any part of the website or attempt any unauthorised access to any part or component; Copy or distribute any part of the website in any medium without our prior written consent; and Alter or modify any part of the website other than as may be reasonably necessary to use the website for its intended use"}
                {item === 10.2 && "In the event that any provision of these Terms & Conditions is held to be invalid or unenforceable, the remainder of these Terms & Conditions shall remain valid and enforceable."}
                {item === 10.3 && "These Terms & Conditions shall be governed by the laws of British Virgin Islands (BVI) and the courts of British Virgin Islands (BVI) shall have exclusive jurisdiction."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Disclaimer</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">
            Whilst endeavours to ensure that the Website is normally available 24 hours a day, it shall not be liable if for any reason the Website is unavailable at any time or for any period. Access to the Website may be suspended temporarily and without notice in the case of system failure, maintenance or repair or for any other reasonable cause.
            <br/><br/>
            You acknowledge that information on the Website and any related material provided to you by AlphablockZ, is provided only for general information. AlphablockZ uses reasonable care in publishing materials available in AlphablockZ websites, however, does not guarantee their accuracy or completeness. Materials available in AlphablockZ websites are provided &quot;as is&quot; with no warranty, express or implied, and all such warranties hereby disclaimed. AlphablockZ assumes no liability for any loss, damage or expense from errors or omissions in the materials available in AlphablockZ websites, whether arising in contract or otherwise.
          </p>
        </div>
      </section>
      </div>
      )
      }
      export default TermsAndConditions