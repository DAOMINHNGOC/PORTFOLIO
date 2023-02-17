import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { router, useEffect, useState } from "../../../lib";

const ProjectAdd = () => {
  useEffect(() => {
    const form = document.querySelector(".form-add");
    const name = document.querySelector("#name");
    const date = document.querySelector("#date");
    const image = document.querySelector("#image");
    const author = document.querySelector("#author");
    const description = document.querySelector(".description");
    const link = document.querySelector("#link");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: name.value,
        date: date.value,
        author: author.value,
        link: link.value,
        image: image.value,
        description: description.value,
      };
      fetch("http://localhost:3000/projects/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/projects/"));
    });
  });
  return `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
                <section class="box">
                    <div class="title flex align-center">
                        <h1 class="font-bold text-[30px]">Add Projects</h1>
                        <form class="ml-6">
                            <input type="text" class="border px-3 py-2 rounded-md outline-none"
                                placeholder="Mời bạn nhập project muốn tìm">
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
                        </form>
                    </div>
                    
                    <form class="form-add">
                        <div>
                            <label>Tên Project</label>
                            <input type="text" id="name" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên projects">
                        </div>
                        <div>
                            <label>Ngày đăng</label>
                            <input type="date" id="date" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Ngày đăng">
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" id="image" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Image projects">
                        </div>
                        <div>
                          <label>Người tạo</label>
                          <input type="text" id="author" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                              placeholder="Người tạo">
                        </div>
                        <label>Mô tả</label>
                        <textarea class="w-full py-4 px-3 description outline-none rounded-md shadow-md mb-4" name="" 
                            cols="30" rows="5" placeholder="Description"></textarea>
                        <div>
                          <label>Link page</label>
                          <input type="text" id="link" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                              placeholder="Link page">
                        </div>

                        <div class="btn">
                            <button class="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100">Nhập
                                lại</button>
                            <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                                href="/admin/projects">Danh sách</a>
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Thêm</button>
                        </div>
                    </form>
                    
                </section>
    ${Footer()}
    `;
};

export default ProjectAdd;
