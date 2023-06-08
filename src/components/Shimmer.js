const Shimmer = () =>{
    return(
        <div className="w-56 p-2 m-2 shadow-lg flex-wrap bg-gray-100"> 
            {Array(10).fill(" ").map((e, index) => 
            (<div 
              className="w-56 h-56 p-2 m-2 shadow-lg flex-wrap bg-gray-300" key={index}> 
        
        </div>))}
        
        </div>
    );
};

export default Shimmer;