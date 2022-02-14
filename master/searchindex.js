Object.assign(window.search, {"doc_urls":["index.html","m1.html#m1","m1/masp.html#masp","m1/governance.html#governance","m1/proof-of-stake.html#proof-of-stake","m1/fee-system.html#fee-system","m1/ethereum-bridge.html#ethereum-bridge"],"index":{"documentStore":{"docInfo":{"0":{"body":4,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":13,"breadcrumbs":6,"title":1},"3":{"body":11,"breadcrumbs":3,"title":1},"4":{"body":15,"breadcrumbs":5,"title":2},"5":{"body":6,"breadcrumbs":5,"title":2},"6":{"body":155,"breadcrumbs":5,"title":2}},"docs":{"0":{"body":"ye have found the Anoma specs","breadcrumbs":"Index","id":"0","title":"Index"},"1":{"body":"","breadcrumbs":"M1 » M1","id":"1","title":"M1"},"2":{"body":"This specification should cover: Cryptography (can link to existing MASP spec for now) Ledger integration Shielded pool incentives","breadcrumbs":"M1 » Multi-asset shielded pool » MASP","id":"2","title":"MASP"},"3":{"body":"This specification should cover: Protocol for signalling proposals, voting, and tallying Protocol for posting data on-chain","breadcrumbs":"M1 » Governance » Governance","id":"3","title":"Governance"},"4":{"body":"This specification should cover Proof-of-stake bonding mechanism (already covered in ledger docs) Slashing mechanism & infractions Rewards & distribution","breadcrumbs":"M1 » Proof of stake » Proof of stake","id":"4","title":"Proof of stake"},"5":{"body":"This specification should cover: Fee & gas system for M1","breadcrumbs":"M1 » Fee system » Fee system","id":"5","title":"Fee system"},"6":{"body":"The M1 Ethereum bridge system consists of a few parts: \"IBC-adapter\" code on the M1 side Allow M1 validators to vote on the latest Ethereum state roots & log roots (check this) for blocks Allow M1 validity predicates Ethereum state read access through these commitee-voted roots & Merkle proofs Slash validators using commit-reveal, if they commit to a different root. Failing to reveal is considered a liveness fault. A set of Ethereum contracts which perform the following functions: Verify Tendermint header updates from M1, and sub-state proofs Allow Ethereum contracts to send messages to M1 by outputting logs in a particular format Allow Ethereum contracts to receive messages from M1 by verifying message commitments in the M1 state Merkle tree Handle ICS20-style token transfer messages appropriately with escrow & unescrow on the Ethereum side Allow for message batching This basic bridge architecture should provide for almost-M1 consensus security for the bridge and free Ethereum state reads on M1, plus bidirectional message passing with reasonably low gas costs on the Ethereum side. Resources which may be helpful: Gravity Bridge Solidity contracts ICS20 Rainbow Bridge contracts One caveat is that we should check the cost of Tendermint header verification on Ethereum; it can be amortised across packets but this still may be quite high. If it is too high we could try to use a threshold key with Ferveo instead.","breadcrumbs":"M1 » Ethereum bridge » Ethereum bridge","id":"6","title":"Ethereum bridge"}},"length":7,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.7320508075688772}},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"o":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":3.3166247903554}}}}}}}}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"w":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"a":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"i":{"b":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"s":{"2":{"0":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"6":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"m":{"1":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":3.1622776601683795}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"v":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.0}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"i":{"df":0,"docs":{},"f":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"b":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"y":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"breadcrumbs":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":2.8284271247461903}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.7320508075688772}},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"o":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":3.605551275463989}}}}}}}}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":2.0}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"w":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"a":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"i":{"b":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"s":{"2":{"0":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"6":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"m":{"1":{"df":6,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":3.3166247903554}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":2,"docs":{"4":{"tf":2.0},"6":{"tf":1.4142135623730951}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"v":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.0}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"i":{"df":0,"docs":{},"f":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":2.0}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"b":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":2,"docs":{"5":{"tf":2.0},"6":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"y":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"title":{"root":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"m":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});