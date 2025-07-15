import Layout from "@/components/Layout";
import Head from "next/head";
const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact | Hemraj Persaud</title>
      </Head>
      <section className="max-w-wxl max-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Me
        </h1>
        <div className="text-center mb-10">
          <p className="text-lg text-gray-700 mb-4">
            If you&apos;d like to get in touch, feel free to reach out!
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <li className="">
              <span className="font-medium text-gray-800">Email: </span>
              <a
                className="text-blue-600 hover:underline"
                href="mailto:hemrajper@gmail.com"
              >
                hemrajper@gmail.com
              </a>
            </li>
            <li className="">
              <span className="font-medium text-gray-800">LinkedIn: </span>
              <a
                className="text-blue-600 hover:underline"
                href="https://www.linkedin.com/in/hemrajpersaud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hemraj Persaud
              </a>
            </li>
            <li className="">
              <span className="font-medium text-gray-800">GitHub: </span>
              <a
                className="text-blue-600 hover:underline"
                href="https://github.com/persaudh"
                target="_blank"
                rel="noopener noreferrer"
              >
                persaudh
              </a>
            </li>
          </ul>
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
