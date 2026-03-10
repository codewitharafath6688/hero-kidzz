import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-base-content">Contact Us</h1>
          <p className="mt-2 text-base-content/70">
            We would love to hear from you. Send us a message anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="card border border-base-300 bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl">Send Message</h2>

              <form className="space-y-4">
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Message</label>
                  <textarea
                    placeholder="Write your message"
                    className="textarea textarea-bordered w-full"
                    rows="4"
                  ></textarea>
                </div>

                <button className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="card border border-base-300 bg-base-100 shadow-md">
              <div className="card-body flex flex-row items-center gap-4">
                <FaPhoneAlt className="text-primary text-xl" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-base-content/70">+880 1234 567890</p>
                </div>
              </div>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-md">
              <div className="card-body flex flex-row items-center gap-4">
                <FaEnvelope className="text-primary text-xl" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-base-content/70">support@herokidzz.com</p>
                </div>
              </div>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-md">
              <div className="card-body flex flex-row items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-base-content/70">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;