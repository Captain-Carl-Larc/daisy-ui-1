//import tailwind  file
import './../app.css';

function Homepage() {
    const hero = (<div data-theme = "dark"  className="hero min-h-screen"
  style={{ backgroundColor: '#1a202c' }}
>
  <div className="hero-overlay"></div>
  <div  className="hero-content margin-0 text-neutral-content text-center">
    <div className="">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Unlock <span className='text-blue-700'>Million-Dollar</span> Trade Opportunities Across 4 Continents</h1>
      <p className="mb-5">
        Master the art of importing from China, Turkey, UK, Dubai & USA while exporting Africa's agricultural gold to hungry global markets
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>)
    return ( 
        <>
        {hero}
        </>
     );
}

export default Homepage;