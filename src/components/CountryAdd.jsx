import { useForm } from "react-hook-form";

const CountryAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data, e) => {
        // const {avg_cost, country, description, email, image, location, name, seasonality, spotname, travel, visitors
        // } = data;

        fetch('http://localhost:5000/countries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Added',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
              e.target.reset();
        })
      }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="poppins">
            <div className="label">
                <span className="label-text font-semibold text-[#0c7acd]">image</span>
            </div>
                <label className="input input-bordered input-info flex items-center gap-2">
                <input {...register("image", { required: true })} type="text" className="grow" placeholder="Image" />
                {errors.image && <span>This field is required</span>}
                </label>
            <div className="label">
                <span className="label-text font-semibold text-[#0c7acd]">country name</span>
            </div>
                <label className="input input-bordered input-info flex items-center gap-2">
                <input {...register("country_name", { required: true })} type="text" className="grow" placeholder="country" />
                {errors.country_name && <span>This field is required</span>}
                </label>
            <div className="label">
                <span className="label-text font-semibold text-[#0c7acd]">description</span>
            </div>
                <label className="input input-bordered input-info flex items-center gap-2">
                <input {...register("description", { required: true })} type="text" className="grow" placeholder="description" />
                {errors.description && <span>This field is required</span>}
                </label>
                <button className="btn btn-wide w-full text-white font-semibold text-xl bg-[#0c7acd]">Add</button>
            </form>
        </div>
    );
};

export default CountryAdd;