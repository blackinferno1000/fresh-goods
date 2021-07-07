import man from "../assets/testimonial.png";

export default function Testimonial() {
  return (
    <section className="testimonial text-light">
      <div className="text-center">
        <p className="h4">What our customers say</p>
        <span className="text-warning quote">"</span>
        <p className="display-5 pb-5 col-sm-8 offset-sm-2">
          <em>
            Share a real testimonial that hits some of your benefits (but isn’t
            too sales-y).
          </em>
        </p>
        <div>
          <img className="pb-2" src={man} alt="man" />
          <p className="mb-0">REAL NAME</p>
          <p className="mb-0">Location</p>
          <span>
            <i class="p-1 bi bi-star-fill text-warning"></i>
            <i class="p-1 bi bi-star-fill text-warning"></i>
            <i class="p-1 bi bi-star-fill text-warning"></i>
            <i class="p-1 bi bi-star-fill text-warning"></i>
            <i class="p-1 bi bi-star-fill text-warning"></i>
          </span>
        </div>
      </div>
    </section>
  );
}
