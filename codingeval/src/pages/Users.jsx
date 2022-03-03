import React, { useState } from "react";

export const Users = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <h1>Update Post </h1>
      <form>
        <div>
          <label>Post Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>Post Body </label>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </div>
        <div>
            <button>Save</button>
        </div>
      </form>
    </div>
  );
};
