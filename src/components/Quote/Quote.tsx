import { useEffect, useState } from "react";
import QuoteImg from "../../assets/start_quote.svg";

function Quote() {
  const [quote, setQuote] = useState({
    text: "With great power comes great electricity bill.",
    author: "Dr. Who",
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
          headers: {
            "X-Api-Key": import.meta.env.VITE_APP_QUOTE_API_KEY,
          },
        });
        const data = await res.json();
        const newQuote = {
          text: data[0].quote,
          author: data[0].author,
        };

        setQuote(newQuote);
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
        else console.error("Error fetching Quotes");
      }
    })();
  }, []);

  return (
    <div className="pb-20">
      <blockquote className="mx-auto max-w-full w-9/12 font-extralight text-white text-xl p-8 border border-white relative mb-20">
        <img
          src={QuoteImg}
          alt="Start Quote"
          className="w-12 h-12 absolute left-3 -top-6"
        />
        {quote.text}
        <img
          src={QuoteImg}
          alt="End Quote"
          className="w-12 h-12 absolute right-3 -bottom-6"
        />
        <cite className="p-4 border not-italic absolute bottom-0 right-0 translate-x-[2px] translate-y-full">
          &mdash; {quote.author}
        </cite>
      </blockquote>
    </div>
  );
}
export default Quote;
