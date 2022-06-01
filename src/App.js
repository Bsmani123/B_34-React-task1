// import logo from './logo.svg';
import './App.css';
import Pricing from './Pricing';

function App() {
  const pricing = [
    {
      name: "FREE",
      price: "0",
      currency: "$",
      pricePer: "month",
      features: [
        {
          name: "Single User",
          access: true,
        },
        {
          name: "5GB Storage",
          access: true,
        },
        {
          name: "Unlimited Public Projects",
          access: true,
        },
        {
          name: " Community Access",
          access: true,
        },
        {
          name: "Unlimited Private Projects",
          access: false,
        },
        {
          name: "Dedicated Phone Support",
          access: false,
        },
        {
          name: "Free Subdomain",
          access: true,
        },
        {
          name: "Monthly StatusReports",
          access: true,
        },
      ],

    },

    {
      name: "PLUS",
      price: "9",
      currency: "$",
      pricePer: "month",
      features: [
        {
          name: "Single User",
          access: true,
        },

        {
          name: "5GB Storage",
          access: true,
        },

        {
          name: "Unlimited Public Projects",
          access: true,
        },

        {
          name: " Community Access",
          access: true,
        },
        {
          name: "Unlimited Private Projects",
          access: false,
        },
        {
          name: "Dedicated phone Support",
          access: true,
        },
        {
          name: "Free Subdomain",
          access: true,
        },
        {
          name: "Monthly StatusReports",
          access: true,
        },
      ],

    },



    {
      name: "PRO",
      price: "49",
      currency: "$",
      pricePer: "month",
      features: [
        {
          name: "Single User",
          access: true,
        },
          {
          name: "5GB Storage",
          access: true,
        },
          {
          name: "Unlimited Public Projects",
          access: true,
        },
          {
          name: " Community Access",
          access: true,
        },
          {
          name: "UnLimited Private Projects",
          access: true,
        },
          {
          name: "Dedicated Phone Support",
          access: false,
        },
          {
          name: "Free Subdomain",
          access: true,
        },
          {
          name: "Monthly StatusReports",
          access: true,
        },
      ],

    },

  ];


  return (

    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {pricing.map((price) => (
            <Pricing {...price} />
          ))}

        </div>
      </div>
    </section>

  );
}

export default App;
