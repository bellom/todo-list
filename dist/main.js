!function(t){var e={};function n(o){if(e[o])return e[o].exports;var d=e[o]={i:o,l:!1,exports:{}};return t[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)n.d(o,d,function(e){return t[e]}.bind(null,d));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=t=>({name:t});var d=()=>{const t=document.getElementById("selectProjects");t.innerHTML='<option>Choose Project</option>\n                                <option value="Default">Default</option>',s.getData().forEach(e=>{const n=document.createElement("option");n.setAttribute("value",`${e.name}`),n.innerText=`${e.name}`,t.appendChild(n)})};var r=(t,e,n,o,d)=>({title:t,description:e,dueDate:n,priority:o,projectOwn:d});var i=(()=>{const t=[],e=t=>{const e=t.target.id.slice(11),n=document.getElementById(`fullTodo${e}`);"none"===n.style.display?n.style.display="block":(n.style.display="block")&&(n.style.display="none")},n=()=>{const t=document.getElementById("title"),e=document.getElementById("description"),n=document.getElementById("dueDate");s(t),s(e),s(n),document.getElementById("addTodoForm").style.display="block"},o=()=>{const e=document.getElementById("title"),n=document.getElementById("description"),o=document.getElementById("dueDate"),d=document.getElementById("priority"),i=document.getElementById("selectProjects");""!=e.value&&""!=n.value&&""!=o.value&&""!=d.value&&""!=i.value&&(t.push(r(e.value,n.value,o.value,d.value,i.value)),u(t),a(),l(),document.getElementById("addTodoForm").style.display="none")},d=t=>{const e=document.getElementById("editTitle").value;document.getElementById("editDesc").value,document.getElementById("editdueDate").value,document.getElementById("editPriority").value;m()[t].title=e,u(m())},i=e=>{const n=Number(e.target.id.slice(10));t.splice(n,1),u(t)},s=t=>{t.value=""},l=()=>{document.getElementById("todoListHeader").innerText="All Todos"},a=()=>{p(),m().forEach((t,e)=>{c(t,e)})},c=(t,e)=>{todoList.innerHTML+=`<div id="todoDetails${e}" class="mb-4 p-4 btn-light border">\n                                    <span class="my-auto font-weight-bold">${t.title}</span>\n                                    <span class="float-right my-auto">Date: ${t.dueDate}</span>\n                                    <span id="fullTodo${e}" class="text-muted">\n                                        <p class="mb-0"><strong>Description: </strong><i>${m()[e].description}</i></p>\n                                        <p><strong>Priority Status: </strong><i>${m()[e].priority}</i></p>\n                                        <span class="btn btn-sm btn-primary text-white" id="editTodo${e}">Edit</span>\n                                        <span class="btn btn-sm btn-danger text-white" id="removeTodo${e}">Delete</span>\n                                        <span class="btn btn-sm btn-danger text-white" id="closeTodo${e}">Close</span>\n                                    </span>\n                                    <div class="form-inline my-2 my-lg-0 ml-3" id="addEditForm">\n                                        <form>\n                                            <input class="form-control mr-sm-2 mb-2 mt-3" value="${m()[e].title}" id="editTitle" required>\n                                            <input class="form-control mr-sm-2 mb-2 mt-3" value="${m()[e].description}" id="editDesc" required>\n                                            <input class="form-control mr-sm-2 mb-2" id="editdueDate" value="${m()[e].dueDate}" type="date" required>\n                                            <select class="custom-select mr-sm-2 mb-2" id="editPriority" value="${m()[e].priority}" required>\n                                                <option>Choose Priority</option>\n                                                <option value="Low">Low</option>\n                                                <option value="Medium">Medium</option>\n                                                <option value="High">High</option>\n                                            </select>\n                                            <div role="group">                                    \n                                                <button type="button" id="saveEditForm${e}" class="btn btn-sm btn-primary mb-2">Save</button>\n                                                <button type="button" id="closeEditForm" class="btn btn-sm btn-danger mb-2">Cancel</button>\n                                            </div>\n                                        </form>\n                                    </div>\n                                </div>`,(t=>{document.getElementById(`fullTodo${t}`).style.display="none"})(e),y()},m=()=>JSON.parse(localStorage.getItem("todoItemsArr")||"[]"),u=t=>{localStorage.setItem("todoItemsArr",JSON.stringify(t))},p=()=>{todoList.innerHTML=""},y=()=>{document.getElementById("addEditForm").style.display="none"};return{todoItemsArr:t,btnClick:()=>{document.addEventListener("click",function(t){if(t.preventDefault(),"addTodoBtn"===t.target.id)o();else if("showTodoFormBtn"===t.target.id)n();else if("closeTodoForm"===t.target.id)document.getElementById("addTodoForm").style.display="none";else if("todoDetails"===t.target.id.substring(0,11))e(t);else if("removeTodo"===t.target.id.substring(0,10))i(t),a();else if("editTodo"===t.target.id.substring(0,8))document.getElementById("addEditForm").style.display="block";else if("saveEditForm"===t.target.id.substring(0,12)){const e=t.target.id.slice(12);d(e),y()}else if("closeEditForm"===t.target.id)y();else if("closeTodo"===t.target.id.substring(0,9)){const e=t.target.id.slice(9);document.getElementById(`fullTodo${e}`).style.display="none"}})},showProjectOwnedTodo:t=>{p(),t.forEach((t,e)=>{c(t,e)})},display:a,getData:m}})();var s=(()=>{const t=[],e=t=>i.getData().filter(e=>e.projectOwn===`${t.target.id.slice(11)}`),n=t=>{document.getElementById("todoListHeader").innerText=`Project: ${t.target.id.slice(11)}`},r=e=>{const n=Number(e.target.id.slice(10));t.splice(n,1),u(t)},s=()=>{const e=document.getElementById("projectName");""!=e.value&&" "!=e.value&&(t.push(o(e.value)),u(t),a(),d(),document.getElementById("addProjectForm").style.display="none")},l=t=>{t.value=""},a=()=>{const t=document.getElementById("projectList");c(t),m().forEach((e,n)=>{t.innerHTML+=`<a class="d-flex justify-content-between my-1 text-decoration-none" href="#">\n                                            <span class="my-auto" id="showProject${e.name}">${e.name}</span>\n                                            <span type="button" class="btn btn-sm btn-danger text-white" id="delProject${n}">Delete</span>\n                                        </a>`})},c=t=>{t.innerHTML='<a class="d-flex justify-content-between my-1 text-decoration-none" href="#">\n                                    <span class="my-auto" id="showProjectDefault">Default</span>\n                                </a>'},m=()=>JSON.parse(localStorage.getItem("projectsArr")||"[]"),u=t=>{localStorage.setItem("projectsArr",JSON.stringify(t))};return{btnClick:()=>{document.addEventListener("click",function(t){if("addProjectBtn"===t.target.id)s();else if("delProject"===t.target.id.substring(0,10))r(t),a(),d();else if("showProjectFormBtn"===t.target.id){const t=document.getElementById("projectName");l(t),document.getElementById("addProjectForm").style.display="block"}else"closeProjectForm"===t.target.id?document.getElementById("addProjectForm").style.display="none":"showProject"===t.target.id.substring(0,11)&&(n(t),i.showProjectOwnedTodo(e(t)))})},display:a,projectsArr:t,getData:m}})();var l=()=>{document.getElementById("nav").innerHTML='<a class="navbar-brand text-white mx-auto font-weight-bold" href="#">TODO LIST</a>'};var a=()=>{document.getElementById("projectContent").innerHTML='<h5 class="font-weight-bold">\n                                    Add a Project\n                                    <button class="badge btn btn-success ml-1" id="showProjectFormBtn">\n                                        +\n                                    </button>\n                                </h5>\n                                <div class="form-inline my-2 my-lg-0" id="addProjectForm">\n                                    <form name="myForm">\n                                        <input class="form-control mr-sm-2 mb-2" placeholder="Enter project name" id="projectName" required>\n                                        <div role="group">\n                                            <button type="button" id="addProjectBtn" class="btn btn-sm btn-primary my-2 my-sm-0">Add Project</button>\n                                            <button type="button" id="closeProjectForm" class="btn btn-sm btn-danger my-2 my-sm-0">Cancel</button>\n                                        </div>                                        \n                                    </form>\n                                </div>\n                                <h5 class="mt-2">Projects</h5>\n                                <div id="projectList"></div>',document.getElementById("addProjectForm").style.display="none"};var c=()=>{document.getElementById("todoContent").innerHTML='<h5 class="font-weight-bold">\n                                Add a Todo\n                                <button class="badge btn btn-success ml-1" id="showTodoFormBtn">\n                                    +\n                                </button>\n                            </h5>\n                                <div class="form-inline my-2 my-lg-0" id="addTodoForm">\n                                    <form>\n                                        <input class="form-control mr-sm-2 mb-2" placeholder="Enter todo title" id="title" required>\n                                        <input class="form-control mr-sm-2 mb-2" placeholder="Enter todo description" id="description" required>\n                                        <input class="form-control mr-sm-2 mb-2" id="dueDate" type="date" required>\n                                        <select class="custom-select mr-sm-2 mb-2" id="priority" required>\n                                            <option>Choose Priority</option>\n                                            <option value="Low">Low</option>\n                                            <option value="Medium">Medium</option>\n                                            <option value="High">High</option>\n                                        </select>\n                                        <select class="custom-select mr-sm-2 mb-2" id="selectProjects" required></select>\n                                        <div role="group">                                    \n                                            <button id="addTodoBtn" class="btn btn-sm btn-primary mb-2">Add Todo</button>\n                                            <button type="button" id="closeTodoForm" class="btn btn-sm btn-danger mb-2">Cancel</button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <h5 id="todoListHeader"></h5>\n                                <div id="todoList"></div>',document.getElementById("addTodoForm").style.display="none"};(()=>{l(),a(),c(),d(),s.display(),i.display()})(),s.btnClick(),i.btnClick()}]);