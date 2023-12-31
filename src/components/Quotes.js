import React, { useEffect, useState } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=humor';

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({ quote: '', author: '', category: '' });

  useEffect(() => {
    fetch(url, {
      headers: {
        'X-Api-Key': '0UnhctOp2RUg6Nm1cW5/AQ==bEgrGVWmfxteSHV3',
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.status);
      })
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>404</h1>;
  return (
    <div className="wrapper quotes-container">
      <div>
        &quot;
        <span>{quote.quote}</span>
        &quot;
      </div>
      <span>by</span>
      <span>{quote.author}</span>
    </div>
  );
}

export default Quotes;
