//import tailwind  file
import './../app.css';

function Homepage() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to the React App</h1>
            <p className="text-lg text-gray-700 mb-2">This is a simple React application.</p>
            <p className="text-md text-gray-500">Feel free to explore and modify the code!</p>
        </div>
     );
}

export default Homepage;