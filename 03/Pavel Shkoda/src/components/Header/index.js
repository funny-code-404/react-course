import Text from '../Text';
import { HeaderContainer, Section, Button, Article, Wrapper } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <Text text='Header' />
      <div className='wrapper'>
        <h1>Header</h1>
        <h2>Sub Header</h2>
        <Wrapper>
          <Section>
            <h3>Card</h3>
            <details><p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </p></details>
            <Button variant='warning'>Click</Button>
          </Section>
          <Section>
            <h3>Card</h3>
            <details><p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </p></details>
            <Button variant="success" >Click</Button>
          </Section>
          <Section>
            <h3>Card</h3>
            <details><p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </p></details>
            <Button variant="primary" >Click</Button>
          </Section>
        </Wrapper>
        <Article>
          <h3>Article title</h3>
          <details><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tempore aliquam molestiae eaque odit provident distinctio officia
            quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
            Corrupti similique repudiandae cum quis.
          </p></details>
        </Article>
      </div>
    </HeaderContainer>
  );
}

export default Header;
