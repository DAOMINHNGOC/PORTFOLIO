import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";

const ContactPage = () => {
  return `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class="">
        <!-- Title -->
        <section class="bg-[#e6dace] text-center">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Contact Me</h1>
            <p class="pb-8">Get in touch</p>

        </section>
        <!-- project name 1 -->
        <section class="w-[900px] mx-auto mb-[80px] mt-10">
            <div class="rows grid grid-cols-[300px,auto] ">
                <div class="col">
                    <div>
                        <h1 class="font-bold text-[22px]"><i class="fa-solid fa-phone mr-2"></i>Call Me</h1>
                        <p class=" mb-7">0869827432</p>
                    </div>
                    <div>
                        <h1 class="font-bold text-[22px] "><i class="fa-solid fa-envelope mr-2"></i>Email</h1>
                        <p class=" mb-7"> ngocdmph20534@fpt.edu.vn</p>
                    </div>
                    <div>
                        <h1 class="font-bold text-[22px] "><i class="fa-solid fa-location-dot mr-2"></i>Location
                        </h1>
                        <p class=" mb-7">Trường Cao Đẳng FPT</p>
                    </div>
                </div>
                <div class="col">
                    <form>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="block mb-6">
                                <input type="text" class="rounded-md w-full px-4 pb-7 h-[90px] bg-indigo-100"
                                    placeholder="Name">
                            </div>
                            <input type="text" class="rounded-md w-full px-4 pb-7 h-[90px] bg-indigo-100 "
                                placeholder="Email">
                        </div>
                        <div>
                            <input type="text" class="w-full px-4 pb-7 mb-6 rounded-md h-[90px] bg-indigo-100"
                                placeholder="Project">
                        </div>
                        <textarea class="bg-indigo-100 px-4 py-4 w-full" placeholder="Message" name="" id=""
                            cols="50" rows="10"></textarea>
                        <button class="bg-indigo-400 text-white rounded-lg hover:bg-slate-400 px-4 py-3">Send
                            Message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
    ${Footer()}
  `;
};

export default ContactPage;
