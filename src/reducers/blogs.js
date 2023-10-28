const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "Add_Blog":
      return [...state, action.blog];
    case "Remove_Blog":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "Edit_Blog":
      return state.map((blog) => {
        if (blog.id === action.id) {
          return { ...blog, ...action.updates };
        } else {
          return blog;
        }
      });
    default:
      return state;
  }
};

export default blogReducer;
