import { BsBoxArrowInRight } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="bg-green-700 py-8">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center flex-wrap md:justify-between">
          <div className="text-white">
            <h3 className="text-white md:text-3xl">
              Start Earning Money Today!
            </h3>
            <span className="text-lg">
              CashZap is absolutely <b>free to join</b> and we offer instant
              cashouts to all our members.
            </span>
          </div>
          <div className="flex gap-6 mt-4 lg:mt-0">
            <Button
              url="/register"
              className="bg-skin-button-yellow text-skin-black"
            >
              <FaUserPlus className="mr-2" />
              Sign Up Now
            </Button>
            <Button
              url="/register"
              className="bg-skin-button-green text-skin-base"
            >
              <BsBoxArrowInRight className="mr-2" />
              Log In
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
