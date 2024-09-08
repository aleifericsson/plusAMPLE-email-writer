import { TagsInput } from "react-tag-input-component";

export default function InputTag ({tags, setTags}){

  return (
    <div className="input-tagging">
      <div>Tags:</div>
      <TagsInput
        value={tags}
        onChange={setTags}
        name="email-tags"
        placeHolder="enter tags"
      />
    </div>
  );
};
