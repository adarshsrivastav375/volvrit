interface RazorpayOptions {
  key: string;
  name: string;
  image: string;
  amount: number;
  currency: string;
  order_id: string;
  description: string;
  theme: { color: string };
  prefill: { name: string };
  notes?: { address?: string };
  handler: (response: any) => void;
}

export const initiateRazorpayPayment = async (formData: any) => {
  const BASEURL = "/api/create-order";
  const response = await fetch(BASEURL, {
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!data.success) return;

  const options: RazorpayOptions = {
    amount: data.amount,
    currency: data.currency,
    name: "Your Company Name",
    description: "Test Transaction",
    key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key
    image: "/logo.png", // Replace with your logo
    order_id: data.id, // Order ID from Razorpay backend
    theme: { color: "#3399cc" },
    prefill: { name: formData?.name },
    handler: (response) => {
      console.log(response);
    },
  };
  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};
