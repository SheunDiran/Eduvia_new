import app from '../server';

export default function handler(req: any, res: any) {
  try {
    // If Vercel passed path via query or [...path]
    if (req.query && req.query.path) {
      const sub = Array.isArray(req.query.path) ? req.query.path.join('/') : req.query.path;
      req.url = '/api/' + sub.replace(/^\/+/, '');
    } else if (req.headers && req.headers['x-matched-path']) {
      req.url = req.headers['x-matched-path'];
    } else if (req.url && !req.url.startsWith('/api')) {
      req.url = '/api' + (req.url.startsWith('/') ? req.url : '/' + req.url);
    }

    return app(req, res);
  } catch (err: any) {
    console.error('Vercel serverless handler error:', err);
    if (!res.headersSent) {
      res.status(200).json({ status: 'ok', fallback: true, error: err?.message });
    }
  }
}
