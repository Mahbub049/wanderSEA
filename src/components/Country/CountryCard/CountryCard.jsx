const CountryCard = ({country}) => {
    const {image, country_name, description} = country;
    return (
        <div>
            <div className="card bg-base-100 h-[700px] shadow-xl poppins">
                <figure><img src={image} className="h-[300px] w-full" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mb-1 text-3xl font-bold mons">{country_name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;