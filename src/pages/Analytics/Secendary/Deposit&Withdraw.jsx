import egle from "../../../assets/Imgs/Logo/american-bank.png";
import citi from "../../../assets/Imgs/Logo/citi-bank.png";
import mastercard from "../../../assets/Imgs/Logo/mastercard-label.png";
import stripe from "../../../assets/Imgs/Logo/stripe.png";
import gumrood from "../../../assets/Imgs/Logo/gumroad.png";

import aws from "../../../assets/Imgs/Logo/aws.png";
import digital from "../../../assets/Imgs/Logo/digital-ocean.png";
import github from "../../../assets/Imgs/Logo/github.png";
import google from "../../../assets/Imgs/Logo/google.png";
import slack from "../../../assets/Imgs/Logo/slack.png";
const DepositAndWithdraw = () => {
  const Deposit = [
    {
      img: gumrood,
      h6: "Gumroad Account",
      p: "Sell UI Kit",
      span: "+$4,650",
    },
    {
      img: mastercard,
      h6: "Mastercard",
      p: "Wallet deposit",
      span: "+$92,705",
    },
    {
      img: stripe,
      h6: "Stripe Account",
      p: "iOS Application",
      span: "+$957",
    },
    {
      img: egle,
      h6: "American Bank",
      p: "Bank Transfer",
      span: "+$6,837",
    },
    {
      img: citi,
      h6: "Bank Account",
      p: "Wallet deposit",
      span: "+$8,934",
    },
  ];
  const Withdraw = [
    {
      img: google,
      h6: "Google Adsense",
      p: "Paypal deposit",
      span: "-$145",
    },
    {
      img: github,
      h6: "Github Enterprise",
      p: "Security & compliance",
      span: "-$1870",
    },
    {
      img: slack,
      h6: "Upgrade Slack Plan",
      p: "Debit card deposit",
      span: "-$450",
    },
    {
      img: digital,
      h6: "Digital Ocean",
      p: "Cloud Hosting",
      span: "-$540",
    },
    {
      img: aws,
      h6: "AWS Account",
      p: "Choosing a Cloud Platform",
      span: "-$21",
    },
  ];

  const Group_1 = (array) => {
    return array.map((company, key) => {
      return (
        <div key={key} className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <img
              src={company.img}
              alt={company.h6}
              className="w-[30px] h-[31px] object-contain"
            />
            <div>
              <h6 className="Body2 !font-semibold">{company.h6}</h6>
              <p className="text-Light-Text-Secondary dark:text-Dark-Text-Primary Caption">
                {company.p}
              </p>
            </div>
          </div>
          <div className="text-Light-Main-Success dark:text-Dark-Main-Success Body2 !font-semibold">
            {company.span}
          </div>
        </div>
      );
    });
  };
  const Group_2 = (array) => {
    return array.map((company, key) => {
      return (
        <div key={key} className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <img
              src={company.img}
              alt={company.h6}
              className="w-[30px] h-[31px] object-contain"
            />
            <div>
              <h6 className="Body2 !font-semibold">{company.h6}</h6>
              <p className="text-Light-Text-Secondary dark:text-Dark-Text-Primary Caption">
                {company.p}
              </p>
            </div>
          </div>
          <div className="text-Light-Main-Error dark:text-Dark-Main-Error Body2 !font-semibold">
            {company.span}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Box lg:col-span-8 sm:col-span-8 flex sm:flex-row flex-col justify-between">
      <div className="sm:w-1/2 sm:pr-5 pb-5">
        <div className="flex felx-row justify-between items-center pb-5">
          <h6 className="H6">Deposit</h6>
          <p className="Subtile2 text-Light-Main-Primary dark:text-Dark-Main-Primary">
            View All
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5">
          {Group_1(Deposit)}
        </div>
      </div>
      <div className="relative sm:h-full h-px sm:w-px w-full bg-Light-Other-Divider dark:bg-Dark-Other-Divider"></div>
      <div className="sm:w-1/2 sm:pl-5 pt-5">
        <div className="flex felx-row justify-between items-center pb-5">
          <h6 className="H6">Withdraw</h6>
          <p className="Subtile2 text-Light-Main-Primary dark:text-Dark-Main-Primary">
            View All
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5">
          {Group_2(Withdraw)}
        </div>
      </div>
    </div>
  );
};

export default DepositAndWithdraw;
