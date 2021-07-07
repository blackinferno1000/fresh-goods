import baking from "../assets/baking.jpg";
import box from "../assets/box.jpg";
import coffee from "../assets/coffee.jpeg";

export default function Feature() {
  return (
    <section className="container-fluid">
      <div className="pt-5 row justify-content-center text-center pb-3">
        <FeatureCard
          url={baking}
          alt="baking"
          head="Feature 1"
          description="Talk about some of the details of your offer with a focus on the value people get back."
        />
        <FeatureCard
          url={box}
          alt="box"
          head="Feature 2"
          description="Is there a pain point that your product or service resolves? Tell visitors about it here."
        />
        <FeatureCard
          url={coffee}
          alt="coffee"
          head="Feature 3"
          description="Alternatively, you could use this section to address some frequently asked questions."
        />
      </div>
    </section>
  );
}

function FeatureCard(props) {
  return (
    <div className="text-center p-3 col-md-4">
      <img className="pb-2 fimg" src={props.url} alt={props.alt} />
      <h3>{props.head}</h3>
      <p>{props.description}</p>
    </div>
  );
}
