import '../styles/Popup.css'

import { useForm } from 'react-hook-form';

export default function GenMenu({props}){ //props: {startx, starty}

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Define the onSubmit handler
    const onSubmit = (data) => {
        alert(`Form submitted with addressed to: ${data.addressedTo}`);
    };

    return(
        <div className="popup" style={{left:props.startx,top:props.starty}}>
            <div className="title">Email Writer</div>
            <form className="gen-menu" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
            <legend>Addressed To:</legend>
                <div>
                    <input 
                    type="radio" 
                    id="Unknown" 
                    value="Unknown" 
                    {...register("addressedTo",{ required: "Please select an option." })}
                    />
                    <label htmlFor="Unknown">Unknown</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="Mr" 
                    value="Mr" 
                    {...register("addressedTo", { required: "Please select an option." })}
                    />
                    <label htmlFor="Mr">Mr.</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="Ms" 
                    value="Ms" 
                    {...register("addressedTo", { required: "Please select an option." })}
                    />
                    <label htmlFor="Ms">Ms.</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="Mrs" 
                    value="Mrs" 
                    {...register("addressedTo", { required: "Please select an option." })}
                    />
                    <label htmlFor="Mrs">Mrs.</label>
                </div>
                <div>
                <input 
                    type="text" 
                    placeholder="Name"
                    {...register("the-name")}
                />
                </div>
                </fieldset>

                {errors.addressedTo && <p>{errors.addressedTo.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}