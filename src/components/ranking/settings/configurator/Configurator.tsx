import DateConfigurator from "../dateConfigurator/dateConfigurator/DateConfigurator";
import RankingOrder from "../rankingOrder/RankingOrder";
import styles from "./configurator.module.scss";

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
