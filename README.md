# Lightnight Nodes | Bitcoin Nova

This repository contains the source code for the lightnight.bitcoinnova.org website.

It is designed to work hand in hand with the following additional service.

* https://github.com/BitcoinNova/bitcoinnova-api-proxy

## To Use

To use this site edit ``js/config.js`` to reflect your API interface or use my public API proxy.

You can then update the list of nodes to show on the site in ``js/config.js`` in the section for the nodes.

```javascript
const nodes = [
  { name: 'Node-1 (pool.bitcoinnova.org)', hostname: '85.214.158.156', port: 45223, region: 'Germany' },
  { name: 'Node-2 (37.59.108.203)', hostname: '37.59.108.203',  port: 45223, region: 'France' },
  { name: 'Node-3 (superblockchain.con-ip.com)', hostname: 'superblockchain.con-ip.com', port: 45223, region: 'Spain' },
  { name: 'Node-6 (149.202.44.54)', hostname: '149.202.44.54', port: 45223, region: 'France' },
  { name: 'Node-Test(Raspberry)', hostname: 'test-node2.ddns.net', port: 45223, region: 'Spain' }
]
```

## Development

You can find me on the Bitcoin Nova discord at https://discord.gg/kNqVhPv

### Donations

I'll kindly accept your donation in [BTN] if you love this project.

EAsX15ieXY1NAk9Yu3NoVBfBqUgsFPsv47Ff4W1t491vHiD8fyGHD7nR7gVk1FrcbP2d2mJfBt3M45NgbV6ZRcSdHixcSPH

## License

```
Copyright (C) 2018 The Bitcoin Nova Developers

Please see the included LICENSE file for more information.
```
