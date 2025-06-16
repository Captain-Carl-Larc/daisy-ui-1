//import tailwind  file
import './../app.css';

function Homepage() {
    const hero = (<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://images.pexels.com/photos/3075996/pexels-photo-3075996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">Unlock <span className="text-blue-700">
        Million-Dollar
      </span> Trade Opportunities Across 4 Continents</h1>
      <p className="py-6">
        Master the art of importing from China, Turkey, UK, Dubai & USA while exporting Africa's agricultural gold to hungry global markets.
      </p>
      <button className="btn btn-primary">Build Your Empire Today</button>
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