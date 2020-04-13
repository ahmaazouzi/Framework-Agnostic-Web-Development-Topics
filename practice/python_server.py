from http.server import HTTPServer, BaseHTTPRequestHandler

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()

        self.wfile.write(b'<h1>Hello, World!</h1>')

HTTPServer(('', 8000), Handler).serve_forever()