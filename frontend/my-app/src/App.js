import "./pages/Home/index.js"
import "./App.css"
function App() {
  return (
    <div className="App">
      <div className="header">
        {/* navbar */}
        <div className="navbar">
          <div className="a-link">
          <a>Home</a>
          <a>Shop</a>
          <a>Blog</a>
          <a>Pages</a>
          <a>Contact</a>
          </div>
          
          <div className="icon"><i class="fa-solid fa-magnifying-glass"></i> </div>
          <button>Buy Now</button>
        </div>
        {/* navbar */}
      </div>
      {/* main */}
    <div className="main">
      <section className="shop-is-fun">
        <div className="blue"></div>
        <div className="img-txt-and-button">
        <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp"></img>
        <h3>Shop is Fun</h3>
        <h1>BROWSE OUR PREMIUM <br></br> PRODUCT</h1>
        <span>Us which over of signs divide dominion deep fill bring they're meat beho <br></br> upon own earth without morning over third. Their male dry. They are great <br></br> appear whose land fly grass.</span><br></br>
        <button>Browse Now</button>
        </div>
      </section>
    </div>
    <div className="Products">
      <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp"></img>
      <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp"></img>
      <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png.webp"></img>
    </div>

    <div className="heading">
      <h3>Popular Item in the market</h3>
      <h1>Trending Product</h1>
    </div>
    <div className="Trending-products">
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png.webp"></img>
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp"></img>
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png.webp"></img>
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png.webp"></img>
    </div>
    
    {/* main */}
    </div>
  );
}

export default App;