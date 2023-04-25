import React from 'react'
import Navbar1 from './Navbar1';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
      <Navbar1 name="Shruti" logo="https://i.postimg.cc/vBd2MN55/5cb480cd5f1b6d3fbadece79.png" button5="Get Started" />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="inline-block w-8 h-8 text-gray-400 mb-8"
                            viewBox="0 0 975.036 975.036"
                        >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                        </svg>
                        <p className="leading-relaxed text-lg text-justify">
                            Welcome to our webApp, created by two engineering students Pratyush Singha and Manish Gupta. We are passionate about technology and innovation, and we've created this platform to share our knowledge and insights with others who share our interests.Our website features a wide range of topics, from programming and software development to artificial intelligence and machine learning. We also cover emerging technologies, industry news, and provide helpful tips and tutorials for those looking to expand their skills.As engineering students, we understand the importance of staying up-to-date with the latest trends and advancements in the field. That's why we are committed to providing timely and accurate information, while also encouraging discussion and collaboration among our readers.We hope you find our website informative and helpful. If you have any questions or feedback, please don't hesitate to contact us. Thank you for visiting!
                        </p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
                    </div>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                            OUR TEAM
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            We are a dynamic and creative team of professionals with a passion for innovation and a deep understanding of technology. With diverse backgrounds and expertise, we bring a unique perspective to each project we work on.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                    src="https://i.postimg.cc/YC1VxwD7/Manish-dp.png"
                                />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">
                                        Manish Gupta
                                    </h2>
                                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                                    <p className="mb-4 text-justify">
                                        Passionate web developer with a love for web3.0, AI, and emerging technologies. I create stunning websites and custom web applications.
                                    </p>
                                    <span className="inline-flex">
                                        <Link className="text-gray-500" href='https://www.linkedin.com/in/manish-gupta-9a6658266/'>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </Link>
                                        <Link className="ml-2 text-gray-500" href='https://twitter.com/l_m_manish'>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </Link>
                                        <Link className="ml-2 text-gray-500" href='https://www.instagram.com/l_m_manish/'>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                    src="https://i.postimg.cc/sDKKfDLv/pratyush-dp.jpg"
                                />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">
                                        Pratyush Singha
                                    </h2>
                                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                                    <p className="mb-4 text-justify">
                                        Talented web developer with a passion for the latest technologies.We create stunning websites and custom web applications that push the boundaries of what's possible.
                                    </p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500" href='https://www.linkedin.com/in/pratyushsingha/'>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500" href='https://twitter.com/_being_pratyush'>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500" href='https://www.instagram.com/_i_am_pratyush04/' target='_blank'>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About
