import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import Counter from "./Counter";

const steps = [
  {
    id: 1,
    title: "Join CloutZap",
    content:
      "Sign up for a CloutZap account and join the community of people making money online with social media.",
  },
  {
    id: 2,
    title: "Share & Earn",
    content:
      "Invite your friends, family, and colleagues to our site by sharing your referral link. You will earn $15 for every person you invite that joins our site.",
  },
  {
    id: 3,
    title: "Get Paid",
    content:
      "Cash out your earnings instantly! We pay our members through PayPal, CashApp, Venmo, Bitcoin, Mailed checks, and more!",
  },
];

const StartMakingMoney = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-8">
        <div className="mb-4 lg:mb-0">
          <h2 className="uppercase">
            start making money with social media today
          </h2>{" "}
          <p>
            #1 Influencer Network helping you leverage social media into cash!
            CloutZap helps you make money online with social media.
          </p>
        </div>

        <div className="flex flex-col lg:place-self-end py-8 px-8 text-center bg-white rounded-lg border border-gray-200 shadow-sm ">
          <p className="text-4xl font-bold flex">
            <Counter end={560574} />+
          </p>

          <hr className="my-4" />
          <p>Registered Members</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {steps.map((step) => {
          const { id, title, content } = step;

          return (
            <div key={id} className="lg:max-w-xs">
              <div class="flex items-center space-x-3 ">
                <div class="font-bold text-6xl">{id}.</div>

                <Link to="/register" className="text-2xl font-bold">
                  {title}
                </Link>
              </div>
              <hr className="bg-gray-300 my-4" />
              <p>{content}</p>
            </div>
          );
        })}
        <div>
          <Button
            icon={<FaUserPlus />}
            text="sign up"
            url="/register"
            bgColor="green"
          />
        </div>
      </div>
    </div>
  );
};

export default StartMakingMoney;
