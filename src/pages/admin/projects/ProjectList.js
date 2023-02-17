import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { useEffect, useState } from "../../../lib";

const ProjectList = () => {
  const [projects, setProject] = useState([]);
  const [categories, setcategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setcategory(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll("#btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        // Xóa local
        const id = this.dataset.id;
        const newProject = projects.filter((project) => project.id != id);
        setProject(newProject);

        // Xóa server
        fetch("http://localhost:3000/projects/" + id, {
          method: "DELETE",
        }).then(() => alert("Xóa thành công"));
      });
    }
  });

  return `
   ${Header()}
   <!-- -----------------------------------------CONTENT -->
   <section class="box">
       <div class="title flex align-center">
           <h1 class="font-bold text-[30px] ">List Projects</h1>
           <form class="ml-6">
                <select name="" id="" class="w-[200px] px-2 py-2 border  rounded-md">
                <option value="">All</option>
                ${categories.map((cate) => {
                  return `<option value="">${cate.name}</option>`;
                })}
                  
                </select>
               <input type="text" class="border px-3 py-2 rounded-md outline-none"
                   placeholder="Mời bạn nhập project muốn tìm">
               <button
                   class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
           </form>
       </div>
       <table class="border w-full mb-4">
           <thead>
               <tr class="border bg-slate-400 text-[20px] ">
                   <th class="border w-[40px] py-6">Id</th>
                   <th class="border w-[100px]">Tên Project</th>
                   <th class="border w-[100px]">Ngày đăng</th>
                   <th class="border w-[100px]">Ảnh</th>
                   <th class="border w-[140px]">Người tạo</th>
                   <th class="border w-[220px]">Mô tả</th>
                   <th class="border w-[80px]">Link</th>
                   <th class="border w-[150px]"></th>
               </tr>
           </thead>
           <tbody>
               ${projects
                 .map((project, index) => {
                   return `
                  <tr class="py-4 text-[16px]">
                    <td class="border text-center w-[40px] py-4">${
                      index + 1
                    }</td>
                    <td class="border px-5 w-[100px]">${project.name}</td>
                    <td class="border text-center w-[100px]">${
                      project.date
                    }</td>
                    <td class="border text-center w-[100px]">${
                      project.image
                    }</td>
                    <td class="border text-center w-[140px]">${
                      project.author
                    }</td>
                    <td class="border px-5 w-[220px]">${
                      project.description
                    }</td>
                    <td class="border px-5 w-[80px]"><a class="underline hover:decoration-red-400 hover:text-red-400" href="${
                      project.link
                    }">${project.link}</a></td>
                    <td class="border text-center w-[150px]">
                        <a data-id="${
                          project.id
                        }" id="btn-remove" class="bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-600 deley-100"
                            href="${project.id}">Xóa</a>
                        <a class="bg-green-500 px-2 py-1 rounded-md text-white hover:bg-green-600 deley-100"
                            href="/admin/projects/${project.id}/edit">Sửa</a>
                    </td>
                 </tr>
                `;
                 })
                 .join("")}
           </tbody>
       </table>
       <form>
           <a href="/admin/projects/add"
               class="bg-slate-500 px-3 py-2 rounded-md text-white hover:bg-slate-600 deley-100">Nhập
               lại</a>
           <button
               class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Lưu</button>
       </form>
   </section>
   ${Footer()}
  `;
};

export default ProjectList;
