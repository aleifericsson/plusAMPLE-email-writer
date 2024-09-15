import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputTag from './InputTags.jsx';
import { focused_textbox } from '../scripts/eleDetector.js';
import { write } from '../scripts/qol.js';
import { removeReact } from '../scripts/ext-qol.js';
import { generateEmail } from '../scripts/gemini.js';

export default function GenMenu({back}){ //props: {startx, starty}

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tags, setTags] = useState(["formal"]);
    const [ addressVal, setAddressVal] = useState("Unknown");

    // Define the onSubmit handler
    const onSubmit = (data) => {
        const email = generateEmail(data.addressedTo,data.theName,data.description,data.length)
        write(focused_textbox, email)
        removeReact()
    };
    
    const handleRadioChange = (value) => {
        setAddressVal(value);
    };


    return(
        <div>
            <form className="gen-menu" onSubmit={handleSubmit(onSubmit)}>
                
            <div className='title'>Generate Email</div>
            
            
            <div className='length-sel'>
            <label htmlFor="description" className="form_label">
                    Enter Description:
                </label>
                <input 
                        type="textarea"
                        rows="4" cols="50"
                        className = "desc-query"
                        name="description"
                        placeholder="e.g. agree to the proposal..."
                        {...register("description" , { required: "Please write a description." })}
                />
            </div>
                <div className='length-sel'>
                <label htmlFor="length" className="form_label">
                    Select length:
                </label>
                    <select name="length" 
                    {...register("length" , {
                        required: "select an email length"
                    })}>
                    <option value="50">Short</option>
                    <option value="100" selected>Medium</option>
                    <option value="150">Long</option>
                    </select>
                </div>
            <fieldset>
            <legend className = "address-tit">Addressed To:</legend>
            <div className='addresses'>
                <div>
                    <input 
                    type="radio" 
                    id="Unknown" 
                    value="Unknown recipient" 
                    checked={addressVal === "Unknown"}
                    {...register("addressedTo",{ required: "Please select a title." })}
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
                    {...register("addressedTo", { required: "Please select a title." })}
                    onChange={() =>handleRadioChange( "Mr" )}
                    />
                    <label htmlFor="Mr">Mr.</label>
                </div>
                </div>
                <div className='addresses'>
                <div>
                    <input 
                    type="radio" 
                    id="Ms." 
                    value="Ms." 
                    checked={addressVal === "Ms"}
                    {...register("addressedTo", { required: "Please select a title." })}
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
                    {...register("addressedTo", { required: "Please select a title." })}
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
                    {...register("addressedTo", { required: "Please select a title." })}
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
                </div>
                </fieldset>

                <InputTag tags={tags} setTags={setTags}/>
                <i className="info">press enter or comma to add new tag</i>

                {errors.description && <div className='error'>{errors.description.message}</div>}
                {errors.addressedTo && <div className='error'>{errors.addressedTo.message}</div>}
                {errors.theName && <div className='error'>{errors.theName.message}</div>}
                {errors.length && <div className='error'> {errors.length.message}</div> }
                
                <div className='bottom-bar'>
                    <button onClick={back}>Back</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}