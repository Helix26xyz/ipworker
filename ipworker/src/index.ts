/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const data = {
			"ip": request.headers.get('CF-Connecting-IP'),
			"country": request.headers.get('CF-IPCountry'),
			"asn": request.headers.get('CF-Connecting-ASN'),
			"city": request.headers.get('CF-IPCity'),
			"latitude": request.headers.get('CF-IPLatitude'),
			"longitude": request.headers.get('CF-IPLongitude')
		}
		return new Response(JSON.stringify(data));
	},
} satisfies ExportedHandler<Env>;
