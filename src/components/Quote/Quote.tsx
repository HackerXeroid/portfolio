import QuoteImg from "../../assets/start_quote.svg";

function Quote() {
  return (
    <div className="pb-20">
      <blockquote className="mx-auto max-w-full w-9/12 font-medium text-white text-2xl p-8 border border-white relative mb-20">
        <img
          src={QuoteImg}
          alt="Start Quote"
          className="w-12 h-12 absolute left-3 -top-6"
        />
        With great power comes great electricity bill.
        <img
          src={QuoteImg}
          alt="End Quote"
          className="w-12 h-12 absolute right-3 -bottom-6"
        />
        <cite className="p-4 border not-italic absolute bottom-0 right-0 translate-x-[2px] translate-y-full">
          &mdash; Dr. Who
        </cite>
      </blockquote>
    </div>
  );
}
export default Quote;
