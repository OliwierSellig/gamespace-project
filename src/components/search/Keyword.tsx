import { fetchDevById } from "../../lib/developers";
import { fetchGenreById } from "../../lib/genres";
import { fetchPlatformById } from "../../lib/platfroms";
import ConfigurationBox from "./ConfigurationBox";
import styles from "./keyword.module.scss";

type KeywordProps = {
  params: { [key: string]: string };
};

async function Keyword({ params }: KeywordProps) {
  const dev = await fetchDevById(parseInt(params["dev"]));
  const genre = await fetchGenreById(parseInt(params["genre"]));
  const platform = await fetchPlatformById(parseInt(params["platform"]));

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Games for you keyword</h1>
      <ul className={styles.row}>
        {dev?.id && <ConfigurationBox name={dev.name} />}
        {genre?.id && <ConfigurationBox name={genre.name} />}
        {platform?.id && <ConfigurationBox name={platform.name} />}
      </ul>
    </div>
  );
}

export default Keyword;
