import Text from '../Text';
import {
  HeaderContainer, Wrapper, Title1, Title2, Title3,
  Wrapper2, Section, Button, Paragraph, Article
} from './styles';

function Header() {
  return (
    <HeaderContainer>
      <Text text='Header' />
      <Wrapper >
        <Title1>Header</Title1>
        <Title2>Sub Header</Title2>
        <Wrapper2>
          <Section>
            <Title3>Card</Title3>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </Paragraph>
            <Button >Click</Button>
          </Section>
          <Section>
            <Title3>Card</Title3>
            <Paragraph style>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </Paragraph>
            <Button >Click</Button>
          </Section>
          <Section>
            <Title3>Card</Title3>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tempore aliquam molestiae eaque odit provident distinctio officia
              quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
              Corrupti similique repudiandae cum quis.
            </Paragraph>
            <Button >Click</Button>
          </Section>
        </Wrapper2>
        <Article >
          <Title3>Article title</Title3>
          <Paragraph style>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tempore aliquam molestiae eaque odit provident distinctio officia
            quasi dignissimos. Sequi iusto laudantium est inventore ipsum!
            Corrupti similique repudiandae cum quis.
          </Paragraph>
        </Article>
      </Wrapper>
    </HeaderContainer>
  );
}

export default Header;
