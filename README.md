# lightnight.bitcoinnova.org

This repository contains the source code for the lightnight.bitcoinnova.org website.

It is designed to work hand in hand with the following additional service.

* https://github.com/Bitcoin-N/bitcoinnova-api-proxy

## To Use

To use this site edit ``js/config.js`` to reflect your API interface or use my public API proxy.

You can then update the list of nodes to show on the site in ``js/config.js`` in the section for the nodes.

```javascript
const nodes = [
  { name: 'pool.bitcoinnova.org', hostname: 'pool.bitcoinnova.org', port: 45223, region: 'Germany' },
  { name: 'seed-2.bitcoinnova.org', hostname: '37.59.108.203', port: 45223, region: 'France' },
  { name: 'superblockchain.con-ip.com', hostname: 'superblockchain.con-ip.com', port: 45223, region: 'Spain' },
  { name: 'btn.gonspool.com', hostname: 'btn.gonspool.com', port: 45223, region: 'France' },
  { name: 'cryptonight.bobpool.cc', hostname: 'cryptonote.bobpool.cc', port: 45223, region: 'United States' }
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
