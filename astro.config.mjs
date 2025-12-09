// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://sandikodev.github.io',
	base: '/onboard',
	integrations: [
		starlight({
			title: 'HyperFocus',
			description: 'A 10-Year Gift to the Web Technology Community (based on SnapCode Study Case)',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			favicon: '/favicon.svg',
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: '/og-image.png' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:type', content: 'website' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary_large_image' },
				},
				{
					tag: 'script',
					attrs: {
						defer: true,
						'data-domain': 'sandikodev.github.io',
						src: 'https://plausible.io/js/script.js',
					},
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/sandikodev/onboard' },
				{ icon: 'x.com', label: 'Twitter', href: 'https://twitter.com/sandikodev' },
			],
			editLink: {
				baseUrl: 'https://github.com/sandikodev/onboard/edit/main/',
			},
			lastUpdated: true,
			pagination: true,
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			components: {
				Head: './src/components/Head.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'Journey',
					items: [
						{ label: 'The Story', slug: 'journey/story' },
						{ label: 'Inner Universe', slug: 'journey/concept' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture/overview' },
						{ label: 'Diagram', slug: 'architecture/diagram', badge: { text: 'New', variant: 'success' } },
						{ label: 'Dynamic File Loading', slug: 'architecture/dynamic-loading' },
						{ label: 'Quick Reference', slug: 'architecture/quick-reference' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Overview', slug: 'deployment/overview' },
						{ label: 'Terminology', slug: 'deployment/terminology' },
						{ label: 'Checklist', slug: 'deployment/checklist' },
						{ label: 'Testing', slug: 'deployment/testing' },
						{
							label: 'Hosting',
							items: [
								{ label: 'GitHub Pages', slug: 'deployment/hosting/github-pages' },
								{ label: 'Vercel', slug: 'deployment/hosting/vercel' },
							],
						},
						{
							label: 'Bare Metal',
							items: [
								{ label: 'Overview', slug: 'deployment/bare-metal/overview' },
								{ label: 'Supervisor', slug: 'deployment/bare-metal/supervisor' },
								{ label: 'PM2', slug: 'deployment/bare-metal/pm2' },
								{ label: 'Docker', slug: 'deployment/bare-metal/docker' },
							],
						},
						{
							label: 'Reverse Proxy',
							items: [
								{ label: 'Nginx', slug: 'deployment/bare-metal/proxy/nginx' },
								{ label: 'Traefik', slug: 'deployment/bare-metal/proxy/traefik' },
								{ label: 'HAProxy', slug: 'deployment/bare-metal/proxy/haproxy' },
							],
						},
					],
				},
				{
					label: 'Security',
					items: [
						{ label: 'SSL/TLS', slug: 'security/ssl-tls' },
						{ label: 'Firewall', slug: 'security/firewall' },
						{ label: 'Headers', slug: 'security/headers' },
					],
				},
				{
					label: 'Runtime',
					items: [
						{ label: 'Python HTTP', slug: 'runtime/py-http' },
						{ label: 'Node.js', slug: 'runtime/nodejs' },
						{ label: 'PHP-FPM', slug: 'runtime/php-fpm', badge: { text: 'Planned', variant: 'note' } },
						{ label: 'Go (Goroutines)', slug: 'runtime/go', badge: { text: 'Planned', variant: 'note' } },
						{ label: 'Rust (Tokio)', slug: 'runtime/rust', badge: { text: 'Planned', variant: 'note' } },
					],
				},
				{
					label: 'Monitoring',
					items: [
						{ label: 'Logging', slug: 'monitoring/logging' },
						{ label: 'Metrics', slug: 'monitoring/metrics' },
						{ label: 'Health Checks', slug: 'monitoring/health-checks' },
					],
				},
				{ label: 'Roadmap', slug: 'roadmap' },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
