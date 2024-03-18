import { ReactNode } from "react";
import OverviewSectionContainer from "../overviewSectionContainer/OverviewSectionContainer";
import UserHeading from "../../../layout/UserHeading";

type OverviewSectionProps = {
  children: ReactNode;
  heading: string;
};

function OverviewSection({ children, heading }: OverviewSectionProps) {
  return (
    <OverviewSectionContainer>
      <UserHeading>{heading}</UserHeading>
      {children}
    </OverviewSectionContainer>
  );
}

export default OverviewSection;
