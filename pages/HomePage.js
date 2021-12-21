import styles from "./HomePage.module.css";

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

const setCardActive = (blockNumber) => {};

const BlockCards = (data) => {
  const item = data.data;
  return (
    <div
      className={styles.cardInactive}
      onClick={setCardActive(item.blockNumber)}
    >
      <p className={styles.blockName}>
        <b>
          Block <span>{item.blockNumber}</span>
        </b>
        {item.blockNumber === 1 && (
          <span className={styles.shortSpan}> (Genesis Block)</span>
        )}
      </p>
      <hr />
      <div className={styles.hashDiv}>
        <div className={styles.currentHash}>
          <div className={styles.hashName}>
            <p className={styles.headers}>Hash</p>
            <p className={styles.currentHashValue}>{item.currentHash}</p>
          </div>
        </div>
        <div className={styles.previousHash}>
          <div className={styles.hashName}>
            <p className={styles.headers}>Hash of previous block</p>
            <p className={styles.previousHashValue}>{item.previousHash}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottomHeaders}>
        <p className={styles.headers}>Nonce</p>
        <p className={styles.bottomValues}>{item.nonce}</p>
      </div>
      <hr />
      <div className={styles.bottomHeaders}>
        <p className={styles.headers}>Timestamp</p>
        <p className={styles.bottomValues}>{item.timeStamp}</p>
      </div>
    </div>
  );
};

export default function MidSection() {
  return (
    <div className="container">
      <div className={styles.blockHeader}>
        <h4>
          <b>Blocks on the chain</b>
        </h4>
        <p>
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
      </div>

      <div className={styles.scrollingWrapper}>
        {blockData.map((data) => (
          <BlockCards data={data} key={data.blockNumber} />
        ))}
      </div>

      <div className={styles.blockHeader}>
        <h4>
          <b>Transaction inside block</b>
        </h4>
        <p>
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
      </div>
    </div>
  );
}
