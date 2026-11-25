from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os
ROOT=Path(__file__).parent/'web'; os.chdir(ROOT)
ThreadingHTTPServer(('127.0.0.1',8080),SimpleHTTPRequestHandler).serve_forever()
