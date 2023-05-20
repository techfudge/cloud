import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Landing Page</h1>
        <p>Discover amazing products and services!</p>
        <button>Get Started</button>
      </header>
      <section className="Features">
        <div className="Feature">
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="Feature">
          <h2>Feature 2</h2>
          <p>Nullam dignissim risus ut erat dignissim, et hendrerit nunc interdum.</p>
        </div>
        <div className="Feature">
          <h2>Feature 3</h2>
          <p>Maecenas eget nunc eu tellus iaculis consectetur sed vitae nulla.</p>
        </div>
      </section>
      <section className="Testimonials">
        <div className="Testimonial">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut odio tellus."</p>
          <p>- John Doe</p>
        </div>
        <div className="Testimonial">
          <p>"Nullam dignissim risus ut erat dignissim, et hendrerit nunc interdum."</p>
          <p>- Jane Smith</p>
        </div>
      </section>
      <footer className="Footer">
        <p>&copy; 2023 Biggs Travels. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
function App() {
    return (
      <div className="MapContainer">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '80%', width: '80%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
  