import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				primary: "#191654",
				secondary: "#43C6AC",
				accent: "#18FFFF",
				text: "#E0F2F1",
			},
		},
	},

	plugins: [typography],
} satisfies Config;
