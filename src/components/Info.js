import woman from "../assets/woman.jpg";

export default function Info() {
  return (
    <section className="container">
      <div className="row p-5 justify-content-center">
        <img className="col img-fluid w-50 pb-5" src={woman} alt="woman" />
        <div className="col align-self-center">
          <h1 className="display-4 pb-4">
            Some more information about your business
          </h1>
          <p>
            Share a little about yourself as a business owner, or maybe describe
            what makes your product or service unique. Give visitors one more
            reason to care about your offer and want to buy from you.
          </p>
        </div>
      </div>
    </section>
  );
}
