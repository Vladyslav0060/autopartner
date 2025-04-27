import { FC, ReactNode, Fragment } from "react";
import Header from "../home/Header/Header";
import Footer from "../home/Footer/Footer";

interface IProps {
  children: ReactNode;
}
const HomeLayout: FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
