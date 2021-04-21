import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Resource } from "../Resource";
import "jest-styled-components";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  Link: "a",
  Route: ({ children, path }) => children({ match: path === "/" }),
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Resource mounting behavior", () => {
  const props = {
    url: "/test",
    action: jest.fn(),
    data: [{ id: 1, name: "test" }],
    type: "test",
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Resource {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 1 component snapshot", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render 'Resource' component with actual prop", () => {
    expect(wrapper.find("a")).toHaveLength(1);
    expect(wrapper.find("a").props().to).toEqual({
      pathname: "/test/test",
      state: {
        data: {
          id: 1,
          name: "test",
        },
      },
    });
  });
});
