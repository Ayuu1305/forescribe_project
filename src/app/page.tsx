"use client"; // Mark as client component for framer-motion

import { Poppins } from "next/font/google"; // Import Poppins
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link

// Initialize Poppins font
const poppins = Poppins({
  weight: ["400"], // Load weight 400
  subsets: ["latin"],
  display: "swap", // Optional: Ensure text remains visible during font load
});

// Placeholder icons (replace with actual icons later)
// const GoogleIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M21.8 10.1c0-.7-.1-1.4-.2-2.1h-9.1v4h5.2c-.2 1.3-.9 2.4-1.9 3.1v2.6h3.4c1.9-1.8 3.1-4.4 3.1-7.6z" />
//     <path d="M12.5 22c2.7 0 5-1 6.6-2.6l-3.4-2.6c-.9.6-2.1.9-3.2.9-2.5 0-4.6-1.7-5.3-4H3.8v2.7C5.4 19.9 8.7 22 12.5 22z" />
//     <path d="M7.2 14.3c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.6H3.8C3.3 8.8 3 10.3 3 12s.3 3.2.8 4.4l3.4-2.1z" />
//     <path d="M12.5 3c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17.5.5 15.2 0 12.5 0 8.7 0 5.4 2.1 3.8 5.3l3.4 2.7c.7-2.3 2.8-4 5.3-4z" />
//   </svg>
// );
// const MicrosoftIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M11.4 11.4H3v-8h8.4v8zm0 9.6H3v-8h8.4v8zm9.6-9.6h-8.4v-8h8.4v8zm0 9.6h-8.4v-8h8.4v8z" />
//   </svg>
// );

// Re-add ForescribeIcon component
const ForescribeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0L27.0711 6.14645L33.8536 6.92893L37.0711 13.0711L40 20L37.0711 26.9289L33.8536 33.0711L27.0711 33.8536L20 40L12.9289 33.8536L6.14645 33.0711L2.92893 26.9289L0 20L2.92893 13.0711L6.14645 6.92893L12.9289 6.14645L20 0Z"
      fill="url(#paint0_linear_forescribe)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8149 12.961C17.4068 12.3665 18.317 12.0046 19.2784 12.0046C20.2399 12.0046 21.15 12.3665 21.7419 12.961L25.5488 16.788C26.1407 17.3825 26.4996 18.2973 26.4996 19.2636C26.4996 20.23 26.1407 21.1447 25.5488 21.7392L21.7419 25.5662C21.15 26.1607 20.2399 26.5226 19.2784 26.5226C18.317 26.5226 17.4068 26.1607 16.8149 25.5662L13.008 21.7392C12.4161 21.1447 12.0572 20.23 12.0572 19.2636C12.0572 18.2973 12.4161 17.3825 13.008 16.788L16.8149 12.961ZM18.5954 23.6707C18.8154 23.8918 19.083 24.0106 19.3608 24.0106C19.6385 24.0106 19.9062 23.8918 20.1261 23.6707L23.2077 20.5751C23.4276 20.354 23.5457 20.0852 23.5457 19.8062C23.5457 19.5273 23.4276 19.2584 23.2077 19.0373L20.1261 15.9417C19.9062 15.7207 19.6385 15.5992 19.3608 15.5992C19.083 15.5992 18.8154 15.7207 18.5954 15.9417L15.5138 19.0373C15.2939 19.2584 15.1731 19.5273 15.1731 19.8062C15.1731 20.0852 15.2939 20.354 15.5138 20.5751L18.5954 23.6707Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_forescribe"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B3DFF" />
        <stop offset="1" stopColor="#5A0BFF" />
      </linearGradient>
    </defs>
  </svg>
);

// Remove backgroundCardsData array
// const backgroundCardsData = [ ... ];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
      {/* Background Layers Container */}
      <div className="absolute inset-0">
        {/* Background Image (Reduced opacity further) */}
        <div className="absolute inset-0 z-0 bg-[url('/bg-image.png')] bg-cover bg-center opacity-60"></div>{" "}
        {/* Lowered opacity to 60 */}
        {/* Background Gradient Overlay (Even Darker Left-to-Right with mid-stop) */}
        <div className="absolute inset-0 z-10 scale-110 bg-gradient-to-r from-black via-black/85 to-[#8B3DFF]/40 opacity-95 blur-lg"></div>{" "}
        {/* Added via-black/90 */}
      </div>

      {/* Content Area (Card + Terms Text) */}
      <main className="relative z-20 flex flex-grow flex-col items-center justify-center p-4">
        {/* Centered Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // Card styles (backdrop-blur is kept)
          className="w-full max-w-[459px] rounded-[23px] bg-[#0d0d0db0] backdrop-blur-[20px] p-8 shadow-2xl border border-white/10 flex flex-col"
        >
          {/* Main card content (Icon, Title, Buttons) */}
          <div className="flex flex-col items-center space-y-5 mb-5">
            <ForescribeIcon />
            <h1
              className={`text-2xl font-medium text-center text-white ${poppins.className}`}
            >
              Welcome to Forescribe
            </h1>
            {/* Buttons */}
            <motion.button
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              // Match button style in image (purple bg, white text)
              className={`flex w-full items-center justify-center gap-3 rounded-md bg-[#8B3DFF] px-4 py-2.5 text-base text-white font-medium shadow-md hover:shadow-lg ${poppins.className}`}
            >
              <FaGoogle size={20} />
              Continue with Google
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              // Match button style in image (dark grey bg, white text, subtle border?)
              className={`flex w-full items-center justify-center gap-3 rounded-md bg-neutral-700 px-4 py-2.5 text-base text-white font-medium shadow-md hover:shadow-lg border border-neutral-600 ${poppins.className}`}
            >
              <FaMicrosoft size={20} />
              Continue with Microsoft
            </motion.button>
          </div>

          {/* Terms Text - Moved BELOW the card - Apply Poppins font and Figma styles */}
          <p
            className={`relative z-20 mt-6 max-w-md text-center text-[13px] leading-[21px] font-normal text-neutral-300 ${poppins.className}`}
          >
            {" "}
            {/* Apply Poppins class and styles */}
            By clicking &quot;Continue with Google/Microsoft&quot; above, you
            acknowledge that you have read and understood, and agree to
            forescribe&apos;s{" "}
            <a href="#" className="underline hover:text-white">
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-white">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>

        {/* Temporary Link to Dashboard */}
        <div className="relative z-20 mt-8">
          <Link
            href="/dashboard"
            className="text-sm text-blue-400 hover:underline"
          >
            Go to Dashboard &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
