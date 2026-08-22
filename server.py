#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class SPAHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path):
            self.path = "/index.html"
        return super().do_GET()

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), "public"))
    server = HTTPServer(("", 8080), SPAHandler)
    print("Serving at http://localhost:8080")
    server.serve_forever()
