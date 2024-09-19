import { Post } from "@/utils/api";
import Modal from "../Modal";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

const ContactUsModal = ({
  isVisible,
  setVisible,
}: {
  isVisible: any;
  setVisible: any;
}) => {
  const [user, setUser] = useState<any>({
    name: "",
    email: "",
    service: "",
    phone: "",
    // otp: "",
  });
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res: any = await Post("/api/send-email", user);
      if (res.success) toast.success(res.message);
    } catch (error) {
      console.log("Error: ", error); // to avoid warnings from browsers
    } finally {
      handleClose();
      setLoading(false); // to enable loading state
    }
  };

  const handleSendOtp = () => {
    if (user?.phone.length < 10) return setError("Please add a phone number`");
    setError("");
    setOtpSent(true);
  };

  const handleClose = () => {
    setError("");
    setOtpSent(false);
    setVisible(false);
    setUser({ name: "", email: "", service: "", phone: "", otp: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedValue =
      name === "phone" ? value.replace(/[^0-9]/g, "") : value;
    setUser((prev: any) => ({ ...prev, [name]: updatedValue }));
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"; // prevent overflow
    } else document.body.style.overflow = "scroll";
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} onClose={handleClose}>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4">
          Discuss your project with us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={user?.name}
              onChange={handleChange}
              disabled={user?.name && otpSent}
              className="w-full p-2 border rounded-lg focus:outline-primary/80"
            />
          </div>
          <div className="mb-4">
            <input
              required
              type="email"
              name="email"
              value={user?.email}
              placeholder="Email"
              onChange={handleChange}
              disabled={user?.email && otpSent}
              className="w-full p-2 border rounded-lg focus:outline-primary/80"
            />
          </div>
          <div className="mb-4 relative">
            <select
              required
              name="service"
              value={user.service}
              onChange={handleChange}
              disabled={user?.service && otpSent}
              className="w-full p-2 border rounded-lg focus:outline-primary/80 appearance-none"
            >
              <option value="">Select Service</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="seo">SEO</option>
            </select>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-1">
            <input
              required
              type="text"
              name="phone"
              maxLength={10}
              inputMode="numeric"
              value={user?.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              disabled={user?.phone && otpSent}
              className="flex-1 outline-none w-1/2 md:w-full p-1"
            />

            {/* <button
              type="button"
              onClick={handleSendOtp}
              className="ml-2 h-full p-2 bg-primary hover:bg-primary/80 text-[10px] text-white rounded-md"
            >
              {otpSent ? "Resend OTP" : "Send OTP"}
            </button> */}
          </div>
          {error ? (
            <p className="text-red-500 text-xs font-semibold pt-1 pb-4">
              {error}
            </p>
          ) : (
            <p className="mb-4"></p>
          )}
          {otpSent && (
            <div className="mb-4">
              <input
                required
                type="text"
                name="otp"
                maxLength={6}
                inputMode="numeric"
                value={user?.otp}
                placeholder="Enter OTP"
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-primary/80"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold"
          >
            {loading ? "Please wait Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ContactUsModal;
