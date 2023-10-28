import { v4 as uuidv4 } from "uuid";

export const addBlog = ({ title = "", text = "", createdDate = 0 }) => ({
  type: "Add_Blog",
  blog: {
    id: uuidv4(),
    title: title,
    text: text,
    createdDate: createdDate,
  },
});
export const removeBlog = ({ id }) => ({
  type: "Remove_Blog",
  id: id,
});
export const editBlog = (id, updates) => ({
  type: "Edit_Blog",
  id,
  updates,
});
