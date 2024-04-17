import { useCallback, useEffect, useState } from "react";
import { fetchRandomUsers } from "../../../../lib/randomUser";
import GeneratedNameBox from "../generatedNameBox/GeneratedNameBox";
import RefreshGeneratedName from "../refreshGeneratedNames/RefreshGeneratedName";
import styles from "./generateRandomUserName.module.scss";

type GenerateRandomUserNameProps = {
  handleClick: (name: string) => void;
  namesCount?: number;
};

function GenerateRandomUserName({
  handleClick,
  namesCount = 2,
}: GenerateRandomUserNameProps) {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refreshRandomNames = useCallback(async () => {
    try {
      setIsLoading(true);
      const users = await fetchRandomUsers(namesCount);
      setUsernames(
        users.map(
          (user) =>
            `${user.login.username.at(0).toUpperCase()}${user.login.username.slice(1)}`,
        ),
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setUsernames, namesCount]);

  useEffect(() => {
    refreshRandomNames();
  }, [refreshRandomNames]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {(!usernames.length || isLoading) && <div className={styles.loader} />}
        {!isLoading && (
          <ul className={styles.list}>
            {usernames.map((name, i) => (
              <GeneratedNameBox key={i} handleClick={() => handleClick(name)}>
                {name}
              </GeneratedNameBox>
            ))}
          </ul>
        )}
      </div>
      <RefreshGeneratedName handleClick={refreshRandomNames} />
    </div>
  );
}

export default GenerateRandomUserName;
