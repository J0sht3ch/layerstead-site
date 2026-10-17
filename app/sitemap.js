import { site } from './site-config';
export default function sitemap() {
  return ['', '/privacy', '/terms', '/service-disclaimer', '/service-agreement'].map(path => ({ url: site.url + (path || '/'), changeFrequency: path ? 'yearly' : 'monthly', priority: path ? 0.3 : 1 }));
}
