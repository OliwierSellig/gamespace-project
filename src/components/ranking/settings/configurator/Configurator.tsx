import RankingOrder from "../rankingOrder/RankingOrder";
import styles from "./configurator.module.scss";
import DateConfigurator from "../dateConfigurator/DateConfigurator";

type ConfiguratorProps = { order: string };

function Configurator({ order }: ConfiguratorProps) {
  return (
    <nav className={styles.container}>
      <DateConfigurator />
      <RankingOrder order={order} />
    </nav>
  );
}

export default Configurator;
