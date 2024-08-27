import { useState } from 'react';
import '../styles/Popup.css'

import { useForm } from 'react-hook-form';
//import InputTag from './InputTags.jsx';

export default function GenMenu({back}){ //props: {startx, starty}

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ addressVal, setAddressVal] = useState("Unknown");


    // Define the onSubmit handler
    const onSubmit = (data) => {
        alert(`Form submitted with addressed to: ${data.addressedTo} ${data.theName}`);
    };

    
    const handleRadioChange = (value) => {
        setAddressVal(value);
    };


    return(
        <div>
            <div className="title">Email Writer</div>
            <form className="gen-menu" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
            <legend>Addressed To:</legend>
                <div>
                    <input 
                    type="radio" 
                    id="Unknown" 
                    value="Unknown" 
                    checked={addressVal === "Unknown"}
                    {...register("addressedTo",{ required: "Please select an option." })}
                    onChange={() =>handleRadioChange( "Unknown" )}
                    />
                    <label htmlFor="Unknown">Unknown</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="Mr." 
                    value="Mr." 
                    checked={addressVal === "Mr"}
                    {...register("addressedTo", { required: "Please select an option." })}
                    onChange={() =>handleRadioChange( "Mr" )}
                    />
                    <label htmlFor="Mr">Mr.</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="Ms." 
                    value="Ms." 
                    checked={addressVal === "Ms"}
                    {...register("addressedTo", { required: "Please select an option." })}
                    onChange={() =>handleRadioChange( "Ms" )}
                    />
                    <label htmlFor="Ms">Ms.</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="Mrs." 
                    value="Mrs." 
                    checked={addressVal === "Mrs"}
                    {...register("addressedTo", { required: "Please select an option." })}
                    onChange={() =>handleRadioChange( "Mrs" )}
                    />
                    <label htmlFor="Mrs">Mrs.</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="no-title" 
                    value="" 
                    checked={addressVal === "no-title"}
                    {...register("addressedTo", { required: "Please select an option." })}
                    onChange={() =>handleRadioChange( "no-title" )}
                    />
                    <label htmlFor="no-title">No Title</label>
                </div>
                <div>
                    {addressVal !== "Unknown" &&
                        <input 
                        type="text" 
                        placeholder="Name"
                        {...register("theName" , { required: "Please write a name." })}
                        />
                    }
                </div>
                </fieldset>

                {/*<InputTag />*/}

                {errors.addressedTo && <p>{errors.addressedTo.message}</p>}
                
                <div className='bottom-bar'>
                    <button onClick={back}>Back</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}