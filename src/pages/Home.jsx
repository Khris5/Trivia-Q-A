import React from "react";
import { Link } from "react-router";
import { TbTargetArrow } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { BiSolidTrophy } from "react-icons/bi";
import { FiInfo } from "react-icons/fi";
import Card from "../components/cards/Card";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-14 lg:pt-20">
      <div className="container mx-auto px-5 py-10 lg:px-20 lg:py-16 text-center  ">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 lg:p-10 transform transition-all ">
          <h1 className="text-[2rem] lg:text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">
            Play, Win, Repeat!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Challenge yourself daily and stand a chance to win exciting prizes
            with Trivia Q and A
          </p>
          <div className="flex justify-center space-x-4">
            {/* <button className="px-4 py-2 border-none bg-gray-950 hover:bg-gray-800 text-white rounded-md hover:transition-all shadow-md">
              Subscribe Now
            </button> */}
            <button className="px-4 py-2 inline-flex  items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none border-solid border-gray-200 shadow-md border text-blue-600 bg-white rounded-md hover:hover:bg-gray-100 hover:text-gray-900 hover:transition-all">
              <Link to={"/terms"}> View Terms</Link>
            </button>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="container mx-auto px-5 pt-10 lg:px-20 lg:py-16 "
      >
        <div className="text-center mb-12">
          <h2 className="text-[1.5rem] lg:text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-4">
            About Trivia Q and A
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An interactive knowledge game that transforms learning into winning
            opportunities
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title={"What is Trivia Q and A?"}
            text=" An engaging game where you test your knowledge, earn points, and
                compete for exciting prizes. Challenge yourself daily and
                transform your trivia skills into real rewards!"
            icon={<TbTargetArrow className="mr-2 text-blue-600 text-3xl " />}
          />
          <Card
            title={"Who Can Play?"}
            text=" All MTN Nigeria customers with a valid mobile number are
                welcome! Whether you're a trivia enthusiast or just looking for
                a fun way to test your knowledge, this game is for you."
            icon={<HiUsers className="mr-2 text-blue-600 text-3xl " />}
          />
          <Card
            title={"Winning Opportunities"}
            text=" Earn 10 points daily and automatically qualify for draws. Win
                amazing prizes including daily airtime vouchers and a monthly
                cash prize of N50,000!"
            icon={<BiSolidTrophy className="mr-2 text-blue-600 text-3xl " />}
          />
        </div>
        <div className=" mt-20 mb-12 ">
          <h2 className=" text-center text-[1.5rem] lg:text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-4">
            How to play
          </h2>
          <div className="p-8  bg-white rounded-2xl shadow">
            <div className="flex items-center pb-4">
              <FiInfo className="mr-2 text-blue-600 text-3xl " />
              <h3 className="text-lg text-gray-900 font-semibold">
                Steps to play
              </h3>
            </div>
            <ol className="list-decimal list-inside flex flex-col gap-2 ">
              <li>
                Subscribe by sending an SMS with “QAD” for daily @N50 or “QAM”
                for monthly @N200 to 3574.
              </li>
              <li>
                Get 10 points automatically upon subscription and renewal every
                day.
              </li>
              <li>
                Play multiple times with an on-demand subscription of N50 per
                game
              </li>
              <li>
                Ensure entries are submitted before 6pm daily to qualify for the
                draw
              </li>
              <li>To unsubscribe, send stop QAD or stop QAM to 357</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 mt-12">
        <Card className="hover:shadow-2xl transition-all transform hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 text-blue-600" /> Win Prizes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Earn points and qualify for daily airtime and monthly cash prizes!
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all transform hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PhoneCall className="mr-2 text-blue-600" /> Easy to Play
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Subscribe via SMS or USSD, play multiple times, and get 10 points
              daily!
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all transform hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 text-blue-600" /> How to Play
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside">
              <li>Send QAD (daily) or QAM (monthly) to 3574</li>
              <li>Get 10 points automatically</li>
              <li>Play before 6 PM to qualify for draws</li>
            </ol>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
};

export default Home;
