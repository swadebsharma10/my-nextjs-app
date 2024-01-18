
const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams)
    return (
        <div>
           <h2>This is Dynamic Page :{params.id}</h2> 
           <p>Search by: {searchParams.category} and {searchParams.price} taka</p>
        </div>
    );
};

export default DynamicPage;