import React from "react";

function Education() {
    return (
        <div>
            <h1 className=" text-[#cf2027] text-6xl font-bold flex justify-center pt-32 pb-20">
                Experience
            </h1>
            <div className="flex justify-center">
                {/* EDUCATION */}
                <div className="p-8 mr-16 w-3/12 border-dashed border-2 border-[#cf2027] rounded-3xl shadow-xl">
                    <div>
                        <div className="flex ">
                            <div className="text-[#cf2027] text-xl">
                                <i class="uil uil-graduation-cap"></i>
                            </div>
                            <p className="ml-3">2015 - 2019</p>
                        </div>
                        <p className="ml-8 text-2xl font-bold text-">
                            Prince of Songkhla University
                        </p>
                        <p className="ml-8">Human Resource Management</p>
                    </div>
                    <div className="pt-8">
                        <div className="flex ">
                            <div className="text-[#cf2027] text-xl">
                                <i class="uil uil-graduation-cap"></i>
                            </div>
                            <p className="ml-3">MAY 2022 - AUGUST 2022</p>
                        </div>
                        <p className="ml-8 text-2xl font-bold">
                            Generation Thailand
                        </p>
                        <p className="ml-8">
                            Junior Software Developer Bootcamp#2
                        </p>
                    </div>
                    <div className="pt-8">
                        <div className="flex ">
                            <div className="text-[#cf2027] text-xl">
                                <i class="uil uil-graduation-cap"></i>
                            </div>
                            <p className="ml-3">JULY 2022 - OCTOBER 2022</p>
                        </div>
                        <p className="ml-8 text-2xl font-bold">Codecademy</p>
                        <p className="ml-8">Front-end Engineer</p>
                    </div>
                </div>

                {/* WORK EXPERIENCE */}
                <div className="p-8 w-3/12 border-dashed border-2 border-[#cf2027] rounded-3xl shadow-xl ">
                    <div>
                        <div className="flex ">
                            <div className="text-[#cf2027] text-xl">
                                <i class="uil uil-graduation-cap"></i>
                            </div>
                            <p className="ml-3">Seb 2022 - Present</p>
                        </div>
                        <p className="ml-8 text-2xl font-bold text-">
                            Dosetech company
                        </p>
                        <p className="ml-8">Junior Front-End Developer</p>
                    </div>
                    <div className="pt-8">
                        <div className="flex ">
                            <div className="text-[#cf2027] text-xl">
                                <i class="uil uil-graduation-cap"></i>
                            </div>
                            <p className="ml-3">2020 - Present</p>
                        </div>
                        <p className="ml-8 text-2xl font-bold">
                            Facebook: hugbearshop
                        </p>
                        <p className="ml-8">Content creator & Admin</p>
                    </div>
                    <div className="pt-8">
                        <div className="flex ">
                            <div className="text-[#cf2027] text-xl">
                                <i class="uil uil-graduation-cap"></i>
                            </div>
                            <p className="ml-3">2020 - Present</p>
                        </div>
                        <p className="ml-8 text-2xl font-bold text-">
                            Shopee, Lazada Platform
                        </p>
                        <p className="ml-8">Seller owner</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
