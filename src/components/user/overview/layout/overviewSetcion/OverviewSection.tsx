import { ReactNode } from "react";
import UserHeading from "../../../layout/userHeading/UserHeading";
import OverviewSectionContainer from "../overviewSectionContainer/OverviewSectionContainer";

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
