from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib import parse

form = """\
<form method="post">
	<input name='q'>
	<input type="submit">
</form>
"""
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'text/html')
        self.end_headers()
        
        if self.path.endswith('/'):
            self.wfile.write(form.encode())
        # else:
        #     self.wfile.write(self.headers.as_bytes())
    # def do_POST(self):
    #     self.send_response(302)
    #     self.send_header('Content-Type', 'text/plain')
    #     self.send_header('Location', '/hello')
    #     self.end_headers()
    #     for i in self.responses:
    #         print(i, ": ",self.responses[i])
    #     # self.wfile.write(self.responses)

HTTPServer(('', 8000), Handler).serve_forever()