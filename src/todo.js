/* global document */
const todo = (title, description, dueDate, priority, project) => {
    return {title, description, dueDate, priority, project};
}

// todo({
//     about: [title, description, dueDate],
//     priority: "high",
//     project: "Default"
// })

export default todo;