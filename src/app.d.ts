// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
declare module "*.svx" {
	export const metadata: Record<string, unknown>;
	export default class Component extends import("svelte").SvelteComponent {}
}
export {};
