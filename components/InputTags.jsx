import { TagsInput } from "react-tag-input-component";

export default function InputTag ({tags, setTags}){

  return (
    <div>
      <div className="title">Tags</div>
      <TagsInput
        value={tags}
        onChange={setTags}
        name="email-tags"
        placeHolder="enter tags"
      />
      <i className="info">press enter or comma to add new tag</i>
    </div>
  );
};
