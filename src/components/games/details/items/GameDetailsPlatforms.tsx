import { PlatformType } from "../../../../utils/types";
import EmptyDetails from "../overview/EmptyDetails";
import DetailsContentText from "../overview/DetailsContentText";

type GameDetailsPlatformsProps = { platforms: PlatformType[] };

function GameDetailsPlatforms({ platforms }: GameDetailsPlatformsProps) {
  return (
    <nav>
      {platforms && platforms.length > 0 ? (
        platforms.map((item, i) =>
          i === 0 ? (
            <DetailsContentText
              key={item.platform.id}
              type="link"
              href={`/search?platform=${item.platform.id}`}
            >
              {item.platform.name}
            </DetailsContentText>
          ) : (
            <>
              <DetailsContentText type="span">, </DetailsContentText>
              <DetailsContentText
                type="link"
                key={item.platform.id}
                href={`/search?platform=${item.platform.id}`}
              >
                {item.platform.name}
              </DetailsContentText>
            </>
          )
        )
      ) : (
        <EmptyDetails>No Platforms</EmptyDetails>
      )}
    </nav>
  );
}

export default GameDetailsPlatforms;
