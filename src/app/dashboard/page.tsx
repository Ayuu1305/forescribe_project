"use client"; // For animations

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

// Icons
import {
  FaLinkedin,
  FaCommentDots,
  FaMoneyBillWave,
  FaMailchimp,
  FaSkype,
  FaBolt,
  FaPaintBrush,
  FaAws,
} from "react-icons/fa";
import { SiQuickbooks, SiNotion } from "react-icons/si";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

// Data for the dashboard cards - exact match to the Figma design with 4-3-4-3-4 pattern
const dashboardCardsData = [
  // Row 1 - 4 cards
  {
    id: 1,
    type: "app",
    title: "Flatfile",
    description: "Project Management",
    Icon: FaBolt,
    iconAreaBg: "bg-gradient-to-br from-[#FFF2E5] to-[#FFD1A3]",
    iconColor: "text-blue-800",
  },
  {
    id: 2,
    type: "app",
    title: "Notion",
    description: "Project Management",
    Icon: SiNotion,
    iconAreaBg: "bg-gradient-to-br from-[#E0E0E0] to-[#B0B0B0]",
    iconColor: "text-black",
  },
  {
    id: 3,
    type: "app",
    title: "LinkedIn",
    description: "Project Management",
    Icon: FaLinkedin,
    iconAreaBg: "bg-gradient-to-br from-[#0A66C2] to-[#004182]",
    iconColor: "text-white",
  },
  {
    id: 4,
    type: "app",
    title: "Canva",
    description: "Project Management",
    Icon: FaPaintBrush,
    iconAreaBg: "bg-gradient-to-br from-[#20C4CC] to-[#008A90]",
    iconColor: "text-white",
  },

  // Row 2 - 3 cards
  {
    id: 5,
    type: "person",
    title: "Ariana",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/1/300/200`,
  },
  {
    id: 6,
    type: "app",
    title: "ChatGPT",
    description: "Project Management",
    Icon: FaCommentDots,
    iconAreaBg: "bg-gradient-to-br from-[#10A37F] to-[#086A53]",
    iconColor: "text-white",
  },
  {
    id: 7,
    type: "person",
    title: "Andrew",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/2/300/200`,
  },

  // Row 3 - 4 cards
  {
    id: 8,
    type: "person",
    title: "Jane Mary",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/3/300/200`,
  },
  {
    id: 9,
    type: "app",
    title: "Name Cheap",
    description: "Project Management",
    Icon: FaMoneyBillWave,
    iconAreaBg: "bg-gradient-to-br from-[#FF8C00] to-[#C66D00]",
    iconColor: "text-white",
  },
  {
    id: 10,
    type: "person",
    title: "Kate",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/4/300/200`,
  },
  {
    id: 11,
    type: "app",
    title: "Skype",
    description: "Project Management",
    Icon: FaSkype,
    iconAreaBg: "bg-gradient-to-br from-[#00AFF0] to-[#007BB8]",
    iconColor: "text-white",
  },

  // Row 4 - 3 cards
  {
    id: 12,
    type: "person",
    title: "Paul",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/5/300/200`,
  },
  {
    id: 13,
    type: "app",
    title: "QB",
    description: "Project Management",
    Icon: SiQuickbooks,
    iconAreaBg: "bg-gradient-to-br from-[#2CA01C] to-[#1E6B12]",
    iconColor: "text-white",
  },
  {
    id: 14,
    type: "app",
    title: "AWS",
    description: "Project Management",
    Icon: FaAws,
    iconAreaBg: "bg-gradient-to-br from-[#232F3E] to-[#FF9900]",
    iconColor: "text-[#FF9900]",
  },

  // Row 5 - 4 cards
  {
    id: 15,
    type: "app",
    title: "Chimp Monk",
    description: "Project Management",
    Icon: FaMailchimp,
    iconAreaBg: "bg-gradient-to-br from-[#FFE180] to-[#E0C160]",
    iconColor: "text-black",
  },
  {
    id: 16,
    type: "person",
    title: "Jack Mark",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/6/300/200`,
  },
  {
    id: 17,
    type: "person",
    title: "Jack Mark",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/7/300/200`,
  },
  {
    id: 18,
    type: "person",
    title: "Jack Mark",
    description:
      '"We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots."',
    imageUrl: `https://picsum.photos/seed/8/300/200`,
  },
];

// Group cards by row with the 4-3-4-3-4 pattern
const rows = [
  dashboardCardsData.slice(0, 4), // 4 cards
  dashboardCardsData.slice(4, 7), // 3 cards
  dashboardCardsData.slice(7, 11), // 4 cards
  dashboardCardsData.slice(11, 14), // 3 cards
  dashboardCardsData.slice(14, 18), // 4 cards
];

export default function DashboardPage() {
  // Theme logic using data-theme and CSS variables
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored || "light";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <AnimatePresence>
      <div
        className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-8 pb-16 overflow-auto transition-colors duration-500"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <motion.div
          className="flex justify-between items-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-semibold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:bg-[var(--bg-main)] transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-800" />
              )}
            </button>
            <Link
              href="/"
              className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-md px-2 py-1"
            >
              ← Back to Login
            </Link>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-row justify-center gap-4 w-full">
            {rows.map((column, colIdx) => (
              <div
                key={colIdx}
                className={`flex flex-col gap-4 items-center flex-1 ${
                  colIdx === 1 || colIdx === 3 ? "mt-40 mb-16" : ""
                }`}
              >
                {column.map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

// Card component to reduce repetition
interface CardProps {
  card: {
    id: number;
    type: string;
    title: string;
    description: string;
    Icon?: React.ElementType;
    iconAreaBg?: string;
    iconColor?: string;
    imageUrl?: string;
  };
}

function Card({ card }: CardProps) {
  return (
    <motion.div
      className="bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-2xl overflow-hidden shadow flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 w-full max-w-[374px] h-[380px] min-h-[380px] max-h-[380px] group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {card.type === "app" && card.Icon && (
        <div
          className={`flex items-center justify-center ${
            card.iconAreaBg || ""
          } w-full pt-8 pb-4 relative`}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-indigo-200 via-transparent to-indigo-400 pointer-events-none z-10" />
          <card.Icon size={56} className={card.iconColor || "text-gray-700"} />
        </div>
      )}
      {card.type === "person" && card.imageUrl && (
        <div className="w-full flex justify-center pt-8 pb-4">
          <Image
            src={card.imageUrl}
            alt={card.title}
            width={80}
            height={80}
            className="rounded-2xl object-cover"
          />
        </div>
      )}
      <div className="flex flex-col items-center flex-1 w-full px-4 pb-6 justify-between">
        <div>
          <h2 className="font-bold text-2xl text-center mt-2 mb-1">
            {card.title}
          </h2>
          <div className="text-base text-center mb-2">
            {card.description.includes("Project Management")
              ? card.description
              : "Project Management"}
          </div>
        </div>
        {card.description &&
          !card.description.includes("Project Management") && (
            <p className="text-sm text-center mt-auto">{card.description}</p>
          )}
      </div>
    </motion.div>
  );
}
