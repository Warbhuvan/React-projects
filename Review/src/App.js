import React from 'react';
import Review from './Review';
function App() {
  return<main>
    <section className='container'>
      <div className='title'>
        <h2>
          Our Reviews
        </h2>
        <Review></Review>
      </div>
    </section>
  </main>;
}

export default App;
