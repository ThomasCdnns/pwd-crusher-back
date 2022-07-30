from base64 import encode
from itertools import count
import redis
import hashlib
from tqdm import trange
import json

r = redis.Redis()
lines = []
with open('rockyou.txt', encoding="utf-8") as f:
    lines = f.readlines()

total = len(lines)
encodingErrors = 0
for i in trange(30):
    try:
        rawLine = lines[i].encode('utf-8')
        encodedLine = rawLine[:len(rawLine)-1]
        h = hashlib.new('sha256')
        h.update(encodedLine)
        newHash = h.hexdigest()
        pythonValue = {"val": encodedLine.decode('utf-8')}
        jsonValue = json.dumps(pythonValue)
        r.set(newHash, jsonValue)
    except:
        encodingErrors += 1

print(encodingErrors, "/", total)
