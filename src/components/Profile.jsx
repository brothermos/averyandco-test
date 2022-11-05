import React from "react";
import profile from "../assets/about.png";
function Profile() {

    let alertMsg = ()=>{
        window.location = "mailto:moss10612@gmail.com";
    }

    return (
        <div className="flex justify-between">

            {/* About Me */}
            <section className="pl-60 pt-32">
                <h3 className="text-5xl">Hello,</h3>
                <h1 className="text-8xl text-[#cf2027] font-bold">
                    I'm Natdanai
                </h1>
                <h5 className="text-4xl">Front-End Developer</h5>
                <p className="text-lg mt-14 text-[#676767]">
                    I'm 25 years old, Bangkok, Thailand
                </p>
                <p className="text-lg text-[#676767]">Tel. +668-3653-6262</p>
                <p className="text-lg text-[#676767]">Email: moss10612@gmail.com</p>
                <div className="text-4xl text-[#cf2027]">
                    <a
                        href="https://www.linkedin.com/in/natdanai-kanyakoon-3a0526228/"
                        target="_blank"
                        className="pr-2"
                    >
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/maaammos" target="_blank">
                        <i class="uil uil-github"></i>
                    </a>
                </div>
                <p className="text-[#676767] text-lg mt-14 mb-14 w-8/12">
                    Designed for ux/ui, developed function that can interact
                    with website by using ( HTML, CSS, JavaScript, React.JS,
                    Vue.JS, TailwindCSS, Bootstrap5 )
                </p>
                <button onClick={alertMsg} className="bg-[#cf2027] text-white rounded-lg px-8 py-2 shadow-lg">
                    Hire me
                </button>
            </section>

            {/* Photo */}
            <div className="flex items-center">
                <figure>
                    <img
                        src={profile}
                        alt="Natdanai Kanyakoon"
                        className="w-10/12"
                    />
                </figure>
            </div>
        </div>
    );
}

export default Profile;
