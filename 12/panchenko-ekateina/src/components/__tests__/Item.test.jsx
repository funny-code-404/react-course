import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Item } from "..";
import { LinkContainer } from "../LinkContainer";
import { baseUrl } from "../../api";
import "jest-styled-components";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  NavLink: "a",
  Link: "a",
  Route: ({ children, path }) => children({ match: path === "/" }),
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Item mounting behavior", () => {
  const props = {
    location: {
      state: {
        data: {
          name: "Test",
          expansion: "Test expansion",
          civilization_bonus: "Test civilization bonus",
          attack_bonus: ["Attack bonus 1", "Attack bonus 2"],
          develops_in: [`${baseUrl}/one`, `${baseUrl}/two`],
        },
      },
    },
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Item {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 1 component snapshot", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render 'Item' component with actual prop", () => {
    expect(wrapper.find(LinkContainer)).toHaveLength(1);
    expect(wrapper.find(LinkContainer).props().title).toEqual("Develops in");
  });
});
