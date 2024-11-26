interface RazorpayOptions {
  key: string;
  name: string;
  // image: string;
  amount: number;
  currency: string;
  order_id: string;
  receipt: string;
  description: string;
  payment_capture: number;
  theme: { color: string };
  prefill: { name: string };
  notes?: { address?: string };
  handler: (response: any) => void;
}

import axios from "axios";
export async function createRazorpayOrder(data: any) {
  const orderData = {
    amount: data?.amount, // Amount in paise (100 = 1 INR)
    currency: data?.currency, //
    receipt: "receipt#1",
    payment_capture: 1, // 1 = Automatic Payment Capture
  };
  const razorpayKey = "rzp_test_XvPqBQebnzbA02"; // Your Razorpay test key
  const razorpaySecret = "BL0G9IT2BSNYkaQhe6uEuBAz"; // Your Razorpay secret key

  try {
    const response = await axios.post(
      "https://api.razorpay.com/v1/orders",
      orderData,
      {
        auth: {
          username: razorpayKey,
          password: razorpaySecret,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data); // This will contain the order ID
    return response.data.id; // This is the order ID you can use
  } catch (error) {
    console.error("Error creating order:", error);
  }
}

export const initiateRazorpayPayment = async (formData: any) => {
  // const BASEURL = "/api/create-order";
  // const response = await fetch(BASEURL, {
  //   method: "POST",
  //   body: JSON.stringify(formData),
  // });
  // const data = await response.json();
  // if (!data.success) return;
  const id = await createRazorpayOrder(formData);
  const data = formData;
  const options: RazorpayOptions = {
    amount: data.amount,
    currency: data.currency,
    name: "Volvrit",
    description:
      "At VOLVRIT we help B2B-B2C & Startup's to create custom development solutions, Crafted by our experienced IT TEAM.",
    key: "rzp_test_XvPqBQebnzbA02",
    // image: "../../../../public/assets/logo/volvrit_logo.png",
    order_id: id,
    receipt: "receipt#1",
    payment_capture: 1,
    theme: { color: "#3399cc" },
    prefill: { name: formData?.name },
    handler: (response) => {
      console.log(response);
    },
  };
  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};
