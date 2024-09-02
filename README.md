# rival-s1-client

A Playstation Dualsense controller must be connected to your computer for this program to work.

Install the bun JS runtime:

```bash
curl -fsSL https://bun.sh/install | bash
```

Install dependencies:

```bash
bun install
```

To run:

```bash
RIVAL_ENDPOINT=http://192.168.1.204:8000 bun run index.ts
```

Modify `RIVAL_ENDPOINT` to point to the robot's IP address if needed.
