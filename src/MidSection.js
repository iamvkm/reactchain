import "./MidSection.css";

const blockData = [
  {
    blockNumber: 1,
    currentHash: "0xte7sgy3uqwgs68tw3d278g89g756df9834hf973hd93h23281wbdb",
    previousHash: "0",
    nonce: 2,
    timeStamp: 42157828732,
  },
  {
    blockNumber: 2,
    currentHash: "0xte7sgy3uqwgs68tw3d289j89shh892hd923h98cj8291dhn29hc9238hn",
    previousHash: "0x763td8of782qdgyv783gfe43s5d5ccf67fg6287hd7212g6s1dcsvd21",
    nonce: 5,
    timeStamp: 345676564656,
  },
  {
    blockNumber: 3,
    currentHash: "0xte7sgy3uqwgs68tw3d289hj32j283sh216sf153gc67823hs87hy2gdf3",
    previousHash: "0x763td8of782qdgyv783gf32a98hu8gg87f6e1782dh72h8vs7t2cdscs",
    nonce: 3,
    timeStamp: 983214783284,
  },
  {
    blockNumber: 4,
    currentHash: "0xte7sgy3uqwgs68tw3d278g89g756df9834hf973hd93h23281wbdb",
    previousHash: "0x763td8of782qdgyv783gfe43s5d5ccf67fg6287hd7212g6s1dcsvd21",
    nonce: 6,
    timeStamp: 9823148723174,
  },
  {
    blockNumber: 5,
    currentHash: "0xte7sgy3uqwgs68tw3d289j89shh892hd923h98cj8291dhn29hc9238hn",
    previousHash: "0x763td8of782qdgyv783gfe43s5d5ccf67fg6287hd7212g6s1dcsvd21",
    nonce: 4,
    timeStamp: 89548963251223,
  },
  {
    blockNumber: 6,
    currentHash: "0xte7sgy3uqwgs68tw3d289hj32j283sh216sf153gc67823hs87hy2gdf3",
    previousHash: "0x763td8of782qdgyv783gf32a98hu8gg87f6e1782dh72h8vs7t2cdscs",
    nonce: 8,
    timeStamp: 982733474723873,
  },
];

const BlockCards = (data) => {
  const item = data.data;
  return (
    <div
      className="cardInactive"
      onClick={() => localStorage.setItem("activeBlock", item.blockNumber)}
    >
      <p className="blockName">
        <b>
          Block <span>{item.blockNumber}</span>
        </b>
        {item.blockNumber === 1 && (
          <span className="shortSpan"> (Genesis Block)</span>
        )}
      </p>
      <hr />
      <div className="hashDiv">
        <div className="currentHash">
          <div className="hashName">
            <p className="headers">Hash</p>
            <p className="currentHashValue">{item.currentHash}</p>
          </div>
        </div>
        <div className="previousHash">
          <div className="hashName">
            <p className="headers">Hash of previous block</p>
            <p className="previousHashValue">{item.previousHash}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottomHeaders">
        <p className="headers">Nonce</p>
        <p className="bottomValues">{item.nonce}</p>
      </div>
      <hr />
      <div className="bottomHeaders">
        <p className="headers">Timestamp</p>
        <p className="bottomValues">{item.timeStamp}</p>
      </div>
    </div>
  );
};

function MidSection() {
  const activeBlock = localStorage.getItem("activeBlock");

  return (
    <div className="container">
      <div className="blockHeader">
        <h4>
          <b>Blocks on the chain</b>
        </h4>
        <p>
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
      </div>
      <div className="scrollingWrapper">
        {blockData.map((data) => (
          <BlockCards data={data} key={data.blockNumber} />
        ))}
      </div>
      <div className="blockHeader">
        <h4>
          <b>Transaction inside block</b>
        </h4>
        <p>
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
      </div>
      <h5>Hey {activeBlock}</h5>
    </div>
  );
}

export default MidSection;
