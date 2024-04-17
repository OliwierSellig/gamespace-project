import GeneratedNameBox from "../generatedNameBox/GeneratedNameBox";
import RefreshGeneratedName from "../refreshGeneratedNames/RefreshGeneratedName";
import styles from "./generateRandomUserName.module.scss";

const names = ["AuthorityUnreeve31", "SpiritedWorst10"];

type GenerateRandomUserNameProps = {
  handleClick: (name: string) => void;
};

function GenerateRandomUserName({ handleClick }: GenerateRandomUserNameProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {names.map((name, i) => (
          <GeneratedNameBox key={i} handleClick={() => handleClick(name)}>
            {name}
          </GeneratedNameBox>
        ))}
      </ul>
      <RefreshGeneratedName />
    </div>
  );
}

export default GenerateRandomUserName;
