const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const merkleTree = new MerkleTree(niceList);
  const index = 0;

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    'proof': merkleTree.getProof(index),
    'name': niceList[index],
  });

  console.log({ gift });
}

main();