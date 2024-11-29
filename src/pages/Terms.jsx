import React from "react";

const Terms = () => {
  return (
    <main
      className="container mx-auto py-20 px-8 lg:px-20 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-[1.5rem] lg:text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-8">
        Trivia Q and A Terms and Conditions
      </h1>

      <ul className="list-decimal list-inside">
        <section className="mb-8">
          <li className="text-[1.2rem] lg:text-[1.5rem] font-bold text-blue-600 mb-4">
            Introduction
          </li>
          <p className="text-gray-700 mb-2">
            1.1 Trivia Q and A is a game where subscribers answer questions
            correctly to earn points and qualify for daily and monthly draws and
            stand a chance to win airtime and cash prize respectively. The
            minimum point to qualify for a draw is 10 points. All users qualify
            for a draw automatically because all users get 10 points on
            subscription and renewal daily. Subscription prices are N50/day and
            N200/month, users can play multiple times for an on demand
            subscription of N50 per game. By 6pm each day, entries close and a
            draw is held, any entry after 6pm will be considered for the
            following day.
          </p>
          <p className="text-gray-700 mb-2">
            1.2 Service is available to all MTN Nigeria customers with a valid
            mobile number (“Player/s”).
          </p>
          <p className="text-gray-700">
            Players must subscribe to the service by either SMS (by texting QAD
            or QAM to 3574) or via USSD by dialing *305*3#
          </p>
        </section>

        <section className="mb-8">
          <li className="text-[1.2rem] lg:text-[1.5rem] font-bold text-blue-600 mb-4">
            Winner Determination
          </li>
          <p className="text-gray-700">
            Daily Winners are selected via computer/machine draw for the grand
            prize and daily prizes.
          </p>
        </section>

        <section className="mb-8">
          <li className="text-[1.2rem] lg:text-[1.5rem] font-bold text-blue-600 mb-4">
            Unsubscribing
          </li>
          <p className="text-gray-700 mb-2">
            3.1 Players can unsubscribe via SMS, users simply text:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Stop QAD to 3574 (daily)</li>
            <li>Stop QAM to 3574 (monthly)</li>
          </ul>
          <p className="text-gray-700 mb-2">
            3.2 Players will receive an SMS confirming that they have been
            unsubscribed from the Service.
          </p>
          <p className="text-gray-700">
            3.3 They are not eligible for the draws and the prizes.
          </p>
        </section>

        <section className="mb-8">
          <li className="text-[1.2rem] lg:text-[1.5rem] font-bold text-blue-600 mb-4">
            Prizes
          </li>
          <p className="text-gray-700 mb-2">
            4.1 Winners stand a chance to win the following prizes:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Daily Prize: ₦500 airtime voucher</li>
            <li>Monthly Prize: ₦50,000 Cash prize</li>
          </ul>
        </section>

        <section>
          <li className="text-[1.2rem] lg:text-[1.5rem] font-bold text-blue-600 mb-4">
            General
          </li>
          <ul className="list-inside text-gray-700">
            <li>
              5.1 Cash prizes winners will be called by our agents to inform
              them of their winning. They will also be required to send their
              Bank Account details.
            </li>
            <li>
              5.2 Those customers with bank account details will have their cash
              prize automatically remitted.
            </li>
            <li>
              5.3 Top prizes winners will need to come for a prize handover with
              media coverage.
            </li>
            <li>5.4 Airtime winners get credited automatically.</li>
            <li>
              5.5 All subscribers on subscription get 10 points, same with the
              subscribers on renewals, and qualify for the daily draw.
            </li>
            <li>5.6 The service begins immediately after user subscribes.</li>
            <li>
              5.7 Vasimos reserves the right, at any time to change these terms
              and conditions and any rules relating to its products and the
              service, and to modify the services at its discretion
            </li>
            <li>
              5.8 Vasimos reserves the right from time to time to vary the
              charges of the service as may be deemed necessary in its
              discretion
            </li>
            <li>
              5.9 Vasimos shall be entitled to terminate the service of any
              customer, if such customer is involved in any fraudulent activity
              or suspected fraudulent activity.
            </li>
          </ul>
        </section>
      </ul>
    </main>
  );
};

export default Terms;
