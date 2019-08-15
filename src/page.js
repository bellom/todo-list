/* global document */
const page = () => {
    let body = `<div class="container-fluid">
                    <h1>Todo-List</h1>
    
                </div>`;

    let tbody = document.getElementById("content");
    tbody.innerHTML += body;
    return tbody;
};

export default page;