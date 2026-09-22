export const WHATSAPP_NUMBER = '2348135464936';
export const PHONE_DISPLAY = '0813 546 4936';

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatNaira(value: number | null) {
  if (value === null) return "Ask for today's price";
  return `\u20A6${value.toLocaleString('en-NG')}`;
}

export function productEnquiry(
  name: string,
  brand: string,
  price: number | null,
) {
  return price === null
    ? `Hello Chisco. I saw the ${name} (${brand}) on your website. What is today's price, and is it on the floor?`
    : `Hello Chisco. I saw the ${name} (${brand}) on your website, listed at ${formatNaira(price)}. Is it still on the floor?`;
}

export function restockEnquiry(name: string) {
  return `Hello Chisco. The ${name} shows as not on the floor. Please let me know when it comes in.`;
}

export const GENERAL_ENQUIRY =
  'Hello Chisco. I have a question about an appliance on your website.';
