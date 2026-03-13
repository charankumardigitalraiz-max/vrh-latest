import json
import collections

with open('src/data/products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

slugs = collections.defaultdict(list)
for i, p in enumerate(data['products']):
    slugs[p['slug']].append(i)

duplicates = {s: indices for s, indices in slugs.items() if len(indices) > 1}

print("Duplicate Slugs and Indices:")
for s, indices in duplicates.items():
    print(f"{s}: {indices}")

print("\nTotal products:", len(data['products']))
print("Unique slugs:", len(slugs))
