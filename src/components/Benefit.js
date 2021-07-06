import cart from "../assets/cart.png";
import bag from "../assets/bag.png";
import truck from "../assets/truck.png";

export default function Benefit() {
  return (
    <section className="container">
      <div className="pt-5 row justify-content-center text-center pb-3">
        <div className="col-md-8">
          <h1 className="display-4 pb-3">
            Here are some of the benefits of your offer
          </h1>
          <p className="h5">
            Explain what makes your product or service great. Talk about
            features in a way that highlights the real value people get out of
            them.
          </p>
        </div>
      </div>
      <div className="row">
        <BenefitCard
          url={cart}
          alt="cart"
          head="Benefit 1"
          description="For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients."
        />
        <BenefitCard
          url={bag}
          alt="bag"
          head="Benefit 2"
          description="Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts."
        />
        <BenefitCard
          url={truck}
          alt="truck"
          head="Benefit 3"
          description="You could also add buttons to this section and share links to other products or available delivery methods."
        />
      </div>
    </section>
  );
}

function BenefitCard(props) {
  return (
    <div className="text-center p-5 col-md-4">
      <img className="pb-2" src={props.url} alt={props.alt} />
      <h3>{props.head}</h3>
      <p>{props.description}</p>
    </div>
  );
}
