import { render, screen } from "@testing-library/react";
import Logo from "../../../../public/assets/Icons/Logo.svg";
import Icon from ".";

describe("Icon", () => {
  it("should render", () => {
    render(<Icon src={Logo} alt="Logo" />);
    screen.getByAltText("Logo");
  });
});
