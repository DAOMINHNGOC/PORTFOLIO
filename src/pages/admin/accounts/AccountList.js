import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";

const AccountList = () => {
  return `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
    <section class="box">
        <div class="title flex align-center">
            <h1 class="font-bold text-[30px] ">List Account</h1>
            <form class="ml-6">
                <input type="text" class="border px-3 py-2 rounded-md outline-none"
                    placeholder="Mời bạn nhập project muốn tìm">
                <button
                    class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
            </form>
        </div>
        <table class="border w-full">
            <thead>
                <tr class="border bg-slate-400 text-[23px] ">
                    <th class="border w-[60px] py-6">Id</th>
                    <th class="border w-[250px]">Tên Account</th>
                    <th class="border w-[140px]">Giá Project</th>
                    <th class="border w-[400px]">Mô tả</th>
                    <th class="border"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="py-4 text-[18px]">
                    <td class="border text-center w-[60px] py-4">1</td>
                    <td class="border px-5 w-[250px]">Dự án 1</td>
                    <td class="border text-center w-[140px]">20000 đ</td>
                    <td class="border px-5 w-[400px]">Chất</td>
                    <td class="border text-center">
                        <a class="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100"
                            href="">Xóa</a>
                        <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                            href="">Sửa</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <form>
            <a href="./projects.html"
                class="bg-slate-500 px-3 py-2 rounded-md text-white hover:bg-slate-600 deley-100">Nhập
                lại</a>
            <button
                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Lưu</button>
        </form>
    </section>
    ${Footer()}
  `;
};

export default AccountList;
