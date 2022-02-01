import Text from '../Text/Text.jsx';
import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer isPrimary={false}>
      <Text text="Text from props" />
      <div>
        <h1>Header</h1>
        <h2>Sub Header</h2>
        <div>
          <section>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </p>
            <button>Click</button>
          </section>
          <section>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </p>
            <button>Click</button>
          </section>
          <section>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </p>
            <button>Click</button>
          </section>
        </div>
        <article>
          <h3>Article title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tempore aliquam molestiae eaque odit provident distinctio officia
            quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
            Corrupti similique repudiandae cum quis.
          </p>
        </article>
      </div>
    </HeaderContainer>
  );
}

export default Header;
