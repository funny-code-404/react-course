const OfferSection = memo(() => {
    
  return (
    <main className="main">
      <section className="main_section_offer">
        <h2 className="section_offer_title">What do we offer</h2>
        <ul className="section_offer_list">
          <li className="offer_list_item">
            <img
              className="offer_list_item_image"
              src="./assets/offers/offer-support.svg"
              alt="#"
            />
            <p className="offer_list_subtitle">Support 24/7</p>
          </li>
          <li className="offer_list_item">
            <img
              className="offer_list_item_image"
              src="./assets/offers/offer-communicate.svg"
              alt="#"
            />
            <p className="offer_list_subtitle">Communicate directly</p>
          </li>
          <li className="offer_list_item">
            <img
              className="offer_list_item_image"
              src="./assets/offers/offer-book-online.svg"
              alt="#"
            />
            <p className="offer_list_subtitle">Book online</p>
          </li>
          <li className="offer_list_item">
            <img
              className="offer_list_item_image"
              src="./assets/offers/offer-real-reviews.svg"
              alt="#"
            />
            <p className="offer_list_subtitle">Real guest reviews</p>
          </li>
        </ul>
      </section>
    </main>
  );
});

export default OfferSection;
