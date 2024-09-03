import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputTag from './InputTags.jsx';
import { focused_textbox } from '../scripts/eleDetector.js';
import { write } from '../scripts/qol.js';
import { removeReact } from '../scripts/ext-qol.js';

export default function GenMenu({back}){ //props: {startx, starty}

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tags, setTags] = useState(["formal"]);
    const [ addressVal, setAddressVal] = useState("Unknown");

    // Define the onSubmit handler
    const onSubmit = (data) => {
        const prompt = `Write an email to the recipient: ${data.addressedTo} ${data.theName ? data.theName : ""},
        regarding the description: ${data.description},
        with the tags: ${tags.toString()}`
        write(focused_textbox, prompt)
        removeReact()
    };
    
    const handleRadioChange = (value) => {
        setAddressVal(value);
    };


    return(
        <div>
            <form className="gen-menu" onSubmit={handleSubmit(onSubmit)}>
                
            <div className='title'>Email Description</div>
                <input 
                        type="textarea"
                        rows="4" cols="50"
                        className = "desc-query"
                        placeholder="e.g. agree to the proposal..."
                        {...register("description" , { required: "Please write a description." })}
                />
                
            <fieldset>
            <legend className = "address-tit">Addressed To:</legend>
                <div>
                    <input 
                    type="radio" 
                    id="Unknown" 
                    value="Unknown recipient" 
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

                <InputTag tags={tags} setTags={setTags}/>

                {errors.description && <div className='error'>{errors.description.message}</div>}
                {errors.addressedTo && <div className='error'>{errors.addressedTo.message}</div>}
                {errors.theName && <div className='error'>{errors.theName.message}</div>}
                
                <div className='bottom-bar'>
                    <button onClick={back}>Back</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}