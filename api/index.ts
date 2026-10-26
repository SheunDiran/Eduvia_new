import app from '../server';

export default function handler(req: any, res: any) {
  // Ensure the URL has the /api prefix so Express route handlers (/api/*) match correctly
  if (req.url && !req.url.startsWith('/api')) {
    req.url = '/api' + (req.url.startsWith('/') ? req.url : '/' + req.url);
  }
  return app(req, res);
}
